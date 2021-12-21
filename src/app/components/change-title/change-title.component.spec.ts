import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTitleComponent } from './change-title.component';
import { By } from '@angular/platform-browser';

describe('ChangeTitleComponent', () => {
  let component: ChangeTitleComponent;
  let fixture: ComponentFixture<ChangeTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the recive input value', () => {
    // arrange
    component.message = 'new msg';
    //action
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const text = compiled.querySelector('p');
    // assert
    expect(text.textContent).toBe('new msg')
  })

  it('should correctly @output value of text input in component', () => {
    spyOn(component.changeTitleEvent, 'emit');
    const btn = fixture.debugElement.query(By.css('button'));
    const input = fixture.debugElement.query(By.css('input')).nativeElement;

    input.value = 'a new title';
    btn.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.changeTitleEvent.emit).toHaveBeenCalledOnceWith('a new title');
  })

  it('should not be called emit', () => {
    spyOn(component.changeTitleEvent, 'emit');
    component.changeTitle('');
    expect(component.changeTitleEvent.emit).toHaveBeenCalledTimes(0);
  })
});
