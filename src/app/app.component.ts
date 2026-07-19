import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ArmorsComponent } from './modules/armors/armors.component';
import { CampaignComponent } from './modules/campaign/campaign.component';
import { InventoryComponent } from './modules/inventory/inventory.component';
import { MissionComponent } from './modules/mission/mission.component';
import { MissionLogComponent } from "./modules/mission-log/mission-log.component";
import { WeaponsComponent } from './modules/weapons/weapons.component';
import { DataService } from './services/data.service';
import { DxButtonModule, DxTabsModule } from 'devextreme-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HttpClientModule,
    InventoryComponent,
    WeaponsComponent,
    ArmorsComponent,
    CampaignComponent,
    MissionLogComponent,
    MissionComponent,
    DxButtonModule,
    DxTabsModule,
  ],

  providers: [
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  router: any;
  moduleIndex: any;
  inQuest = true;
  loading = true;

  currentCampaignID = undefined;

  tab = [
    {
      id: 0,
      text: 'Mission Log',
      icon: 'assets/icons/monsters.png',
    },
  ]

  tabs = [
    {
      id: 1,
      text: 'Caja de Objetos',
      icon: 'assets/icons/box.png',
    },
    {
      id: 2,
      text: 'Armaduras',
      icon: 'assets/icons/armors/helm.png',
    },
    {
      id: 3,
      text: 'Armas',
      icon: 'assets/icons/weapons/sword-and-shield.png',
    },
  ];

  moduleTabs = [
    {
      id: 0,
      text: 'Misiones',
      icon: 'assets/icons/monsters.png',
    },
    {
      id: 1,
      text: 'Inventario',
      icon: 'assets/icons/box.png',
    },
    {
      id: 2,
      text: 'Campaña',
      icon: 'assets/icons/user.png',
    }

  ]

  missionButtonOptions = {
    text: 'Misiones',
    stylingMode: 'text',
    onClick: () => this.setInQuest(true)
  };

  constructor(
    public ds: DataService,
  ) {
  }

  ngOnInit(): void {
    this.loading = true;

    if (sessionStorage.getItem('module') != undefined) this.moduleIndex = Number(sessionStorage.getItem('module'));
    if (sessionStorage.getItem('inQuest') != undefined) { this.inQuest = (sessionStorage.getItem('inQuest') == 'true') ? true : false; }
    if (sessionStorage.getItem('idCampaign') != undefined) this.ds.campaignID = Number(sessionStorage.getItem('idCampaign'));
    if (sessionStorage.getItem('campaignName') != undefined) this.ds.campaignName = sessionStorage.getItem('campaignName');

    if (this.ds.campaignID != undefined) {
      this.ds.getCampaign(this.ds.campaignID).subscribe((campaign) => {
        this.ds.getItems().subscribe((items) => {
          this.ds.materials = items;
          this.loading = false;
        });
      });
    }
  }

  changeCampaign() {
    this.ds.campaignID = undefined;
    this.ds.campaignName = undefined;

    sessionStorage.removeItem('idCampaign');
    sessionStorage.removeItem('campaignName');
  }

  setInQuest(inQuest: boolean) {
    console.log('setInQuest', inQuest);
    this.inQuest = inQuest;
    sessionStorage.setItem('inQuest', String(inQuest));


    this.ds.getCampaign(this.ds.campaignID).subscribe((campaign) => {
      this.ds.getItems().subscribe((items) => {
        this.ds.materials = items;
        this.loading = false;
      });
    });
  }

  moduleGoTo(route: any) {
    console.log('moduleGoTo', route);

    switch (route) {
      case 0:
        this.setInQuest(true);
        break;
      case 1:
        this.setInQuest(false);
        break;
      case 2:
        this.changeCampaign();
        break;
    }
  }

  goTo(route: any) {
    if (route == 0 && this.moduleIndex == 0) {
      this.moduleIndex = null;
    }
    else {
      this.moduleIndex = route;
    }
    sessionStorage.setItem('module', this.moduleIndex);
  }
}

