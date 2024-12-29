import React, { useState } from 'react';
import classes from './Form.module.css';
import {
  auth,
  provider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  db,
  setDoc,
  doc,
} from '../../firebase-config';

function Form({ onLogin, onRegisterComplete }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      });

      console.log('Google Sign-In Successful:', user);
      onLogin();
    } catch (error) {
      console.error('Google Sign-In Error:', error.message);
      alert('Google Sign-In failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleEmailPasswordLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLogin();
    } catch (error) {
      console.error('Login Error:', error.message);
      alert('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleEmailPasswordRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      setLoading(false);
      return;
    }

    if (!email || !password || !name) {
      alert('Please fill in all fields!');
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        displayName: name,
      });

      console.log('Registered:', user);
      alert('Registration successful! Please log in.');
      setIsRegistering(false);
      onRegisterComplete();
    } catch (error) {
      console.error('Registration Error:', error.message);
      alert('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.formContainer}>
      <h1>PresentationStudio</h1>
      {loading ? (
        <div className={classes.loader}>Loading...</div>
      ) : (
        <>
          <h2>{isRegistering ? 'Register' : 'Login'}</h2>
          <form
            onSubmit={
              isRegistering
                ? handleEmailPasswordRegister
                : handleEmailPasswordLogin
            }
            className={classes.form}
          >
            {isRegistering && (
              <input
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            )}
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {isRegistering && (
              <input
                type='password'
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            )}
            <button type='submit' className={classes.actionButton}>
              {isRegistering ? 'Register' : 'Login'}
            </button>
            {!isRegistering && (
              <button
                type='button'
                onClick={handleGoogleSignIn}
                className={classes.googleButton}
              >
                Sign in with Google
              </button>
            )}
            <button
              type='button'
              onClick={() => setIsRegistering(!isRegistering)}
              className={classes.toggleButton}
            >
              {isRegistering
                ? 'Already have an account? Login'
                : "Don't have an account? Register"}
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default Form;
