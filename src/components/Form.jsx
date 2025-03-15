import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export default function Form() {
  const schema = yup.object().shape({
    name: yup.string().required("El nombre es requerido"),
    surname: yup.string().required("El apellido es requerido"),
    age: yup.number().integer("Debe ser entero").min(18, "Mínimo 18 años").required()
      .typeError("Debe ser un número"),
    phone: yup.string().required("El teléfono es requerido"),
    pass: yup.string().required("Contraseña requerida").min(6, "Minimo 6 caracteres").max(10, "Maximo 10 caracteres"),
    confirmPass: yup.string().oneOf([yup.ref('pass'), null], "Las contraseñas deben coincidir"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  function onSubmit(data) {
    console.log("Datos:", data);
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Nombre...' {...register('name')} />
        <p>{errors.name?.message}</p>

        <input type="text" placeholder='Apellidos...' {...register('surname')} />
        <p>{errors.surname?.message}</p>

        <input type="number" placeholder='Edad...' {...register('age')} />
        <p>{errors.age?.message}</p>

        <input type="text" placeholder='Teléfono...' {...register('phone')} />
        <p>{errors.phone?.message}</p>

        <input type="password" placeholder='Contraseña' {...register('pass')} />
        <p>{errors.pass?.message}</p>

        <input type="password" placeholder='Confirmar contraseña' {...register('confirmPass')} />
        <p>{errors.confirmPass?.message}</p>

        <input type="submit" />
      </form>
    </div>
  );
}
