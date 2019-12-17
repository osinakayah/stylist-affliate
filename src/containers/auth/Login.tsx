import React, {PureComponent} from 'react'
import {
    MDBContainer,
    MDBRow,
    MDBCol, MDBIcon,
} from "mdbreact";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link,  } from 'react-router-dom';
import Form  from 'react-bootstrap/Form';

import './styles/LoginStyles.scss'
import AppButton from "../../components/commons/AppButton";
import {AuthService} from "../../services/auth.service";

interface  IProps {
    history: any
}
interface IState {
    email: string,
    password: string,
}

export default class Login extends PureComponent<IProps, IState> {
    attemptLogin = async () => {
        const response: string = await AuthService.userAuth(this.state);
        if (response.length > 0){
            toast(response);
        }
        else {
            this.gotoProductsList();
        }
    }
    gotoProductsList = () => {
        this.props.history.push('/product')
    }
    handleChange = (key: string, value: string) => {
        // @ts-ignore
        this.setState({[key]: value})

    }
    render(): React.ReactNode {
        return (
            <div style={{padding: '7%', backgroundColor: '#e2dccc'}}>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol className={'offset-md-3 offset-lg-4 offset-sm-1'} xs={'12'} sm={'10'} md={'6'} lg={'4'}>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <div className={'form-container'}>

                                    <MDBIcon className={'iconStyle'} size={'2x'} icon={'lock'}/>
                                    <h6 className={'text-center'}>スタイリストログイン</h6>
                                    <h3 className={'mt-3 text-center'}>サインイン</h3>
                                    <div style={{marginTop: '7%'}}>
                                        <Form className={'mb-3'}>

                                            <Form.Group>
                                                <Form.Label>電子メールアドレス</Form.Label>
                                                <Form.Control onChange={(event: any) => this.handleChange('email', event.target.value)} type="email" placeholder="メールアドレスを入力して" />
                                            </Form.Group>
                                            <Form.Group >
                                                <Form.Label>パスワード</Form.Label>
                                                <Form.Control onChange={(event: any) => this.handleChange('password', event.target.value)} type="password" placeholder="パスワード" />
                                            </Form.Group>
                                            <AppButton onClick={this.attemptLogin} block buttonText={'サインイン'} />
                                        </Form>

                                        <Link to={'/auth/signup'} className={'linkStyle'}>アカウントを持っていないのですか？サインアップ</Link>
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
