import React from 'react';
import { useTrail, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import './roadmap.css';

const Roadmap = () => {
  const phases = [
    {
      title: 'Q1/2023',
      tasks: [
        'Research and build ideas for Cereal guy.',
        'Building Websites.',
      ],
    },
    {
      title: 'Q2/2023',
      tasks: [
        'Deploying Smart Contracts & Web App Development.',
        'Focus on developing Social Networking platforms',
      ],
    },
    {
      title: 'Q3/2023',
      tasks: [
        'Complete Exchange upgrade & Continue to Develop the Project',
      ],
    },
    {
      title: 'Q4/2023',
      tasks: [
        'Continuing the campaign to develop the ecosystem of  cereal guy',
      ],
    },
    {
      title: 'Q5/2023',
      tasks: [
        'Planning to list on DEX & Community development.',
      ],
    },
    {
      title: 'Q6/2024',
      tasks: [
        'Expand marketing & listing on CEX.',
        "Burn remaining 10% of tokens to support startup projects"
      ],
    },
    {
      title: 'Q7/2024',
      tasks: [
        'Creating new Partnerships & Transition to DAO structure',
   
      ],
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const trail = useTrail(phases.length, {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    to: { opacity: inView ? 2 : 0, transform: inView ? 'translateX(0%)' : 'translateX(-100%)' },
    config: { tension: 100, friction: 30 },
  });

  return (
    <div className="roadmap-section" ref={ref}>
      <h2>Roadmap</h2>
      <div className="roadmap-boxes">
        {trail.map((style, index) => (
          <animated.div key={index} className="roadmap-box" style={style}>
            <h3>{phases[index].title}</h3>
            <ul>
              {phases[index].tasks.map((task, taskIndex) => (
                <li key={taskIndex}>{task}</li>
              ))}
            </ul>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;