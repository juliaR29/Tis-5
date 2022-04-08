import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Panda from './Components/Panda';
import Gorilla from './Components/Gorilla';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';


function App() {

    return (
        <div className='App'>
            <Navigation/>
            <Routes>
                <Route path='/panda' component={Panda} />
                <Route path='/gorilla' component={Gorilla} />
                <Route exact path='/' component={Home} />
            </Routes>
        </div>
    );
}
export default App;