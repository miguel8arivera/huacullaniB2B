import { UseForm } from '../hooks/UseForm';
import './styles/formStyle.css';

export default function FormProduct() {
  const {
    formData,
    handleInputChange,
    resetForm,
    isValidEmail,
    name,
    email,
    password,
    password_confirmation,
  } = UseForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Form Product</h1>
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          name="name"
          placeholder="name"
          className={`${name.trim().length <= 2 && 'has-error'} `}
        />
        {name.trim().length <= 2 && <span>Este campo es requerido</span>}
        <input
          type="email"
          value={email}
          onChange={handleInputChange}
          name="email"
          placeholder="email"
          className={`${!isValidEmail(email) && 'has-error'} `}
        />
        {!isValidEmail(email) && <span>Email no valido</span>}
        <input
          type="password"
          value={password}
          onChange={handleInputChange}
          name="password"
          placeholder="password"
        />
        {password.trim().length <= 0 && <span>Este campo es requerido</span>}
        {password.trim().length < 6 && password.trim().length > 0 && (
          <span>debe de tener mas de 6 caracteres</span>
        )}
        <input
          type="password"
          value={password_confirmation}
          onChange={handleInputChange}
          name="password_confirmation"
          placeholder="password_confirmation"
        />
        {password_confirmation.trim().length <= 0 && <span>Este campo es requerido</span>}
        {password_confirmation.trim().length > 0 && password_confirmation !== password && (
          <span>el password deben ser iguales</span>
        )}

        <button type="submit">order</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
}
