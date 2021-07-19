class StudentModel {

    static create = (...studentData)=> {
      const newStudent = new StudentEntity(studentData);
      localStorageService.students = localStorageService.students.push(newStudent);
      return newStudent;
    }

    static update = () => {

    }

    static delete = (...st) => {
      
    }

    


}