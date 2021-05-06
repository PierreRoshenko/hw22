import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AuthorizationForm } from './components/AuthorizationForm/AutorizationForm';


function App() {
  return (
    <div className="App">
     <h1>Hello</h1>
      <BrowserRouter>
        <AuthorizationForm/>
      </BrowserRouter>
    </div>
  );
}

export default App;
