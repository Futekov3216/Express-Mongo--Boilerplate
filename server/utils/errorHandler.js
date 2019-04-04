module.exports = (errors,formHandler) => {
        let {
            name
        } = formHandler;
        
        if(!name){
            errors.push({ text: 'Please add a name'});
        }
        return errors;
}