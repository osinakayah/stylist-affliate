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
    productName: string,
    productImage: string,
    productDescription: string,
    productPrice: number
}
const ProductDetail: React.FC<ProductDetailProps> = ({productName, isOpen, toggleModalFunc, showQRCode, productImage, productDescription, productPrice}) => {
    return (
        <MDBContainer>
            <MDBModal isOpen={isOpen} size={'lg'}>
                <MDBModalHeader>{productName}</MDBModalHeader>
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
                            <p className={'text-center'} style={{lineHeight: '3.7rem'}}>
                              <strong>価格: <span>&#165;</span> {productPrice}</strong>
                            </p>
                        </MDBCol>

                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <span>
                                <AppButton block buttonText={'QRコード'} onClick={showQRCode} />
                            </span>
                        </MDBCol>

                    </MDBRow>
                </MDBModalBody>
                <MDBModalFooter>
                    <AppButton buttonText={'閉じる'} outline onClick={toggleModalFunc} />
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    );
}


export default ProductDetail;
