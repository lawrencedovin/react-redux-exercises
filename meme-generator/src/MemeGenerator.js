import MemeForm from './MemeForm';
import Meme from './Meme';
import {useDispatch, useSelector} from 'react-redux';

const MemeGenerator = () => {
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

  return(
      <>
        <MemeForm addMeme={addMeme} />
        {memeComponents}
      </>
  );
  

}

export default MemeGenerator;