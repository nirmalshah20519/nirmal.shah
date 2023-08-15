import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvbrComponent } from './nvbr.component';

describe('NvbrComponent', () => {
  let component: NvbrComponent;
  let fixture: ComponentFixture<NvbrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvbrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NvbrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
