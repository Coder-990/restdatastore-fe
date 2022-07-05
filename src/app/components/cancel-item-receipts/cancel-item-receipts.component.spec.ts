import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelItemReceiptsComponent } from './cancel-item-receipts.component';

describe('CancelItemReceiptsComponent', () => {
  let component: CancelItemReceiptsComponent;
  let fixture: ComponentFixture<CancelItemReceiptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelItemReceiptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelItemReceiptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
