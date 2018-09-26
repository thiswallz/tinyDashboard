import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBoxComponent } from './home-box.component';

describe('HomeBoxComponent', () => {
  let component: HomeBoxComponent;
  let fixture: ComponentFixture<HomeBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBoxComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
