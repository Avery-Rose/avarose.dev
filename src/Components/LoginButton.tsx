import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import * as React from 'react';

import { FiLogIn } from 'react-icons/fi';

import Button from '@mui/material/Button';

interface LoginButtonProps {
  action?: () => void;
  props?: any;
}

export const LoginButton = ({ action, ...props }: LoginButtonProps) => {
  const handleGoogleLogin = () => {
    signInWithPopup(getAuth(), new GoogleAuthProvider()).then(() => {
      if (action) action();
    });
  };

  return (
    <Button onClick={handleGoogleLogin} {...props}>
      <FiLogIn />
      Login
    </Button>
  );
};
