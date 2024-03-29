import React, { useState, useEffect } from "react";

function PublicationAuthor({ authors }) {
    const authorArray = authors.split(',').map(author => author.trim());
  
    return (
      <p className="publication-author">
        {authorArray.map((author, index) => (
          <span key={index} style={{ fontWeight: author === 'Aamal Hussain' ? 'bold' : 'normal' }}>
            {author}
            {index < authorArray.length - 1 ? ', ' : ''}
          </span>
        ))}
      </p>
    );
  }

function PublicationItem({description, conference, title, authors, path}) {
    const [showDescription, setShowDescription] = useState(true);
    useEffect(() => {
        const handleResize = () => { setShowDescription(window.innerWidth > 600) };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Call handleResize initially
        handleResize();

        // Remove event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
    <div className="publication-item">
        <PublicationAuthor authors={authors} />
        <p className="publication-location"> {conference} </p>
        <a href={path} target="_blank" rel="noopener noreferrer" className="publication-link">
            <p className="publication-title"> {title} </p>
            {/* <p className="publication-description"> {description} </p> */}
            {showDescription && <p className="publication-description"> {description} </p>}
        </a>
    </div>
    );
}

export default PublicationItem;