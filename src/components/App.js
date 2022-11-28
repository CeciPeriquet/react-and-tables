import { useState } from 'react';
import adalabers from '../data/adalabers.json';
import '../styles/App.css';

function App() {
  //State
  const [data, setData] = useState(adalabers.results);

  //Events

  //Render
  const renderData = data.map((eachAdalaber) => {
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
      <form action="">
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="counselor">Escoge una tutora</label>
        <select name="counselor" id="counselor">
          <option value="" disabled selected hidden>
            Escoge una opción
          </option>
          <option value="yanelis">Yanelis</option>
          <option value="dayana">Dayana</option>
          <option value="ivan">Iván</option>
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
      <form action="">
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="counselor">Tutora:</label>
        <input type="text" id="counselor" name="counselor" />
        <label htmlFor="speciality">Especialidad:</label>
        <input type="text" id="speciality" name="speciality" />
        <input type="submit" value="Añadir una nueva adalaber" />
      </form>
    </div>
  );
}

export default App;
