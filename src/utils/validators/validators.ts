
export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value) => {
    if (value) return undefined;

    return "Field is required";
}


export const maxLengthValidateCreator = (maxLength: number): FieldValidatorType  => (value) => {
    if(value.length > maxLength) return  `Max length is ${maxLength} symbols`;
    return undefined
}

export const inputMaxLengthValidate = maxLengthValidateCreator(10)
export const textAreaMaxLengthValidate = maxLengthValidateCreator(20)
