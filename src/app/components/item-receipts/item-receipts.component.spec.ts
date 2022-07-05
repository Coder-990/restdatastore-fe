import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemReceiptsComponent } from './item-receipts.component';

describe('ItemReceiptsComponent', () => {
  let component: ItemReceiptsComponent;
  let fixture: ComponentFixture<ItemReceiptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemReceiptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemReceiptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
