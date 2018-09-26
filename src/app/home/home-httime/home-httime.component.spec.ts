import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHttimeComponent } from './home-httime.component';

describe('HomeHttimeComponent', () => {
  let component: HomeHttimeComponent;
  let fixture: ComponentFixture<HomeHttimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeHttimeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHttimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
