import React from 'react'

const ImageComponent = (props) => {
    const { imageUrl, classname } = props;
    let url = imageUrl.includes("ipfs://") ? 'https://ipfs.moralis.io:2053/ipfs/' + imageUrl.split('ipfs://')[1] : imageUrl

    return (
        <div className={classname}>
            <img src={url} alt='' />
        </div>
    )
}

export default ImageComponent