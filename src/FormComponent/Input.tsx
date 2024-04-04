import {Field, ErrorMessage} from "formik";
import TextError from "./TextError.tsx";
import {ImEye} from "react-icons/im";
import {RiEyeCloseFill} from "react-icons/ri";
import {useState} from "react";
import "./Form.scss"

interface Props {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    minLength?: number;
    maxLength?: number;
}

function Input({name, label, type, placeholder, minLength, maxLength}: Props) {
    const type2Bool = type === 'password'
    const [inputType, setInputType] = useState(type2Bool)
    return (
        <div className='mb-4 position-relative'>
            <label htmlFor={name} className='form-label'>{label}</label>
            <div style={{position: 'relative'}}>
                <Field name={name} id={name} type={inputType ? 'password' : 'text'} placeholder={placeholder}
                       minLength={minLength} maxLength={maxLength}
                       className='form-control form-control-lg'/>
                {
                    type2Bool &&
                    <span className='showIcon' onClick={() => setInputType(!inputType)}>
                    {!inputType ? <ImEye/> : <RiEyeCloseFill/>}
                    </span>
                }
            </div>
            <TextError><ErrorMessage name={name}/></TextError>
        </div>
    );
}

export default Input;