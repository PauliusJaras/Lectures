class Form {

    constructor(selector){
        this.form = document.querySelector(selector);
        this.fields = Array.from(this.form).filter(x => ['input', 'select', 'textarea'].includes(x.localName))
    }

    onSubmit = callback => {
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            callback(this.fieldValues);
            this.form.reset();
        });
    }

    get fieldValues(){
        return this.fields.reduce((values, field)=> ({
            ...values,
            [field.name]: field.value,
        }), {});
    } 
}
