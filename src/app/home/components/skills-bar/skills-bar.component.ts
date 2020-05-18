import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { skills } from 'src/assets/data/skills.json';
import { Skill } from 'src/app/shared/models/skill';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-skills-bar',
  templateUrl: './skills-bar.component.html',
  styleUrls: ['./skills-bar.component.scss']
})
export class SkillsBarComponent implements OnInit {

  @Input() activeSkillName: string;
  @Output() activeSkillNameChange = new EventEmitter<string>();

  skills_array: Skill[] = [];

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    for (let i = 0; i < skills.length; i++) {
      this.skills_array.push(new Skill(skills[i].id, skills[i].name, skills[i].imgPath));
      this.matIconRegistry.addSvgIcon(skills[i].name, this.domSanitizer.bypassSecurityTrustResourceUrl(skills[i].imgPath));
      console.log(this.skills_array[i])
    }
  }

  updateParent(skillName: string): void {
    console.log("Updating activeSkill to " + skillName);
    this.activeSkillNameChange.emit(skillName)
  }

}
