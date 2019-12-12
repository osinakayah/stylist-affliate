import React, {PureComponent} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    MDBContainer,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBRow,
    MDBCol,
    MDBModalFooter,
} from 'mdbreact';
import AppButton from "../commons/AppButton";
import './styles/SingleProductStyles.scss';
import Form  from 'react-bootstrap/Form';



import ProductService from '../../services/product.service'



interface CreateProductProps {
    isOpen: boolean;
    toggleModalFunc: ()=>void
}

interface CreateProductState {
    file: any;
    productName: string,
    description: string,
    productLandingPage: string,
    price: string
}


class CreateProduct extends PureComponent<CreateProductProps, CreateProductState>{
    handleChange = (key: string, value: string) => {
        // @ts-ignore
        this.setState({[key]: value})
    }
    attemptCreateProduct =async () => {
        const formData: FormData = new FormData()
        formData.append('productName', this.state.productName)
        formData.append('description', this.state.description)
        formData.append('file', this.state.file)
        formData.append('productLandingPage', this.state.productLandingPage)
        formData.append('price', this.state.price);

        this.props.toggleModalFunc();
        const responseData = await ProductService.createProduct(formData)
        toast(responseData);

    }
    render(): React.ReactNode {
        return (
            <MDBContainer>
                <MDBModal isOpen={this.props.isOpen} size={'lg'}>
                    <MDBModalHeader>New Product</MDBModalHeader>
                    <MDBModalBody>
                        <MDBRow>
                            <MDBCol xs={'12'} sm={'12'} md={'12'}>
                                <Form className={'mb-3'}>
                                    <Form.Group>
                                        <Form.Label>Product Name</Form.Label>
                                        <Form.Control onChange={(event: any) => this.handleChange('productName', event.target.value)} type="text" placeholder="Enter Product name" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Product Description</Form.Label>
                                        <Form.Control onChange={(event: any) => this.handleChange('description', event.target.value)} as="textarea" rows="3" />
                                    </Form.Group>
                                    <Form.Group>
                                        <input onChange={(event: any) => this.handleChange('file', event.target.files[0])} type={'file'} placeholder={'Select Image'} />
                                    </Form.Group>
                                    <Form.Group >
                                        <Form.Label>Product Landing page</Form.Label>
                                        <Form.Control onChange={(event: any) => this.handleChange('productLandingPage', event.target.value)} type="text" placeholder="Enter Product Landing page" />
                                    </Form.Group>
                                    <Form.Group >
                                        <Form.Label>Product Price</Form.Label>
                                        <Form.Control onChange={(event: any) => this.handleChange('price', event.target.value)} type="text" placeholder="Enter Product Price" />
                                    </Form.Group>
                                    <AppButton onClick={this.attemptCreateProduct} block buttonText={'Create Product'} />
                                </Form>
                            </MDBCol>

                        </MDBRow>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <AppButton buttonText={'Close'} outline onClick={this.props.toggleModalFunc} />
                    </MDBModalFooter>
                </MDBModal>
                <ToastContainer />
            </MDBContainer>
        );
    }
}

export default CreateProduct;
