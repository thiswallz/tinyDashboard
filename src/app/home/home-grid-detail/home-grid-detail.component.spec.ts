import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGridDetailComponent } from './home-grid-detail.component';

describe('HomeGridDetailComponent', () => {
  let component: HomeGridDetailComponent;
  let fixture: ComponentFixture<HomeGridDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeGridDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGridDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
