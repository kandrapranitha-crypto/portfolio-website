import React, { useState } from 'react';
import './CardDeck.css';

const projects = [
  {
    id: 1,
    title: 'Generative Visualization',
    category: 'Creative Coding',
    img: '/images/neural_network_art.png',
    rot: -7,
    yOffset: 15,
  },
  {
    id: 2,
    title: 'Developer Portrait',
    category: 'Editorial Photography',
    img: '/images/developer_portrait.png',
    rot: -4,
    yOffset: -10,
  },
  {
    id: 3,
    title: 'UI Device Interface',
    category: 'Human-Computer Interaction',
    img: '/images/designer_interaction.png',
    rot: 2,
    yOffset: 5,
  },
  {
    id: 4,
    title: 'Purity of Nature',
    category: 'Typography Design',
    img: '/images/editorial_typography.png',
    rot: -1,
    yOffset: 20,
  },
  {
    id: 5,
    title: 'Embedded Stepper Arm',
    category: 'Robotics & Hardware',
    img: '/images/hardware_prototype.png',
    rot: 4,
    yOffset: -5,
  },
  {
    id: 6,
    title: 'Additive Tower Model',
    category: '3D Prototyping',
    img: '/images/printed_structure.png',
    rot: 7,
    yOffset: 12,
  },
];

export default function CardDeck() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <div className="deck-container">
      <div className="deck-wrapper">
        {projects.map((project, idx) => {
          const isHovered = hoveredIdx === idx;
          const isDimmed = hoveredIdx !== null && hoveredIdx !== idx;

          // Calculate inline styles for rotation and vertical offset
          const style = {
            transform: isHovered
              ? 'translateY(-30px) rotate(0deg) scale(1.08)'
              : `translateY(${project.yOffset}px) rotate(${project.rot}deg)`,
            zIndex: isHovered ? 100 : idx + 10,
          };

          return (
            <div
              key={project.id}
              className={`project-card ${isHovered ? 'is-hovered' : ''} ${
                isDimmed ? 'is-dimmed' : ''
              }`}
              style={style}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="card-image-wrapper">
                <img
                  src={project.img}
                  alt={project.title}
                  className="card-image"
                  loading="lazy"
                />
                <div className="card-overlay">
                  <span className="card-category">{project.category}</span>
                  <h3 className="card-title">{project.title}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
