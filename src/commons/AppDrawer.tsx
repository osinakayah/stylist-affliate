import React, {PureComponent} from 'react';
import Drawer, {DrawerAppContent, DrawerHeader, DrawerTitle} from '@material/react-drawer';
import "@material/react-drawer/dist/drawer.css";

import DrawerSideContent from './DrawerSideContent'
import './styles/AppDrawerStyless.scss'

interface IProps {
    activeRoute: string
}

interface IState {
    open: boolean;
}



export default class AppDrawer extends PureComponent<IProps, IState > {
    constructor(props: any){
        super(props);
        this.state = {
            open: true
        }
    }


    render() {
        return (
            <div>
                <Drawer
                    className={'side-drawer-container '}
                    dismissible
                    open={this.state.open}
                >
                    <DrawerSideContent
                        activeRoute={this.props.activeRoute}
                    />
                </Drawer>
                <DrawerAppContent>
                    {this.props.children}
                </DrawerAppContent>
            </div>
        );
    }
}
