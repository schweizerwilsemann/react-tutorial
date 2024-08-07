import logo from './logo.svg';
import './App.scss';
import MyComponent from './Examples/MyComponent';
import ListTodo from './Todos/ListTodo/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Navigation/Nav.js';
import Home from './Examples/Home.js';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom'
import AddTodo from './Todos/ListTodo/AddTodo.js';

/**
 * react: 2 components: class components, function components(function, arrow)
 * 
 */
function App() {
  // const App = () =>{}
  
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        {<Nav />}
        <img src={logo} className="App-logo" alt="logo" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Todo" element={<ListTodo />} />
          <Route path="/About" element={<MyComponent />} />
        </Routes>


      </header>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
    </BrowserRouter>
  );
}

export default App;
