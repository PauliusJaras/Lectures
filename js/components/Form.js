class Form {

    constructor(selector){
        this.form = document.querySelector(selector);
        this.fields = Array.from(this.form).filter(x => ['input', 'select', 'textarea'].includes(x.localName));
    }

    onSubmit = callback => {
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            callback(this.fieldValues);
            this.form.reset();
        });
    }

    scrollToForm = () => {
        this.form.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
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

    onLoad = (e) => {
        const select = document.querySelector('#students');
        const uniqueCourses = [...new Set(e.map(x => x.course))].sort();
        uniqueCourses.forEach(c=> {
            const  optGroup = document.createElement('optgroup');
            optGroup.label = "Course " + c + " Students:";   
        e.forEach(x=> {
            if(x.course === c){
            const option = document.createElement('option');
            option.setAttribute('name', 'students');
            option.value = x.fullName;
            option.appendChild(document.createTextNode(`${x.fullName}`));
            optGroup.appendChild(option);
            select.appendChild(optGroup);
        }
        });
    });
    }

    get fieldValues(){
        return this.fields.reduce((values, field)=> ({
            ...values,
            [field.name]: field.value
        }), {});
    } 
}
