import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReasturantComponent } from './add-reasturant.component';

describe('AddReasturantComponent', () => {
  let component: AddReasturantComponent;
  let fixture: ComponentFixture<AddReasturantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReasturantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReasturantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
