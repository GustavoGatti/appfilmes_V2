import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiretorComponent } from './add-diretor.component';

describe('AddDiretorComponent', () => {
  let component: AddDiretorComponent;
  let fixture: ComponentFixture<AddDiretorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDiretorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDiretorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
