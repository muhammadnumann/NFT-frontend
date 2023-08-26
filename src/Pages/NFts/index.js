import React, { useState, useEffect } from 'react';
import CardDesign from '../../Components/card'
import nftImage from '../../Components/image/nft.png'
import NftModal from '../../Components/modal';
import axios from 'axios'
import ImageComponent from '../../Components/imageComp';


const nfts = [
    {
        id: 1,
        name: 'Howie Howitzer',
        ownerName: 'Virtua',
        price: 20

    },
    {
        id: 2,
        name: 'Howie Howitzer',
        ownerName: 'Virtua',
        price: 21

    },
    {
        id: 3,
        name: 'Howie Howitzer',
        ownerName: 'Virtua',
        price: 22

    },
    {
        id: 4,
        name: 'Howie Howitzer',
        ownerName: 'Virtua',
        price: 12

    },
    {
        id: 5,
        name: 'Howie Howitzer',
        ownerName: 'Virtua',
        price: 22

    },
    {
        id: 6,
        name: 'Howie Howitzer',
        ownerName: 'Virtua',
        price: 20

    },
    {
        id: 7,
        name: 'Howie Howitzer',
        ownerName: 'Virtua',
        price: 20

    },
    {
        id: 8,
        name: 'Howie Howitzer',
        ownerName: 'Virtua',
        price: 22

    },
    {
        id: 9,
        name: 'Howie Howitzer',
        ownerName: 'Virtua',
        price: 21

    },
    {
        id: 10,
        name: 'Howie Howitzer',
        ownerName: 'Virtua',
        price: 25

    },
]
const NFTsPage = () => {
    const [modalShow, setModalShow] = useState(false);
    const [modaldata, setModalData] = useState([]);
    const [loading, setloading] = useState(false);
    const [nftdata, setnftData] = useState();




    const API_URI = 'http://localhost:3000/getNfts'
    const getNfts = async () => {
        try {
            const fetchData = await axios.get(API_URI)
            setModalData(fetchData.data)
            setloading(true)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        window.addEventListener('load', getNfts)
        return () => {
            window.removeEventListener('load', getNfts)
        }
    }, [modaldata])

    console.log(modaldata.Data, 'nft data')

    const handleNFTdata = (data) => {
        setnftData(data);
        setModalShow(true);
    }

    return (
        <div>
            <div className='row m-0'>
                {loading && (modaldata.Data || []).map((nft, index) => {
                    return (
                        <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 p-0 pb-3' key={index}>
                            <CardDesign>
                                <div className='card-main' onClick={() => handleNFTdata(nft)} >
                                    <ImageComponent imageUrl={nft?.metadata?.image || nftImage} classname ="card-image"/>
                                    <div className='card-info'>
                                        <h3 className='title'>{nft.name}</h3>
                                        <div className='d-flex align-items-start justify-content-between'>
                                            <div className='text-left'>
                                                <p className='font-12 text-grey mb-2'>Starting From</p>
                                                <p className='font-14 text-blackish font-weight-500'>${nft.amount}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardDesign>
                        </div>
                    )
                })}
            </div>
            <NftModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                nftdata={nftdata}
            />

        </div>
    )
}

export default NFTsPage