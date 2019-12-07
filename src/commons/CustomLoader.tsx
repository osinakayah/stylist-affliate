import Loader from 'react-loader-spinner';
import './styles/LoaderStyles.scss';
import React from 'react';

const CustomLoader: React.FC = () => {
    return (
        <div className="loader-container">
            <Loader type={'Plane'} color={'#ee5535'} width={100} height={100} />
        </div>
    );
}

export default CustomLoader;
