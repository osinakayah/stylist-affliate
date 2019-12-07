import React from "react";
import Avatar from 'react-avatar';

import './styles/DrawerSideContentStyles.scss'
const DrawerSideContent: React.FC = () => {

    return (
        <div className={'side-drawer-container'}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30px'}}>
                <Avatar style={{marginTop: '12em'}} round name="Foo Bar" />
            </div>
            <div>

            </div>
            <ul className={'side-menu-list'}>
                <li><a>Dashboard</a></li>
                <li><a>Products</a></li>
                <li><a>Profile</a></li>
            </ul>
        </div>
    );
}

export default DrawerSideContent;
