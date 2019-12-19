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
}

export default class Register extends PureComponent<IProps, IState> {


    attemptRegister = async () => {


        const response = await AuthService.registerUser(this.state);
        if (response.length > 0){
            toast(response);
        }
        else {
            toast('登録成功、メールを確認してください');
        }
    }

    handleChange = (key: string, value: string) => {
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
                                    <h6 className={'text-center'}>スタイリスト登録</h6>
                                    <h3 className={'mt-3 text-center'}>サインアップ</h3>
                                    <div style={{marginTop: '7%'}}>
                                        <Form className={'mb-3'}>
                                            <Form.Group>
                                                <Form.Label>フルネーム</Form.Label>
                                                <Form.Control onChange={(event: any) => this.handleChange('fullName', event.target.value)} type="text" placeholder="氏名を入力してください" />
                                            </Form.Group>

                                            <Form.Group>
                                                <Form.Label>電子メールアドレス</Form.Label>
                                                <Form.Control onChange={(event: any) => this.handleChange('email', event.target.value)} type="email" placeholder="メールアドレスを入力して" />
                                            </Form.Group>
                                            <Form.Group >
                                                <Form.Label>パスワード</Form.Label>
                                                <Form.Control onChange={(event: any) => this.handleChange('password', event.target.value)} type="password" placeholder="パスワード" />
                                            </Form.Group>
                                            <AppButton onClick={this.attemptRegister} block buttonText={'サインアップ'} />
                                        </Form>

                                        <Link to={'/auth/signin'} className={'linkStyle'}>すでにアカウントをお持ちですか？サインイン</Link>
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
