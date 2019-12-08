import React, {PureComponent} from 'react';
import "@material/react-drawer/dist/drawer.css";
import './styles/AppDrawerStyless.scss'
import {
    MDBCollapse,
    MDBFormInline, MDBNavbar,
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
                <MDBNavbar color="indigo" dark expand="md">
                    <MDBNavbarBrand>
                        <strong className="white-text">Stylists</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.showNavBar} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem active={this.props.activeRoute=== '/product'}>
                                <MDBNavLink to="/product">Products</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem active={this.props.activeRoute=== '/profile'}>
                                <MDBNavLink to="/profile">My Page</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBFormInline waves>
                                    <div className="md-form my-0">
                                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                                    </div>
                                </MDBFormInline>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
                {this.props.children}
            </div>
        );
    }
}
