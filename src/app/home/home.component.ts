import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  //selector: 'em-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { 

  }
  ngOnInit(): void {
  }
  loadEmployees(){
    this.router.navigate(['/employees'])
  }

}
