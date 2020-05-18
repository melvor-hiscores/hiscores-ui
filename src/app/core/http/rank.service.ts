import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Rank } from 'src/app/shared/models/rank';
import { API_URL } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Irank } from 'src/app/shared/models/Irank';

@Injectable({
    providedIn: 'root',
})
export class RankService {

    constructor(private http: HttpClient) { }

    getRanksForSkillName(skill: string): Observable<Irank[]> {
        let httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            params: new HttpParams().set('skill', skill)
        };

        return this.http.get<Irank[]>(`${API_URL}/ranks`, httpOptions);
    }
}
