import { Injectable } from '@angular/core';
import { AdminService } from './admin.service';
import { HttpClient } from '@angular/common/http';
import Admin from '../entity/admin';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminServerService extends AdminService {
  constructor(private http: HttpClient) { super(); }
  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(environment.adminApi);
  }
}
