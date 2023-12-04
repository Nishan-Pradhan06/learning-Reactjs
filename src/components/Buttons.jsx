import React from 'react'
import PropTypes from 'prop-types'
// import './App.css'
// style ={{backgroundColor : `${props.bgcolor}`}}
const Buttons = (props) => {
    return (
        <div>
            <a href="#" className="my-button">{props.ButtonText}</a>
        </div>
    )
}

//yati kunai pani props pathako xaina aru page bata vhane yasle yo deafult rakhdinxa
Buttons.defaultProps = {
    ButtonText: "Button"
}
// to check the proptypes and validate the props
Buttons.propTypes = {
    ButtonText: PropTypes.string
}
export default Buttons