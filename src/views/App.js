import logo from './logo.svg';
import './App.scss';
// import MyComponent from './Examples/MyComponent';
import ListTodo from './Todos/ListTodo/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * react: 2 components: class components, function components(function, arrow)
 * 
 */
function App() {
  // const App = () =>{}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sim peo to do app
        </p>
        
        {/* <MyComponent></MyComponent> */}
        <ListTodo />

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
  );
}

export default App;
