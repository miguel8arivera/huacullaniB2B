import { useState } from 'react';
import { FormProductRegister } from '../helpers/type';
import './styles/formStyle.css';

export default function FormProduct() {
  const [registerData, setRegisterData] = useState<FormProductRegister>({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const { name, email, password, password_confirmation } = registerData;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(registerData);
  };

  return (
    <div>
      <h1>Form Product</h1>
      <form onSubmit={handleSubmit} noValidate>
        <input type="text" value={name} onChange={handleInputChange} name="name" />
        <input type="email" value={email} onChange={handleInputChange} name="email" />
        <input type="password" value={password} onChange={handleInputChange} name="password" />
        <input
          type="password"
          value={password_confirmation}
          onChange={handleInputChange}
          name="password_confirmation"
        />
        <button type="submit">order</button>
      </form>
    </div>
  );
}
