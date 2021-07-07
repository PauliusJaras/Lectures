const localStorageService = new class{
    get students()
    {
        return JSON.parse(localStorage.getItem('students')) ?? [];
    }

    get lectures(){
        return JSON.parse(localStorage.getItem('lectures')) ?? [];
    }

    set students(student){
        localStorage.setItem('students',JSON.stringify(student));
    }

    set lectures(lecture){
        localStorage.setItem('lectures',JSON.stringify(lecture));
    }

}