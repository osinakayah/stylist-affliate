import React, {PureComponent} from 'react'
import {
    MDBRow,
    MDBCol,
    MDBContainer, MDBPagination, MDBPageItem, MDBPageNav,
} from "mdbreact";
import AppDrawer from '../../components/commons/AppDrawer';
import ProductDetail from '../../components/products/ProductDetail'
import ProductQRCode from '../../components/products/ProductQRCode'
import CreateProduct from '../../components/products/CreateProduct'
import SingleProductList from '../../components/products/SingleProductList'
import ProductService from '../../services/product.service'
import CustomLoader from '../../components/commons/CustomLoader'
import AppButton from "../../components/commons/AppButton";
import { StorageService } from "../../services/storage.service";
import { StorageKeys } from "../../services/StorageKeys";
import { baseUrl } from "../../services/backend.service";

interface IProps {
    location: any
}

interface IState {
    showProductDetailModal: boolean,
    showProductDetailQRCode: boolean,
    page: number
    pageCount: number,
    products: any[]
    isLoading: boolean,
    isAdmin: boolean,
    showCreateProductModal: boolean,

    selectedProductName: string,
    selectedProductDescription: string,
    selectedProductLandingPage: string,
    selectedProductImage: string,
    selectedProductPrice: number

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
            isLoading: false,
            // isAdmin: true,
            showCreateProductModal: false,
            isAdmin: StorageService.getData(StorageKeys.userType) === 'admin',
            selectedProductName: '',
            selectedProductDescription: '',
            selectedProductLandingPage: '',
            selectedProductImage: '',
            selectedProductPrice: 0
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

    displayProductDetails = (index: number=-1) => {

        if (index > 0) {
            const product = this.state.products.filter((product:any) => product.id === index)[0]
            this.setState({
                selectedProductName: product.productName,
                selectedProductDescription: product.description,
                selectedProductImage: product.productImage,
                selectedProductLandingPage: product.productLandingPage,
                selectedProductPrice: product.price,
            })
        }

        this.setState({
            showProductDetailModal: !this.state.showProductDetailModal,
        })
    }
    displayProductQRCode = (index: number=-1) => {
        if (index > 0) {
            const product = this.state.products.filter((product:any) => product.id === index)[0]
            this.setState({
                selectedProductName: product.productName,
                selectedProductDescription: product.description,
                selectedProductImage: product.productImage,
                selectedProductLandingPage: product.productLandingPage,
                selectedProductPrice: product.price,
            })
        }


        this.setState({
            showProductDetailQRCode: !this.state.showProductDetailQRCode,
        })
    }
    displayCreateProduct = () => {
        this.setState({showCreateProductModal: !this.state.showCreateProductModal})
    }

    renderProducts = () => {

        if (this.state.products.length > 0) {
            return this.state.products.map((product) => {
                return <SingleProductList
                    index={product.id}
                    productPrice={product.price}
                    productImage={baseUrl+"products/image/"+product.productImage}
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
        renderCreateProductButton = () => {
            if (this.state.isAdmin) {
                return (
                    <MDBRow >
                        <AppButton onClick={this.displayCreateProduct} buttonText={'Create Product'}/>
                    </MDBRow>
                )
            }
        }

    render(): React.ReactNode {

        const {pathname} = this.props.location;

        return (
            <AppDrawer activeRoute={pathname}>
                <MDBContainer fluid>
                    {this.state.isAdmin? <CreateProduct isOpen={this.state.showCreateProductModal} toggleModalFunc={this.displayCreateProduct}/>: null}

                    <ProductDetail
                        productImage={this.state.selectedProductImage}
                        productDescription={this.state.selectedProductDescription}
                        productPrice={this.state.selectedProductPrice}
                        showQRCode={this.displayProductQRCode}
                        toggleModalFunc={this.displayProductDetails}
                        isOpen={this.state.showProductDetailModal}/>
                    <ProductQRCode
                        productLandingPage={this.state.selectedProductLandingPage}
                        productImage={this.state.selectedProductImage}
                        productDescription={this.state.selectedProductDescription}
                        productPrice={this.state.selectedProductPrice}

                        toggleModalFunc={this.displayProductQRCode}
                        isOpen={this.state.showProductDetailQRCode}/>
                    <div className={'products-list-container'}>
                        <section className="text-center">

                            {this.renderCreateProductButton()}
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
