import {Formik, Form, FormikValues, FormikProps} from "formik";
import FormikControl from "./FormikControl.tsx";
import * as Yup from 'yup'
import "./Form.scss"
import {KeyValue} from "./Select.tsx";
import {CompType} from "./EnumComponentType.tsx";

function Login() {
    const selectOptions: KeyValue[] = [
        {
            key: 'Select an Option',
            value: ''
        },
        {
            key: 'Admin',
            value: 'option1'
        },
        {
            key: 'Crew',
            value: 'option2'
        },
        {
            key: 'Customer',
            value: 'option3'
        }
    ]
    const radioOptions: KeyValue[] = [
        {
            key: 'Java',
            value: 'option1'
        },
        {
            key: 'JavaScript',
            value: 'option2'
        },
        {
            key: 'Python',
            value: 'option3'
        }
    ]
    const checkBoxOptions: KeyValue[] = [
        {
            key: 'Spring',
            value: 'option1'
        },
        {
            key: 'React',
            value: 'option2'
        },
        {
            key: 'Django',
            value: 'option3'
        }
    ]
    const initialValues: FormikValues = {
        email: '',
        password: '',
        description: '',
        userType: '',
        language: '',
        framework: null,
        joinDate: new Date()
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Provide proper email!').required('Field is important!'),
        password: Yup.string().required('Field is important!'),
        description: Yup.string().min(30, 'Minimum character length not matching!').required('Field is important!'),
        userType: Yup.string().required('Field is important!'),
        language: Yup.string().required('Field is important!'),
        framework: Yup.array().min(1,'Minimum 1 options required!').required('Field is important!'),
        joinDate: Yup.date().required('Field is important!')
    })
    const onSubmit = (values: FormikValues) => {
        console.log(values)
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {
                (formik: FormikProps<FormikValues>) => (
                    <Form className='card bg-light'>
                        <div className="row">
                            <div className="col-md-6">
                                <FormikControl control={CompType.Input} label='Email' name='email'
                                               placeholder='asdf@email.co.in'/>
                            </div>
                            <div className="col-md-6">
                                <FormikControl control={CompType.Input} label='Password' name='password' type='password'
                                               placeholder='* * * * * *'/>
                            </div>
                        </div>
                        <FormikControl control={CompType.TextArea} label='Description' name='description' minLength={30}
                                       placeholder='I like this product too much. I want to own it right now!'/>
                        <div className="row">
                            <div className="col-md-6">
                                <FormikControl control={CompType.Select} label='User Type' name='userType' options={selectOptions}/>
                            </div>
                            <div className="col-md-6">
                                <FormikControl control={CompType.DatePicker} label='Joining Date' name='joinDate'/>
                            </div>
                        </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <FormikControl control={CompType.Radio} label='Languages' name='language'
                                                       options={radioOptions}/>
                                    </div>
                                    <div className="col-md-6">
                                        <FormikControl control={CompType.CheckBox} label='Frameworks' name='framework'
                                                       options={checkBoxOptions}/>
                                    </div>
                                </div>
                                <hr className='m-2'/>
                                <button type='submit' className='btn btn-primary w-100 mt-3'
                                        disabled={!formik.isValid}>SUBMIT
                                </button>
                    </Form>
                )
            }
        </Formik>
);
}

export default Login;