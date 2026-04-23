/**
 * Footer.jsx - Footer section component
 *
 * Contact-focused footer with:
 * - Name and role
 * - Icon buttons for Email, LinkedIn, GitHub
 * - Availability status text
 */

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

export const Footer = ({ isSwedish }) => {
  // Dynamically calculate the current year for the copyright notice
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container footer-content">
        <p className="footer-brand">© {currentYear} BJÖRN OHLSSON</p>
        <p className="footer-role">Lead Software Engineer - Data Engineering & Automation (BIM)</p>

        <div className="footer-links" aria-label={isSwedish ? 'Kontaktlankar' : 'Contact links'}>
          <a className="footer-link-button" href="mailto:bjorn.ohlsson.93@gmail.com" aria-label="Email Björn Ohlsson">
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

        <p className="footer-status">
          {isSwedish
            ? 'Öppen för nya möjligheter inom utveckling och automation.'
            : 'Open to new opportunities in development and automation.'}
        </p>
      </div>
    </footer>
  );
};
