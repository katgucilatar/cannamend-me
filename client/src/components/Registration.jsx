// SIGN UP FORM
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';

import { REGISTER_USER } from '../utils/mutations';

import { useCurrentUserContext } from '../context/CurrentUser';

export default function Registration() {
  const { loginUser } = useCurrentUserContext();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    firstName: '',
    email: '',
    password: '',
  });

  const [register, { error }] = useMutation(REGISTER_USER);

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      let variables = {
        firstName: formState.firstName,
        email: formState.email,
        password: formState.password,
      };

      if (formState.userDefaultNews === 'Select a country') {
        variables.selectedCountry = formState.selectedCountry;
      }

      const mutationResponse = await register({
        variables: variables,
      });

      console.log('Mutation response:', mutationResponse);
      const { token, currentUser } = mutationResponse.data.register;
      loginUser(currentUser, token);
      navigate('/dashboard');
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <>
      {error ? (
        <div className="mb-4">
          <p className="error-text">The provided credentials are incorrect</p>
        </div>
      ) : null}
      <form
        id="registration-form"
        onSubmit={handleFormSubmit}
        className="bg-newsGray p-6 rounded mx-4 h-5/6 my-5"
      >
        <h2 className="text-2xl text-center mb-5 font-bold mt-4">Register</h2>

        <label htmlFor="firstName" className="block mb-2">
          First name:
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formState.firstName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </label>
        <label htmlFor="email" className="block mb-2">
          Email:
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </label>
        <label htmlFor="password" className="block mb-2">
          Password:
          <input
            placeholder="******"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </label>

        <button
          type="submit"
          className="bg-newsBlue text-white p-2 rounded hover:bg-blue-600 mt-4 w-full mb-5"
        >
          Sign Up
        </button>
        <p className="mt-4">
          Already have an account? Login{' '}
          <Link to="/login" className="text-blue-600">
            here
          </Link>
        </p>
      </form>
    </>
  );
}