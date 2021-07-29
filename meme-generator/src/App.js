import './App.css';
import Meme from './Meme';

function App() {
  return (
    <div className="App">
      <Meme id="123" topText="test123" bottomText="helo" imageURL="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" />
    </div>
  );
}

export default App;
