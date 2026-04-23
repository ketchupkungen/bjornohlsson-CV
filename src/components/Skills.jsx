/**
 * Skills.jsx - Skills section with categorized pill-based display
 * 
 * Displays professional skills organized by category with:
 * - Different skill categories (Frontend, Backend, Design, etc.)
 * - Skills displayed as pills/tags within each category
 * 
 * Features:
 * - Uses scroll animation for reveal
 * - Skills grouped by type/category
 * - Responsive pill layout
 */

import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Skills = ({ isSwedish }) => {
  // Trigger animation when section becomes visible
  const [ref, isVisible] = useScrollAnimation();

  // Skills data organized by category
  const skillCategories = isSwedish
    ? [
        {
          category: 'FRONTEND',
          skills: [
            'HTML5',
            'CSS3/SASS',
            'JavaScript',
            'TypeScript',
            'React',
            'Responsive Design'
          ]
        },
        {
          category: 'BACKEND & SYSTEM',
          skills: [
            'Python',
            'C#',
            '.NET',
            'Node.js',
            'Express.js',
            'REST API',
            'PowerShell'
          ]
        },
        {
          category: 'DATA & AUTOMATION',
          skills: [
            'SQL',
            'MySQL',
            'PostgreSQL/PostGIS',
            'MongoDB',
            'FME',
            'Dynamo',
            'Data Integration',
            'Data Processing',
            'Data Visualization',
            'Business Intelligence',
            'Big Data'
          ]
        },
        {
          category: 'BIM & DIGITAL SAMORDNING',
          skills: [
            'BIM',
            'Datasamordning',
            'Informationshantering',
            'Projektering',
            'Navisworks'
          ]
        },
        {
          category: '3D / CAD & DESIGN',
          skills: [
            'MicroStation',
            'AutoCAD Civil 3D',
            'Revit',
            'Rhino Grasshopper',
            'Blender',
            'ArcGIS',
            'QGIS',
            'Photoshop'
          ]
        },
        {
          category: 'VERKTYG & ARBETSFLÖDEN',
          skills: [
            'Git/GitHub',
            'Agile/Scrum',
            'Trello',
            'ProjectWise',
            'Oracle Aconex',
            'Chaos',
            'Excel',
            'Word',
            'PowerPoint',
            'Forms',
            'SharePoint',
            'Power Automate',
            'Power BI'
            
          ]
        },
        {
          category: 'ÖVRIGA KOMPETENSER',
          skills: [
            'Kvalitetssäkring',
            'Threat Modeling',
            'Teknisk Planering'
          ]
        }
      ]
    : [
        {
          category: 'FRONTEND',
          skills: [
            'HTML5',
            'CSS3/SASS',
            'JavaScript',
            'TypeScript',
            'React',
            'Responsive Design'
          ]
        },
        {
          category: 'BACKEND & SYSTEM',
          skills: [
            'Python',
            'C#',
            '.NET',
            'Node.js',
            'Express.js',
            'REST API',
            'PowerShell'
          ]
        },
        {
          category: 'DATA & AUTOMATION',
          skills: [
            'SQL',
            'MySQL',
            'PostgreSQL/PostGIS',
            'MongoDB',
            'FME',
            'Dynamo',
            'Data Integration',
            'Data Processing',
            'Data Visualization',
            'Business Intelligence',
            'Big Data'
          ]
        },
        {
          category: 'BIM & DIGITAL COORDINATION',
          skills: [
            'BIM',
            'Data Coordination',
            'Information Management',
            'Design',
            'Navisworks'
          ]
        },
        {
          category: '3D / CAD & DESIGN',
          skills: [
            'MicroStation',
            'AutoCAD Civil 3D',
            'Revit',
            'Rhino Grasshopper',
            'Blender',
            'ArcGIS',
            'QGIS',
            'Photoshop'
          ]
        },
        {
          category: 'TOOLS & WORKFLOWS',
          skills: [
            'Git/GitHub',
            'Agile/Scrum',
            'Trello',
            'ProjectWise',
            'Oracle Aconex',
            'Chaos',
            'Excel',
            'Word',
            'PowerPoint',
            'Forms',
            'SharePoint',
            'Power Automate',
            'Power BI'
          ]
        },
        {
          category: 'OTHER COMPETENCIES',
          skills: [
            'Quality Assurance',
            'Threat Modeling',
            'Technical Planning'
          ]
        }
      ];

  return (
    <section id="skills" ref={ref} className={`section deferred-render ${isVisible ? 'appear-active' : 'appear'}`}>
      <div className="container">
        <h2 className="section-title">{isSwedish ? 'FÄRDIGHETER' : 'SKILLS'}</h2>
        <div className={`skills-categories ${isVisible ? 'skills-animate' : ''}`}>
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="skill-category"
              style={{
                '--category-delay': `${0.85 + categoryIndex * 0.18}s`,
              }}
            >
              <h3 className="skill-category-title">{category.category}</h3>
              <div className="skill-pills">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-pill"
                    style={{
                      '--pill-delay': `${0.95 + categoryIndex * 0.18 + skillIndex * 0.07}s`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
