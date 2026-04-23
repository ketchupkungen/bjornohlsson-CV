/**
 * Hobby.jsx - Interests and hobbies section
 * 
 * Displays personal hobbies and interests with:
 * - Descriptive text
 * - Tag-style list of interests
 * 
 * Features:
 * - Uses scroll animation for reveal effect
 * - Deferred rendering optimization
 */

import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Hobby = ({ isSwedish }) => {
  // Trigger animation when section becomes visible
  const [ref, isVisible] = useScrollAnimation();

  // List of hobbies/interests
  const hobbies = isSwedish
    ? ['UTVECKLING', 'TEKNIK', 'FOTOGRAFERING', 'VANDRING', 'BRÄDSPEL']
    : ['DEVELOPMENT', 'TECHNOLOGY', 'PHOTOGRAPHY', 'HIKING', 'BOARD GAMES'];

  return (
    <section ref={ref} className={`section deferred-render ${isVisible ? 'appear-active' : 'appear'}`}>
      <div className="container">
        {/* Hobby section box */}
        <div className="hobby-section">
          <h2 className="hobby-title">{isSwedish ? 'HOBBY' : 'HOBBY'}</h2>
          
          {/* Description of interests */}
          <p className="hobby-text">
            {isSwedish
              ? 'Jag är en person som gillar utmaningar och tar mig an avancerade projekt för lärande och engagemang.'
              : 'I am a person who likes challenges and undertakes the most advanced projects for learning and commitment.'}
          </p>
          
          {/* Tag-style hobbies list */}
          <div className="hobby-tags">
            {hobbies.map((hobby, index) => (
              <span key={index} className="hobby-tag">{hobby}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
