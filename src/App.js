import './App.css';
import SlateWrapper from './pages/SlateWrapper/SlateWrapper';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return ( <Provider store = {store}>
      <div className="App">
        <SlateWrapper />
      </div>
    </Provider>
  );
}

export default App;
