import React, {PureComponent} from 'react'
import {withRouter} from 'react-router-dom';
import {
    MDBCard,
    MDBRow,
    MDBCol,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
} from "mdbreact";
import AppDrawer from '../../commons/AppDrawer';
import AppButton from '../../commons/AppButton'
import SingleProduct from '../components/SingleProduct'

interface IProps {
    location: any
}

interface IState {
    showModal: boolean,

}

class Products extends PureComponent<IProps, IState> {

    constructor(props: IProps){
        super(props);
        this.state = {
            showModal: false,
        }
    }
    displayProductDetails = () => {
        this.setState({showModal: !this.state.showModal})
    }

    render(): React.ReactNode {

        const {pathname} = this.props.location;

        return (
            <AppDrawer activeRoute={pathname}>
                <div style={{padding: '3%', backgroundColor: '#fff'}} className={'products-list-container'}>
                    <section className="text-center">
                        <h2 className="h1-responsive font-weight-bold text-center">
                            Our best products
                        </h2>
                        <p className="grey-text text-center w-responsive mx-auto mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                            error amet numquam iure provident voluptate esse quasi, veritatis
                            totam voluptas nostrum quisquam eum porro a pariatur veniam.
                        </p>
                        <MDBRow className={'mb-3'}>
                            <SingleProduct toggleModalFunc={this.displayProductDetails} isOpen={this.state.showModal}/>
                            <MDBCol lg="4" md="4" sm={'12'} xs={'12'} className="mb-lg-0 mb-4">
                                <MDBCard wide ecommerce>
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
                                        <AppButton onClick={this.displayProductDetails} buttonText={'Buy'}/>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol lg="4" md="4" sm={'12'} xs={'12'} className="mb-lg-0 mb-4">
                                <MDBCard wide ecommerce>
                                    <MDBCardImage
                                        cascade
                                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (49).jpg"
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
                                        <AppButton onClick={this.displayProductDetails}  buttonText={'Buy'}/>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol lg="4" md="4" sm={'12'} xs={'12'} className="mb-lg-0 mb-4">
                                <MDBCard wide ecommerce>
                                    <MDBCardImage
                                        cascade
                                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (56).jpg"
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
                                        <AppButton onClick={this.displayProductDetails}  buttonText={'Buy'}/>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </section>
                </div>
            </AppDrawer>
        );
    }
}

export default withRouter(props => <Products {...props}/>);
