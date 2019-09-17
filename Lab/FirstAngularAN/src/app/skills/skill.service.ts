import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Skill } from "./model/skill.model";

@Injectable({
  providedIn: "root"
})
export class SkillService {
  constructor(private httpClient: HttpClient) {}

  getSkills() {
    return this.httpClient.get<Skill[]>("assets/skills.json");
  }
}
