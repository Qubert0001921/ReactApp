import PropTypes from 'prop-types';

export default function Button({ text, color, onClick }) {
    return (
        <button className='btn' style={{ backgroundColor : color }} onClick={onClick}>{text}</button>
    )
}

Button.defaultProps = {
    text: "button",
    color: "blue"
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}