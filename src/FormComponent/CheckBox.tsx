import {ErrorMessage, Field, FieldProps, FormikValues} from "formik";
import {ChangeEvent} from "react";
import {KeyValue} from "./Select.tsx";
import TextError from "./TextError.tsx";

interface Props {
    control: string;
    label: string;
    name: string;
    type?: string;
    options?: KeyValue[];
}

function CheckBox({name, label, options}: Props) {
    return (
        <div className='mb-4 position-relative'>
            <label className='form-label'>{label}</label>
            <div className="d-flex gap-3">
                <Field name={name}>
                    {
                        ({field, form}: FieldProps<FormikValues>) => {
                            const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
                                const {value, checked} = event.target;
                                const updatedValues: string[]
                                    = checked
                                    ? Array.isArray(field.value) ? [...field.value, value] : [value]
                                    : Array.isArray(field.value) ? field.value.filter((val: string) => val !== value) : [];
                                form.setFieldValue(field.name, updatedValues).then();
                            };
                            return options?.map(({key, value}: KeyValue) => {
                                return (
                                    <div className="form-check form-check-inline" key={key}>
                                        <input type='checkbox' id={key} value={value} className='form-check-input'
                                               checked={field?.value?.includes(value)}
                                               onChange={handleCheckboxChange}/>
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

export default CheckBox;