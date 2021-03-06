import { Component, OnInit, Input } from '@angular/core';
import { GpRank } from 'src/app/shared/models/gprank';
import { SkillRank } from 'src/app/shared/models/skillrank';
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

  GP_COLUMNS: string[] = [ 'rank', 'name', 'gp', 'num99s', 'pets' ];
  COMBAT_COLUMNS: string[] = [ 'rank', 'name', 'level' ];
  SKILL_COLUMNS: string[] = [ 'rank', 'name', 'level', 'xp' ];

  showGp: boolean = false;
  showCombat: boolean = false;
  showSkill: boolean = false;

  gpDataSource: MatTableDataSource<GpRank> = new MatTableDataSource();
  skillDataSource: MatTableDataSource<SkillRank> = new MatTableDataSource();

  constructor(private rankService: RankService) { }

  ngOnInit() {
    this.showGp = false;
    this.activeSkillName = 'Total';
    this.loadRanksForSkillName(skills[Skill.TOTAL_INDEX]['name']);
    console.log('Initialized data');
  }

  ngOnChanges() {
    this.loadRanksForSkillName(this.activeSkillName);
  }

  changeView(view: string) {
    if (view.toLowerCase() == 'gp') {
      this.showGp = true;
      this.showCombat = false;
      this.showSkill = false;
    } else if (view.toLowerCase() == 'combat') {
      this.showGp = false;
      this.showCombat = true;
      this.showSkill = false;
    } else {
      this.showGp = false;
      this.showCombat = false;
      this.showSkill = true;
    }
  }

  numberWithCommas(x) {
    if (x !== null) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    return x;
  }

  loadRanksForSkillName(skillName: string) {

    console.log('loadRanksForSkillName : ' + skillName);

    this.changeView(skillName);

    if (skillName == 'Gp') {
      console.log('loadRanksForSkillName __ GP');

      const subscription = this.rankService.getRanksForGp(skillName).subscribe(data => {
        if (data.length > 0) {
          console.log('Data received from API : ' + data);
          this.gpDataSource.data = data;
        } else {
          console.log('No data received');
        }
      },
      error => {
        console.log('An error occured from the API: ' + error.error);
      });
      setTimeout(() => subscription.unsubscribe(), 5 * 1000);

      console.log('Fetched data for gp: ' + skillName);
      console.log('dataSource: ' + this.gpDataSource.data);
    } else {
      this.showGp = false;
      console.log('loadRanksForSkillName __ SKILL');

      const subscription = this.rankService.getRanksForSkillName(skillName).subscribe(data => {
        if (data.length > 0) {
          console.log('Data received from API : ' + data);
          this.skillDataSource.data = data;
        } else {
          console.log('No data received');
        }
      },
      error => {
        console.log('An error occured from the API: ' + error.error);
      });
      setTimeout(() => subscription.unsubscribe(), 5 * 1000);

      console.log('Fetched data for skill: ' + skillName);
      console.log('dataSource: ' + this.skillDataSource.data);
    }


  }

}