import React from 'react';
import Loader from 'react-loader-spinner';

import './styles/LoaderStyles.scss';


const CustomLoader: React.FC = () => {
    return (
        <div className="loader-container">
            <Loader type={'Plane'} color={'#3f51b5'} width={100} height={100} />
        </div>
    );
}

export default CustomLoader;
