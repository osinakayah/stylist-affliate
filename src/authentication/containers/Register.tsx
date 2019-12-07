import React, {PureComponent} from 'react'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBTypography,
} from "mdbreact";
import {Link} from "react-router-dom";

import AppButton from "../../commons/AppButton";
import './styles/LoginStyles.scss'
import Images from '../../assets/themes/Images'


export default class Register extends PureComponent {
    render(): React.ReactNode {
        return (
            <div style={{padding: '7%'}}>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol className={'offset-md-1 offset-lg-1 offset-sm-1'} xs={'12'} sm={'10'} md={'10'} lg={'10'}>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <div className={'form-container'}>
                                    <MDBTypography tag='h1'>Sign Up</MDBTypography>
                                    <div style={{marginTop: '7%'}}>
                                        <form style={{marginBottom: '3%'}}>
                                            <div className="grey-text">
                                                <MDBInput
                                                    size={'lg'}
                                                    label="Type your Full Name"
                                                    group
                                                    type="text"
                                                    validate
                                                    error="wrong"
                                                    success="right"
                                                />
                                                <MDBInput
                                                    size={'lg'}
                                                    label="Type your Email"
                                                    group
                                                    type="text"
                                                    validate
                                                    error="wrong"
                                                    success="right"
                                                />
                                                <MDBInput
                                                    size={'lg'}
                                                    label="Type your password"
                                                    group
                                                    type="password"
                                                    validate />
                                            </div>
                                            <AppButton block buttonText={'Sign In'} />
                                        </form>


                                        <Link to={'/auth/signin'} className={'linkStyle'}>Already have an account? Sign In</Link>
                                    </div>

                                </div>
                                <div  className={'d-none d-lg-block'}>
                                    <img alt={'Register Banner'}  src={Images.loginSideImage} style={{ height: '100%'}}/>
                                </div>
                            </div>

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}
