import Characters from "./components/Characters";
import Deaths from "./components/Deaths";
import './App.scss';


function App() {
  return (
    <div className="App">
      <div className="Wrapper">
        <Characters />
        <Deaths />
      </div>
    </div>
  );
}

export default App;
