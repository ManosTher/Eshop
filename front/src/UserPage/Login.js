import {React, useState,  } from "react";
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-AlbescentWhite rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
                Email
                </label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-TobaccoBrown text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">
                Password
                </label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-TobaccoBrown text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Password"/>
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
                Login
            </button>
            </form>
        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <Link to="/userRegister" className="text-blue-500">
            Click here to register
          </Link>
        </p>
        </div>
      </div>
    </div>
  );
}

export default Login