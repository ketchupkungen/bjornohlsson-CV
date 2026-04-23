/**
 * Hero.jsx - Hero/profile section component
 * 
 * Main hero section featuring:
 * - Profile intro and headline
 * - Social media links
 * - Professional information (profession, DOB, education)
 * - Profile image
 * 
 * Features:
 * - Uses scroll animation hook for smooth reveal
 * - Responsive layout (side-by-side on desktop, stacked on mobile)
 * - Profile image with grayscale filter that removes on hover
 */

import { useScrollAnimation } from '../hooks/useScrollAnimation';
import profileImage from '../assets/1616578100808.jfif';

/**
 * ContactIcon - Renders an SVG icon for a given contact type.
 * Supported types: 'email', 'linkedin', 'github'
 * Falls back to the GitHub icon for any unrecognized type.
 */
const ContactIcon = ({ type }) => {
  if (type === 'email') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Zm1.5.42v.18l7.5 4.96 7.5-4.96v-.18a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25Zm15 2.04-7.09 4.68a.75.75 0 0 1-.82 0L4.5 9.21v8.04c0 .14.11.25.25.25h14.5c.14 0 .25-.11.25-.25V9.21Z" fill="currentColor" />
      </svg>
    );
  }

  if (type === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M6.57 8.04a1.62 1.62 0 1 1 0-3.24 1.62 1.62 0 0 1 0 3.24ZM5.2 9.37h2.75V19H5.2V9.37Zm4.37 0h2.63v1.31h.04c.37-.7 1.27-1.43 2.62-1.43 2.81 0 3.33 1.85 3.33 4.26V19h-2.74v-4.88c0-1.16-.02-2.65-1.61-2.65-1.62 0-1.87 1.27-1.87 2.57V19H9.57V9.37Z" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.2-3.37-1.2-.45-1.19-1.12-1.5-1.12-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.05 1.53 1.05.9 1.57 2.35 1.12 2.92.86.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.75-.11-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.33 9.33 0 0 1 12 7.53a9.3 9.3 0 0 1 2.5.35c1.9-1.33 2.74-1.05 2.74-1.05.56 1.41.21 2.45.1 2.71.64.71 1.03 1.63 1.03 2.75 0 3.94-2.35 4.8-4.58 5.06.36.32.68.95.68 1.93 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.27 10.27 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" fill="currentColor" />
    </svg>
  );
};

export const Hero = ({ isSwedish }) => {
  // Trigger animation when section becomes visible
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} className={`hero ${isVisible ? 'appear-active' : 'appear'}`}>
      {/* Left content area */}
      <div className="hero-content">
        {/* Main headline */}
        <h1 className="hero-title">
          {isSwedish ? 'TEKNISK PROBLEMLÖSARE' : 'TECHNICAL PROBLEM SOLVER'}<br />
          {isSwedish ? (
            <>
              DRIVEN AV PASSION OCH <em className="hero-highlight">ERFARENHET</em>.
            </>
          ) : (
            <>
              DRIVEN BY PASSION AND<em>EXPERIENCE.</em>
            </>
          )}
        </h1>

        {/* Social media icons */}
        <div className="hero-social footer-links" aria-label={isSwedish ? 'Kontaktlankar' : 'Contact links'}>
          <a className="footer-link-button" href="mailto:bjorn.ohlsson.93@gmail.com" aria-label="Email Bjorn Ohlsson">
            <ContactIcon type="email" />
          </a>
          <a
            className="footer-link-button"
            href="https://www.linkedin.com/in/bjornohlsson93/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <ContactIcon type="linkedin" />
          </a>
          <a
            className="footer-link-button"
            href="https://github.com/ketchupkungen"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <ContactIcon type="github" />
          </a>
        </div>

        {/* Professional bio + profile image */}
        <div className="hero-bio-row">
          
          <div className="hero-subtitle">
            
            {isSwedish ? (
              <>
                <p>Jag arbetar i gränslandet mellan mjukvaruutveckling, data och digital infrastruktur, där jag bygger lösningar som strukturerar information, automatiserar manuella flöden och gör data faktiskt användbar – inte bara lagrad.</p>
                <p>Min bakgrund inom BIM, GIS och 3D-modellering har gett mig en praktisk förståelse för hur data uppstår i projekt och var den oftast börjar gå fel.</p>
                <p>Idag fokuserar jag på att utveckla verktyg, integrationer och applikationer som kopplar samman system och minskar beroendet av manuella processer. Jag arbetar främst med C#, .NET, Python och JavaScript, och använder även FME, Dynamo och Rhino/Grasshopper för att effektivisera och automatisera dataprocesser i praktiken.</p>
                <p>Jag tar gärna ansvar över hela kedjan – från behovsanalys till implementation – och trivs bäst när jag får omsätta komplexa krav till lösningar som faktiskt används och gör skillnad i projektet.</p>
              </>
            ) : (
              <>
                <p>I work at the intersection of software development, data, and digital infrastructure, where I build solutions that structure information, automate manual workflows, and make data truly usable — not just stored.</p>
                <p>My background in BIM, GIS, and 3D modeling has given me a practical understanding of how data is created in projects and where it most often starts to break down.</p>
                <p>Today, I focus on developing tools, integrations, and applications that connect systems and reduce reliance on manual processes. I primarily work with C#, .NET, Python, and JavaScript, and also use tools like FME, Dynamo, and Rhino/Grasshopper to streamline and automate data processes in practice.</p>
                <p>I’m comfortable taking responsibility across the entire chain — from understanding requirements to implementation — and thrive when turning complex needs into solutions that are actually used and make a real impact in projects.</p>
              </>
            )}
          </div>

          <div className="hero-image">
            <img
              src={profileImage}
              alt="Björn Ohlsson"
              className="profile-image"
            />
          </div>

        </div>

        {/* Key professional info in grid */}
        <div className="info-grid info-grid-two">
          <div className="info-item">
            <span className="info-label">{isSwedish ? 'TITEL' : 'TITLE'}</span>
            <span className="info-value">Lead Software Engineer - Data Engineering & Automation (BIM)</span>
          </div>
          <div className="info-item">
            <span className="info-label">{isSwedish ? 'UTBILDNING' : 'EDUCATION'}</span>
            <span className="info-value">{isSwedish ? 'System- och webbutveckling, agila metoder' : 'System and Web Development, Agile Methods'}</span>
          </div>
        </div>
      </div>

    </section>
  );
};
