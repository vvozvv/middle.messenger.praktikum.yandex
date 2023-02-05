export type FormData = {
    name: string;
    value: string;
    type: string;
}

export type InputType = 'text' | 'password' | 'email' | 'file' | 'tel';

export type ValidationProps = {
    min?: number;
    max?: number;
    required?: boolean;
    isEmail?: boolean;
    isUsername?: boolean;
    isPassword?: boolean;
    isPhone?: boolean;
    /** name поля input, для сравнения */
    isRetryPassword?: string;
}


export type ProfileResponse = {
    first_name: string,
    second_name: string,
    login: string,
    email: string,
    phone: string,
    password: string,
}
