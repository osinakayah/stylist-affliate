import React, {PureComponent} from 'react'
import AppDrawer from '../../commons/AppDrawer';
import {withRouter} from "react-router";
import Avatar from 'react-avatar';
import {
    MDBCard,
    MDBRow,
    MDBCol,
    MDBCardImage,
    MDBIcon,
    MDBCardTitle,
    MDBContainer,
} from "mdbreact";


interface IProps {
    location: any
}

interface IState {

}

class Profile extends PureComponent<IProps, IState> {
    render(): React.ReactNode {
        const {pathname} = this.props.location;
        return (
            <AppDrawer activeRoute={pathname}>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol className={'offset-md-5  offset-lg-5 offset-sm-1 mb-lg-0 mb-5'}  xs={'12'} lg="2" md="2" >
                            <Avatar style={{marginTop: '12%', marginLeft: 'auto', marginRight: 'auto'}} round name="John Doe" />
                            <h5 className="font-weight-bold mt-4 mb-3 text-center">Anna Williams</h5>
                            <p className="text-uppercase blue-text text-center">Expert Sales Rep</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

            </AppDrawer>
        );
    }
}

export default withRouter(props => <Profile {...props}/>);
