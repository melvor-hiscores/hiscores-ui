import { Component, OnInit } from '@angular/core';
import { skills } from '../../../assets/data/skills.json';
import { Skill } from '../../models/skill';

@Component({
  selector: 'app-skills-bar',
  templateUrl: './skills-bar.component.html',
  styleUrls: ['./skills-bar.component.scss']
})
export class SkillsBarComponent implements OnInit {

  skills_array: Skill[] = [];
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < skills.length; i++) {
      this.skills_array.push(new Skill(skills[i].id, skills[i].name, skills[i].imgPath));
      console.log(this.skills_array[i])
    }
  }

}
