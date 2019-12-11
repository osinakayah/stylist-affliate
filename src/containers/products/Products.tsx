import React, {PureComponent} from 'react'
import {
    MDBRow,
    MDBContainer,
} from "mdbreact";
import AppDrawer from '../../components/commons/AppDrawer';
import ProductDetail from '../../components/products/ProductDetail'
import ProductQRCode from '../../components/products/ProductQRCode'
import SingleProductList from '../../components/products/SingleProductList'
import ProductService from '../../services/product.service'
import CustomLoader from '../../components/commons/CustomLoader'
interface IProps {
    location: any
}

interface IState {
    showProductDetailModal: boolean,
    showProductDetailQRCode: boolean,

    page: number,
    products: any[]
    isLoading: boolean

}

class Products extends PureComponent<IProps, IState> {

    constructor(props: IProps){
        super(props);
        this.state = {
            showProductDetailModal: false,
            showProductDetailQRCode: false,
            page: 1,
            products: [],
            isLoading: false
        }
    }

    componentDidMount(): void {
        this.fetchProducts(this.state.page)

    }

    fetchProducts = async (page: number) => {
        this.setState({isLoading: true})
        const response = await ProductService.getProducts(page);
        this.setState({isLoading: false})
        if (response) {
            const { data } = response;
            this.setState({products: data})
        }

    }

    displayProductDetails = () => {
        this.setState({showProductDetailModal: !this.state.showProductDetailModal})
    }
    displayProductQRCode = () => {
        this.setState({showProductDetailQRCode: !this.state.showProductDetailQRCode})
    }

    renderProducts = () => {

        return this.state.products.map((product) => {
            return <SingleProductList
                productImage={'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (55).jpg'}
                key={product.id}
                productName={product.productName}
                displayProductDetails={this.displayProductDetails}
                displayProductQRCode={this.displayProductQRCode} />
        });
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
                                {this.state.isLoading ? <CustomLoader />: this.renderProducts()}
                            </MDBRow>
                        </section>
                    </div>
                </MDBContainer>

            </AppDrawer>
        );
    }
}

export default Products;
