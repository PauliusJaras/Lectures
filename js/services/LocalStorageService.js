const LocalStorageService = new class {
    get students() {
        return JSON.parse(localStorage.getItem('students')) ?? [];
    }

    get lectures() {
        return JSON.parse(localStorage.getItem('lectures')) ?? [];
    }

    set students(students) {
        localStorage.setItem('students', JSON.stringify(students));
    }

    set lectures(students) {
        localStorage.setItem('lectures', JSON.stringify(students));
    }

}