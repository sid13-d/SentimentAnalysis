import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResult';
import ChartSection from './ChartSection';
import { saveAs } from 'file-saver';

const Home = () => {
  const [results, setResults] = useState([]);
  const [activeTab, setActiveTab] = useState('charts');

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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <nav>
        <ul>
          <li className={activeTab === 'charts' ? 'active' : ''} onClick={() => handleTabClick('charts')}>Charts</li>
          <li className={activeTab === 'results' ? 'active' : ''} onClick={() => handleTabClick('results')}>Results</li>
        </ul>
      </nav>
      {activeTab === 'charts' && <ChartSection />}
      {activeTab === 'results' && (
        <div>
          <SearchBar onSearch={handleSearch} />
          <SearchResults results={results} />
        </div>
      )}
    </div>
  );
};

export default Home;