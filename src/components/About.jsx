import './About.css';

export default function About() {
  const qualities = [
    'Interpersonal & people-facing',
    'Public speaking & pitching',
    'Written communication',
    'Event coordination',
    'Organized under pressure',
  ];

  const interests = [
    'Filmmaking',
    'Scriptwriting',
    'Photography',
    'Dance',
  ];

  return (
    <div className="about-section">
      <div className="about-grid">
        {/* Left Column: Bio Paragraphs */}
        <div className="about-left-col">
          <div className="about-text-content">
            <p>
              I've written for brands, interviewed artists, and run research for a growing e-commerce portfolio. I've also managed a hostel in Goa from the ground up — welcoming a constantly rotating mix of strangers and turning them into a community. Different rooms, same instinct: find the story, and build the community around it.
            </p>
            <p>
              That instinct is the thread I want to pull on going forward. My intention, professionally, is to add value to society in the ways I'm best equipped to — through storytelling and community-building. After a break from full-time work, I'm looking to bring both back into my day-to-day.
            </p>
          </div>
          <a href="Resume.pdf" download="Pranitha_Reddy_Resume.pdf" className="download-btn">
            <span className="btn-icon">↓</span> Download Resume
          </a>
        </div>

        {/* Right Column: Skills & Interests Capsules */}
        <div className="about-right-col">
          <div className="about-group">
            <h3 className="group-title">WHAT I BRING</h3>
            <div className="capsule-grid">
              {qualities.map((item, idx) => (
                <span key={idx} className="capsule-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="about-group">
            <h3 className="group-title">INTERESTS</h3>
            <div className="capsule-grid">
              {interests.map((item, idx) => (
                <span key={idx} className="capsule-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
