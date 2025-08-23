import React, { useState } from 'react';
import styles from '../styles/EnhancedProjects.module.css';

const EnhancedProjects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Task Management App",
      description: "A clean, intuitive task management application with real-time collaboration features. Built with modern React patterns and a focus on user experience.",
      tech: "React, Node.js, PostgreSQL",
      codeSnippet: `// Task prioritization algorithm
const prioritizeTasks = (tasks) => {
  return tasks.sort((a, b) => {
    // Factor in due date, importance and complexity
    const aScore = calculateScore(a);
    const bScore = calculateScore(b);
    return bScore - aScore;
  });
};`,
      details: [
        "Built with React and React Context API for state management",
        "Node.js backend with Express and PostgreSQL",
        "Implemented real-time collaboration using WebSockets",
        "Responsive design works on all devices",
        "Automated testing with Jest and React Testing Library"
      ],
      flowChart: [
        "User Authentication → Dashboard",
        "Dashboard → Task Creation/Editing",
        "Task → Priority Assignment → Team Assignment",
        "Task → Real-time Updates → Notifications",
        "Dashboard → Analytics → Reports"
      ]
    },
    {
      id: 2,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets with customizable charts and filters. Designed for performance and accessibility.",
      tech: "React, D3.js, Python, FastAPI",
      codeSnippet: `// Dynamic chart generation
const generateChart = (data, type) => {
  const svg = d3.select(chartRef.current)
    .append("svg")
    .attr("width", width)
    .attr("height", height);
    
  // Scale data to fit chart dimensions
  const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.x)])
    .range([0, width]);
    
  // Add visualization elements based on type
  if (type === "bar") {
    // Bar chart implementation
  } else if (type === "line") {
    // Line chart implementation
  }
};`,
      details: [
        "Created responsive visualizations with D3.js",
        "Implemented Python backend using FastAPI",
        "Built custom data processing pipeline for large datasets",
        "Added export functionality for reports and charts",
        "Ensured WCAG compliance for accessibility"
      ],
      flowChart: [
        "Data Ingestion → Preprocessing → Storage",
        "User Query → Data Filtering → Chart Selection",
        "Chart Rendering → Interactive Controls",
        "User Interaction → Dynamic Data Updates",
        "Export Options → PDF/CSV Generation"
      ]
    },
    {
      id: 3,
      title: "Open Source Library",
      description: "A lightweight utility library for form validation with TypeScript support. Used by 500+ developers worldwide with comprehensive documentation.",
      tech: "TypeScript, Jest, npm",
      codeSnippet: `// Form validation helper
export const validateField = <T extends FieldValue>(
  value: T, 
  rules: ValidationRule[]
): ValidationResult => {
  for (const rule of rules) {
    const result = rule.validate(value);
    if (!result.valid) {
      return {
        valid: false,
        error: result.error
      };
    }
  }
  
  return { valid: true };
};`,
      details: [
        "Built with TypeScript for type safety",
        "100% test coverage with Jest",
        "Published to npm with semantic versioning",
        "Comprehensive documentation with examples",
        "CI/CD pipeline for automated testing and publishing"
      ],
      flowChart: [
        "Schema Definition → Validation Rules",
        "Form Input → Field Validation → Error Collection",
        "Form Submission → Complete Validation",
        "Error Handling → User Feedback",
        "Async Validation → Server Verification"
      ]
    }
  ];

  const toggleProject = (id) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Projects</h2>
      
      <div className={styles.projectsGrid}>
        {projects.map(project => (
          <div 
            key={project.id}
            className={`${styles.projectCard} ${expandedProject === project.id ? styles.expanded : ''}`}
            onClick={() => toggleProject(project.id)}
          >
            <div className={styles.cardContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <p className={styles.projectTech}>{project.tech}</p>
              
              {expandedProject === project.id && (
                <div className={styles.expandedContent}>
                  <div className={styles.detailsSection}>
                    <h4 className={styles.detailsTitle}>Key Features</h4>
                    <ul className={styles.detailsList}>
                      {project.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={styles.codeSection}>
                    <h4 className={styles.detailsTitle}>Code Sample</h4>
                    <pre className={styles.codeSnippet}>
                      <code>{project.codeSnippet}</code>
                    </pre>
                  </div>
                  
                  <div className={styles.flowchartSection}>
                    <h4 className={styles.detailsTitle}>System Flow</h4>
                    <div className={styles.flowChart}>
                      {project.flowChart.map((step, index) => (
                        <div key={index} className={styles.flowStep}>
                          <span>{step}</span>
                          {index < project.flowChart.length - 1 && <div className={styles.flowArrow}>→</div>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className={styles.cardFooter}>
              <button className={styles.viewDetailsBtn}>
                {expandedProject === project.id ? 'Hide Details' : 'View Details'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EnhancedProjects;
