class LectureTable{
    
    constructor(selector){
        this.selector = selector;
    }

     onload = callback =>{
        const studentTable = document.querySelector('#lectureTable').childNodes[3];
        this.selector.forEach(e => {
        const div = document.createElement('div');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const td5 = document.createElement('td');
        td1.appendChild(document.createTextNode(`${e.title}`));
        td2.appendChild(document.createTextNode(`${e.course}`));
        td3.appendChild(document.createTextNode(`${e.studentLimit}`));
        td4.appendChild(document.createTextNode(`${e.startTime}`));
        td5.appendChild(document.createTextNode(`${e.endTime}`));
        div.appendChild(td1);
        div.appendChild(td2);
        div.appendChild(td3);
        div.appendChild(td4);
        div.appendChild(td5);
        studentTable.appendChild(div);

        });
    }


}