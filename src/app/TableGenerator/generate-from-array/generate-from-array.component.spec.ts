import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateFromArrayComponent } from './generate-from-array.component';

describe('GenerateFromArrayComponent', () => {
  let component: GenerateFromArrayComponent;
  let fixture: ComponentFixture<GenerateFromArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateFromArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateFromArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
