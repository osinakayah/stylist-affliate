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

import CustomLoader from '../../components/commons/CustomLoader'
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
    accountName: string,
    branches: any[],
    banks: any[]
    isLoadingBranch: boolean
}

export default class Register extends PureComponent<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        // @ts-ignore
        this.state = {
            branches: [],
            banks: [],
            isLoadingBranch: false
        }
    }
    componentDidMount(): void {
        this.fetchBank();
    }

    attemptRegister = async () => {
        const { banks, branches, isLoadingBranch,  ...payload } = this.state;

        const response = await AuthService.registerUser(payload);
        if (response.length > 0){
            toast(response);
        }
        else {
            this.gotoLoginScreen()
        }
    }
    gotoLoginScreen = () => {
        this.props.history.push('/auth/signin')
    }
    handleChange = (key: string, value: string) => {
        // @ts-ignore
        this.setState({[key]: value})

        if (key === 'bankId'){
            this.fetchBranchesForBank(value)
        }



    }
    renderBankList = () => {

        return this.state.banks.map((bank) => {
            return <option key={bank.code} value={bank.code}>{bank.name}</option>
        });
    }
    fetchBank = async () => {
        const response = await AuthService.getBanks();
        this.setState({
            banks: response,
        })
    }



    fetchBranchesForBank = async (bankID: string) => {
        this.setState({isLoadingBranch: true})
        const response = await AuthService.getBankBranches(bankID);
        this.setState({
            branches: response,
            isLoadingBranch: false
        })

    }
    renderBranches = () => {
        return this.state.branches.map((singleBranch, index) => {
            return <option key={index} value={singleBranch.code}>{singleBranch.name}</option>
        });
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
                                            <Form.Group>
                                                <Form.Label>銀行を選択</Form.Label>
                                                <Form.Control onChange={(event: any) => this.handleChange('bankId', event.target.value)} as="select">
                                                    <option></option>
                                                    {this.renderBankList()}
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>銀行支店を選択</Form.Label>
                                                {this.state.isLoadingBranch ? <CustomLoader/>: null}
                                                <Form.Control onChange={(event: any) => this.handleChange('branchId', event.target.value)} as="select">
                                                    <option></option>
                                                    {this.renderBranches()}
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>アカウントの種類を選択</Form.Label>

                                                <Form.Control onChange={(event: any) => this.handleChange('accountType', event.target.value)} as="select">
                                                    <option></option>
                                                    <option value={1}>普通</option>
                                                    <option value={2}>当座</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group >
                                                <Form.Label>アカウント名</Form.Label>
                                                <Form.Control onChange={(event: any) => this.handleChange('accountName', event.target.value)} type="email" placeholder="アカウント名を入力してください" />
                                            </Form.Group>
                                            <Form.Group >
                                                <Form.Label>口座番号</Form.Label>
                                                <Form.Control onChange={(event: any) => this.handleChange('accountNumber', event.target.value)} type="email" placeholder="アカウント番号を入力してください" />
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
