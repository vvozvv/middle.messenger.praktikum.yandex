export type TChangePassword = {
    oldPassword: string;
    newPassword: string;
}

export type TFormPassword = TChangePassword & {
    passwordSecond: string;
}