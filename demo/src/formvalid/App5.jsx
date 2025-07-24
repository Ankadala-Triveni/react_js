import { useState } from "react";
import Registerpage from "./Registerpage.jsx";
import Loginpage from "./Loginpage.jsx";
import Dashboard from "./Dashboard.jsx";
// import './styles.css';

function App5(){
  const [currentView,setCurrentView] = useState('login');
  const [currentUser,setCurrentUser] = useState(null);

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    setCurrentView('dashboard');
  };

  const handleRegisterSuccess = () =>{
    alert('Registration Successful');
    setCurrentView('login');
  };

  return(
    <div>
      {currentView === 'login' && (
        <Loginpage
          onRegisterClick={()=>setCurrentView('register')}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {currentView === 'register' && (
        <Registerpage
          onRegisterSuccess = {handleRegisterSuccess}
          onLoginClick = {() => setCurrentView('login')}
        />
      )}

      {currentView === 'dashboard' && (
        <Dashboard user={CurrentUser} onLogout={()=>{
          setCurrentUser(null);
          setCurrentView('login');
        }}
        />
      )}
    </div>
  );
}
export default App5;