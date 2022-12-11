import { useState, useEffect } from 'react';

import fetchAdalabers from '../services/api';
import '../styles/App.css';

function App() {
  const [data, setData] = useState([]);
  const [newAdalaber, setNewAdalaber] = useState({
    name: '',
    counselor: '',
    speciality: '',
  });
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('');

  useEffect(() => {
    fetchAdalabers().then((data) => {
      setData(data.results);
    });
  }, []);

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

  const renderData = data
    .filter((adalaber) =>
      adalaber.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((adalaber) => adalaber.counselor.toLowerCase().includes(select))

    .map((eachAdalaber) => {
      return (
        <tr key={eachAdalaber.id}>
          <td className="table-cell">{eachAdalaber.name}</td>
          <td className="table-cell">{eachAdalaber.counselor}</td>
          <td className="table-cell">{eachAdalaber.speciality}</td>
        </tr>
      );
    });
  return (
    <div>
      <h1>Adalabers</h1>
      <form action="" className="forms" onSubmit={handleSubmit}>
        <fieldset className="formfield">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" onInput={handleSearch} />
        </fieldset>
        <fieldset className="formfield">
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
        </fieldset>
      </form>

      <div className="tablecontainer">
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
      </div>

      <form action="" className="forms" onSubmit={handleSubmit}>
        <h2>Añadir una Adalaber</h2>
        <fieldset className="formfield2">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            onInput={handleNewAdalaber}
            value={newAdalaber.name}
          />
        </fieldset>
        <fieldset className="formfield2">
          <label htmlFor="counselor">Tutora:</label>
          <input
            type="text"
            id="counselor"
            name="counselor"
            onInput={handleNewAdalaber}
            value={newAdalaber.counselor}
          />
        </fieldset>
        <fieldset className="formfield2">
          <label htmlFor="speciality">Especialidad:</label>
          <input
            type="text"
            id="speciality"
            name="speciality"
            onInput={handleNewAdalaber}
            value={newAdalaber.speciality}
          />
        </fieldset>
        <input
          type="submit"
          value="Añadir una nueva adalaber"
          className="addbutton"
          onClick={handleClick}
        />
      </form>
    </div>
  );
}

export default App;
