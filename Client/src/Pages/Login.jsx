import { useState, useeffects } from "react";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const { email, password } = formData;
  return (
    <>
      <secton className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Pleas Login</p>
      </secton>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Enter Your Email'
              value={email}
              className='from-control'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Enter Your Password'
              value={password}
              className='from-control'
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
