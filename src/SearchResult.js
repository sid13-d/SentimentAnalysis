import React from 'react';

class SearchResults extends React.Component {
  render() {
    const { results } = this.props;
    console.log(results.articles);
    const finalResult = results.articles;
    console.log(typeof(finalResult))
    return (
      <div>
        <h2>Search Results</h2>
        <ul>
        {/* {finalResult.map((result, index) => (
        <div key={index}>
          <h2>{result.title}</h2>
          <p>{result.summary}</p>
          <a href={result.link}>Read more</a>
        </div>
      ))} */}
        </ul>
      </div>
    );
  }
}

export default SearchResults;