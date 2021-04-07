import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { EmployeeMetadata } from './employee.metadata';
import 'rxjs/Rx';

@Injectable()
export class EmployeeListService {
    constructor(private http: Http) { }

    //Create employee
    public add(employeeObj: any): Observable<any[]> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let obs = this.http.post('http://localhost:8000/api/employees/', employeeObj, { headers: headers })
            .catch(this.handleError);
        return obs;
    }

    //Get employee list
    getList(): Observable<EmployeeMetadata[]> {
        return this.http.get('http://localhost:8000/api/employees')
            .map((res: Response) => res.json())
            .do((data: any) => { console.log('server data:', data) }) // debug
            .catch(this.handleError);
    }

    //Update employee
    public update(JSONObj: any): Observable<any[]> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let obs = this.http.put('http://localhost:8000/api/employees/' + JSONObj.EmpNo, JSONObj, { headers: headers })
            .catch(this.handleError);
        return obs;
    }

    //Delete employee
    public delete(_id: number): Observable<EmployeeMetadata[]> {
        let obs = this.http.delete('http://localhost:8000/api/employees/' + _id)
            .catch(this.handleError);
        return obs;
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}