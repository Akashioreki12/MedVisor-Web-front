import { Component } from '@angular/core';
import { SvgLoginComponent } from "../../../assets/Svgs/svg-login/svg-login.component";


@Component({
  selector: 'app-page-signup',
  standalone: true,
  imports: [SvgLoginComponent],
  templateUrl: './page-signup.component.html',
  styleUrl: './page-signup.component.css'
})
export class PageSignupComponent {

}
