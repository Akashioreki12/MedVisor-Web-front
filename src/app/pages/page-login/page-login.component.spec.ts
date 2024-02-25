import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLoginComponent } from './page-login.component';
import { FormsModule } from '@angular/forms';

describe('PageLoginComponent', () => {
  let component: PageLoginComponent;
  let fixture: ComponentFixture<PageLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageLoginComponent ,FormsModule ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
