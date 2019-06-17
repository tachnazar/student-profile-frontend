import { Injectable } from '@angular/core';
import Admin from '../entity/admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class AdminService {
  abstract getAdmins(): Observable<Admin[]>;
}
