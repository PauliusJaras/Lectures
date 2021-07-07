class LectureTable{
    
    constructor(selector){
        this.selector = selector;
    }

     onload = callback =>{
        const studentTable = document.querySelector('#lectureTable').childNodes[3];
        this.selector.forEach(e => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const td5 = document.createElement('td');
        const td6 = document.createElement('td');
        const button = document.createElement('button');
        const button2 = document.createElement('button');
        button.addEventListener('click', removeLecture);
        button.setAttribute('id','remove');
        button.appendChild(document.createTextNode("X"));
        button2.addEventListener('click', updateLecture);
        button2.setAttribute('id','update');
        button2.appendChild(document.createTextNode("U"));
        td1.appendChild(document.createTextNode(`${e.title}`));
        td2.appendChild(document.createTextNode(`${e.course}`));
        td3.appendChild(document.createTextNode(`${e.studentLimit}`));
        td4.appendChild(document.createTextNode(`${e.startTime}`));
        td5.appendChild(document.createTextNode(`${e.endTime}`));
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(button);
        tr.appendChild(button2);
        studentTable.appendChild(tr);

        });
    }


}