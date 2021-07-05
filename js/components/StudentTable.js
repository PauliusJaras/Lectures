class StudentTable {

    constructor(selector){
        this.selector = selector;
    }

     onload = callback =>{
        const studentTable = document.querySelector('#studentTable').childNodes[3];
        this.selector.forEach(e => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const button = document.createElement('button');
        td1.appendChild(document.createTextNode(`${e.fullName}`));
        td2.appendChild(document.createTextNode(`${e.course}`));
        button.setAttribute('id','remove');
        button.appendChild(document.createTextNode("X"));
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(button);
        studentTable.appendChild(tr);

        });
    }

    onclick = callback => {
        document.querySelector('#studentTable').addEventListener('submit', e =>{
            e.preventDefault();
            callback()
        })

    }

}