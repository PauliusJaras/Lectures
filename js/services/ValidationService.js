class ValidationService {
    constructor(validationSchema) {
        this.validationSchema = validationSchema;
    }

    validate = (values) => {
        const errors = {};
        for (const fieldName in values) {
            const fieldValidators = this.validationSchema[fieldName];
            fieldValidators.forEach(validator => {
                const validationResult = validator(values[fieldName]);
                if(typeof validationResult === "string"){
                    if(!errors[fieldName]){
                        errors[fieldName] = [];
                    } 
                    errors[fieldName].push(validationResult);
                }
            });
        }
        return Object.keys(errors).length === 0 ? true : errors;
    };
}