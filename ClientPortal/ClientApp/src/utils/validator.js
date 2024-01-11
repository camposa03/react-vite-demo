import isEmail from 'validator/lib/isEmail';

export default function validationRules(inputField = null) {

    const options = {
        required: { required: "Required" },
        password: {
            required: "Password is required",
            minLength: {
                value: 3,
                message: "Password must have at least 3 characters"
            }
        }
    };

    return options;
}
export function matchPassword(inputField) {
    return {
        required: "Required",
        validate: value => {
            return value === inputField || "Passwords must match";
        }
    }
}
export function isEmailAddress(value) {
    return {
        validate: value => {
            return isEmail(value) || "Invalid e-mail address"
        }
    }
}
