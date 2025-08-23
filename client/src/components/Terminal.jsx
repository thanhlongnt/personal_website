import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/Terminal.module.css';

const Terminal = () => {
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const terminalRef = useRef(null);

  const welcomeMessage = [
    '> Welcome to my interactive terminal!',
    '> Type "help" to see available commands.',
  ];

  const commands = {
    help: {
      output: [
        'Available commands:',
        '  - about: Learn more about me',
        '  - skills: See my technical skills',
        '  - projects: View my featured projects',
        '  - contact: How to get in touch',
        '  - clear: Clear the terminal',
      ],
    },
    about: {
      output: [
        'Hi, I\'m Thanh-Long (T.L.) Nguyen-Trong.',
        'I\'m a software developer passionate about creating elegant solutions to complex problems.',
        'My background includes experience in full-stack development, with expertise in modern frameworks and technologies.',
      ],
    },
    skills: {
      output: [
        'Technical Skills:',
        '  • Languages: JavaScript, TypeScript, Python, Java',
        '  • Front-end: React, Vue, HTML/CSS',
        '  • Back-end: Node.js, Express, Django',
        '  • Database: PostgreSQL, MongoDB',
        '  • DevOps: Docker, AWS, CI/CD',
        '  • Tools: Git, VS Code, Figma',
      ],
    },
    projects: {
      output: [
        'Featured Projects:',
        '  • Task Management App - React, Node.js',
        '  • Data Visualization Dashboard - D3.js',
        '  • Open Source Library - TypeScript',
        '',
        'Type "projects [name]" for more details on specific projects.',
      ],
    },
    contact: {
      output: [
        'Get in touch:',
        '  • Email: your.email@example.com',
        '  • LinkedIn: linkedin.com/in/your-profile',
        '  • GitHub: github.com/your-username',
      ],
    },
    clear: {
      action: () => setLines([]),
      output: [],
    },
  };

  // Simulating typing
  useEffect(() => {
    let timeout;
    
    if (isActive) {
      setLines(welcomeMessage);
    }
    
    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => {
      clearTimeout(timeout);
      clearInterval(cursorInterval);
    };
  }, [isActive]);

  const handleActivate = () => {
    if (!isActive) {
      setIsActive(true);
    }
  };

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let newLines = [...lines, `> ${cmd}`];
    
    if (trimmedCmd === '') {
      setLines([...newLines]);
      return;
    }
    
    if (trimmedCmd in commands) {
      if (commands[trimmedCmd].action) {
        commands[trimmedCmd].action();
      }
      
      if (commands[trimmedCmd].output.length > 0) {
        newLines = [...newLines, ...commands[trimmedCmd].output];
      }
    } else if (trimmedCmd.startsWith('projects ')) {
      const projectName = trimmedCmd.substring(9);
      
      if (projectName === 'task management app') {
        newLines = [...newLines, 
          'Task Management App:',
          '  A clean, intuitive task management application with',
          '  real-time collaboration features. Built with modern',
          '  React patterns and a focus on user experience.',
          '',
          '  Tech stack: React, Node.js, PostgreSQL',
        ];
      } else if (projectName === 'data visualization dashboard') {
        newLines = [...newLines, 
          'Data Visualization Dashboard:',
          '  Interactive dashboard for visualizing complex datasets',
          '  with customizable charts and filters. Designed for',
          '  performance and accessibility.',
          '',
          '  Tech stack: React, D3.js, Python, FastAPI',
        ];
      } else if (projectName === 'open source library') {
        newLines = [...newLines, 
          'Open Source Library:',
          '  A lightweight utility library for form validation',
          '  with TypeScript support. Used by 500+ developers',
          '  worldwide with comprehensive documentation.',
          '',
          '  Tech stack: TypeScript, Jest, npm',
        ];
      } else {
        newLines = [...newLines, `Project "${projectName}" not found. Type "projects" to see available projects.`];
      }
    } else {
      newLines = [...newLines, `Command not found: ${trimmedCmd}. Type "help" for available commands.`];
    }
    
    setLines(newLines);
    setCurrentLine('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(currentLine);
    }
  };

  useEffect(() => {
    // Auto-scroll to the bottom of the terminal
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div 
      className={styles.terminalContainer} 
      onClick={handleActivate}
      tabIndex="0" // Make the terminal focusable
    >
      <div className={styles.terminalHeader}>
        <div className={styles.terminalDots}>
          <span className={styles.terminalDot}></span>
          <span className={styles.terminalDot}></span>
          <span className={styles.terminalDot}></span>
        </div>
        <div className={styles.terminalTitle}>console</div>
      </div>
      <div className={styles.terminal} ref={terminalRef}>
        {!isActive ? (
          <div className={styles.terminalInactive}>
            Click to activate terminal
          </div>
        ) : (
          <>
            {lines.map((line, index) => (
              <div key={index} className={styles.terminalLine}>
                {line}
              </div>
            ))}
            <div className={styles.terminalInputLine}>
              &gt;&nbsp;
              <span>{currentLine}</span>
              {showCursor && <span className={styles.cursor}></span>}
            </div>
          </>
        )}
      </div>
      {isActive && (
        <input
          type="text"
          className={styles.hiddenInput}
          value={currentLine}
          onChange={(e) => setCurrentLine(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      )}
    </div>
  );
};

export default Terminal;
