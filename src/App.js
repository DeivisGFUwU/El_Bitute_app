
import './App.css';
import React from 'react';
//import InterfazPedido from './components/interfazPedido';
import Login from './components/Login';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import RegistroEmp from './components/registroEmp';
import Opciones from './components/opciones';
import MantenimientoClientes from './components/MantenimientoCliente'; // Importa el componente

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/opciones" element={<Opciones />} />
        <Route path="/registro" element={<RegistroEmp />} />
        <Route path="/mantenimiento-clientes" element={<MantenimientoClientes />} /> {/* Nueva ruta */}
      </Routes>

    </Router>
  );
}

export default App;
