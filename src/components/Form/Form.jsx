/* eslint-disable no-unused-vars */
import style from './Form.module.css';
import { useForm } from 'react-hook-form';
import { formPost } from '../../util/mock';
import { useState } from 'react';

export const Form = () => {
  const [responce, setResponce] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    formPost(data).then((res) => {
      console.log('res: ', res);
      if (res.status === 201) {
        setResponce(true);
        reset(); // сброс данных формы
      } else {
        alert(res.message);
      }
    });
  };

  return (
    <div className={style.form__content}>
      {!responce ? (
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <h2>Заполните заявку на обратный звонок</h2>

          <label htmlFor='lastname'>
            Введите Фамилию{' '}
            {errors.lastname?.type === 'required' && (
              <p role='alert'>Фамилия не должна быть пустой</p>
            )}
          </label>
          <input
            className={style.form__input}
            type='text'
            name='lastname'
            id='lastname'
            placeholder='Фамилия'
            {...register('lastname', { required: true })}
            aria-invalid={errors.lastname ? 'true' : 'false'}
          />

          <label htmlFor='firstname'>
            Введите имя
            {errors.firstname?.type === 'required' && (
              <p role='alert'>Имя не должна быть пустым</p>
            )}
          </label>
          <input
            className={style.form__input}
            type='text'
            name='firstname'
            id='firstname'
            placeholder='Имя'
            {...register('firstname', { required: true })}
            aria-invalid={errors.firstname ? 'true' : 'false'}
          />

          <label htmlFor='patronymic'>Введите Отчество</label>
          <input
            className={style.form__input}
            type='text'
            name='patronymic'
            id='patronymic'
            placeholder='Отчество'
            {...register('patronymic')}
          />

          <label htmlFor='phone'>
            Введите номер телефона
            {errors.phone?.type === 'required' && (
              <p role='alert'>Номер не должен быть пустым</p>
            )}
            {errors.phone?.type === 'pattern' && (
              <p role='alert'>Неверный номер</p>
            )}
          </label>
          <input
            className={style.form__input}
            type='tel'
            name='phone'
            id='phone'
            placeholder='телефон'
            {...register('phone', {
              required: true,
              pattern: /^((\+7|7|8)+([0-9]){10})$/,
            })}
            aria-invalid={errors.phone ? 'true' : 'false'}
          />

          <label htmlFor='email'>
            Введите email
            {errors.email?.type === 'required' && (
              <p role='alert'>email не должен быть пустым</p>
            )}
            {errors.email?.type === 'pattern' && (
              <p role='alert'>Неверный email</p>
            )}
          </label>
          <input
            className={style.form__input}
            type='email'
            name='email'
            id='email'
            placeholder='email'
            {...register('email', {
              required: true,
              pattern: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
            })}
            aria-invalid={errors.email ? 'true' : 'false'}
          />

          <button className={style.btn} type='submit'>
            Отправить
          </button>
        </form>
      ) : (
          <div className={style.form__content}>
            <h2>Заявка отправленна</h2>
          </div>
      )}
    </div>
  );
};
