import { InputType, ValidationProps } from '../../core/types/common';

export type TInputProps = {
    name: string;
    label: string;
    placeholder: string;
    type: InputType;
    className?: string;
    value?: string;
    onBlur?: () => void;
    onFocus?: () => void;
    validation?: ValidationProps;
}
