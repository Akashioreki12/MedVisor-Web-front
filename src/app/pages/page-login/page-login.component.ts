import { Component } from '@angular/core';
import { SvgLoginComponent } from "../../../assets/Svgs/svg-login/svg-login.component";
import { UserDto } from '../../../gs-api/src/models';
import { UserService } from '../../services/user/user.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';




@Component({
    selector: 'app-page-login',
    standalone: true,
    templateUrl: './page-login.component.html',
    styleUrl: './page-login.component.css',
    imports: [SvgLoginComponent ,FormsModule,HttpClientModule]
})
export class PageLoginComponent {

    utilisateursDto: UserDto = {};
  errorMsg: Array<string>=[];

  constructor(
    private utilisateurService: UserService,
    private router: Router 

  ) {}

  ngOnInit(): void {

  }
  sinscrire() {
    this.utilisateurService.sInscrire(this.utilisateursDto).subscribe(utilisateursDto => { 
      window.location.href = '/page-signup';
    }, error => { 
      this.errorMsg=error.error.errors;
    });
  }

  navigateToSignPage(): void {
    this.router.navigate(['/page-signup']);
  }

}
