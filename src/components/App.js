import { useState, useEffect } from 'react';
/* import adalabers from '../data/adalabers.json'; */
import fetchAdalabers from '../services/api';
import '../styles/App.css';

function App() {
  //State
  const [data, setData] = useState([]);
  const [newAdalaber, setNewAdalaber] = useState({
    name: '',
    counselor: '',
    speciality: '',
  });
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('');

  //Effect
  useEffect(() => {
    fetchAdalabers().then((data) => {
      setData(data.results);
    });
  }, []);

  //Events
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleNewAdalaber = (event) => {
    setNewAdalaber({ ...newAdalaber, [event.target.id]: event.target.value });
  };
  const handleClick = (ev) => {
    ev.preventDefault();
    setData([...data, newAdalaber]);
    setNewAdalaber({
      name: '',
      counselor: '',
      speciality: '',
    });
  };
  const handleSearch = (ev) => {
    setSearch(ev.target.value);
  };
  const handleSelect = (ev) => {
    setSelect(ev.target.value);
  };
  //Render
  const renderData = data
    .filter((adalaber) =>
      adalaber.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((adalaber) => adalaber.counselor.toLowerCase().includes(select))

    .map((eachAdalaber) => {
      return (
        <tr key={eachAdalaber.id}>
          <td>{eachAdalaber.name}</td>
          <td>{eachAdalaber.counselor}</td>
          <td>{eachAdalaber.speciality}</td>
        </tr>
      );
    });
  return (
    <div>
      <h1>Adalabers</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" name="name" onInput={handleSearch} />
        <label htmlFor="counselor">Escoge una tutora</label>
        <select
          name="counselor"
          id="counselor"
          onChange={handleSelect}
          value={select}
        >
          <option value="" disabled>
            Escoge una opción
          </option>
          <option value="yanelis">Yanelis</option>
          <option value="dayana">Dayana</option>
          <option value="iván">Iván</option>
        </select>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th className="table-header">Nombre</th>
            <th className="table-header">Tutora</th>
            <th className="table-header">Especialidad</th>
          </tr>
        </thead>
        <tbody>{renderData}</tbody>
      </table>
      <h2>Añadir una Adalaber</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          onInput={handleNewAdalaber}
          value={newAdalaber.name}
        />
        <label htmlFor="counselor">Tutora:</label>
        <input
          type="text"
          id="counselor"
          name="counselor"
          onInput={handleNewAdalaber}
          value={newAdalaber.counselor}
        />
        <label htmlFor="speciality">Especialidad:</label>
        <input
          type="text"
          id="speciality"
          name="speciality"
          onInput={handleNewAdalaber}
          value={newAdalaber.speciality}
        />
        <input
          type="submit"
          value="Añadir una nueva adalaber"
          onClick={handleClick}
        />
      </form>
    </div>
  );
}

export default App;
