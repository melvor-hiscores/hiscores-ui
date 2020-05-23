import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SkillRank } from 'src/app/shared/models/skillrank';

@Injectable({
  providedIn: 'root'
})
export class SkillRankService {

    FAKE_RANKS: SkillRank[] = [];

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.FAKE_RANKS.push(new SkillRank('1', 'jNatCrafter', '61', '323000', '2020-05-07 01:00:52.889805'));
        this.FAKE_RANKS.push(new SkillRank('2', 'Fish', '40', '37400', '2020-05-06 01:05:52.889805'));
    }

    getRanksForSkillName(skillName: string): SkillRank[] {
        return this.FAKE_RANKS;
    }
}
