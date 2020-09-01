import React from 'react'

const CircularImage : React.FC<{src : string}> = ({src}) => {
    return (
        <div>
            <img src={src} className="circular" alt="img" style={{width :"100%"}}/>
        </div>
    )
}

export default CircularImage
