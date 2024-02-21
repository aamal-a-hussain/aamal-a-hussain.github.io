import React from "react";
import { Link } from "react-router-dom";

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
    return (
    <div className="publication-item">
        <PublicationAuthor authors={authors} />
        <p className="publication-location"> {conference} </p>
        <a href={path} className="publication-link">
            <p className="publication-title"> {title} </p>
            <p className="publication-description"> {description} </p>
        </a>
    </div>
    );
}

export default PublicationItem;