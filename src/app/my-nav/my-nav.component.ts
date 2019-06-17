import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StudentService } from '../service/student-service';
import Student from '../entity/student';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent implements OnInit {
  defaultImageUrl = 'assets/images/camt.jpg';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    ngOnInit(): void {
    }
  constructor(private breakpointObserver: BreakpointObserver, private studentService: StudentService
    , protected authService: AuthenticationService) {
    }
  hasRole(role: string) {
    return this.authService.hasRole(role);
  }

  get user() {
    return this.authService.getCurrentUser();
  }
  logout() {
    return this.authService.logout();
  }
}
