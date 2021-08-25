import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPageSeriesComponent } from './details-page-series.component';

describe('DetailsPageSeriesComponent', () => {
  let component: DetailsPageSeriesComponent;
  let fixture: ComponentFixture<DetailsPageSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPageSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPageSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
