import React, { useState } from "react";
import {v4 as uuid} from 'uuid';
import MemeInput from "./MemeInput";

const MemeForm = ({addMeme}) => {
    const INITIAL_STATE = {
        topText: '',
        bottomText: '',
        image: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = (e) => {
        e.preventDefault();
        addMeme({...formData, id: uuid()});
        setFormData(INITIAL_STATE);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({...formData, [name]: value}));
    }

    return (
        <>
            <h1>Make a Meme!</h1>
            <form onSubmit={handleSubmit}>
                <MemeInput name="topText" value={formData.topText} type='text' handleChange={handleChange}/>
                <MemeInput name="bottomText" value={formData.bottomText} type='text' handleChange={handleChange}/>
                <MemeInput name="image" value={formData.image} type='text' handleChange={handleChange}/>
                <button type="submit">Generate MEME!</button>
            </form>
        </>
    );
}

export default MemeForm;