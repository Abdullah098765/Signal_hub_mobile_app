// hooks/useAuth.ts

import { useContext, useState } from 'react';
import { AppContext, AppProvider } from '../context/AppContext';

export const useAuth = () => {
      const { isLoggedIn, user, setUser, } = useContext(AppContext);



      const login = async (mathod) => {
            console.log(mathod);


      };


      const logout = () => {
            // Implement logout logic here, e.g., clear user state, remove tokens, etc.
            setUser(null);
      };

      return {
            user,
            setUser,
            login,
            logout,
      };
};
