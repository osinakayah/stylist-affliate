import React, {PureComponent} from 'react';
import "@material/react-drawer/dist/drawer.css";
import './styles/AppDrawerStyless.scss'
import DrawerSideContent from './DrawerSideContent'
import Drawer from '@material/react-drawer';
import {
    MDBBtn, MDBIcon,
} from "mdbreact";

interface IProps {
    activeRoute: string
    signOut: () => void
}

interface IState {
    showNavBar: boolean
}



export default class AppDrawer extends PureComponent<IProps, IState > {
    constructor(props: any){
        super(props);
        this.state = {
            showNavBar: false
        }
    }

    render() {
        return (
            <div >
                <Drawer
                    style={{backgroundColor: '#161616'}}
                    modal
                    open={this.state.showNavBar}
                    onClose={() => this.setState({showNavBar: false})}
                >
                    <DrawerSideContent activeRoute={this.props.activeRoute}/>
                </Drawer>
                <div>
                    <div style={{backgroundColor: '#2bbbad'}}>
                        <span>
                            <MDBBtn onClick={() => this.setState({showNavBar: !this.state.showNavBar})} style={{backgroundColor: '#2bbbad'}} size={'sm'}>
                                <MDBIcon icon="bars" />
                            </MDBBtn>
                        </span>
                        <span style={{color: 'white'}}>商品一覧</span>
                        <span className={'float-right'}>
                            <MDBBtn onClick={this.props.signOut} style={{backgroundColor: '#2bbbad'}} size={'sm'}>
                                <MDBIcon  icon="sign-out-alt" />
                            </MDBBtn>
                        </span>
                    </div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
