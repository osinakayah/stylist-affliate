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
import AppButton from "../../commons/AppButton";
import './styles/SingleProductStyles.scss';


type SingleProductProps = {
    isOpen: boolean;
    toggleModalFunc: ()=>void
}
const SingleProduct: React.FC<SingleProductProps> = ({isOpen, toggleModalFunc}) => {
    return (
        <MDBContainer>
            <MDBModal fullHeight position={'top'} isOpen={isOpen} size={'lg'}>
                <MDBModalHeader>Product Name</MDBModalHeader>
                <MDBModalBody>
                    <MDBRow>
                        <MDBCol xs={'12'} sm={'6'} md={'7'}>
                            <MDBCardImage
                                cascade
                                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (55).jpg"
                                top
                                alt="Product Display"
                            />

                            <div style={{display: 'flex', flexDirection: 'row',  marginTop: '3%'}}>
                                <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(54).jpg"
                                     className="img-fluid z-depth-1" alt="1" style={{width: '100px', height: 'auto', marginRight: '1%'}}/>

                                <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(54).jpg"
                                     className="img-fluid z-depth-1" alt="1" style={{width: '100px',height: 'auto',  marginRight: '1%'}}/>
                            </div>

                            <div className={'copy-container'} style={{marginTop: '3%'}}>
                                <span>https://nairaland.com</span>
                                <AppButton onClick={()=>{}} buttonText={'Copy'}/>
                            </div>

                        </MDBCol>
                        <MDBCol xs={'12'} sm={'6'} md={'5'}>
                            <div style={{textAlign: 'left'}}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </div>
                            <div style={{textAlign: 'center'}}>
                                <MDBCardImage
                                    top
                                    cascade
                                    src="https://chart.apis.google.com/chart?cht=qr&chs=260x260&chl=${productLink}&chld=H|0"
                                    alt="QR Code of Product Link"
                                />
                                <div>
                                    <AppButton onClick={()=>{}} block buttonText={'Email'}/>
                                </div>

                            </div>
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


export default SingleProduct;
