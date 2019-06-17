import { Component, OnInit } from '@angular/core';
import Student from '../../entity/student';
import { StudentService } from '../../service/student-service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-students-add',
  templateUrl: './students.add.component.html',
  styleUrls: ['./students.add.component.css']
})
export class StudentsAddComponent implements OnInit {


  model: Student = new Student();
  fb: FormBuilder = new FormBuilder();
  // sf stand for student form validatiors
  sf: FormGroup;
  validation_messages = {
    'studentId': [
      { type: 'required', message: 'student id is required' },
      { type: 'maxlength', message: 'student id must be 10 digit' },
      { type: 'minlength', message: 'student id must be 10 digit' },
      { type: 'pattern', message: 'the student id must be number' }
    ],
    'name': [
      { type: 'required', message: 'the name is required' }
    ],
    'surname': [
      { type: 'required', message: 'the surname is required' }
    ]
    ,
    'penAmount': [
      { type: 'required', message: 'the penAmount is required' },
      { type: 'pattern', message: 'please enter number' }
    ]
    ,
    'image': []
    ,
    'description': []
  };
  constructor(private studentService: StudentService, private router: Router) {

  }
  uploadEndPoint: string;
  uploadedUrl: string;
  ngOnInit(): void {
    this.uploadEndPoint = environment.uploadApi;
    this.sf = this.fb.group({
      studentId: [null, Validators.compose(
        [Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern('[0-9]+')])],
      name: [null, Validators.required],
      surname: [null, Validators.required],
      penAmount: [null, Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]+')])
      ],
      image: [null],
      description: [null]

    });
  }

  upQuantity(student: Student) {
    student.penAmount++;
  }

  downQuantity(student: Student) {
    if (student.penAmount > 0) {
      student.penAmount--;
    }
  }
  onSubmit() {
    this.model = this.sf.value;
    this.model.image = this.uploadedUrl;
    this.studentService.saveStudent(this.model)
      .subscribe((student) => {
        this.router.navigate(['/detail', student.id]);
      }, (error) => {
        alert('could not save value');
      });
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  processReturnFile(file: File, event: any): void {
    if (event.event.type === 'load') {
      console.log(event.event.target.response);
      this.uploadedUrl = event.event.target.response;
    }
  }

  isUploadedFile(): boolean {
    return this.uploadedUrl != null;
  }
}
