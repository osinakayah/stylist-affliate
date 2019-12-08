import React, {SyntheticEvent} from "react";
import {MDBBtn} from "mdbreact";

import './styles/AppButtonStyle.scss'


type AppButtonProps = {
    outline?: boolean,
    buttonText: string
    block?: boolean,
    onClick: (event: SyntheticEvent<HTMLButtonElement>) => void;
}

const AppButton: React.FC<AppButtonProps> = ({outline, buttonText, block, onClick}) => {
    return (
        <MDBBtn size={'sm'} onClick={onClick} block={block} outline={outline} className={'app-button'}>
            {buttonText}
        </MDBBtn>
    );
}

export default AppButton;
