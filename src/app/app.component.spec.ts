import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChangeTitleComponent } from './components/change-title/change-title.component';
import { UserService } from './services/user.service';
import { of } from 'rxjs';
import { mockUsersResponse } from './mocks/users.mock';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let userService: UserService;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ChangeTitleComponent
      ],
      imports: [
        HttpClientTestingModule
      ],
      providers: []
      ,
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    fixture.detectChanges();
  })

  it('should create the app', () => {
    // const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    // Arrange (organizacao)
    const compiled = fixture.debugElement.nativeElement;
    // const h1 = fixture.debugElement.query(By.css('h1'));
    // Action (acao)
    // h1.triggerEventHandler('click', null);
    // Assertion (afirmacao)
    // expect((h1.nativeElement as Element).textContent).toContain('testes-unitarios-angular');
    expect(compiled.querySelector('h1').textContent).toContain('testes-unitarios-angular');
  })

  it('should have a title equals ', () => {
    expect(component.title).toEqual('testes-unitarios-angular');
  })

  it('should change a title value', () => {
    const newTitle = 'New Title';
    component.changeTitle(newTitle);
    expect(component.title).toBe('New Title');
  })

  it('should load users', () => {
    spyOn(userService, 'getUsers').and.returnValue(of(mockUsersResponse))
    component.getUsers();
    expect(component.users).toEqual(mockUsersResponse);

  })

});
