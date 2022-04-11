import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function SearchFilter() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const [q, setQ] = useState('');
  const [searchParam] = useState(['capital', 'name']);

  useEffect(() => {
    Axios.get('http://zmdp.cloud/iseAlim/spotify.json')
      .then((res) => {
        setItems(res.items);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="wrapper">
      <div className="search-wrapper">
        <label htmlFor="search-form">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search for..."
            value={q}
            /*
                // set the value of our useState q
                //  anytime the user types in the search box
                */
            onChange={(e) => setQ(e.target.value)}
          />
          <span className="sr-only">Search countries here</span>
        </label>
      </div>
      <ul className="card-grid">
        {items.map((item) => (
          <li>
            <article className="card" key={item.callingCodes}>
              <div className="card-image">
                <img src={item.flag} alt={item.name} />
              </div>
              <div className="card-content">
                <h2 className="card-name">{item.name}</h2>
                <ol className="card-list">
                  <li>
                    population: <span>{item.population}</span>
                  </li>
                  <li>
                    Region: <span>{item.region}</span>
                  </li>
                  <li>
                    Capital: <span>{item.capital}</span>
                  </li>
                </ol>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
