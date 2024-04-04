import {Field, ErrorMessage, FieldProps, FormikValues} from "formik";
import TextError from "./TextError.tsx";
import "./Form.scss"
import {KeyValue} from "./Select.tsx";
import {ChangeEvent} from "react";

interface Props {
    control: string;
    label: string;
    name: string;
    type?: string;
    options?: KeyValue[];
}

function RadioBox({name, label, options}: Props) {
    return (
        <div className='mb-4 position-relative'>
            <label className='form-label'>{label}</label>
            <div className="d-flex gap-3">
                <Field name={name}>
                    {
                        ({field, form}: FieldProps<FormikValues>) => {
                            const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
                                form.setFieldValue(field.name, event.target.value).then();
                            };
                            return options?.map(({key, value}: KeyValue) => {
                                return (
                                    <div className="form-check form-check-inline" key={key}>
                                        <input type='radio' id={key} value={value} className='form-check-input'
                                               checked={field?.value?.toString() === value}
                                               onChange={handleRadioChange}/>
                                        <label htmlFor={key} className='form-check-label'>{key}</label>
                                    </div>
                                )
                            })
                        }
                    }
                </Field>
            </div>
            <TextError><ErrorMessage name={name}/></TextError>
        </div>
    );
}

export default RadioBox;