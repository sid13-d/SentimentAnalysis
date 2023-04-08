import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResult';
import { saveAs } from 'file-saver';

const Home = () => {
  const [results, setResults] = useState([]);

  const handleSearch = async (searchTerm) => {
    const newsResults = await fetch(`https://api.newscatcherapi.com/v2/search?q=${searchTerm} AND shares&lang=en&countries=US,CA`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'bdR11MMwfZXVljNr11ALN4tShSK7KLBQy7ia8_jwVzI'
      }
    }).then(response => response.json());

    setResults(newsResults);

    const data = await newsResults;
    const jsonData =   JSON.stringify(data);
    var blob = new Blob(["[",jsonData,"]"], { type: "application/json" });
    saveAs(blob, "news.json");
  };

  

  return (
        <div>
          <SearchBar onSearch={handleSearch} />
          <SearchResults results={results} />
        </div>
  );
};

export default Home;