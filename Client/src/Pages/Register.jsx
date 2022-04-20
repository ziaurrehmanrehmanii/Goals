import { useState, useeffects } from "react";
import { FaUser } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
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
  const { name, email, password, password2 } = formData;
  return (
    <>
      <secton className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Pleas Create an account</p>
      </secton>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Enter Your Name'
              value={name}
              className='from-control'
              onChange={onChange}
            />
          </div>
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
            <input
              type='password'
              id='password2'
              name='password2'
              placeholder='Confirm Your Password'
              value={password2}
              className='from-control'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Register
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
