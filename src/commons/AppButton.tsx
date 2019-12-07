import React from "react";
import {MDBBtn} from "mdbreact";

import './styles/AppButtonStyle.scss'


type AppButtonProps = {
    outline?: boolean,
    buttonText: string
    block?: boolean
}

const AppButton: React.FC<AppButtonProps> = ({outline, buttonText, block}) => {
    return (
        <MDBBtn block={block} outline={outline} className={'app-button'}>
            {buttonText}
        </MDBBtn>
    );
}

export default AppButton;
