const validate = schema => input => {
    const { err } = schema.validate(input,{abortEarly: false})

    if(err){
        const result = error.detail.reduce((acc,el) => {
            acc[el.path[0]] = el.message;
            return acc;

        },{})
        return result;
    }
}

export default validate