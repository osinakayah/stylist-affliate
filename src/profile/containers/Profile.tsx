import React, {PureComponent} from 'react'
import AppDrawer from '../../commons/AppDrawer';


export default  class Profile extends  PureComponent {
    render(): React.ReactNode {
        return (
            <AppDrawer>
                <h3>Overview</h3>

                <div className='search-bar'>
                    <input className='input' type='search' placeholder='Search customers, transactions, settings' />
                </div>

                <div>
                    Hi Profile
                </div>
            </AppDrawer>
        );
    }
}
