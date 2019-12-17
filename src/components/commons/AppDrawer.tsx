import React, {PureComponent} from 'react';
import "@material/react-drawer/dist/drawer.css";
import './styles/AppDrawerStyless.scss'
import {
    MDBCollapse, MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavItem,
    MDBNavLink
} from "mdbreact";

interface IProps {
    activeRoute: string
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
    toggleCollapse = () => {
        this.setState({ showNavBar: !this.state.showNavBar });
    }


    render() {
        return (
            <div>
                <MDBNavbar color="default-color" dark expand="md">
                    <MDBNavbarBrand>
                        <strong className="white-text">アフィリエイトマネージャー</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.showNavBar} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem active={this.props.activeRoute=== '/product'}>
                                <MDBNavLink to="/product">製品</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem active={this.props.activeRoute=== '/profile'}>
                                <MDBNavLink to="/profile">マイページ</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
                {this.props.children}
            </div>
        );
    }
}
