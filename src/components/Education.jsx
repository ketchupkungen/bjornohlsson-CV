/**
 * Education.jsx - Education and certifications/courses section component
 * 
 * Two-column layout featuring:
 * - Left: Educational background (schools, years, descriptions)
 * - Right: Certifications and courses (dates, categories)
 * 
 * Features:
 * - Side-by-side layout on desktop, stacked on mobile
 * - Scroll animation for reveal
 * - Deferred rendering for performance
 * - Maps through education and certifications/courses arrays
 */

import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedEducationItem = ({ children, className, delay }) => {
  const [entryRef, isEntryVisible] = useScrollAnimation({
    threshold: 0.25,
    rootMargin: '0px 0px -6% 0px',
  });

  return (
    <div
      ref={entryRef}
      className={`${className} ${isEntryVisible ? 'entry-in-view' : ''}`}
      style={{ '--entry-delay': delay }}
    >
      {children}
    </div>
  );
};

export const Education = ({ isSwedish }) => {
  // Trigger animation when section becomes visible
  const [ref, isVisible] = useScrollAnimation();

  // Education data
  const education = [
    {
      type: isSwedish
        ? 'System- och webbutvecklare, agila metoder'
        : 'System and Web Developer, Agile methods',
      school: isSwedish ? 'Lernia Högskola' : 'Lernia University',
      period: '2016 - 2018',
      description: isSwedish
        ? [
            'En kvalificerad yrkeshögskoleutbildning inom system- och webbutveckling med fokus på agila metoder. Utbildningen ger breda kunskaper i modern mjukvaruutveckling, inklusive frontend- och backendutveckling, databashantering (SQL och NoSQL), samt design av användargränssnitt.',
            'Tyngdpunkten ligger på praktisk tillämpning av agila arbetssätt såsom Scrum och Kanban, testdriven utveckling, samt utveckling av skalbara och responsiva applikationer för webb, mobil och IoT. Utbildningen omfattar även systemdesign, integrationslösningar, projektledning och affärsförståelse, samt erfarenhet från verkliga projekt genom praktik (LIA).',
            'Efter avslutad utbildning har studenten kompetens att utveckla, testa och driftsätta moderna applikationer samt arbeta strukturerat i team med fokus på kvalitet, användbarhet och kundvärde.'
          ]
        : [
            'A higher vocational education in system and web development with a strong focus on agile methodologies. The program provides comprehensive knowledge in modern software development, including frontend and backend development, database management (SQL and NoSQL), and user interface design.',
            'The education emphasizes practical application of agile frameworks such as Scrum and Kanban, test-driven development, and the creation of scalable, responsive applications for web, mobile, and IoT platforms. It also covers system design, integrations, project management, and business understanding, along with hands-on industry experience through internships (LIA).',
            'Upon completion, graduates are equipped to develop, test, and deploy modern applications, and to work effectively in structured teams with a focus on quality, usability, and delivering business value.'
          ]
    },
    {
      type: isSwedish
        ? 'Produktionsutveckling'
        : 'Production Development',
      school: 'IRC',
      period: '2013 – 2015',
      description: isSwedish
        ?[
            'Kvalificerad yrkeshögskoleutbildning inom produktionsutveckling med fokus på modern tillverkning .',
            'Ger kunskaper i CNC/CAM, 3D CAD (SolidWorks), automation och produktionsteknik.',
            'Inkluderar produktionsprocesser, Lean Production, logistik och kvalitetsarbete.',
            'Omfattar projektledning, teknisk kommunikation och engelska inom teknik.',
            'Praktisk erfarenhet genom flera LIA-perioder i verklig industrimiljö.'
          ]
        : [
            'A higher vocational education in production development with a focus on modern manufacturing.',
            'Provides knowledge in CNC/CAM, 3D CAD (SolidWorks), automation, and production technology.',
            'Includes production processes, Lean Production, logistics, and quality work.',
            'Covers project management, technical communication, and English in a technical context.',
            'Practical experience through several LIA periods in a real industrial environment.'
          ]
    },
  ];

  // Certifications and courses data (same structure as education entries)
  const certificationsAndCourses = [
    /* {
      type: isSwedish ? 'Kurs' : 'Course',
      school: 'SKOLA.',
      period: '2022',
      description: isSwedish
        ? ['Beskrivning.']
        : ['Description.']
    } */
  ];

  return (
    <div className="container deferred-render">
      {/* Two-column grid layout */}
      <div className="education-awards-layout">
        
        {/* EDUCATION SECTION */}
        <section id="education" ref={ref} className={`section ${isVisible ? 'appear-active' : 'appear'}`}>
          <h2 className="section-title">{isSwedish ? 'UTBILDNING' : 'EDUCATION'}</h2>
          <div className="education-grid education-list">
            {/* Render each education entry */}
            {education.map((edu, index) => (
              <AnimatedEducationItem
                key={index}
                className="education-item"
                delay={`${0.42 + index * 0.14}s`}
              >
                <div className="education-header">
                  <div>
                    <h3 className="education-type">{edu.type}</h3>
                    <div className="education-school">{edu.school}</div>
                  </div>
                  <div className="education-period">{edu.period}</div>
                </div>
                {Array.isArray(edu.description) ? (
                  edu.description.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex} className="education-description">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="education-description">{edu.description}</p>
                )}
              </AnimatedEducationItem>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS & COURSES SECTION */}
        {/* <section id="certifications-courses" className={`section ${isVisible ? 'appear-active' : 'appear'}`}>
          <h2 className="section-title">{isSwedish ? 'CERTIFIERINGAR & KURSER' : 'CERTIFICATIONS & COURSES'}</h2>
          <div className="education-grid education-list"> */}
            {/* Render each certifications/courses entry */}
            {/* {certificationsAndCourses.map((item, index) => (
              <AnimatedEducationItem
                key={index}
                className="education-item"
                delay={`${0.42 + index * 0.14}s`}
              >
                <div className="education-header">
                  <div>
                    <h3 className="education-type">{item.type}</h3>
                    <div className="education-school">{item.school}</div>
                  </div>
                  <div className="education-period">{item.period}</div>
                </div>
                {Array.isArray(item.description) ? (
                  item.description.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex} className="education-description">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="education-description">{item.description}</p>
                )}
              </AnimatedEducationItem>
            ))}
          </div>
        </section> */}
      </div>
    </div>
  );
};
