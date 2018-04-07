import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZttComponentComponent } from './ztt-component.component';

describe('ZttComponentComponent', () => {
  let component: ZttComponentComponent;
  let fixture: ComponentFixture<ZttComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZttComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZttComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
