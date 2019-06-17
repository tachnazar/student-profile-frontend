import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }
  login(username: string, password: string) {
    return this.http.post<any>(environment.authenticationApi,
      { username: username, password: password })
      .pipe(map(data => {
        if (data.token && data.user) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('currentUser', JSON.stringify(data.user));
        }
        return data;

      }));
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
  }

  getToken(): string {
    const token = localStorage.getItem('token');
    return token ? token : '';
  }

  getCurrentUser() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      return JSON.parse(currentUser);
    } else {
      return null;
    }
  }

  hasRole(role: string): boolean {
    const user: any = this.getCurrentUser();

    if (user) {
      const roleList: string[] = role.split(',');
      for (let j = 0; j < roleList.length; j++) {
        const authList = user.authorities;
        const userRole = 'ROLE_' + roleList[j].trim().toUpperCase();
        for (let i = 0; i < authList.length; i++) {
          if (authList[i].name === userRole) {
            return true;
          }
        }
      }
      return false;
    }
  }
}
