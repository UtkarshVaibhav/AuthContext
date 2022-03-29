import { useContext } from 'react';
import './App.css';
import { Form } from './components/Form';
import { NavBar } from './components/NavBar';
import { Status } from './components/Status';
import { AuthContex } from './contexts/AuthContext';

function App() {
  const {isAuth}=useContext(AuthContex)
  return (
    <div className="App">
      {isAuth&&<NavBar/>}
      {!isAuth&&<Form/>}
      <Status/>
    </div>
  );
}

export default App;
