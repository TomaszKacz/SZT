import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Logowanie</h1>
        <form className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Adres email"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Hasło"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
          >
            Zaloguj
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Nie masz konta? <Link to="/register" className="text-blue-500 hover:underline">Zarejestruj się!</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
