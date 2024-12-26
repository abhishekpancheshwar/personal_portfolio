import PropTypes from 'prop-types';
import React from 'react';

function ProjectCard({ src, link, h3, p, h4 }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img className="hover" src={src} alt={`${typeof h3 === 'string' ? h3 : 'project'} logo`} /> 
      <br /> 
      <br />
      
      {/* Render h3 */}
      {typeof h3 === 'object' ? h3 : <h3>{h3}</h3>}
      
      {/* Render p */}
      {typeof p === 'object' ? p : <div>{p}</div>}
      
      {/* Render h4 (which seems to be a ul in your case) */}
      {typeof h4 === 'object' ? (
        <div>
          {React.Children.map(h4.props.children, (child) => {
            // Render all children except the last paragraph
            if (child.type === 'p') return null;
            return child;
          })}
          {/* Render the paragraph separately if it exists */}
          {React.Children.toArray(h4.props.children).find(child => child.type === 'p') && 
            <p>
              {React.Children.toArray(h4.props.children).find(child => child.type === 'p').props.children}
            </p>
          }
        </div>
      ) : (
        <div>{h4}</div>
      )}
    </a>
  );
}

ProjectCard.propTypes = {
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  h3: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  p: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  h4: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
};

export default ProjectCard;
