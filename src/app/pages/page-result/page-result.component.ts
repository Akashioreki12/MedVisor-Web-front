import { Component } from '@angular/core';
import { ProfileComponent } from "../../../assets/Svgs/profile/profile.component";
import { HomeComponent } from "../../../assets/Svgs/home/home.component";
import { ProgressBarComponent } from "../../../assets/components/progress-bar/progress-bar.component";

@Component({
    selector: 'app-page-result',
    standalone: true,
    templateUrl: './page-result.component.html',
    styleUrl: './page-result.component.css',
    imports: [ProfileComponent, HomeComponent, ProgressBarComponent]
})
export class PageResultComponent {

}
