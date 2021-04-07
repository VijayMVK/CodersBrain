import { Component, OnInit} from '@angular/core';
import { EmployeeListService } from '../services/employee.service';
import { DataFilterPipe } from "../pipe/data-filter.pipe";
@Component({
    selector: 'employee',
    templateUrl: 'employee.component.html'
})

export class EmployeeComponent implements OnInit {
    private showDialog: boolean = false;
    private employeeList: any[]; // Hold employee service data
    private empNo: number = 0
    private empName: string = "";
    private salary: number = 0;
    private deptNo: number = 0;
    private editForm: boolean;//To visble Edit form

    constructor(public employeeListService: EmployeeListService) {
    }

    ngOnInit(): void {
        this.init();
        this.getEmployeeList();
    }

    init() {
        this.editForm = false;
        this.showDialog = false;
        this.empName = "";
        this.empNo = 0;
        this.salary = 0;
        this.deptNo = 0;
    }

    // To call employee list service
    getEmployeeList() {
        this.employeeListService.getList()
            .subscribe(
            data => this.employeeList = data,
            error => console.log(error));
    }

    ///deleting a record
    public deleteEmployee(id: any) {
        this.employeeListService.delete(id).subscribe(task => {
            for (var i = 0; i < this.employeeList.length; i++) {
                if (this.employeeList[i].EmpNo == id) {
                    this.employeeList.splice(i, 1);
                    alert("Employee deleted successfully");
                }
            }
        }, error => console.log(error));

    }

    addEmployee() {
        this.editForm = false;
        this.showDialog = true;
    }

    updateEmployee(item: any) {
        this.editForm = true;
        this.showDialog = true;
        this.empNo = item.EmpNo;
        this.empName = item.EmpName;
        this.deptNo = item.DeptNo;
        this.salary = item.Salary;
    }

    onSubmit() {
        let formData: any = {
            "EmpNo": this.empNo,
            "DeptNo": this.deptNo,
            "EmpName": this.empName,
            "Salary": this.salary
        }
        if (this.editForm) {
            this.employeeListService.update(formData).subscribe(data => {
                this.getEmployeeList();
                alert("Employee updted successfully");
            }, error => console.log(error));
        } else {
            this.employeeListService.add(formData).subscribe(data => {
                this.getEmployeeList();
                alert("Employee added successfully");
            }, error => console.log(error));
        }
        this.init();
    }

    public getFilteredList(): any[] {
        let result: any[];
        let dataFilterPipe: DataFilterPipe;
        dataFilterPipe = new DataFilterPipe();
        result = dataFilterPipe.transform(this.employeeList, "");
        return result;
    }

    public toCheckEmptyRow(): boolean {
        let result: any[];
        if (result !== undefined && Object.keys(result).length === 0)
            return true;
        else
            return false;
    }

    public toCheckDataHasRows(): boolean {
        let result: any[];
        result = this.getFilteredList();
        if (result !== undefined && Object.keys(result).length !== 0)
            return true;
        else
            return false;
    }
}