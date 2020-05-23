import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { GpRank } from 'src/app/shared/models/gprank';
import { SkillRank } from 'src/app/shared/models/skillrank';
import { API_URL } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Igprank } from 'src/app/shared/models/Igprank';
import { Iskillrank } from 'src/app/shared/models/Iskillrank';

@Injectable({
    providedIn: 'root',
})
export class RankService {

    constructor(private http: HttpClient) { }

    getRanksForGp(skill: string): Observable<Igprank[]> {
        let httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            params: new HttpParams().set('skill', skill)
        };

        return this.http.get<Igprank[]>(`${API_URL}/ranks`, httpOptions);
    }

    getRanksForSkillName(skill: string): Observable<Iskillrank[]> {
        let httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            params: new HttpParams().set('skill', skill)
        };

        return this.http.get<Iskillrank[]>(`${API_URL}/ranks`, httpOptions);
    }
}
