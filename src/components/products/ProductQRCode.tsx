import React from 'react';
import {
    MDBContainer,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBRow,
    MDBCol,
    MDBModalFooter,
} from 'mdbreact';
import QRCode from 'qrcode.react';
import AppButton from "../commons/AppButton";
import './styles/SingleProductStyles.scss';
import {baseUrl} from "../../services/backend.service";


interface ProductQRCodeProps {
    isOpen: boolean;
    productName: string,
    toggleModalFunc: ()=>void,
    productImage: string,
    productDescription: string,
    productPrice: number,
    productLandingPage: string,
    showDetail: ()=>void,
}
const ProductQRCode: React.FC<ProductQRCodeProps> = ({showDetail, productName, productPrice, isOpen, toggleModalFunc, productLandingPage, productImage, productDescription}) => {

    return (
        <MDBContainer>
            <MDBModal isOpen={isOpen} size={'lg'}>
                <MDBModalHeader>こちらのQRコードを読み込んでください</MDBModalHeader>
                <MDBModalBody>
                    <MDBRow>
                        <MDBCol xs={'12'} sm={'12'} md={'12'}>
                            <div style={{textAlign: 'center'}}>
                                <QRCode includeMargin level={'H'} size={300} value={productLandingPage} />
                            </div>
                        </MDBCol>
                        <MDBCol xs={'12'} sm={'12'} md={'12'}>
                            <MDBRow>
                                <MDBCol>
                                    <AppButton block href={`mailto:?body=Click this link to buy ${productLandingPage}&source=Email' `} buttonText={'Eメール'}/>
                                </MDBCol>
                                <MDBCol className={'pt-1'}>
                                    <AppButton block href={`link://msg/text/${productLandingPage}&source=LINE`} buttonText={'ライン'}/>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol xs={'12'} sm={'12'} md={'12'}>
                            <h6 className={'mt-3'}>QRコード製品情報</h6>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <img
                                    style={{width: '30%', height: 'auto'}}
                                    src={baseUrl+"products/image/"+productImage}
                                    alt="product sample"
                                />
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <h6 className={'mt-3 ml-4 text-left'}>{productName}</h6>
                                    <strong className={'ml-4 text-left'}><span>&#165;</span>{productPrice}</strong>
                                    <div className={"px-1 mt-3 ml-7"}>
                                        <span className="">
                                          <AppButton onClick={showDetail} buttonText={'詳細'}/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBModalBody>
                <MDBModalFooter>
                    <AppButton buttonText={'閉じる'} outline onClick={toggleModalFunc} />
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    );
}


export default ProductQRCode;
