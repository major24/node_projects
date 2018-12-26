export class PostCodeValidatorService {
    isValid(data: string) {
        // Use regex to validate
        // for test, if post code contains > 7 chars, is invalid
        // if post codes starts with Z is invalid
        if (data.length > 7) {
            const resp = { "isValid": false, "error": "Must be 7 chars."};
            return resp;
        }
        if (data.startsWith('Z')) {
            const resp = { "isValid": false, "error": "Should not start with Z"};
            return resp;
        }

        const resp = { "isValid": true, "error": ""};
        return resp;
    }
};