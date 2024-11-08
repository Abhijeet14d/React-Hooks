import { createContext, useState } from 'react';

export const LoginContext = createContext();

const obj = {
    name: 'Siddharth',
    age: 24,
    city: 'Bangalore'
}

const LoginProvider = ({ children }) => {
    const [userDetails, setDetails] = useState(obj);
  return (
    <LoginContext.Provider value={userDetails}>
        {children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;