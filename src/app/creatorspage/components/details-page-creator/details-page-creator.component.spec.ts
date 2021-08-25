import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPageCreatorComponent } from './details-page-creator.component';

describe('DetailsPageCreatorComponent', () => {
  let component: DetailsPageCreatorComponent;
  let fixture: ComponentFixture<DetailsPageCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPageCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPageCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
