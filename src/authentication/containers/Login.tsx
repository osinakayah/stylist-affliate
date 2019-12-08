import React, {PureComponent} from 'react'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
} from "mdbreact";
import AppButton from "../../commons/AppButton";
import { Link } from 'react-router-dom';
import Form  from 'react-bootstrap/Form';

import './styles/LoginStyles.scss'
import Images from '../../assets/themes/Images'



export default class Login extends PureComponent {
    render(): React.ReactNode {
        return (
            <div style={{padding: '7%', backgroundColor: '#e2dccc'}}>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol className={'offset-md-1 offset-lg-1 offset-sm-1'} xs={'12'} sm={'10'} md={'10'} lg={'10'}>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <div className={'form-container'}>

                                    <h1>Sign In</h1>
                                    <div style={{marginTop: '7%'}}>
                                        <Form>

                                            <Form.Group>
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />
                                            </Form.Group>
                                            <Form.Group >
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" />
                                            </Form.Group>
                                            <AppButton onClick={()=>{}} block buttonText={'Sign In'} />
                                        </Form>


                                        <Link to={'/auth/signup'} className={'linkStyle'}>Don't have an account? Sign Up</Link>
                                    </div>

                                </div>
                                <div  className={'d-none d-lg-block'}>
                                    <img alt={'Login Banner'} src={Images.loginSideImage} style={{ height: '100%'}}/>
                                </div>
                            </div>

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}
