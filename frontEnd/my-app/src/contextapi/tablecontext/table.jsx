import { useContext } from 'react';
import { useEffect } from 'react';
import { createContext, useState } from 'react';
import { AuthContext } from '../Authentication/Authentication';

export const tablecontext = createContext();

export default function Tablecontextprovider({ children }) {
  const [state, setstate] = useState([]);
  const { email } = useContext(AuthContext);

  useEffect(() => {
    getdata();
  }, []);
  async function getdata() {
    console.log(email);
    try {
      const res = await fetch(
        `https://test-service-app.onrender.com/todo/${email}`
      );
      const data = await res.json();

      setstate(data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <tablecontext.Provider value={{ state, getdata }}>
      {children}
    </tablecontext.Provider>
  );
}
