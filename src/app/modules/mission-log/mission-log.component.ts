import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { DxTileViewModule } from 'devextreme-angular';

@Component({
  selector: 'app-mission-log',
  standalone: true,
  imports: [
    CommonModule,
    DxTileViewModule,
  ],
  templateUrl: './mission-log.component.html',
  styleUrl: './mission-log.component.css'
})


export class MissionLogComponent {
  missionLog: any = [];

  constructor(
    private ds: DataService,
  ) {

  }

  ngOnInit() {
    this.missionLog = this.ds.missionLog;
    this.setClasses();

    // this.ds.getMissionLog(this.ds.campaignID).subscribe((res: any) => {
    // this.ds.missionLog = res;
    // });



    console.log(this.missionLog)
  }

  setClasses() {
    this.missionLog.forEach((day: any) => {
      if(day.status == 'Victory') day.statusIcon = "assets/icons/win.png"
      if(day.status == 'Failure') day.statusIcon = "assets/icons/failed.png"
      
      if (day.mission.includes("Jagras")) {
        day.icon = "assets/icons/monsters/g-jagr.png";
        day.class = "normal";
      }
      else if (day.mission.includes("Kadachi")) {
        day.icon = "assets/icons/monsters/tobi.png";
        day.class = "normal";
      }
      else if (day.mission.includes("Anjanath")) {
        day.icon = "assets/icons/monsters/anja.png";
        day.class = "normal";
      }
      else if (day.mission.includes("Rathalos")) {
        day.icon = "assets/icons/monsters/ratha.png";
        day.class = "normal";
      }
      else if (day.mission.includes("Azure Rathalos")) {
        day.icon = "assets/icons/monsters/a-ratha.png";
        day.class = "normal";
      }
      else {
        day.icon = "assets/icons/box.png";
        day.class = "invert";
      }
    });
  }

}
