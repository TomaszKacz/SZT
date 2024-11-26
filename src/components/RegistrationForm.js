import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Resetuj błędy dla bieżącego pola
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};

    // Walidacja nazwy użytkownika
    if (!formData.username.trim()) {
      newErrors.username = 'Nazwa użytkownika jest wymagana.';
    }

    // Walidacja emaila
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Adres email jest wymagany.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Podaj poprawny adres email.';
    }

    // Walidacja hasła
    if (!formData.password) {
      newErrors.password = 'Hasło jest wymagane.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Hasło musi mieć co najmniej 6 znaków.';
    }

    setErrors(newErrors);

    // Zwraca `true`, jeśli nie ma błędów
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Rejestracja udana:', formData);
      // Tutaj dodaj logikę rejestracji użytkownika
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Rejestracja</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="username"
              placeholder="Nazwa użytkownika"
              value={formData.username}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none ${
                errors.username ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Adres email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Hasło"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
          >
            Zarejestruj
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Masz już konto? <Link to="/login" className="text-blue-500 hover:underline">Zaloguj się!</Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
