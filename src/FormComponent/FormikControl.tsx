import Input from "./Input.tsx";
import TextArea from "./TextArea.tsx";
import Select, {KeyValue} from "./Select.tsx";
import RadioBox from "./RadioBox.tsx";
import CheckBox from "./CheckBox.tsx";
import DatePickerComp from "./DatePickerComp.tsx";

export interface FormProps {
    control: string;
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    minLength?: number;
    maxLength?: number;
    options?: KeyValue[];
}

function FormikControl({...rest}: FormProps) {
    switch (rest.control) {
        case 'input':
            return <Input {...rest}/>
        case 'textarea':
            return <TextArea {...rest} />
        case 'select':
            return <Select {...rest} />
        case 'radio':
            return <RadioBox {...rest} />
        case 'checkbox':
            return <CheckBox {...rest} />
        case 'date':
            return <DatePickerComp {...rest} />
        default:
            return null
    }
}

export default FormikControl;