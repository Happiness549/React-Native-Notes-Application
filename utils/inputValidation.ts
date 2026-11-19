
export type ValidationResult = {
    valid: boolean;
    error: string | string[] | null;
};

export const validateInput = (type: string, value: string): ValidationResult => {

    if (value.trim() === "") {
        return {
            valid: false,
            error: "Input is required",
        };
    }

    if (type === "email") {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            ? { valid: true, error: null }
            : { valid: false, error: "Please insert a valid email" };
    }

    if (type === "password") {
        const lengthErr = "Password should be at least 8 characters long";
        const uppercaseErr = "Password should contain at least one uppercase letter";
        const lowercaseErr = "Password should contain at least one lowercase letter";
        const specialCharErr = "Password should contain at least one special character";
        const digitErr = "Password should contain at least one digit";

        let errors: string[] = [];

        if (!/[A-Z]/.test(value)) {
            errors.push(uppercaseErr);
        }

        if (!/[a-z]/.test(value)) {
            errors.push(lowercaseErr);
        }

        if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]/.test(value)) {
            errors.push(specialCharErr);
        }

        if (!/.{8,}/.test(value)) {
            errors.push(lengthErr);
        }

        if (!/[0-9]/.test(value)) {
            errors.push(digitErr);
        }

        if (errors.length === 0) {
            return {
                valid: true,
                error: null
            };
        }

        return {
            valid: false,
            error: errors
        };
    }

    return {
        valid: true,
        error: null
    };
};


