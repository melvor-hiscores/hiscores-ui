import { Component, OnInit } from '@angular/core';
import { SkillsBarComponent } from '../../components/skills-bar/skills-bar.component';
import { StatsTableComponent } from '../../components/stats-table/stats-table.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  activeSkillName: string;

  constructor(private skillsBar: SkillsBarComponent, private statsTable: StatsTableComponent) { }

  ngOnInit() {
    // default to total
    this.activeSkillName = 'Total';
  }

  updateActiveSkillName(skillName: string): void {
    console.log('actually changed');
    this.activeSkillName = skillName;
    this.statsTable.loadRanksForSkillName(this.activeSkillName);
  }

}
