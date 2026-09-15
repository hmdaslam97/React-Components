import React, { useState } from 'react';
import './styles.css';

const items = [
  {
    id: 'html',
    title: 'HTML',
    content:
      'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
  },
  {
    id: 'css',
    title: 'CSS',
    content:
      'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    content:
      'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
  },
];

export default function Accordion() {
  const [openStates, setOpenStates] = useState(() => items.map(() => false));

  const toggle = (idx) => {
    setOpenStates((prev) => {
      const next = [...prev];
      next[idx] = !next[idx];
      return next;
    });
  };

  return (
    <div className="accordion">
      {items.map((item, idx) => {
        const isOpen = !!openStates[idx];
        const contentId = `accordion-content-${idx}`;
        const buttonId = `accordion-button-${idx}`;

        return (
          <div className="accordion-item" key={item.id}>
            <div className="accordion-header">
              <button
                id={buttonId}
                aria-controls={contentId}
                aria-expanded={isOpen}
                className="accordion-trigger"
                onClick={() => toggle(idx)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggle(idx);
                  }
                }}
              >
                <span >{item.title}{' '}</span>
                <span
                  className={`accordion-icon${isOpen ? ' accordion-icon--rotated' : ''}`}
                  aria-hidden="true"
                />
              </button>
            </div>

            <div
              id={contentId}
              role="region"
              aria-labelledby={buttonId}
              className="accordion-panel"
              style={{ display: isOpen ? 'block' : 'none' }}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
