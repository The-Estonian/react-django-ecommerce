import React, { useState } from 'react';
import styles from './Authentication.module.css';
import { Link } from 'react-router-dom';

const Authentication = () => {
  const [loginOrRegister, setLoginOrRegister] = useState(false);
  return (
    <form className={styles.form}>
      {loginOrRegister ? (
        <label>
          <span>First name</span>
          <input type='email' />
        </label>
      ) : (
        ''
      )}
      {loginOrRegister ? (
        <label>
          <span>Last name</span>
          <input type='email' />
        </label>
      ) : (
        ''
      )}
      <label>
        <span>Email</span>
        <input type='email' />
      </label>
      <label>
        <span>Password</span>
        <input type='password' />
      </label>
      <div className={styles['auth-nav']}>
        <button>
          <Link to='/'>Cancel</Link>
        </button>
        <input type='submit' value={loginOrRegister? 'Submit' : "Register"} />
      </div>
      <p
        onClick={() => {
          setLoginOrRegister(!loginOrRegister);
        }}
      >
        {loginOrRegister ? (
          <p>Have an account? Login here!</p>
        ) : (
          <p>Don't have an account? Register here!</p>
        )}
      </p>
    </form>
  );
};

export default Authentication;
