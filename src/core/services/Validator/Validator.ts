export class Validator {
    isValidLogin(value: string): boolean {
        return this.isValidByRegex([/[0-9a-z-_]{3,20}/i, /[a-z-_]/i], value);
    }

    isValidPassword(value: string): boolean {
        return this.isValidByRegex(
            [/[0-9a-z-_]{8,40}/i, /[A-Z]+/, /\d+/],
            value
        );
    }

    isValidEmail(value: string): boolean {
        return this.isValidByRegex(
            /[0-9a-z-_.]+@[a-z0-9-]+.[a-z]{2,3}/i,
            value
        );
    }

    isValidByRegex(regex: RegExp | RegExp[], value: string): boolean {
        if (Array.isArray(regex)) {
            return regex.every((r) => r.test(value));
        }

        return regex.test(value);
    }

    isEmpty(value: string): boolean {
        return value === "";
    }
}
