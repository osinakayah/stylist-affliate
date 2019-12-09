import React, {PureComponent} from 'react'
import {
    MDBCard,
    MDBRow,
    MDBCol,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBContainer,
    MDBCardText,
    MDBCardFooter,
} from "mdbreact";
import AppDrawer from '../../components/commons/AppDrawer';
import AppButton from '../../components/commons/AppButton'
import ProductDetail from '../../components/products/ProductDetail'
import ProductQRCode from '../../components/products/ProductQRCode'

interface IProps {
    location: any
}

interface IState {
    showProductDetailModal: boolean,
    showProductDetailQRCode: boolean,

}

class Products extends PureComponent<IProps, IState> {

    constructor(props: IProps){
        super(props);
        this.state = {
            showProductDetailModal: false,
            showProductDetailQRCode: false
        }
    }
    displayProductDetails = () => {
        this.setState({showProductDetailModal: !this.state.showProductDetailModal})
    }
    displayProductQRCode = () => {
        this.setState({showProductDetailQRCode: !this.state.showProductDetailQRCode})
    }

    render(): React.ReactNode {

        const {pathname} = this.props.location;

        return (
            <AppDrawer activeRoute={pathname}>
                <MDBContainer fluid>
                    <ProductDetail showQRCode={this.displayProductQRCode} toggleModalFunc={this.displayProductDetails} isOpen={this.state.showProductDetailModal}/>
                    <ProductQRCode toggleModalFunc={this.displayProductQRCode} isOpen={this.state.showProductDetailQRCode}/>
                    <div className={'products-list-container'}>
                        <section className="text-center">
                            <MDBRow >
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
                                                    <a href="#!">Product Name</a>
                                                </strong>
                                            </MDBCardTitle>
                                            <MDBCardText>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing minima
                                                veniam elit.
                                            </MDBCardText>
                                            <strong>Reward: <span>&#165;</span> 1,439</strong>
                                            <MDBCardFooter className="px-1">
                                                <span className="float-left">
                                                  <AppButton outline onClick={this.displayProductDetails} buttonText={'Detail'}/>
                                                </span>
                                                <span className="float-right">
                                                    <AppButton onClick={this.displayProductQRCode} buttonText={'QR Code'}/>
                                                </span>
                                            </MDBCardFooter>

                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol lg="4" md="6" sm={'6'} xs={'12'} className={'mt-3'}>
                                    <MDBCard wide>
                                        <MDBCardImage
                                            cascade
                                            src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (55).jpg"
                                            top
                                            alt="Product"
                                        />
                                        <MDBCardBody cascade className="text-center">
                                            <a href="#!" className="text-muted">
                                                <h5>Product Category</h5>
                                            </a>
                                            <MDBCardTitle>
                                                <strong>
                                                    <a href="#!">Product Name</a>
                                                </strong>
                                            </MDBCardTitle>
                                            <MDBCardText>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing minima
                                                veniam elit.
                                            </MDBCardText>
                                            <strong>Reward: <span>&#165;</span> 1,439</strong>
                                            <MDBCardFooter className="px-1">
                                                <span className="float-left">
                                                  <AppButton outline onClick={this.displayProductDetails} buttonText={'Detail'}/>
                                                </span>
                                                <span className="float-right">
                                                    <AppButton onClick={this.displayProductQRCode} buttonText={'QR Code'}/>
                                                </span>
                                            </MDBCardFooter>

                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
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
                                                    <a href="#!">Product Name</a>
                                                </strong>
                                            </MDBCardTitle>
                                            <MDBCardText>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing minima
                                                veniam elit.
                                            </MDBCardText>
                                            <strong>Reward: <span>&#165;</span> 1,439</strong>
                                            <MDBCardFooter className="px-1">
                                                <span className="float-left">
                                                  <AppButton outline onClick={this.displayProductDetails} buttonText={'Detail'}/>
                                                </span>
                                                <span className="float-right">
                                                    <AppButton onClick={this.displayProductQRCode} buttonText={'QR Code'}/>
                                                </span>
                                            </MDBCardFooter>

                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
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
                                                    <a href="#!">Product Name</a>
                                                </strong>
                                            </MDBCardTitle>
                                            <MDBCardText>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing minima
                                                veniam elit.
                                            </MDBCardText>
                                            <strong>Reward: <span>&#165;</span> 1,439</strong>
                                            <MDBCardFooter className="px-1">
                                                <span className="float-left">
                                                  <AppButton outline onClick={this.displayProductDetails} buttonText={'Detail'}/>
                                                </span>
                                                <span className="float-right">
                                                    <AppButton onClick={this.displayProductQRCode} buttonText={'QR Code'}/>
                                                </span>
                                            </MDBCardFooter>

                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>


                            </MDBRow>
                        </section>
                    </div>
                </MDBContainer>

            </AppDrawer>
        );
    }
}

export default Products;
