import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const headerOptions: any = new Headers();
headerOptions.append('Access-Control-Allow-Origin', '*');
// headerOptions.append('Access-Control-Allow-Headers', '*');
// headerOptions.append('Content-Type', 'application/json/x-www-form-urlencoded');
// headerOptions.append('Accept', 'text/html, application/xhtml+xml, */*');
headerOptions.append('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getCategories() {
    const apiUrl = 'https://opentdb.com/api_category.php';
    return this.http.get(apiUrl, {headers: headerOptions});
  }

}
