import React, { useState, useEffect } from 'react';
// import Axios from 'axios';
import Card from '@mui/material/Card';

export default function SearchFilter() {
  // //usecontext kullan
  const [data, setData] = useState([]);
  const [searchApiData, setSearchApiData] = useState([]);
  const [filterVal, setFilterVal] = useState('');
  useEffect(() => {
    const fetchData = () => {
      fetch('http://zmdp.cloud/iseAlim/spotify.json')
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setSearchApiData(json);
        });
    };
    fetchData();
  }, []);

  // getValueInput (event) {
  //   const inputValue = event.target.value;
  //   this.setState({ input: inputValue });
  //   this.filterNames(inputValue);
  // }

  // filterNames (inputValue) {
  //   const { data } = this.state;
  //   this.setState({
  //     filtered: data.filter(item =>
  //        item.name.includes(inputValue))
  //   });
  // }

  // const handleFilter = (e) => {
  //   if (e.target.value === '') {
  //     setData(searchApiData);
  //   } else {
  //     const filterResult = searchApiData.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase()));

  //     setData(filterResult);
  //   }
  //   setFilterVal(e.target.value);
  // };
  return (
    <>
      <input className="searchinput" placeholder="Ara" onChange={this.getValueInput} />
      {/* <input className="searchinput" placeholder="Ara" value={filterVal} onChange={console.log('asdsad')} onInput={(e) => handleFilter(e.target.value)} /> */}

      <div>
        {/* <Card>
          {' '}
          {Object.keys(data).map((item) => {
            return (
              <div>
                <Card>{item.name}</Card>
                <Card>{item.description}</Card>;
              </div>
            );
          })}
        </Card> */}
      </div>
    </>
  );

  // const [filterText, setFilterText] = useState('');
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   Axios.get('http://zmdp.cloud/iseAlim/spotify.json')
  //     .then((res) => {
  //       setData(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // console.log(data);

  // const filtered = data.filter((item) => {
  //   return Object.keys(item).some((key) => item[key].toLowerCase().includes(filterText.toLocaleLowerCase()));
  // });

  // return (
  //   <div>
  //     <input placeholder="Ara" value={filterText} onChange={(e) => setFilterText(e.target.value)} />

  //     {filtered.map((data, i) => (
  //       <Card key={i}>
  //         <div>
  //           {data.name} {data.description}
  //         </div>
  //       </Card>
  //     ))}
  //   </div>
  // );
}
