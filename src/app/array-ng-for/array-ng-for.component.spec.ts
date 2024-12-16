import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayNgForComponent } from './array-ng-for.component';

describe('ArrayNgForComponent', () => {
  let component: ArrayNgForComponent;
  let fixture: ComponentFixture<ArrayNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayNgForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
