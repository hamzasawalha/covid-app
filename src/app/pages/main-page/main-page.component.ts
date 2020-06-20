import { covidReports } from './../../covidReports';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/shared/services.service';
import { MatTableDataSource } from '@angular/material/table';





@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})


export class MainPageComponent implements OnInit {

  ELEMENT_DATA : covidReports []  ;
  ListObject : string []= [] ; 
  displayedColumns: string[] = ['country', 'cases', 'todayCases', 'deaths', 'todayDeaths','recovered'];
  dataSource = new MatTableDataSource<covidReports>(this.ELEMENT_DATA);
  report : any [];
  selectChange :string ;
  
  countryName:string= "" ;
  cases : number =0;
  deaths : number =0;
  constructor(private service : ServicesService) { }
  
  ngOnInit(): void {
   this.getAllReports();
   this.getAllCountryName();

  }

 getAllReports(){
   this.service.getApi().toPromise().then(
     report=>{
       this.dataSource.data = report as covidReports[] ;
      } 
   )
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

   }

  
 
}
