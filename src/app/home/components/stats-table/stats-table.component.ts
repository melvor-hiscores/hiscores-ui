import { Component, OnInit } from '@angular/core';
import { Rank } from 'src/app/shared/models/rank';
import { RankService } from 'src/app/core/mocks/rank.mock';

import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-stats-table',
  templateUrl: './stats-table.component.html',
  styleUrls: ['./stats-table.component.scss']
})
export class StatsTableComponent implements OnInit {

  dataSource: Rank[] = []

  rankService: RankService;

  constructor(rankService: RankService) { this.rankService = rankService; }

  ngOnInit() {
    this.dataSource = this.rankService.getRanksForSkill('woodcutting')
  }

}
