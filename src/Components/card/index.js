import React from 'react'

const CardDesign = (props) => {
    const { children } = props;
    return (
        <div className='card-design'>
            {children}
        </div>
    )
}

export default CardDesign