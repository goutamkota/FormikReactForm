import {Field, ErrorMessage} from "formik";
import TextError from "./TextError.tsx";
import "./Form.scss"

interface Props {
    label: string;
    name: string;
    options?: KeyValue[]
}

export interface KeyValue {
    key: string;
    value: string
}

function Select({name, label, options}: Props) {
    return (
        <div className='mb-4 position-relative'>
            <label htmlFor={name} className='form-label'>{label}</label>
            <Field as='select' name={name} id={name} className='form-select form-select-lg'>
                {
                    options?.map(({key, value}: KeyValue, index: number) => {
                        return (
                            <option key={index} value={value}>{key}</option>
                        )
                    })
                }
            </Field>
            <TextError><ErrorMessage name={name}/></TextError>
        </div>
    );
}

export default Select;