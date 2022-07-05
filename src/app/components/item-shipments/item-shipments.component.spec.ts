import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemShipmentsComponent } from './item-shipments.component';

describe('ItemShipmentsComponent', () => {
  let component: ItemShipmentsComponent;
  let fixture: ComponentFixture<ItemShipmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemShipmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
