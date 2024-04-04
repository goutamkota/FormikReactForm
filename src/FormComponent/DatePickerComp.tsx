import {ErrorMessage, Field, FieldProps} from "formik";
import TextError from "./TextError.tsx";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useState} from "react";

interface Props {
    control: string
    label: string;
    name: string;
}

function DatePickerComp({name, label}: Props) {
    const [selected, setSelected] = useState(new Date());
    return (
        <div className='mb-4 position-relative'>
            <label htmlFor={name} className='form-label'>{label}</label>
            <Field name={name}>
                {({field, form}: FieldProps) => (
                    <DatePicker
                        id={name}
                        className='form-control form-control-lg'
                        selected={field.value || selected}
                        onChange={(date: Date) => {
                            form.setFieldValue(name, date).then();
                            setSelected(date)
                        }}/>
                )}
            </Field>
            <TextError><ErrorMessage name={name}/></TextError>
        </div>
    );
}

export default DatePickerComp;