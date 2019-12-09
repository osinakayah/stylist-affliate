import React from 'react';
import {MDBCard, MDBCardBody, MDBCardFooter, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol} from "mdbreact";
import AppButton from "../../components/commons/AppButton";

interface SingleProductGridProps {
    productName: string,
    displayProductDetails: ()=>void
    displayProductQRCode: () => void
}

const SingleProductGrid: React.FC<SingleProductGridProps>  = ({productName, displayProductDetails, displayProductQRCode}) => {

    return (
        <MDBCol lg="4" md="6" sm={'6'} xs={'12'} className={'mt-3'}>
            <MDBCard wide>
                <MDBCardImage
                    cascade
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (55).jpg"
                    top
                    alt="sample photo"
                />
                <MDBCardBody cascade className="text-center">
                    <a href="#!" className="text-muted">
                        <h5>Product Category</h5>
                    </a>
                    <MDBCardTitle>
                        <strong>
                            <a href="#!">{productName}</a>
                        </strong>
                    </MDBCardTitle>
                    <MDBCardText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing minima
                        veniam elit.
                    </MDBCardText>
                    <strong>Reward: <span>&#165;</span> 1,439</strong>
                    <MDBCardFooter className="px-1">
                                                <span className="float-left">
                                                  <AppButton outline onClick={displayProductDetails} buttonText={'Detail'}/>
                                                </span>
                        <span className="float-right">
                                                    <AppButton onClick={displayProductQRCode} buttonText={'QR Code'}/>
                                                </span>
                    </MDBCardFooter>

                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
}

export default SingleProductGrid;
