import './Projects.css';

export default function Projects() {
  const blogs = [
    {
      title: 'Sustainable Luxury',
      description: 'An analysis of vintage and second-hand luxury markets, checking brand scarcity and environmental impact.',
      img: '/images/consign_thumb.png',
      id: 'consign',
    },
    {
      title: "The Newsletter, '20",
      description: "Reflections on building a hospitality brand in Goa, managing volunteer-led events, and connecting people.",
      img: '/images/newsletter_thumb.png',
      id: 'newsletter',
    },
    {
      title: 'Nostalgia & Podcasts',
      description: 'Exploring the podcast boom, digital audio markets, and the comforting appeal of throwback conversations.',
      img: '/images/oldhype_thumb.png',
      id: 'oldhype',
    },
    {
      title: 'The Art of Street',
      description: 'Exploring counterculture fashion, streetwear, and self-expression through homegrown t-shirt labels.',
      img: '/images/street_thumb.png',
      id: 'street',
    },
    {
      title: 'Weekend Talkies',
      description: 'Poignant film recommendations exploring male psyche and family drama in Malayalam and Hindi cinema.',
      img: '/images/talkies_thumb.png',
      id: 'talkies',
    },
    {
      title: 'Zine for All',
      description: "An exploration of India's indie zine scene, subcultures, collaborative art, and hyperlocal narratives.",
      img: '/images/zine_thumb.png',
      id: 'zine',
    },
    {
      title: 'Kodak Brownie',
      description: 'The historical camera that democratized snapshots and captured raw, candid accounts of the 20th century.',
      img: '/images/Brownie_thumb.png',
      id: 'Brownie',
    },
  ];

  return (
    <div className="projects-section">
      <h2 className="projects-main-title">MORE PROJECTS</h2>
      <div className="projects-grid">
        {blogs.map((blog, idx) => (
          <a
            key={idx}
            href={`#blog-${blog.id}`}
            className="project-card-link"
          >
            <div className="project-grid-card">
              <div className="project-img-wrapper">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="project-grid-img"
                  loading="lazy"
                />
              </div>
              <div className="project-info">
                <h3 className="project-card-title">{blog.title}</h3>
                {/* <p className="project-card-desc">{blog.description}</p> */}
                <span className="read-more-indicator">Read Article ↗</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
