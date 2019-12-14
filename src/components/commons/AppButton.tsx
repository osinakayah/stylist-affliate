import React, {SyntheticEvent} from "react";
import {MDBBtn} from "mdbreact";

import './styles/AppButtonStyle.scss'


interface AppButtonProps {
    outline?: boolean,
    buttonText: string
    block?: boolean,
    onClick?: (event: SyntheticEvent<HTMLButtonElement>) => void;
    href?: string
}

const AppButton: React.FC<AppButtonProps> = ({outline, buttonText, block, onClick, href}) => {
    return (
        <MDBBtn href={href} size={'sm'} onClick={onClick} block={block} outline={outline} className={'app-button'}>
            {buttonText}
        </MDBBtn>
    );
}

export default AppButton;
