import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Lecturer from '../entity/lecturer';

export abstract class LecturerService {
    abstract getLectures(): Observable<Lecturer[]>;
}
