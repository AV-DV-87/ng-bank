import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcontestComponent } from './icontest.component';

describe('IcontestComponent', () => {
  let component: IcontestComponent;
  let fixture: ComponentFixture<IcontestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcontestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcontestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
