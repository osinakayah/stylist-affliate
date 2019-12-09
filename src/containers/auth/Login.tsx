import React, {PureComponent} from 'react'
import {
    MDBContainer,
    MDBRow,
    MDBCol, MDBIcon,
} from "mdbreact";

import { Link,  } from 'react-router-dom';
import Form  from 'react-bootstrap/Form';

import './styles/LoginStyles.scss'
import AppButton from "../../components/commons/AppButton";

interface  IProps {
    history: any
}
interface IState {

}

export default class Login extends PureComponent<IProps, IState> {
    gotoProductsList = () => {
        this.props.history.push('/product')
    }
    render(): React.ReactNode {
        return (
            <div style={{padding: '7%', backgroundColor: '#e2dccc'}}>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol className={'offset-md-1 offset-lg-1 offset-sm-1'} xs={'12'} sm={'10'} md={'10'} lg={'10'}>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <div className={'form-container'}>

                                    <MDBIcon className={'iconStyle'} size={'2x'} icon={'lock'}/>
                                    <h6 className={'text-center'}>Stylist Login</h6>
                                    <h3 className={'mt-3 text-center'}>Sign In</h3>
                                    <div style={{marginTop: '7%'}}>
                                        <Form className={'mb-3'}>

                                            <Form.Group>
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />
                                            </Form.Group>
                                            <Form.Group >
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" />
                                            </Form.Group>
                                            <AppButton onClick={this.gotoProductsList} block buttonText={'Sign In'} />
                                        </Form>

                                        <Link to={'/auth/signup'} className={'linkStyle'}>Don't have an account? Sign Up</Link>
                                    </div>

                                </div>
                            </div>

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}
