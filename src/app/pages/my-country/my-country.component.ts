import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from 'src/app/shared/services.service';


@Component({
  selector: 'app-my-country',
  templateUrl: './my-country.component.html',
  styleUrls: ['./my-country.component.css']
})
export class MyCountryComponent implements OnInit {

  constructor(private service  : ServicesService) { }
  report : any [];
  selectChange :string ;

  countryName:string= "" ;
  cases : number =0;
  deaths : number =0;
  Recoverd : number= 0 ;
  newCases : number =0 ;
  isSelected : boolean = true ; 

  ngOnInit(): void {
    this.getAllCountryName();
  }
  getAllCountryName()  {
 
    this.service.getApi().subscribe(res=>
     {
       this.report = res as any; 
     });

     
    
    }
    getSpecificCountry(){
     
       let country = this.report.find(res=>res.country ==  this.selectChange);
      
      
      return country ;
    }
    myFunc(){
     let country = this.getSpecificCountry() ;
      
     this.countryName = country.country ;
     this.deaths = country.deaths ;
     this.cases = country.cases ;
     this.newCases = country.todayCases ;
     this.Recoverd = country.recovered ;


     this.isSelected = false; 
    }
}
