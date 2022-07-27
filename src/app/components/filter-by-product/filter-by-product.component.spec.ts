import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByProductComponent } from './filter-by-product.component';

describe('FilterByProductComponent', () => {
  let component: FilterByProductComponent;
  let fixture: ComponentFixture<FilterByProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterByProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterByProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
