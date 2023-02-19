import {PAGE} from "../../modules/router";
import Block from "../Block";

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

export type TAuthUser = {
    login: string;
    password: string,
}

export type TEvents = Record<string, (e: Event) => void>;

export type Indexed<T = unknown> = {
    [key in string]: T;
};

export interface IPage {
    path: PAGE | PAGE[];
    block: typeof Block;
    props?: Record<string, unknown>;
}