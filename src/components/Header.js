import PropTypes from 'prop-types';
import Button from './Button';

export default function Header({ title, onAdd, showAdd }) {
    const onClick = () => {
        console.log("Helgrergergergelo")
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text={showAdd ? "Cancel" : "Add"} color={showAdd ? "gray" : "green"} onClick={onClick} onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}