import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateFromObjectComponent } from './generate-from-object.component';

describe('GenerateFromObjectComponent', () => {
  let component: GenerateFromObjectComponent;
  let fixture: ComponentFixture<GenerateFromObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateFromObjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateFromObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
