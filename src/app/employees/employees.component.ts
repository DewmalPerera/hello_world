import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmployeeService } from './employee.service';
//import employees from './data/employees.json';
import { Employee } from './Employess.model';

@Component({
  selector: 'em-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit , OnDestroy{

  title: string = 'Employee Management Solution....'
  employees!:Employee[] ;
  filteredEmployees!:any[];
  showIcon:boolean= false;
  message:string='';
  private _designationFilter:string ='';
  subscriber !: Subscription;

  set designationFilter(value:string){
    //console.log("Setter Fired");
    this._designationFilter=value;
    this.filterByDesignation()
  }
  get designationFilter():string{
    return this._designationFilter;
  }


  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.subscriber=this.employeeService.getEmployees().subscribe({
      next: data=>{
        this.filteredEmployees= data;
        this.employees = this.filteredEmployees;
      }
    })
  }
  ngOnDestroy(){
    this.subscriber.unsubscribe();
  }

  toggleIcon(){
    this.showIcon =! this.showIcon;
  }

  filterByDesignation(){
    return this.filteredEmployees = this.employees.filter(employee => employee.designation.includes(this.designationFilter));
  }
  onMessageRecived(value:string){
  this.message=value;
  }

}
