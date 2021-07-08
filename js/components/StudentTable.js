class StudentTable {

    constructor(selector){
        this.selector = selector;
    }

     onLoad = () =>{
        const studentTable = document.querySelector('#studentTable').childNodes[3];
        this.selector.forEach(e => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const button = document.createElement('button');
        const button2 = document.createElement('button');
        button.addEventListener('click', removeStudent);
        button.setAttribute('id','remove');
        button.appendChild(document.createTextNode("Delete"));
        button2.addEventListener('click', updateStudent);
        button2.setAttribute('id','update');
        button2.appendChild(document.createTextNode("Edit"));
        td1.appendChild(document.createTextNode(`${e.fullName}`));
        td2.appendChild(document.createTextNode(`${e.course}`));
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(button);
        tr.appendChild(button2);
        studentTable.appendChild(tr);

        });
    }
}