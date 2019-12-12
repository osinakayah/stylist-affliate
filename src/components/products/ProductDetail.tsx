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
import { baseUrl } from "../../services/backend.service";

interface ProductDetailProps {
    isOpen: boolean;
    toggleModalFunc: ()=>void,
    showQRCode: ()=>void,
    productImage: string,
    productDescription: string,
    productPrice: number
}
const ProductDetail: React.FC<ProductDetailProps> = ({isOpen, toggleModalFunc, showQRCode, productImage, productDescription, productPrice}) => {
    return (
        <MDBContainer>
            <MDBModal isOpen={isOpen} size={'lg'}>
                <MDBModalHeader>Product Name</MDBModalHeader>
                <MDBModalBody>
                    <MDBRow>
                        <MDBCol xs={'12'} sm={'12'} md={'7'}>
                            <MDBCardImage
                                cascade
                                src={baseUrl+"products/image/"+productImage}
                                top
                                alt="Product Display"
                            />

                        </MDBCol>
                        <MDBCol xs={'12'} sm={'12'} md={'5'}>
                            <div style={{textAlign: 'left'}}>
                                {productDescription}
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <span className="float-left" style={{lineHeight: '3.7rem'}}>
                              <strong>Price: {productPrice}</strong>
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
