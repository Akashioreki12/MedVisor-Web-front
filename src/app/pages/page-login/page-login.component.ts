import { Component } from '@angular/core';
import { SvgLoginComponent } from "../../../assets/Svgs/svg-login/svg-login.component";

@Component({
    selector: 'app-page-login',
    standalone: true,
    templateUrl: './page-login.component.html',
    styleUrl: './page-login.component.css',
    imports: [SvgLoginComponent]
})
export class PageLoginComponent {

}
