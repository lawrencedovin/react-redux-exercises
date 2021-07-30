import './Meme.css';

const Meme = ({id, topText, bottomText, image, handleRemove}) => {

    const style = {
        backgroundImage: `url(${image})`
    };

    const remove = () => handleRemove(id);

    return (
        <>
            <div key={id} className="Meme" id={id} style={style}>
                <h1 className="Meme__text--top">{topText}</h1>
                <h1 className="Meme__text--bottom">{bottomText}</h1>
            </div>
            <button onClick={remove}>Remove</button>
        </>
    );
}

export default Meme;
