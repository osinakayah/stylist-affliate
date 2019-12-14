import React from 'react';
import {
    MDBContainer,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBRow,
    MDBCol, MDBCardImage,
    MDBModalFooter,
} from 'mdbreact';
import QRCode from 'qrcode.react';
import AppButton from "../commons/AppButton";
import './styles/SingleProductStyles.scss';
import {baseUrl} from "../../services/backend.service";


interface ProductQRCodeProps {
    isOpen: boolean;
    toggleModalFunc: ()=>void,
    productImage: string,
    productDescription: string,
    productPrice: number,
    productLandingPage: string
}


const ProductQRCode: React.FC<ProductQRCodeProps> = ({productPrice, isOpen, toggleModalFunc, productLandingPage, productImage, productDescription}) => {
    return (
        <MDBContainer>
            <MDBModal isOpen={isOpen} size={'lg'}>
                <MDBModalHeader>Product Name</MDBModalHeader>
                <MDBModalBody>
                    <MDBRow>
                        <MDBCol xs={'12'} sm={'12'} md={'12'}>
                            <div style={{textAlign: 'center'}}>
                                <QRCode includeMargin level={'H'} size={300} value={productLandingPage} />
                                <div>
                                    <AppButton href={`mailto:?body=Click this link to buy ${productLandingPage}' `} block buttonText={'Email'}/>
                                </div>
                                <div className={'copy-container mt-3 mb-3'}>
                                    <span>{`line://msg/text/${productLandingPage}`}{}</span>
                                    <AppButton onClick={()=>{}} buttonText={'Copy'}/>
                                </div>



                            </div>
                        </MDBCol>
                        <MDBCol xs={'12'} sm={'12'} md={'12'}>
                            <MDBCardImage
                                cascade
                                src={baseUrl+"products/image/"+productImage}
                                top
                                alt="Product Display"
                            />
                            <div style={{textAlign: 'left'}}>{productDescription}</div>
                            <span className="float-left" style={{lineHeight: '3.7rem'}}>
                              <strong>Price: <span>&#165;</span> {productPrice}</strong>
                            </span>
                        </MDBCol>
                    </MDBRow>
                </MDBModalBody>
                <MDBModalFooter>
                    <AppButton buttonText={'Close'} outline onClick={toggleModalFunc} />
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    );
}


export default ProductQRCode;
