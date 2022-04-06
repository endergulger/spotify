import { useState, useEffect } from 'react';
import Axios from 'axios';
import Card from '@mui/material/Card';

function SearchFilter() {
  //usecontext kullan
  const [filterText, setFilterText] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get('http://zmdp.cloud/iseAlim/spotify.json')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  const filtered = data.filter((item) => {
    return Object.keys(item).some((key) => item[key].toLowerCase().includes(filterText.toLocaleLowerCase()));
  });

  return (
    <div>
      <input placeholder="Ara" value={filterText} onChange={(e) => setFilterText(e.target.value)} />

      {filtered.map((data, i) => (
        <Card key={i}>
          <div>
            {data.name} {data.description}
          </div>
        </Card>
      ))}
    </div>
  );
}

export default SearchFilter;
