import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DDiogoSousaComponent } from './d.diogo-sousa.component';

describe('DDiogoSousaComponent', () => {
  let component: DDiogoSousaComponent;
  let fixture: ComponentFixture<DDiogoSousaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DDiogoSousaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DDiogoSousaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
