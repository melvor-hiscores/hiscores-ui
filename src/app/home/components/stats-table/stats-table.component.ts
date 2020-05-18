import { Component, OnInit, Input } from '@angular/core';
import { Rank } from 'src/app/shared/models/rank';
import { RankService } from 'src/app/core/http/rank.service';
import { skills } from 'src/assets/data/skills.json';
import { Skill } from 'src/app/shared/models/skill';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-stats-table',
  templateUrl: './stats-table.component.html',
  styleUrls: ['./stats-table.component.scss']
})
export class StatsTableComponent implements OnInit {

  @Input() activeSkillName: string;

  displayedColumns: string[] = []
  dataSource: MatTableDataSource<Rank> = new MatTableDataSource();

  rankService: RankService;

  constructor(rankService: RankService) { this.rankService = rankService; }

  ngOnInit() {
    this.displayedColumns = ['rank', 'name', 'level', 'xp']
    const subscription = this.rankService.getRanksForSkillName(skills[Skill.TOTAL_INDEX]['name']).subscribe(data => {
      if (data.length > 0) {
        console.log('Data received from API : ' + data);
        this.dataSource.data = data;
      } else {
        console.log('No data received');
      }
    });
    console.log('Initialized data');
  }

  ngOnChanges() {
    this.loadRanksForSkillName(this.activeSkillName);
  }

  loadRanksForSkillName(skillName: string) {
    const subscription = this.rankService.getRanksForSkillName(skillName).subscribe(data => {
      if (data.length > 0) {
        console.log('Data received from API : ' + data);
        this.dataSource.data = data;
      } else {
        console.log('No data received');
      }
    },
    error => {
      console.log('An error occured from the API: ' + error.error);
    });
    setTimeout(() => subscription.unsubscribe(), 5 * 1000);
    console.log('Fetched data for skill: ' + skillName);
    console.log('dataSource: ' + this.dataSource.data);
  }

}
