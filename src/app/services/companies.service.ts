import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  readonly companiesUrl = "http://localhost:8080/companies";

  constructor(private http: HttpClient) {
  }

  getAllCompanies(): Observable<any[]> {
    return this.http.get<any>(this.companiesUrl);
  }

  getCompanyById(id: number): Observable<any> {
    return this.http.get<any>(this.companiesUrl + `/${id}`);
  }

  saveCompany(data: any) {
    return this.http.post(this.companiesUrl, data);
  }

  updateCompany(id: number | string, data: any) {
    return this.http.put(this.companiesUrl + `/${id}`, data);
  }

  deleteCompany(id: number | string) {
    return this.http.delete(this.companiesUrl + `/${id}`);
  }
}
