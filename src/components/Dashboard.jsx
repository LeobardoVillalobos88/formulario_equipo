import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state; 

  if (!user) {
    return (
      <div className='container'>
        <h2>No hay datos registrados</h2>
        <button onClick={() => navigate("/")}>Volver al registro</button>
      </div>
    );
  }

  return (
    <div className='container'>
      <h2>Bienvenido, {user.name}!</h2>
      <p><strong>Apellidos:</strong> {user.surname}</p>
      <p><strong>Edad:</strong> {user.age}</p>
      <p><strong>Teléfono:</strong> {user.phone}</p>
      <button onClick={() => navigate("/")}>Cerrar Sesión</button>
    </div>
  );
}
