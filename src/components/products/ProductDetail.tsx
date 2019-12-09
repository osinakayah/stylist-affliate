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
import AppButton from "../commons/AppButton";
import './styles/SingleProductStyles.scss';


interface ProductDetailProps {
    isOpen: boolean;
    toggleModalFunc: ()=>void,
    showQRCode: ()=>void,
}
const ProductDetail: React.FC<ProductDetailProps> = ({isOpen, toggleModalFunc, showQRCode}) => {
    return (
        <MDBContainer>
            <MDBModal isOpen={isOpen} size={'lg'}>
                <MDBModalHeader>Product Name</MDBModalHeader>
                <MDBModalBody>
                    <MDBRow>
                        <MDBCol xs={'12'} sm={'12'} md={'7'}>
                            <MDBCardImage
                                cascade
                                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (55).jpg"
                                top
                                alt="Product Display"
                            />

                        </MDBCol>
                        <MDBCol xs={'12'} sm={'12'} md={'5'}>
                            <div style={{textAlign: 'left'}}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <span className="float-left" style={{lineHeight: '3.7rem'}}>
                              <strong>Price: 1439$</strong>
                            </span>
                            <span className="float-right">
                                <AppButton buttonText={'QR Code'} onClick={showQRCode} />
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


export default ProductDetail;
