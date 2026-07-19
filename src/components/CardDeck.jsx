import { useState, useEffect } from 'react';
import './CardDeck.css';

const projects = [
  {
    id: 1,
    title: 'Kodak Brownie',
    category: 'Expressions',
    img: 'images/kodak_blog.jpg',
    url: 'https://www.artisera.com/blogs/expressions/kodak-brownie-the-historical-camera-that-captured-raw-candid-accounts-of-the-20th-century-experience',
    rot: -4,
    yOffset: -10,
  },
  {
    id: 2,
    title: 'Anjolie Ela Menon',
    category: 'Expressions',
    img: 'images/anjolie_blog.jpg',
    url: 'https://www.artisera.com/blogs/expressions/trails-in-colour-tracking-anjolie-ela-menon-s-maverick-journey-through-her-artworks',
    rot: 2,
    yOffset: 5,
  },
  {
    id: 3,
    title: 'V.S. Gaitonde',
    category: 'Expressions',
    img: 'images/gaitonde_blog.jpg',
    url: 'https://www.artisera.com/blogs/expressions/v-s-gaitonde-the-record-breaking-icon-of-indian-modernism',
    rot: -7,
    yOffset: 15,
  },
  {
    id: 4,
    title: 'Jamini Roy',
    category: 'Expressions',
    img: 'images/jamini_blog.jpg',
    url: 'https://www.artisera.com/blogs/expressions/art-of-consequence-a-photo-essay-on-the-legendary-non-conforming-artist-jamini-roy',
    rot: 5,
    yOffset: -5,
  },
  {
    id: 5,
    title: 'Vincent van Gogh',
    category: 'Expressions',
    img: 'images/vangogh_blog.jpg',
    url: 'https://www.artisera.com/blogs/expressions/the-starry-night-is-vincent-van-gogh-s-magnum-opus-what-drives-its-everlasting-hype',
    rot: -3,
    yOffset: 12,
  },
  {
    id: 6,
    title: 'Crypto Art & NFTs',
    category: 'Expressions',
    img: 'images/nft_blog.jpg',
    url: 'https://www.artisera.com/blogs/expressions/the-crypto-art-market-and-nfts-an-intriguing-bubble-or-here-to-stay',
    rot: 4,
    yOffset: -8,
  },
];

export default function CardDeck({ isLeaving }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [activeIdx, setActiveIdx] = useState(2); // Default to Anjolie Ela Menon
  const [isFanned, setIsFanned] = useState(false);

  useEffect(() => {
    // Staggered fan-out entrance after mounting
    const timer = setTimeout(() => {
      setIsFanned(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLeaving) {
      setIsFanned(false);
    }
  }, [isLeaving]);

  return (
    <div className="deck-container">
      {/* Giant Background Title */}
      <div className={`giant-background-text ${hoveredIdx !== null && isFanned ? 'visible' : ''}`}>
        {projects[activeIdx].title}
      </div>

      <div className="deck-wrapper">
        {projects.map((project, idx) => {
          const isHovered = hoveredIdx === idx;
          const isDimmed = hoveredIdx !== null && hoveredIdx !== idx;

          // Calculate transform: fanned (active) vs stacked/lowered (entry/exit)
          const style = {
            transform: isFanned
              ? isHovered
                ? 'translateY(-30px) rotate(0deg) scale(1.08)'
                : `translateY(${project.yOffset}px) rotate(${project.rot}deg)`
              : `translateY(180px) rotate(${project.rot * 0.2}deg) scale(0.75) translateX(${(idx - 2.5) * 12}px)`,
            opacity: isFanned ? (isDimmed ? 0.95 : 1) : 0,
            zIndex: isHovered ? 100 : idx + 10,
            transitionDelay: isFanned ? `${idx * 0.05}s` : '0s', // Stagger fan-out, instant exit stack
          };

          return (
            <a
              key={project.id}
              href={project.url}
              target={project.url !== '#' ? '_blank' : undefined}
              rel={project.url !== '#' ? 'noopener noreferrer' : undefined}
              className={`project-card ${isHovered ? 'is-hovered' : ''} ${
                isDimmed ? 'is-dimmed' : ''
              }`}
              style={style}
              onMouseEnter={() => {
                setHoveredIdx(idx);
                setActiveIdx(idx);
              }}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="card-image-wrapper">
                <img
                  src={project.img}
                  alt={project.title}
                  className="card-image"
                  loading="lazy"
                />
              </div>
            </a>
          );
        })}
      </div>

      {/* Centered Bottom Title */}
      <div className={`deck-bottom-text ${hoveredIdx !== null && isFanned ? 'visible' : ''}`}>
        {projects[activeIdx].title}
      </div>
    </div>
  );
}

