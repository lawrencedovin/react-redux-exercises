import './App.css';
// import MemeList from './MemeList';
import MemeForm from './MemeForm';
import Meme from './Meme';
import {useDispatch, useSelector} from 'react-redux';

function App() {
  const memes = useSelector(state => state.memes);
  const dispatch = useDispatch();

  const addMeme = (newMeme) => {
    dispatch({type: 'ADD_MEME', meme: newMeme});
  }

  const deleteMeme = (id) => {
    dispatch({type: 'REMOVE_MEME', id});
  }


  const memeComponents = memes.map(meme => (
    <Meme 
        key={meme.id}
        id={meme.id} 
        topText={meme.topText} 
        bottomText={meme.bottomText} 
        image={meme.image}
        handleRemove={() => deleteMeme(meme.id)}
    />
));

  return (
    <div className="App">
      <MemeForm addMeme={addMeme} />
      {memeComponents}
    </div>
  );
}

export default App;
