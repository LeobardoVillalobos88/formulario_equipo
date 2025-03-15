import React from 'react';
import { useForm } from 'react-hook-form';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  function onSubmit(data) {
    console.log("Inicio de sesión:", data);
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Teléfono...' {...register('phone', { required: "El teléfono es obligatorio" })} />
        <p>{errors.phone?.message}</p>

        <input type="password" placeholder='Contraseña' {...register('password', { required: "La contraseña es obligatoria" })} />
        <p>{errors.password?.message}</p>

        <input type="submit" value="Iniciar Sesión" />
      </form>
    </div>
  );
}