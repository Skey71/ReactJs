import './App.css';
import { Message } from './components/Message';

const messageText = 'My First React App';

function App() {
  return (
    <div className="App">
      <Message text={messageText} />
    </div>
  );
}

export default App;
