import React, { useState, useEffect } from 'react';
import './App.css';

import Form from './components/Form/Form';
import WebPage from './components/WebPage/WebPage';
import AuthenticationLoader from './components/Loaders/AuthenticationLoader';

import { auth, db, signOut, getDoc, setDoc, doc } from './firebase-config';
import SplashScreen from './components/Splash/SplashScreen';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser && !isRegistered) {
        const userRef = doc(db, 'users', currentUser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setUser(userSnap.data());
        } else {
          await setDoc(userRef, {
            uid: currentUser.uid,
            email: currentUser.email,
            displayName: currentUser.displayName,
          });
          setUser({
            uid: currentUser.uid,
            email: currentUser.email,
            displayName: currentUser.displayName,
          });
        }
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
      setAuthChecked(true);
    });

    return () => unsubscribe();
  }, [isRegistered]);

  const handleLogout = async () => {
    await signOut(auth);
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div className='App'>
      {showSplash ? (
        <SplashScreen hide={() => setShowSplash(false)} />
      ) : (
        <>
          {!authChecked ? (
            <AuthenticationLoader />
          ) : isLoggedIn && !isRegistered ? (
            <WebPage user={user} onLogout={handleLogout} />
          ) : (
            <Form
              onLogin={() => setIsLoggedIn(true)}
              onRegisterComplete={() => setIsRegistered(true)}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
