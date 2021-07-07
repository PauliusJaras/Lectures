const localStorageService = new class{
    get students()
    {
        try {
            return JSON.parse(localStorage.getItem('students')) ?? [];
        } 
        catch(e){
            console.log(e);
            return [];
        }
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