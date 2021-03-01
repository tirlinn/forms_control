import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleBlockComponent } from './double-block.component';

describe('DoubleBlockComponent', () => {
  let component: DoubleBlockComponent;
  let fixture: ComponentFixture<DoubleBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
