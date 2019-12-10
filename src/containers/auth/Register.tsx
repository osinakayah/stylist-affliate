import React, {PureComponent} from 'react'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
} from "mdbreact";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form  from 'react-bootstrap/Form';
import {Link} from "react-router-dom";

import AppButton from "../../components/commons/AppButton";
import './styles/LoginStyles.scss'
import { AuthService } from "../../services/auth.service";

interface  IProps {
    history: any
}
interface IState {
    fullName: string,
    email: string,
    password: string,
    bankId: number,
    branchId: number,
    accountType: number,
    accountNumber: string,
    accountName: string
}

export default class Register extends PureComponent<IProps, IState> {

    _attemptRegister = async () => {
        const response = await AuthService.registerUser(this.state);
        if (response.length > 0){
            toast(response);
        }
        else {
            this._gotoProductsList()
        }
    }
    _gotoProductsList = () => {

        this.props.history.push('/product')
    }
    _handleChange = (key: string, value: string) => {
        // @ts-ignore
        this.setState({[key]: value})

    }

    render(): React.ReactNode {
        return (
            <div style={{padding: '7%'}}>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol className={'offset-md-3 offset-lg-4 offset-sm-1'} xs={'12'} sm={'10'} md={'6'} lg={'4'}>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <div className={'form-container'} style={{ backgroundColor: 'white', padding: '7%', display: 'flex', flexDirection: 'column', flexGrow: 3 }}>

                                    <MDBIcon className={'iconStyle'} size={'2x'} icon={'lock'}/>
                                    <h6 className={'text-center'}>Stylist Register</h6>
                                    <h3 className={'mt-3 text-center'}>Sign Up</h3>
                                    <div style={{marginTop: '7%'}}>
                                        <Form className={'mb-3'}>
                                            <Form.Group>
                                                <Form.Label>Full Name</Form.Label>
                                                <Form.Control onChange={(event: any) => this._handleChange('fullName', event.target.value)} type="text" placeholder="Enter Full Name" />
                                            </Form.Group>

                                            <Form.Group>
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control onChange={(event: any) => this._handleChange('email', event.target.value)} type="email" placeholder="Enter email" />
                                            </Form.Group>
                                            <Form.Group >
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control onChange={(event: any) => this._handleChange('password', event.target.value)} type="password" placeholder="Password" />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Select Bank</Form.Label>
                                                <Form.Control onChange={(event: any) => this._handleChange('bankId', event.target.value)} as="select">
                                                    <option></option>
                                                    <option value={1}>普通</option>
                                                    <option value={2}>当座</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Select Bank Branch</Form.Label>
                                                <Form.Control onChange={(event: any) => this._handleChange('branchId', event.target.value)} as="select">
                                                    <option></option>
                                                    <option value={1}>普通</option>
                                                    <option value={2}>当座</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Select Account type</Form.Label>
                                                <Form.Control onChange={(event: any) => this._handleChange('accountType', event.target.value)} as="select">
                                                    <option></option>
                                                    <option value={1}>普通</option>
                                                    <option value={2}>当座</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group >
                                                <Form.Label>Account Name</Form.Label>
                                                <Form.Control onChange={(event: any) => this._handleChange('accountName', event.target.value)} type="email" placeholder="Enter Account Name" />
                                            </Form.Group>
                                            <Form.Group >
                                                <Form.Label>Account Number</Form.Label>
                                                <Form.Control onChange={(event: any) => this._handleChange('accountNumber', event.target.value)} type="email" placeholder="Enter Account Number" />
                                            </Form.Group>
                                            <AppButton onClick={this._attemptRegister} block buttonText={'Sign Up'} />
                                        </Form>

                                        <Link to={'/auth/signin'} className={'linkStyle'}>Already have an account? Sign In</Link>
                                    </div>

                                </div>
                            </div>

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <ToastContainer />
            </div>
        );
    }
}
