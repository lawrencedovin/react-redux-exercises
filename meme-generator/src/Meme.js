import './Meme.css';

const Meme = ({id, topText, bottomText, imageURL}) => {

    const style = {
        backgroundImage: `url(${imageURL})`
    };

    return (
        <>
            <div key={id} className="Meme" id={id} style={style}>
                <h1 className="Meme__text--top">{topText}</h1>
                <h1 className="Meme__text--bottom">{bottomText}</h1>
            </div>
        </>
    );
}

export default Meme;
