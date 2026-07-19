import { useState, useEffect, useRef } from 'react';
import './BlogViewer.css';

// Child component to render a single PDF page on a canvas
function PdfPage({ pdf, pageNum }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    let renderTask = null;
    let isCancelled = false;

    const renderPage = async () => {
      try {
        const page = await pdf.getPage(pageNum);
        if (isCancelled) return;

        // Render at 2.0 scale for sharp text on Retina/High-DPI displays.
        const viewport = page.getViewport({ scale: 2.0 });
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        renderTask = page.render(renderContext);
        await renderTask.promise;
      } catch (err) {
        if (err.name !== 'RenderingCancelledException') {
          console.error(`Error rendering page ${pageNum}:`, err);
        }
      }
    };

    renderPage();

    return () => {
      isCancelled = true;
      if (renderTask) {
        renderTask.cancel();
      }
    };
  }, [pdf, pageNum]);

  return (
    <div className="pdf-page-wrapper">
      <canvas ref={canvasRef} className="pdf-page-canvas" />
    </div>
  );
}

export default function BlogViewer({ activeBlog }) {
  const [pdf, setPdf] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [error, setError] = useState(null);
  const [pdfjsLoaded, setPdfjsLoaded] = useState(!!(window.pdfjsLib || window['pdfjs-dist/build/pdf']));

  // Map blog IDs to full display titles for readability
  const blogTitles = {
    consign: 'Sustainable Luxury',
    newsletter: "The Newsletter, '20",
    oldhype: 'Nostalgia & Podcasts',
    street: 'The Art of Street',
    talkies: 'Weekend Talkies',
    zine: 'Zine for All',
    Brownie: 'Kodak Brownie',
  };

  const title = blogTitles[activeBlog] || 'Blog Post';

  // Load PDF.js library dynamically from CDN
  useEffect(() => {
    if (window.pdfjsLib || window['pdfjs-dist/build/pdf']) {
      setPdfjsLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
    script.async = true;
    script.onload = () => {
      setPdfjsLoaded(true);
    };
    script.onerror = () => {
      setError('Failed to load PDF viewer library. Please check your internet connection.');
      setLoading(false);
    };
    document.body.appendChild(script);
  }, []);

  // Fetch and load the PDF document
  useEffect(() => {
    if (!pdfjsLoaded || !activeBlog) return;

    setLoading(true);
    setLoadingProgress(0);
    setError(null);
    setPdf(null);

    const pdfjsLib = window.pdfjsLib || window['pdfjs-dist/build/pdf'];
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

    const pdfUrl = `${import.meta.env.BASE_URL || '/'}blogs/${activeBlog}.pdf`;

    let isCurrent = true;
    const loadingTask = pdfjsLib.getDocument(pdfUrl);

    // Track download progress
    loadingTask.onProgress = (progressData) => {
      if (isCurrent && progressData.total > 0) {
        const percent = Math.round((progressData.loaded / progressData.total) * 100);
        setLoadingProgress(percent);
      }
    };

    loadingTask.promise
      .then((loadedPdf) => {
        if (isCurrent) {
          setPdf(loadedPdf);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isCurrent) {
          console.error('Error loading PDF document:', err);
          setError('Failed to load the document. It might not exist or could not be loaded.');
          setLoading(false);
        }
      });

    return () => {
      isCurrent = false;
      loadingTask.destroy();
    };
  }, [pdfjsLoaded, activeBlog]);

  return (
    <div className="blog-viewer-container">
      <div className="blog-header-bar">
        <a href="#projects" className="blog-back-link">
          <span className="back-arrow">←</span> Back to More Projects
        </a>
        <h2 className="blog-viewer-title">{title}</h2>
      </div>

      <div className="blog-pdf-scroll-container">
        {loading && (
          <div className="blog-loading-wrapper">
            <div className="blog-spinner"></div>
            <p className="blog-loading-text">
              Loading document{loadingProgress > 0 ? ` (${loadingProgress}%)` : '...'}
            </p>
          </div>
        )}

        {error && (
          <div className="blog-error-wrapper">
            <span className="blog-error-icon">⚠️</span>
            <p className="blog-error-message">{error}</p>
            <div className="blog-error-actions">
              <a
                href={`${import.meta.env.BASE_URL || '/'}blogs/${activeBlog}.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-download-btn"
              >
                Open PDF Directly
              </a>
            </div>
          </div>
        )}

        {pdf && (
          <div className="blog-pdf-pages">
            {Array.from({ length: pdf.numPages }, (_, index) => (
              <PdfPage key={`${activeBlog}-page-${index + 1}`} pdf={pdf} pageNum={index + 1} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

