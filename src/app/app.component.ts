import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {adresModel} from "./adresModel";
import {AppService} from "./app.service";
import {factoryOrValue} from "rxjs/operator/multicast";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: String = 'TEST';
  adresy: adresModel[];
  errorMessage: String;
  adres = new adresModel();

  adresyTestowe: adresModel[];

  items:any;
  value: Date;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    //this.fetchAdres();
    this.adresy = [];
    this.getAdres();
    // this.adresyTestowe = [];
    // this.adresyTestowe.push({idAdres: 1, Miasto: 'Radom'});
    // this.adresyTestowe.push({idAdres: 2, Miasto: 'Ostrołęka'});
    // this.adresyTestowe.push({idAdres: 3, Miasto: 'Wyszków'});
  }


  getTest() {
    console.log('Test component');
  }

  getAdres(): void {
    this.appService.getAdresObs()
      .subscribe(
        adresy => this.adresy = adresy,
        error => this.errorMessage = <any>error
      );

  }


}
