import React, {PureComponent} from 'react'
import AppDrawer from '../../commons/AppDrawer';
import {withRouter} from "react-router";


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
                <div style={{padding: '3%'}}>
                    <section className="text-center">


                    </section>
                </div>
            </AppDrawer>
        );
    }
}

export default withRouter(props => <Profile {...props}/>);
