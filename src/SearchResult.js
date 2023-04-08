import React from 'react';
import Card from './Card';

function SearchResults(props) {
  const { results } = props;
  console.log(results.articles);
  const finalResult = results.articles;
  console.log(typeof(finalResult));

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {finalResult.map((result, index) => (
          // <div key={index}>
          //   <h2>{result.title}</h2>
          //   <p>{result.summary}</p>
          //   <a href={result.link}>Read more</a>
          // </div>
          <Card key={index} item={result} />
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;