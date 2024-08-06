import logo from './logo.svg';
import './App.scss';
import MyComponent from './Examples/MyComponent';


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
          fvck the whole universe
        </p>
        
        <MyComponent></MyComponent>

      </header>
    </div>
  );
}

export default App;
