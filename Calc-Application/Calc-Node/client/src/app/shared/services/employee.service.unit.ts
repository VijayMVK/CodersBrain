import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { EmployeeMetadata } from './employee.metadata';

@Injectable()
export class EmployeeListService {
    constructor(private http: Http) { }

    //Create employee
    public add(employeeObj: EmployeeMetadata): Observable<EmployeeMetadata[]> {
        debugger
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let obs = this.http.post('api/saveemployee', JSON.stringify(employeeObj), { headers: headers })
            .map(res => res.json());

        return obs;
    }

    //Get employee list
    getList(): Observable<EmployeeMetadata[]> {
        debugger
        return this.http.get('api/getemployee')
            .map((res: Response) => res.json())
            //              .do(data => console.log('server data:', data))  // debug
            .catch(this.handleError);
    }

    //Update employee
    public update(JSONObj: EmployeeMetadata): Observable<EmployeeMetadata[]> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let obs = this.http.put('api/updateemployee/' + JSONObj.empNo, JSON.stringify(JSONObj), { headers: headers })
            .map(res => res.json())
            .catch(this.handleError);
        return obs;
    }

    //Delete employee
    public delete(_id: string): Observable<EmployeeMetadata[]> {
        debugger
        let obs = this.http.delete('api/deleteemployee/' + _id)
            .map(res => res.json())
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