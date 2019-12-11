import React, {PureComponent} from 'react'
import {
    MDBRow,
    MDBCol,
    MDBContainer, MDBPagination, MDBPageItem, MDBPageNav,
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
    page: number
    pageCount: number,
    products: any[]
    isLoading: boolean

}

class Products extends PureComponent<IProps, IState> {

    constructor(props: IProps){
        super(props);
        this.state = {
            showProductDetailModal: false,
            showProductDetailQRCode: false,
            pageCount: 1,
            page: 1,
            products: [],
            isLoading: false
        }
    }

    componentDidMount(): void {
        this.fetchProducts(1)

    }

    fetchProducts = async (page: number) => {
        this.setState({isLoading: true})
        const response = await ProductService.getProducts(page);

        this.setState({isLoading: false})
        if (response) {
            const { data, pageCount, page } = response;
            this.setState({products: data, pageCount, page})
        }

    }

    renderPagination = () => {
        const paginationItems = []
        for (let i = 1; i <= this.state.pageCount; i ++) {

            paginationItems.push(
                <MDBPageItem onClick={() => this.fetchProducts(i)} key={i} active={i === this.state.page}>
                    <MDBPageNav className="page-link">
                        {i} <span className="sr-only">(current)</span>
                    </MDBPageNav>
                </MDBPageItem>
            );
        }
        return paginationItems;
    }

    displayProductDetails = () => {
        this.setState({showProductDetailModal: !this.state.showProductDetailModal})
    }
    displayProductQRCode = () => {
        this.setState({showProductDetailQRCode: !this.state.showProductDetailQRCode})
    }

    renderProducts = () => {

        if (this.state.products.length > 0) {
            return this.state.products.map((product) => {
                return <SingleProductList
                    productImage={'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (55).jpg'}
                    key={product.id}
                    productName={product.productName}
                    displayProductDetails={this.displayProductDetails}
                    displayProductQRCode={this.displayProductQRCode} />
            });
        }
        return (
            <MDBCol>
             <h5 className="text-center" style={{marginTop: '50%'}}>No Products Available</h5>
            </MDBCol>
        )

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

                    <MDBRow className={'mt-7 ml-1 mr-1'} style={{marginTop: '5%'}}>
                        <MDBPagination size={'sm'}>
                            {this.renderPagination()}
                        </MDBPagination>
                    </MDBRow>
                </MDBContainer>

            </AppDrawer>
        );
    }
}

export default Products;
