import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelItemShipmentsComponent } from './cancel-item-shipments.component';

describe('CancelItemShipmentsComponent', () => {
  let component: CancelItemShipmentsComponent;
  let fixture: ComponentFixture<CancelItemShipmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelItemShipmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelItemShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
