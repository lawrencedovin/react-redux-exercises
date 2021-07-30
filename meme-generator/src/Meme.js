import './Meme.css';

const Meme = ({id, topText, bottomText, image, handleRemove}) => {

    const removeMeme = (id) => handleRemove(id);

    const style = {
        backgroundImage: `url(${image})`
    };

    return (
        <>
            <div key={id} className="Meme" id={id} style={style}>
                <h1 className="Meme__text--top">{topText}</h1>
                <h1 className="Meme__text--bottom">{bottomText}</h1>
            </div>
            <button onClick={removeMeme}>Remove</button>
        </>
    );
}

export default Meme;
