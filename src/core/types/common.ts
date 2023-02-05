export type FormData = {
    name: string;
    value: string;
    type: string;
}

export type InputType = 'text' | 'password' | 'email' | 'file';

export type ValidationProps = {
    min?: number;
    max?: number;
    required?: number;
    isEmail?: number;
    isUsername?: number;
}
