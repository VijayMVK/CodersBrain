import {
    TestBed,
    getTestBed,
    async,
    inject,
} from '@angular/core/testing';
import {
    Headers, BaseRequestOptions,
    Response, HttpModule, Http, XHRBackend, RequestMethod
} from '@angular/http';

import { ResponseOptions } from '@angular/http';
import { provide, Injector } from 'angular2/core';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { EmployeeMetadata } from './employee.metadata';
import { EmployeeListService } from './employee.service.unit';



describe('Employee Service', () => {
    let mockBackend: MockBackend;
    let backend: XHRBackend;

    // All heed this block - it is required so that the test injector
    // is properly set up. Without doing this, you won't get the
    // fake backend injected into Http.

    // Also, you need to inject MockBackend as a provider before you wire
    // it to replace XHRBackend with the provide function!  So this is all
    // extremely important to set up right.
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                EmployeeListService,
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http,
                    deps: [MockBackend, BaseRequestOptions],
                    useFactory:
                    (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }
                }
            ],
            imports: [
                HttpModule
            ]
        });
        mockBackend = getTestBed().get(MockBackend);
        backend = getTestBed().get(XHRBackend);
    }));


    it('should get employee', (done: any) => {
        let empService: EmployeeListService;
        getTestBed().compileComponents().then(() => {
            mockBackend.connections.subscribe(
                (connection: MockConnection) => {
                    connection.mockRespond(new Response(
                        new ResponseOptions({
                            body: [
                                {
                                    _id: '26',
                                    name: 'Vijay',
                                    email: 'vijayak023@gmail.com',
                                
                                    designation: 'SE',
                                    experience: 2,
                                }]
                        }
                        )));
                });

            empService = getTestBed().get(EmployeeListService);
            expect(empService).toBeDefined();

            empService.getList().subscribe((blogs: EmployeeMetadata[]) => {
                expect(blogs.length).toBeDefined();
                expect(blogs.length).toEqual(1);
                expect(blogs[0].experience).toEqual(2);
                done();
            });
        });

    });

    it('should get employee async',
        async(inject([EmployeeListService], (empService: any) => {
            mockBackend.connections.subscribe(
                (connection: MockConnection) => {
                    connection.mockRespond(new Response(
                        new ResponseOptions({
                            body: [
                                {
                                    _id: '26',
                                    name: 'Vijay',
                                    email: 'vijayak023@gmail.com',
                                   
                                    designation: 'SE',
                                    experience: 2,
                                }]
                        }
                        )));
                });

            empService.getList().subscribe(
                (data: any) => {
                    expect(data.length).toBe(1);
                    expect(data[0]._id).toBe('26');
                    expect(data[0].name).toBe('Vijay');
                });
        })));

    it('should insert new employee entries',
        async(inject([EmployeeListService], (empService: EmployeeListService) => {
            mockBackend.connections.subscribe((connection: MockConnection) => {
                // is it the correct REST type for an insert? (POST)
                expect(connection.request.method).toBe(RequestMethod.Post);
                connection.mockRespond(new Response(new ResponseOptions({ status: 201 })));
            });

            let data: EmployeeMetadata = { _id: null, name: 'babu', email: 'babu@gmail.com', designation: 'SE', experience: 2 };
            empService.add(data).subscribe(
                (successResult: any) => {
                    expect(successResult).toBeDefined();
                    console.log("sucess:" + successResult);
                    expect(successResult.status).toBe(201);
                });
        })));


    it('should update to an existing employee entry',
        async(inject([EmployeeListService], (empService: any) => {
            mockBackend.connections.subscribe((connection: MockConnection) => {
                // is it the correct REST type for an update? (PUT)
                expect(connection.request.method).toBe(RequestMethod.Put);
                connection.mockRespond(new Response(new ResponseOptions({ status: 204 })));
            });

            let data: EmployeeMetadata = { _id: "22", name: 'babuJ', email: 'babu@gmail.com', designation: 'SE', experience: 2 }
            empService.update(data).subscribe(
                (successResult: any) => {
                    expect(successResult).toBeDefined();
                    expect(successResult.status).toBe(204);
                });
        })));

    it('should delete an existing employee entry',
        async(inject([EmployeeListService], (empService: any) => {
            mockBackend.connections.subscribe((connection: MockConnection) => {
                expect(connection.request.method).toBe(RequestMethod.Delete);
                connection.mockRespond(new Response(new ResponseOptions({ status: 204 })));
            });

            empService.delete('22').subscribe(
                (successResult: any) => {
                    expect(successResult).toBeDefined();
                    expect(successResult.status).toBe(204);
                },
                (errorResult: any) => {
                    throw (errorResult);
                });
        })));
});

