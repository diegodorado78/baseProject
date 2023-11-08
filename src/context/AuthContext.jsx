/*Dependencies*/
import { createContext, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
//Definicion del contexto
 const AuthContext = createContext();
 const useAuthContext = () => {
  return useContext(AuthContext);
};
//Definicion del componente provider
 const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({name:'user'});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  // Lógica para iniciar sesión
  const login = (userData) => {
    localStorage.setItem("login", JSON.stringify(userData));
    setUser(userData);
  };
  // Lógica para cerrar sesión
  const logout = () => {
    localStorage.removeItem("login");
    setUser(null);
  };
  useEffect(() => {
    if (localStorage.getItem("login")) {
      setUser(JSON.parse(localStorage.getItem("login")));
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isMenuOpen,
        setIsMenuOpen,
        notifications,
        setNotifications,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
//Exportamos el contexto, el provider y el hook

 export { AuthContext, useAuthContext, AuthProvider };
AuthProvider.propTypes = {
  children: PropTypes.node,
};
