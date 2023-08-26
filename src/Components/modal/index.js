import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import nftImage from '../image/nft.png'
import ImageComponent from '../imageComp';

const NftModal = (props) => {
    const { nftdata } = props;

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            dialogClassName="custom-modal"
            centered
        >
            <Modal.Body>
                <div className='d-flex gap-24px flex-lg-row flex-column mb-5'>
                    <ImageComponent imageUrl={nftdata?.metadata?.image || nftImage} classname="nft-detail-image" />
                    <div className='w-100'>
                        <h3 className='modal-title'>
                            {nftdata?.name}
                        </h3>
                        <div className='d-flex justify-content-between align-items-center pt-4 gap-24px'>
                            <div>
                                <p className='font-14 text-grey mb-2'>Owner</p>
                                <p className='font-16 font-weight-500 text-blackish'>{nftdata?.chainInfo?.name}</p>
                            </div>
                            <div className='pr-5'>
                                <p className='font-14 text-grey mb-2'>Contract Type</p>
                                <p className='font-16 font-weight-500 text-blackish'>{nftdata?.contractType}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {nftdata?.metadata?.description &&
                    <>
                        <p className='font-14 text-grey mb-2'>Description</p>
                        <p>
                            {nftdata.metadata.description}
                        </p>
                    </>
                }
            </Modal.Body>
            <Modal.Footer>
                <div className='d-flex justify-content-between align-items-center w-100'>
                    <div>
                        <p className='font-14 text-grey mb-1'>Current Price</p>
                        <p className='font-24 font-weight-500 text-blackish'>${nftdata?.amount}</p>
                    </div>
                    <div className='d-flex justify-content-center gap-24px align-items-center'>
                        <Button onClick={props.onHide} className='close-btn d-lg-none d-block'>Close</Button>
                        <a onClick={props.onHide} className='purchase-btn' href={nftdata?.chainInfo?.infoURL}>Purchase</a>
                    </div>
                </div>
            </Modal.Footer>
        </Modal>
    );
}

export default NftModal