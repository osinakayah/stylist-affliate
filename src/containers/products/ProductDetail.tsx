import React, {PureComponent} from 'react';
import moment from 'moment';
import {
    MDBContainer,
    MDBRow,
    MDBCol, MDBCardImage,
} from 'mdbreact';
import AppButton from "../../components/commons/AppButton";
import '../../components/products/styles/SingleProductStyles.scss'
import { baseUrl } from "../../services/backend.service";
import  ProductService  from "../../services/product.service";

interface ProductDetailProps {

}

interface ProductDetailState {
    productImage: string,
    productDescription: string,
    productPrice: number
}

class ProductDetail extends PureComponent<ProductDetailProps, ProductDetailState>{
    constructor(props: ProductDetailProps){
        super(props);

        this.state = {
            productImage: '',
            productDescription: '',
            productPrice: 0
        }
    }
    setCookie = (cookieName: string, cookieValue: string, exDays: number) => {
        const d = new Date();
        d.setTime(d.getTime() + (exDays*24*60*60*1000));
        const expires = "expires="+ d.toUTCString();
        document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
    }
    componentDidMount(): void {
        // @ts-ignore
        const {affiliateId, productId} = this.props.match.params
        this.getProduct(productId);

        this.setCookie("affiliateId", affiliateId, 30);
        this.setCookie("productId", productId, 30);
    }



    getProduct = async (productId: number) => {
        const product = await ProductService.getProduct(productId);

        if (product) {
            this.setState({
                productImage: product.productImage,
                productDescription: product.description,
                productPrice: product.price
            })
        }
    }
    render(): React.ReactNode {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol xs={'12'} sm={'12'} md={'7'}>
                        <MDBCardImage
                            cascade
                            src={baseUrl+"products/image/"+this.state.productImage}
                            top
                            alt="Product Display"
                        />

                    </MDBCol>
                    <MDBCol xs={'12'} sm={'12'} md={'5'}>
                        <div style={{textAlign: 'left'}}>
                            {this.state.productDescription}
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                            <span className="float-left" style={{lineHeight: '3.7rem'}}>
                              <strong>Price: <span>&#165;</span> {this.state.productPrice}</strong>
                            </span>
                        <span className="float-right">
                                <AppButton buttonText={'QR Code'} onClick={()=>{}} />
                        </span>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}


export default ProductDetail;
