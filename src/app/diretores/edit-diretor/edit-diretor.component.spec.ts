import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDiretorComponent } from './edit-diretor.component';

describe('EditDiretorComponent', () => {
  let component: EditDiretorComponent;
  let fixture: ComponentFixture<EditDiretorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDiretorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDiretorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
