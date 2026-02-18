import React from 'react'
import './ArrowButton.scss'
import arrowIcon from '../../../assets/arrow.svg'

const ArrowButton = ({onClick, className=''}) => {
    return (
        <button
            className={`ui-arrow-button ${className}`}
            onClick={onClick}
            type='button'
            aria-label='Scroll to section'
        >
            <img src={arrowIcon} alt="arrow" />
        </button>
    )
}
export default ArrowButton