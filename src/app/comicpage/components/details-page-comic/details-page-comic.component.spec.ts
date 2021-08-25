import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPageComicComponent } from './details-page-comic.component';

describe('DetailsPageComicComponent', () => {
  let component: DetailsPageComicComponent;
  let fixture: ComponentFixture<DetailsPageComicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPageComicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPageComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
