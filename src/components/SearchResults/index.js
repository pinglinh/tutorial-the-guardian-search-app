import React from "react";
import PropTypes from "prop-types";

const SearchResults = ({ articles = [] }) => (
  <ul>
    {articles.map(({ webUrl, webTitle }) => (
      <li key={webUrl}>
        <a href={webUrl} target="_blank" rel="noopener noreferrer">
          {webTitle}
        </a>
      </li>
    ))}
  </ul>
);

SearchResults.propTypes = {
  articles: PropTypes.array
};

export default SearchResults;
