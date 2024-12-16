import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoCompComponent } from './nuevo-comp.component';

describe('NuevoCompComponent', () => {
  let component: NuevoCompComponent;
  let fixture: ComponentFixture<NuevoCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
