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


interface ProductQRCodeProps {
    isOpen: boolean;
    toggleModalFunc: ()=>void
}
const ProductQRCode: React.FC<ProductQRCodeProps> = ({isOpen, toggleModalFunc}) => {
    return (
        <MDBContainer>
            <MDBModal isOpen={isOpen} size={'lg'}>
                <MDBModalHeader>Product Name</MDBModalHeader>
                <MDBModalBody>
                    <MDBRow>
                        <MDBCol xs={'12'} sm={'12'} md={'12'}>
                            <div style={{textAlign: 'center'}}>
                                <QRCode includeMargin level={'H'} size={300} value="http://stylistproduct/productId" />
                                <div>
                                    <AppButton onClick={()=>{}} block buttonText={'Email'}/>
                                </div>
                                <div className={'copy-container mt-3 mb-3'}>
                                    <span>https://nairaland.com</span>
                                    <AppButton onClick={()=>{}} buttonText={'Copy'}/>
                                </div>


                            </div>
                        </MDBCol>
                        <MDBCol xs={'12'} sm={'12'} md={'12'}>
                            <MDBCardImage
                                cascade
                                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (55).jpg"
                                top
                                alt="Product Display"
                            />
                            <div style={{textAlign: 'left'}}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </div>
                            <span className="float-left" style={{lineHeight: '3.7rem'}}>
                              <strong>Price: 1439$</strong>
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
