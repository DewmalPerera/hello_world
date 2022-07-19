import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../shared/http.service';
import { Employee } from './Employess.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpService:HttpService) { }

  getEmployees():Observable<Employee[]>{
    return this.httpService.getAllEmployees()
  }
}
