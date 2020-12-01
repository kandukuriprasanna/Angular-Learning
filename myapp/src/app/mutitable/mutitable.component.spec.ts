import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutitableComponent } from './mutitable.component';

describe('MutitableComponent', () => {
  let component: MutitableComponent;
  let fixture: ComponentFixture<MutitableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutitableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MutitableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
