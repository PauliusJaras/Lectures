'use strict'

//Gets localStorage data
let studentList = localStorageService.students;
let lectureList = localStorageService.lectures;

const studentForm = new Form('#studentForm');
const lectureForm = new Form('#lectureForm');
const studentTable = new StudentTable(studentList);
const lectureTable = new LectureTable(lectureList);


//Fills table list with data from localStorage
lectureTable.onLoad();
studentTable.onLoad();

lectureForm.LoadStudentList(studentList);

//On submit adds data to the localStorage
studentForm.onSubmit(addStudent);
lectureForm.onSubmit(addLecture);


//Adds a student to the localStorage
function addStudent(e){
    const student = new Student(e.name, e.course, []);

    if(student.fullName === '' || student.course === ''){
        studentForm.onError('Fields can`t be blank');
    } else if(studentList.every(x=> x.fullName !== student.fullName)){
        studentForm.onSuccess();
        studentList.push(student);
        localStorageService.students = studentList;
    } else {
        studentForm.onError('Student already exists!');
    }
}

//Adds a lecture to the localStorage
function addLecture(e){
    const lecture = new Lecture(e.title, e.course, 
        e.studentLimit, e.startTime, e.endTime, e.students);

        console.log(e);


        if(lecture.title === '' || lecture.course === '' || lecture.studentLimit === ''
        || lecture.startTime === '' || lecture.endTime === ''){
            lectureForm.onError('Fields can`t be blank');
        } else if(lectureList.every(x=> x.title !== lecture.title)){
                lectureForm.onSuccess();
                lectureList.push(lecture);
                localStorageService.lectures = lectureList;
        } else {
            lectureForm.onError('Lecture already exists!');
        }
}

//Removes a student from the localStorage and DOM
function removeStudent(e){
    const studentName = e.target.parentNode.firstChild.textContent;
    const result = studentList.filter(x=> x.fullName !== studentName);
    studentList = result;
    localStorageService.students = result;
    e.target.parentNode.remove();
}

//Removes a lecture from the localStorage and DOM
function removeLecture(e){
    const lectureTitle = e.target.parentNode.firstChild.textContent;
    const result = lectureList.filter(x=> x.title !== lectureTitle);
    lectureList = result;
    localStorageService.lectures = result;
    e.target.parentNode.remove();
}

//Fill student form with selected data
function updateStudent(e){

    const studentName = e.target.parentNode.firstChild.textContent;
    const student = studentList.filter(x=> x.fullName === studentName);
    const name = document.querySelector('#name');
    const course = document.querySelector('#course');
    name.value = student[0].fullName;
    course.value = student[0].course;
    studentForm.scrollToForm();

}

//Fill lecture form with selected data
function updateLecture(e){

    const lectureTitle = e.target.parentNode.firstChild.textContent;
    const lecture = lectureList.filter(x=> x.title === lectureTitle);
    const title = document.querySelector('#title');
    const course = document.querySelector('#lectureForm > #course');
    const studentLimit = document.querySelector('#studentLimit');
    const startTime = document.querySelector('#startTime');
    const endTime = document.querySelector('#endTime');
    title.value = lecture[0].title;
    course.value = lecture[0].course;
    studentLimit.value = lecture[0].studentLimit;
    startTime.value = lecture[0].startTime;
    endTime.value = lecture[0].endTime; 
    lectureForm.scrollToForm();

}

//Add selected student to the lecture

const button = document.querySelector('.studentAdd');
const button2 = document.querySelector('.studentRemove');
button.addEventListener('click', onClickAdd);
button2.addEventListener('click', OnClickRemove);

function onClickAdd(){
    const select = document.querySelector('#students');
    if(select.value != ''){
    const list = document.querySelector('#studentList');
    const option = document.createElement('option');
    option.appendChild(document.createTextNode(select.value));
    option.value = select.value;
    option.id = select.selectedIndex;
    list.appendChild(option);
    const index = select.options[select.selectedIndex]
    index.setAttribute('disabled', 'disabled');
    select.selectedIndex = 0;
    } else{
        return null;
    }     
}

//Remove selected student from the lecture
function OnClickRemove(){
    const list = document.querySelector('#studentList');
    const select = document.querySelector('#students');
    const index = select.options[list.options[list.selectedIndex].id];
    index.removeAttribute('disabled');
    list.remove(list.selectedIndex);
}