import {ReactNode} from "react";


interface Props {
    children: ReactNode;
}

function TextError({children}: Props) {
    return (
        <small className='text-danger position-absolute end-0 p-1'>
            {children}
        </small>
    );
}

export default TextError;