import React from 'react';
import {MDBCard, MDBCol} from "mdbreact";
import AppButton from "../../components/commons/AppButton";

interface SingleProductGridProps {
    productName: string,
    productImage: string,
    displayProductDetails: ()=>void
    displayProductQRCode: () => void
}

const SingleProductList: React.FC<SingleProductGridProps>  = ({productName, displayProductDetails, displayProductQRCode, productImage}) => {

    return (
        <MDBCol lg={'12'} md={'12'} sm={'6'} xs={'12'} className={'mt-3'}>
            <MDBCard>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <img
                        style={{width: '30%', height: 'auto'}}
                        src={productImage}
                        alt="product sample"
                    />
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <h6 className={'mt-3 ml-3 text-left'}>{productName}</h6>
                        <strong className={'ml-3 text-left'}>Reward: <span>&#165;</span> 1,439</strong>
                        <div className={"px-1 mt-3 ml-7"}>
                            <span className="float-left">
                              <AppButton outline onClick={displayProductDetails} buttonText={'Detail'}/>
                            </span>
                            <span className="float-right">
                                <AppButton onClick={displayProductQRCode} buttonText={'QR Code'}/>
                            </span>
                        </div>
                    </div>
                </div>


            </MDBCard>

        </MDBCol>
    );
}

export default SingleProductList;
