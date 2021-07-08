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

    onSuccess = () => {
        const div = document.createElement('div');
        div.className= 'bar success';
        div.appendChild(document.createTextNode('Entry Added To The List!'));
        this.form.appendChild(div);
        setTimeout(()=>{
                div.remove()
        },3000)
    }
    
    onError = (e) => {
        const div = document.createElement('div');
        div.className= 'bar error';
        div.appendChild(document.createTextNode(e));
        this.form.appendChild(div);
        setTimeout(()=>{
                div.remove()
        },3000)
    }

    get fieldValues(){
        return this.fields.reduce((values, field)=> ({
            ...values,
            [field.name]: field.value,
        }), {});
    } 
}
