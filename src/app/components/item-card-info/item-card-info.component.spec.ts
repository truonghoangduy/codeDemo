import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardInfoComponent } from './item-card-info.component';

describe('ItemCardInfoComponent', () => {
  let component: ItemCardInfoComponent;
  let fixture: ComponentFixture<ItemCardInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCardInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
