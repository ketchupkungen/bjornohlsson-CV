/**
 * Experience.jsx - Work experience section component
 * 
 * Displays professional work history with:
 * - Company/project name
 * - Job title/role
 * - Time period
 * - Description of responsibilities
 * 
 * Features:
 * - Uses scroll animation for reveal effect
 * - Deferred rendering optimization for performance
 * - Maps through experience data array
 */

import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedExperienceItem = ({ children, delay }) => {
  const [entryRef, isEntryVisible] = useScrollAnimation({
    threshold: 0.25,
    rootMargin: '0px 0px -6% 0px',
  });

  return (
    <div
      ref={entryRef}
      className={`experience-item ${isEntryVisible ? 'entry-in-view' : ''}`}
      style={{ '--entry-delay': delay }}
    >
      {children}
    </div>
  );
};

export const Experience = ({ isSwedish }) => {
  // Trigger animation when section becomes visible
  const [ref, isVisible] = useScrollAnimation();

  // Experience data using plain strings for safer, cleaner rendering
  const experiences = [
    {
      title: 'Lead Software Engineer – Data Engineering & Automation (BIM)',
      period: isSwedish ? '2021 – NUVARANDE' : '2021 – PRESENT',
      company: 'Structor smartBIM',
      description: isSwedish
        ? [
            'Co-founder och delägare i Structor smartBIM, med ett brett ansvar som sträcker sig över både teknisk utveckling och affärsnära arbete.',
            'Har varit drivande i att utveckla bolagets digitala erbjudande, från idé och strategi till implementation hos beställare.',
            'Arbetar med att designa, utveckla och implementera lösningar som hanterar och effektiviserar komplexa informationsflöden, inklusive applikationer, integrationer och dataprocesser kopplade till exempelvis BIM- och GIS-data.',
            'Ansvarar för tekniska vägval, arkitektur och implementation, samt arbetar nära kunder i kravställning, lösningsdesign och leverans. Rollen innefattar även att identifiera behov och bidra till hur digitala tjänster paketeras och skapar värde i projekt.',
            'Utvecklar lösningar i bland annat C#, .NET, Python och JavaScript, samt arbetar med datatransformation och automatisering via verktyg som FME, Dynamo och Rhino/Grasshopper.',
            'Arbetet sträcker sig över hela kedjan – från behovsanalys och design till implementation och användning i praktiken.'
          ]
        : [
            'Co-founder and part owner of Structor smartBIM, with a broad role spanning both technical development and business-oriented work.',
            'Key driver in developing the company’s digital offering, from idea and strategy to implementation for clients.',
            'Designs, develops, and implements solutions that manage and streamline complex information flows, including applications, integrations, and data processes related to BIM and GIS data.',
            'Responsible for technical decisions, architecture, and implementation, while working closely with clients on requirements, solution design, and delivery. The role also includes identifying needs and shaping how digital services are packaged to create value in projects.',
            'Develops solutions using C#, .NET, Python, and JavaScript, and works with data transformation and automation using tools such as FME, Dynamo, and Rhino/Grasshopper.',
            'Works across the full lifecycle — from needs analysis and design to implementation and real-world use.'
          ]
      },
      {
        title: isSwedish ? 'BIM- och datasamordnare' : 'BIM & Data Coordinator',
        period: '2018 – 2021',
        company: 'Aktins Sverige',
        description: isSwedish
          ? [
              'BIM- och datasamordnare i rollen som specialistkonsult, främst inom större och komplexa multidisciplinära infrastrukturprojekt där samordning mellan flera teknikområden varit kritisk.',
              'Arbetade med att strukturera, kvalitetssäkra och samordna modell- och projektdata, samt säkerställa att informationsflöden fungerade effektivt mellan olika discipliner och system.',
              'Ansvarade för att strukturera och kvalitetssäkra leveranser till beställare, med fokus på att säkerställa att information uppfyllde både beställarens och projektets krav.',
              'Drev förbättringsinitiativ genom programmering och automatisering för att effektivisera processer och minska manuellt arbete, inklusive utveckling av skript, verktyg och dataprocesser för att hantera och transformera information.',
              'Arbetade nära projektörer, teknikspecialister och beställare i projekt.'
            ]
          : [
              'BIM and Data Coordinator working as a specialist consultant, primarily in large and complex multidisciplinary infrastructure projects where coordination across multiple disciplines was critical.',
              'Worked with structuring, quality assurance, and coordination of model and project data, ensuring efficient information flow between disciplines and systems.',
              'Responsible for structuring and quality-assuring deliveries to clients, ensuring that information met both client and project requirements.',
              'Drove improvement initiatives using programming and automation to streamline processes and reduce manual work, including developing scripts, tools, and data processes for handling and transforming information.',
              'Worked closely with designers, technical specialists, and clients within projects.'
            ]
    }
  ];

  return (
    <section id="experience" ref={ref} className={`section deferred-render ${isVisible ? 'appear-active' : 'appear'}`}>
      <div className="container">
        <h2 className="section-title">{isSwedish ? 'ERFARENHET' : 'EXPERIENCE'}</h2>

        <div className="experience-list">
          {/* Map through experience items and render each one */}
          {experiences.map((exp, index) => (
            <AnimatedExperienceItem
              key={index}
              delay={`${0.42 + index * 0.14}s`}
            >
              {/* Header with title and period side-by-side */}
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-subtitle">{exp.company}</p>
                </div>
                <span className="experience-period">{exp.period}</span>
              </div>
              {/* Job description */}
              <div className="experience-description">
                {exp.description.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              </div>
            </AnimatedExperienceItem>
          ))}
        </div>
      </div>
    </section>
  );
};
