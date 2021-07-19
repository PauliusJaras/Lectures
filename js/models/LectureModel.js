class LectureModel {

    static create = (...lectureData)=> {
        const newLecture = new LectureEntity(lectureData);
        localStorageService.lectures = localStorageService.leectures.push(newLecture);
        return newLecture;
      }
  
      static update = () => {
  
      }
  
      static delete = (...st) => {
        
      }

}