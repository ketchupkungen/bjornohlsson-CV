/**
 * Project.jsx - Project portfolio section with categorized entries
 *
 * Combines:
 * - Experience-style project cards (metadata + description)
 * - Skills-style subcategories
 */

import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * AnimatedProjectItem - Wrapper that triggers the popInFromScreenLeftWiggle
 * animation when the project card scrolls into the viewport.
 * @param {React.ReactNode} children - Card content
 * @param {string} delay - CSS delay value (e.g. '0.5s') for staggered entrance
 */
const AnimatedProjectItem = ({ children, delay, isSectionVisible }) => {
  return (
    <div
      className={`project-item ${isSectionVisible ? 'entry-in-view' : ''}`}
      style={{ '--entry-delay': delay }}
    >
      {children}
    </div>
  );
};

export const Project = ({ isSwedish }) => {
  // Trigger section reveal animation when it enters the viewport
  const [ref, isVisible] = useScrollAnimation();
  const [forceVisibleOnMobile, setForceVisibleOnMobile] = useState(false);

  useEffect(() => {
    if (isVisible) {
      return;
    }

    if (typeof window === 'undefined') {
      return;
    }

    // Fallback for mobile browsers where IntersectionObserver occasionally
    // misses this section, which otherwise leaves it at opacity: 0.
    if (window.innerWidth > 840) {
      return;
    }

    const fallbackTimer = window.setTimeout(() => {
      setForceVisibleOnMobile(true);
    }, 1200);

    return () => window.clearTimeout(fallbackTimer);
  }, [isVisible]);

  const isProjectSectionVisible = isVisible || forceVisibleOnMobile;

  // Project data organized by category (bilingual: Swedish / English)
  const projectCategories = isSwedish
    ? [
        {
          category: 'DIGITAL SAMORDNING',
          projects: [
            {
              name: 'Slussen',
              client: 'Stockholms Stad',
              date: '2022 - 2026',
              role: 'BIM- och datasamordning',
              description: [
                'Ansvar för BIM-samordning, modellering och datastruktur i ett komplext infrastrukturprojekt omfattande dubbelspår i tunnel genom Varberg, ny station och godsbangård. Arbetet inkluderade utveckling, strukturering och förvaltning av objektbibliotek samt säkerställande av korrekt och konsekvent modellinformation mellan flera teknikområden.',
                'Särskilt fokus låg på hantering av detaljerade och komplexa metadata, både på filnivå och objektnivå, där varje 3D-objekt strukturerades med tydliga attribut för att möjliggöra spårbarhet, kvalitetssäkring, leverans/statusuppföljning och effektiv informationsutväxling. Detta skapade förutsättningar för robust samordning, tillförlitliga modeller och minimerade kollisioner i projekterings- och leveransskeden.'
              ]
            },
            {
              name: 'Varbergstunneln',
              client: 'Implenia/Trafikverket',
              date: '2019 - 2023',
              role: 'BIM-, datasamordning och kontaktledningsprojektör',
              description: [
                'Ansvar för BIM-samordning, modellering och datastruktur i ett komplext infrastrukturprojekt omfattande dubbelspår i tunnel genom Varberg, ny station och godsbangård. Arbetet inkluderade utveckling, strukturering och förvaltning av objektbibliotek samt säkerställande av korrekt och konsekvent modellinformation mellan flera teknikområden.',
                'Särskilt fokus låg på hantering av detaljerade och komplexa metadata, både på filnivå och objektnivå, där varje 3D-objekt strukturerades med tydliga attribut för att möjliggöra spårbarhet, kvalitetssäkring, leverans/statusuppföljning och effektiv informationsutväxling. Detta skapade förutsättningar för robust samordning, tillförlitliga modeller och minimerade kollisioner i projekterings- och leveransskeden.'
              ]
            },
            {
              name: 'Oslo S EPC',
              client: 'Infranord/Bane NOR',
              date: '2018 - 2021',
              role: 'BIM-Samordnare och lågspäningsprojektör',
              description: [
                'Arbete i totalentreprenad med BIM-samordning, modellering och framtagande av bygghandlingar för utbyggnad av Oslo S inom Follobaneprojektet. Projektet omfattade ny järnvägsförbindelse samt komplex ombyggnad i trafikpåverkad miljö. Ansvar för strukturering av modell- och objektdatabas samt utveckling och hantering av objektbibliotek anpassade för flera teknikområden. Bidrog med komplexa 3D-järnvägsobjekt till objektdatabasen. Bidrog till effektiv samordning, kvalitetssäkrade leveranser och robust informationshantering i ett multidisciplinärt projekt.'
              ]
            }
          ]
        },
        {
          category: 'UTVECKLING',
          projects: [
            {
              name: 'Applikation för organisering och hantering av granskningskommentarer',
              client: 'Stockholm stad/Structor Mark Stockholm AB',
              date: '2026',
              role: 'Senior Software Engineer',
              description: [
                'Utvecklade en skräddarsydd applikation för att effektivt organisera och hantera stora mängder granskningskommentarer från flera datakällor, inklusive PDF, Excel och Word.',
                'Ansvarade för hela utvecklingsprocessen, inklusive datainsamling, transformation och strukturering av information enligt definierade regler och affärslogik. Lösningen möjliggör tydlig spårbarhet, filtrering och analys av kommentarer, samt visualisering av relationer mellan interna och externa synpunkter.',
                'Applikationen används i pågående projekt och vidareutvecklas kontinuerligt för implementering i liknande uppdrag hos beställaren.'
              ]
            },
            {
              name: 'Applikation för CAD-lager konvertering',
              client: 'Structor Mark Uppsala AB',
              date: '2024',
              role: 'Senior Software Engineer',
              description: [
                'Utvecklade en skräddarsydd applikation med integration mot Autodesk Civil 3D för automatiserad konvertering av CAD-lager i DWG-modeller.',
                'Lösningen läser in modellfiler samt konfigurationsdata från Excel och applicerar definierade regler för lagerstruktur, inklusive namn, färg och klassificering. Detta möjliggör en effektiv standardisering av äldre ritningsunderlag till nya projektspecifika krav.',
                'Excel användes som styrande gränssnitt för att säkerställa en enkel, flexibel och användarvänlig hantering av regler och konfigurationer för beställaren.'
              ]
            },
            {
                name: 'Applikation för konvertering av handritade ritningar',
                client: 'Structor smartBIM',
                date: '2024 – 2025',
                role: 'Senior Software Engineer & Administratör',
                description: [
                    'Utvecklade en applikation för digitalisering och konvertering av äldre handritade ritningar till strukturerade och sökbara PDF-dokument.',
                    'Lösningen inkluderar funktionalitet för att sammanställa flera PDF:er med en automatiskt genererad innehållsförteckning, där varje sida är länkad för snabb navigering.',
                    'Implementerade även stöd för att extrahera och koppla utvalda texter från ritningar som metadata i innehållsförteckningen, vilket möjliggör förbättrad spårbarhet och sökbarhet.'
                ]
            },
            {
                name: 'Applikation för automatiserad konvertering av CV enligt ny struktur',
                client: 'Structor AB',
                date: '2024 – 2026',
                role: 'Senior Software Engineer & Administratör',
                description: [
                    'Utvecklade en applikation för automatiserad konvertering av befintliga CV till en ny standardiserad design inom Structor-gruppen.',
                    'Lösningen tolkar och extraherar innehåll från äldre CV, strukturerar informationen i en temporär datamodell och genererar nya dokument enligt definierad mall.',
                    'Implementeringen möjliggjorde en effektiv migrering av stora mängder CV-data och beräknas ha sparat över 500 timmar manuellt arbete mellan systerbolagen.'
                ]
            },
            {
                name: 'CO2e utsläppsrapporteringssystem',
                client: 'Structor AB',
                date: '2023 – 2026',
                role: 'Senior Software Engineer & Administratör',
                description: [
                    'Utvecklade ett koncernövergripande system för CO2e-utsläppsrapportering med stöd för automatiserade beräkningar och återkommande rapportgenerering.',
                    'Ansvarade för analys och implementation av beräkningsmodeller samt utveckling av ett dynamiskt system som anpassas efter förändrade parametrar och regelverk.',
                    'Implementerade rollbaserad åtkomst och datasegregering för att säkerställa sekretess mellan bolag samt korrekt behörighetsstyrning inom organisationen.',
                    'Systemet inkluderar automatiserade utskick och kräver löpande underhåll för att säkerställa aktuella beräkningsmodeller och fortsatt tillförlitlighet.'
                ]
            }
          ]
        },
        {
          category: 'DATA-TRANSFORMERING',
          projects: [
            {
                name: 'Identifiering av riskområden med GIS-analys',
                client: 'Länsstyrelsen Stockholm',
                date: '2024 – 2026',
                role: 'GIS- och automationsspecialist',
                description: [
                    'Genomförde avancerad bearbetning och analys av GIS-data för att identifiera geografiska riskområden.',
                    'Använde verktyg som ArcGIS, QGIS, FME och Python för att automatisera datatransformation och analysflöden.',
                    'Utförde överlagrings-, kluster- och hotspot-analyser för att visualisera och identifiera mönster samt prioriterade områden.',
                    'Levererade strukturerade analysunderlag som stöd för beslutsfattande inom regional planering och riskhantering.'
                ]
            },
            {
                name: 'Bullerkartläggning Huddinge',
                client: 'Huddinge kommun',
                date: '2022 – 2023',
                role: 'GIS- och automationsspecialist',
                description: [
                    'Ansvarade för bearbetning och harmonisering av stora och heterogena datamängder från flera källor, inklusive fastighetsdata, trafikflöden, kartunderlag, laserskanning och markmodeller.',
                    'Utvecklade robusta och skalbara dataprocessflöden i FME med fokus på repeterbarhet, kvalitetssäkring och prestandaoptimering.',
                    'Implementerade programmeringslogik för vidare analys i akustikverktyg (SoundPLAN) enligt CNOSSOS-EU-standarden.',
                    'Bidrog till framtagning av tillförlitliga analysunderlag för bullerkartläggning och miljörelaterat beslutsstöd.'
                ]
            }
          ]
        },
        {
          category: 'VISUALISERING',
          projects: [
            {
                name: 'Fotomontage – Solparker Bonnarp',
                client: 'OX2',
                date: '2023 – 2025',
                role: 'Visualiseringsspecialist',
                description: [
                    'Ansvarade för planering och genomförande av visualiseringar för solparksanläggningar med fokus på hög realism och teknisk noggrannhet.',
                    'Utförde GIS-baserad modellering för placering av fotopunkter och layout samt utvecklade 3D-modeller genom parametrisk design.',
                    'Genomförde fotografering, mätning och bildbearbetning för att säkerställa korrekt perspektiv, skala och ljusförhållanden.',
                    'Producerade fotomontage som realistiskt återger hur anläggningen förväntas se ut efter byggnation, som underlag för kommunikation och beslutsfattande.'
                ]
            }
          ]
        }
      ]
    : [
        {
          category: 'DIGITAL COORDINATION',
          projects: [
            {
              name: 'Slussen',
              client: 'City of Stockholm',
              date: '2022 - 2026',
              role: 'BIM and Data Coordination',
              description: [
                'Responsible for BIM coordination, modeling, and data structure in a complex infrastructure project including twin-track rail in tunnel through Varberg, a new station, and a freight yard. The work included developing, structuring, and maintaining object libraries, while ensuring correct and consistent model information across multiple disciplines.',
                'A key focus was handling detailed and complex metadata at both file and object level, where each 3D object was structured with clear attributes to enable traceability, quality assurance, delivery/status follow-up, and efficient information exchange. This created the conditions for robust coordination, reliable models, and minimized clashes during design and delivery stages.'
              ]
            },
            {
              name: 'Varberg Tunnel',
              client: 'Implenia / Trafikverket',
              date: '2019 - 2023',
              role: 'BIM, Data Coordination, and Overhead Contact Line Designer',
              description: [
                'Responsible for BIM coordination, modeling, and data structure in a complex infrastructure project including twin-track rail in tunnel through Varberg, a new station, and a freight yard. The work included developing, structuring, and maintaining object libraries, while ensuring correct and consistent model information across multiple disciplines.',
                'A key focus was handling detailed and complex metadata at both file and object level, where each 3D object was structured with clear attributes to enable traceability, quality assurance, delivery/status follow-up, and efficient information exchange. This created the conditions for robust coordination, reliable models, and minimized clashes during design and delivery stages.'
              ]
            },
            {
              name: 'Oslo S EPC',
              client: 'Infranord / Bane NOR',
              date: '2018 - 2021',
              role: 'BIM Coordinator and Low-Voltage Rail Designer',
              description: [
                'Worked in a design-build contract with BIM coordination, modeling, and production of construction documentation for the expansion of Oslo S within the Follobane project. The project included a new railway connection and complex reconstruction in a traffic-affected environment. Responsible for structuring model and object databases and for developing and managing object libraries adapted for multiple disciplines. Contributed complex 3D railway objects to the object database. Contributed to efficient coordination, quality-assured deliveries, and robust information management in a multidisciplinary project.'
              ]
            }
          ]
        },
        {
          category: 'DEVELOPMENT',
          projects: [
            {
              name: 'Application for organizing and managing review comments',
              client: 'City of Stockholm / Structor Mark Stockholm AB',
              date: '2026',
              role: 'Senior Software Engineer',
              description: [
                'Developed a tailored application to efficiently organize and manage large volumes of review comments from multiple data sources, including PDF, Excel, and Word.',
                'Responsible for the full development lifecycle, including data ingestion, transformation, and structuring according to defined rules and business logic. The solution enables clear traceability, filtering, and analysis of comments, as well as visualization of relationships between internal and external feedback.',
                'The application is used in ongoing projects and is continuously improved for implementation in similar client assignments.'
              ]
            },
            {
              name: 'Application for CAD layer conversion',
              client: 'Structor Mark Uppsala AB',
              date: '2024',
              role: 'Senior Software Engineer',
              description: [
                'Developed a tailored application with integration to Autodesk Civil 3D for automated conversion of CAD layers in DWG models.',
                'The solution reads model files and configuration data from Excel, then applies defined rules for layer structure, including naming, color, and classification. This enables efficient standardization of legacy drawing data to meet new project-specific requirements.',
                'Excel was used as the controlling interface to ensure simple, flexible, and user-friendly handling of rules and configurations for the client.'
              ]
            },
            {
              name: 'Automated conversion of old hand-drawn drawings',
              client: 'Structor smartBIM',
              date: '2024 - 2025',
              role: 'Senior Software Engineer & Administrator',
              description: [
                'Developed an application for digitizing and converting older hand-drawn drawings into structured and searchable PDF documents.',
                'The solution includes functionality to merge multiple PDFs with an automatically generated table of contents, where each page is linked for fast navigation.',
                'Also implemented support for extracting and connecting selected text from drawings as metadata in the table of contents, enabling improved traceability and searchability.'
              ]
            },
            {
              name: 'Automated CV conversion to new template structure',
              client: 'Structor AB',
              date: '2024 - 2026',
              role: 'Senior Software Engineer & Administrator',
              description: [
                'Developed an application for automated conversion of existing CVs to a new standardized design across the Structor group.',
                'The solution interprets and extracts content from older CVs, structures the data into a temporary data model, and generates new documents based on a defined template.',
                'The implementation enabled efficient migration of large volumes of CV data and is estimated to have saved more than 500 hours of manual work across sister companies.'
              ]
            },
            {
              name: 'CO2e emissions reporting system',
              client: 'Structor AB',
              date: '2023 - 2026',
              role: 'Senior Software Engineer & Administrator',
              description: [
                'Developed a group-wide CO2e emissions reporting system with support for automated calculations and recurring report generation.',
                'Responsible for analysis and implementation of calculation models, as well as development of a dynamic system that adapts to changing parameters and regulatory requirements.',
                'Implemented role-based access and data segregation to ensure confidentiality between companies and correct authorization control within the organization.',
                'The system includes automated distribution and requires ongoing maintenance to ensure up-to-date calculation models and continued reliability.'
              ]
            }
          ]
        },
        {
          category: 'DATA TRANSFORMATION',
          projects: [
            {
              name: 'Identification of risk areas using GIS analysis',
              client: 'County Administrative Board Stockholm',
              date: '2024 - 2026',
              role: 'GIS and Automation Specialist',
              description: [
                'Performed advanced processing and analysis of GIS data to identify geographical risk areas.',
                'Used tools such as ArcGIS, QGIS, FME, and Python to automate data transformation and analytical workflows.',
                'Conducted overlay, cluster, and hotspot analyses to visualize patterns and identify prioritized areas.',
                'Delivered structured analytical datasets to support decision-making in regional planning and risk management.'
              ]
            },
            {
              name: 'Noise mapping Huddinge',
              client: 'Huddinge Municipality',
              date: '2022 - 2023',
              role: 'GIS and Automation Specialist',
              description: [
                'Responsible for processing and harmonizing large and heterogeneous datasets from multiple sources, including property data, traffic flows, map baselines, laser scanning, and terrain models.',
                'Developed robust and scalable data workflows in FME with focus on repeatability, quality assurance, and performance optimization.',
                'Implemented programming logic for further analysis in acoustic tools (SoundPLAN) according to the CNOSSOS-EU standard.',
                'Contributed to producing reliable analysis datasets for noise mapping and environmentally related decision support.'
              ]
            }
          ]
        },
        {
          category: 'VISUALIZATION',
          projects: [
            {
              name: 'Photomontage - Bonnarp Solar Parks',
              client: 'OX2',
              date: '2023 - 2025',
              role: 'Visualization Specialist',
              description: [
                'Responsible for planning and execution of visualizations for solar park facilities with focus on high realism and technical accuracy.',
                'Performed GIS-based modeling for placement of photo points and layout, and developed 3D models using parametric design.',
                'Carried out photography, measurement, and image processing to ensure correct perspective, scale, and lighting conditions.',
                'Produced photomontages that realistically present how the facility is expected to appear after construction, as a basis for communication and decision-making.'
              ]
            }
          ]
        }
      ];

  return (
    <section id="project" ref={ref} className={`section deferred-render ${isProjectSectionVisible ? 'appear-active' : 'appear'}`}>
      <div className="container">
        <h2 className="section-title">{isSwedish ? 'UTVALDA PROJEKT' : 'SELECTED PROJECTS'}</h2>

        {/* Render each category group, then each project inside it */}
        <div className="project-categories">
          {projectCategories.map((category, categoryIndex) => (
            <div className="project-category" key={categoryIndex}>
              <h3 className="project-category-title">{category.category}</h3>

              <div className="project-list">
                {category.projects.map((project, projectIndex) => (
                  // Stagger delay increases per category and per project index
                  <AnimatedProjectItem
                    key={`${categoryIndex}-${projectIndex}`}
                    delay={`${0.38 + categoryIndex * 0.16 + projectIndex * 0.12}s`}
                    isSectionVisible={isProjectSectionVisible}
                  >
                    {/* Project header: name/client on left, date on right */}
                    <div className="project-header">
                      <div>
                        <h4 className="project-name">{project.name}</h4>
                        <p className="project-client">
                          {isSwedish ? 'Kund: ' : 'Client: '}
                          {project.client}
                        </p>
                      </div>
                      <span className="project-date">{project.date}</span>
                    </div>

                    <p className="project-role">
                      {isSwedish ? 'Roll: ' : 'Role: '}
                      {project.role}
                    </p>

                    <div className="project-description">
                      {project.description.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex}>{paragraph}</p>
                      ))}
                    </div>
                  </AnimatedProjectItem>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
