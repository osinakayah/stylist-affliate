import React from "react";
import Avatar from 'react-avatar';

import './styles/DrawerSideContentStyles.scss'
import {Link} from "react-router-dom";
import {StorageService} from "../../services/storage.service";
import {StorageKeys} from "../../services/StorageKeys";

interface DrawerSideContentProps {
    activeRoute: string,
}

const DrawerSideContent: React.FC<DrawerSideContentProps> = ({activeRoute}) => {

    return (
        <div className={'side-drawer-container'}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30px'}}>
                <Avatar style={{marginTop: '12em'}} round name={StorageService.getData(StorageKeys.fullName) ? StorageService.getData(StorageKeys.fullName): ''} />
            </div>

            <ul className={'side-menu-list'}>
                <li className={activeRoute==='/product'? 'active-link': ''}><Link to={'/product'} href={'/product'}>Products</Link></li>
                <li className={activeRoute==='/profile'? 'active-link': ''}><Link to={'/profile'} href={'/profile'}>Profile</Link></li>
            </ul>
        </div>
    );
}

export default DrawerSideContent;
