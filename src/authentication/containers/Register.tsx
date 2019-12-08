import React, {PureComponent} from 'react'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
} from "mdbreact";
import Form  from 'react-bootstrap/Form';
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
                                <div style={{ backgroundColor: 'white', padding: '7%', display: 'flex', flexDirection: 'column', flexGrow: 3 }}>
                                    <h1>Sign Up</h1>
                                    <div style={{marginTop: '7%'}}>
                                        <Form>
                                            <Form.Group>
                                                <Form.Label>Full Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Full Name" />
                                            </Form.Group>

                                            <Form.Group>
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />
                                            </Form.Group>
                                            <Form.Group >
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Select Bank</Form.Label>
                                                <Form.Control as="select">

                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Select Bank Branch</Form.Label>
                                                <Form.Control as="select">

                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Select Account type</Form.Label>
                                                <Form.Control as="select">

                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group >
                                                <Form.Label>Account Name</Form.Label>
                                                <Form.Control type="email" placeholder="Enter Account Name" />
                                            </Form.Group>
                                            <Form.Group >
                                                <Form.Label>Account Number</Form.Label>
                                                <Form.Control type="email" placeholder="Enter Account Number" />
                                            </Form.Group>
                                            <AppButton onClick={()=>{}} block buttonText={'Sign Up'} />
                                        </Form>



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
