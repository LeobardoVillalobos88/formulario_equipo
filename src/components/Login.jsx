import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState("");

  const schema = yup.object().shape({
    phone: yup.string().required("El teléfono es obligatorio"),
    password: yup.string().required("La contraseña es obligatoria"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  function onSubmit(data) {
    const user = location.state;

    if (user && user.phone === data.phone && user.pass === data.password) {
      navigate("/dashboard", { state: user });
    } else {
      setErrorMessage("Teléfono o contraseña incorrectos");
    }
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Teléfono...' {...register('phone')} />
        <p>{errors.phone?.message}</p>

        <input type="password" placeholder='Contraseña' {...register('password')} />
        <p>{errors.password?.message}</p>

        {errorMessage && <p className="error">{errorMessage}</p>}

        <input type="submit" value="Iniciar Sesión" />
      </form>
    </div>
  );
}
