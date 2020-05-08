import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rank } from 'src/app/shared/models/rank';

@Injectable({
  providedIn: 'root'
})
export class RankService {

    FAKE_RANKS: Rank[] = [];
    constructor(private http: HttpClient) {
        this.FAKE_RANKS.push(new Rank('1', 'jNatCrafter', '61', '323000', '2020-05-07 01:00:52.889805'));
        this.FAKE_RANKS.push(new Rank('2', 'Fish', '40', '37400', '2020-05-06 01:05:52.889805'));
    }

    getRanksForSkill(skill: string): Rank[] {
        return this.FAKE_RANKS;
    }
}
