import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Rank } from 'src/app/shared/models/rank';
import { API_URL } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RankService {

    constructor(private http: HttpClient) { }

    getRanksForSkill(skill: string): Observable<Rank[]> {
        let httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            params: new HttpParams().set('skill', skill)
        };

        return this.http.get<Rank[]>(`${API_URL}/ranks`, httpOptions);
    }
}
