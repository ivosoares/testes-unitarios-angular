import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { User } from '../models/user';
import { mockUsersResponse } from '../mocks/users.mock';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;
  let httpClientMock: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientMock = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });

    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the list of users with success', done => {
    service.getUsers().subscribe((response: User[]) => {
      expect(response).toEqual(mockUsersResponse);
      done();
    })

    const testRequest = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users')

    expect(testRequest.request.method).toBe('GET');
    expect(testRequest.request.responseType).toEqual('json');

    // retorno da requisicao
    testRequest.flush(mockUsersResponse);
  });

  // e se requisicao deu falha ?
  it('should return list of users with fail', () => {
    const status = 500;
    const statusText = 'Internal Server Error';
    // const errorEvent = new ErrorEvent('Server Error');
    const errorEvent = new ProgressEvent('Server Error');
    let actualError: HttpErrorResponse | undefined;

    service.getUsers().subscribe({
      next: () => {
        fail('next handle must not be called');
      },
      error: (err: HttpErrorResponse) => {
        actualError = err;
      },
      complete: () => {
        fail('complete handle must not be called');
      }
    })

    const testRequest = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users');

    // executa a requisicao e retornando um error. Ex: uma falha na rede
    testRequest.error(errorEvent, {status, statusText});

    //asserts
    expect(actualError?.error).toBe(errorEvent);
    expect(actualError?.status).toBe(status);
    expect(actualError?.statusText).toBe(statusText);


  })

  afterEach(() => {
    httpTestingController.verify();
  })
});
