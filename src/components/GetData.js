import { useEffect, useState } from 'react';
import Axios from 'axios';

function GetData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get('http://zmdp.cloud/iseAlim/spotify.json')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const arr = data.allPlaylists?.map((playlist, index) => {
    return (
      <tr>
        <td>{playlist.name}</td>
      </tr>
    );
  });

  return (
    <div className="datacontainer">
      <table className="datatable">{arr}</table>
    </div>
  );
}

export default GetData;
