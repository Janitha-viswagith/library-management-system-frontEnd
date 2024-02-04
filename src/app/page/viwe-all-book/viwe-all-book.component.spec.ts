import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViweAllBookComponent } from './viwe-all-book.component';

describe('ViweAllBookComponent', () => {
  let component: ViweAllBookComponent;
  let fixture: ComponentFixture<ViweAllBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViweAllBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViweAllBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
