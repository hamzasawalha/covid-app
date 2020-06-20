import { covidReports } from './../covidReports';

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  readonly url = "https://corona.lmao.ninja/v2/countries";
  report : any ;

  constructor(private http : HttpClient) { }
   
  getApi(){
     return this.http.get(this.url) ;
  }


}
