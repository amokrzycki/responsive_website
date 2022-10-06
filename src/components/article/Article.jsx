import React from "react";
import "./article.css";

const Article = ({ imgURL, date, title }) => {
  return (
    <div className="gpt3--blog-container-article">
      <div className="gpt3--blog-container-article-image">
        <img src={imgURL} alt="blog" />
      </div>
      <div className="gpt3--blog-container-article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
