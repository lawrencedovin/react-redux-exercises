import './Meme.css';
import PropTypes from "prop-types";

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

Meme.propTypes = {
    topText: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    bottomText: PropTypes.string.isRequired
};

export default Meme;
