import {Field, ErrorMessage} from "formik";
import TextError from "./TextError.tsx";
import "./Form.scss"

interface Props {
    label: string;
    name: string;
    placeholder?: string;
    minLength?: number;
    maxLength?: number;
}

function TextArea({name, label, placeholder, minLength, maxLength}: Props) {
    return (
        <div className='mb-4 position-relative'>
            <label htmlFor={name} className='form-label'>{label}</label>
            <Field className='form-control form-control-lg'
                   as='textarea'
                   name={name}
                   id={name}
                   placeholder={placeholder}
                   minLength={minLength} maxLength={maxLength}/>
            <TextError><ErrorMessage name={name}/></TextError>
        </div>
    );
}

export default TextArea;