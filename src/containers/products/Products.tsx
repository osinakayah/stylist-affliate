import React, {PureComponent} from 'react'
import {
    MDBRow,
    MDBContainer,
} from "mdbreact";
import AppDrawer from '../../components/commons/AppDrawer';
import ProductDetail from '../../components/products/ProductDetail'
import ProductQRCode from '../../components/products/ProductQRCode'
import SingleProductGrid from '../../components/products/SingleProductGrid'
import SingleProductList from '../../components/products/SingleProductList'

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
                                <SingleProductList productName={'Product Name'} displayProductDetails={this.displayProductDetails} displayProductQRCode={this.displayProductQRCode} />
                                <SingleProductList productName={'Product Name'} displayProductDetails={this.displayProductDetails} displayProductQRCode={this.displayProductQRCode} />
                                <SingleProductList productName={'Product Name'} displayProductDetails={this.displayProductDetails} displayProductQRCode={this.displayProductQRCode} />
                                <SingleProductList productName={'Product Name'} displayProductDetails={this.displayProductDetails} displayProductQRCode={this.displayProductQRCode} />
                            </MDBRow>
                        </section>
                    </div>
                </MDBContainer>

            </AppDrawer>
        );
    }
}

export default Products;
