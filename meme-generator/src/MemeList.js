import React, {useState} from 'react';
import Meme from './Meme';
import MemeForm from './MemeForm';
import {v4 as uuid} from 'uuid';

const MemeList = () => {
    const INITIAL_STATE = [];
    const [memes, setMemes] = useState(INITIAL_STATE);

    const addMeme = (newMeme) => {
        setMemes(memes => [...memes, {id: uuid(), ...newMeme}])
    }

    const remove = id => {
        setMemes(memes.filter(meme => meme.id  !== id));
    };

    const memeComponents = memes.map(meme => (
        <Meme 
            key={meme.id}
            id={meme.id} 
            topText={meme.topText} 
            bottomText={meme.bottomText} 
            image={meme.image}
            handleRemove={remove}
        />
    ));

    return (
        <>
            <MemeForm addMeme={addMeme}/>
            {memeComponents}
        </>
    );
}

export default MemeList;