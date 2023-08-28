import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialTableRouterComponent } from './initial-table-router.component';

describe('InitialTableRouterComponent', () => {
  let component: InitialTableRouterComponent;
  let fixture: ComponentFixture<InitialTableRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialTableRouterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialTableRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
