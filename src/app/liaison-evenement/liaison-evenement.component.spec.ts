import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiaisonEvenementComponent } from './liaison-evenement.component';

describe('LiaisonEvenementComponent', () => {
  let component: LiaisonEvenementComponent;
  let fixture: ComponentFixture<LiaisonEvenementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiaisonEvenementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiaisonEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
