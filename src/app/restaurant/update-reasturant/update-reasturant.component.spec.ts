import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReasturantComponent } from './update-reasturant.component';

describe('UpdateReasturantComponent', () => {
  let component: UpdateReasturantComponent;
  let fixture: ComponentFixture<UpdateReasturantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateReasturantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReasturantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
