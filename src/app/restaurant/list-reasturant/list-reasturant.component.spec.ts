import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReasturantComponent } from './list-reasturant.component';

describe('ListReasturantComponent', () => {
  let component: ListReasturantComponent;
  let fixture: ComponentFixture<ListReasturantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReasturantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReasturantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
