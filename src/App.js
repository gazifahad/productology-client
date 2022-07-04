import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Registration from './Pages/Login/Registration';
import Header from './Pages/Shared/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/register' element={<Registration></Registration>}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
