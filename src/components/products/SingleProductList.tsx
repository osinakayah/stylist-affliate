import React from 'react';
import {MDBCard, MDBCol} from "mdbreact";
import AppButton from "../../components/commons/AppButton";

interface SingleProductGridProps {
    index: number
    productName: string,
    productImage: string,
    productPrice: number,
    displayProductDetails: (index: number)=>void
    displayProductQRCode: (index: number) => void
}

const SingleProductList: React.FC<SingleProductGridProps>  = ({index, productName, displayProductDetails, displayProductQRCode, productImage, productPrice}) => {

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
                        <strong className={'ml-3 text-left'}><span>&#165;</span>{productPrice} <span>&#165;</span>({productPrice*0.03})</strong>

                        <div className={"px-1 mt-3 ml-7"}>
                            <span className="float-left">
                              <AppButton outline onClick={() => {
                                  displayProductDetails(index);
                              }} buttonText={'詳細'}/>
                            </span>
                            <span className="float-right">
                                <AppButton onClick={() => {
                                    displayProductQRCode(index);
                                }} buttonText={'QRコード'}/>
                            </span>
                        </div>
                    </div>
                </div>


            </MDBCard>

        </MDBCol>
    );
}

export default SingleProductList;
