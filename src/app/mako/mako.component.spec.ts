import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakoComponent } from './mako.component';

describe('MakoComponent', () => {
  let component: MakoComponent;
  let fixture: ComponentFixture<MakoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
