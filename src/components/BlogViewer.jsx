import './BlogViewer.css';

export default function BlogViewer({ activeBlog }) {
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

  return (
    <div className="blog-viewer-container">
      <div className="blog-header-bar">
        <a href="#projects" className="blog-back-link">
          <span className="back-arrow">←</span> Back to More Projects
        </a>
        <h2 className="blog-viewer-title">{title}</h2>
      </div>

      <div className="blog-iframe-wrapper">
        <iframe
          src={`/blogs/${activeBlog}.pdf#toolbar=0&navpanes=0`}
          className="blog-iframe"
          title={title}
        />
      </div>
    </div>
  );
}
