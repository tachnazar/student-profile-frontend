import Lecturer from './lecturer';

export default class Course {
  id: number;
  courseId: string;
  courseName: string;
  content: string;
  lecturer: Lecturer;
}
