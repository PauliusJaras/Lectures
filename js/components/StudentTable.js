class StudentTable {

    constructor(selector){
        this.selector = selector;
    }

     onload = callback =>{
        const studentTable = document.querySelector('#studentTable').childNodes[3];
        this.selector.forEach(e => {
        const div = document.createElement('div');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const button = document.createElement('button');
        td1.appendChild(document.createTextNode(`${e.fullName}`));
        td2.appendChild(document.createTextNode(`${e.course}`));
        button.setAttribute('id','remove');
        button.appendChild(document.createTextNode("X"));
        div.appendChild(td1);
        div.appendChild(td2);
        div.appendChild(button);
        studentTable.appendChild(div);

        });
    }

    onclick = callback => {
        document.querySelector('#studentTable').addEventListener('submit', e =>{
            e.preventDefault();
            callback()
        })

    }

}