import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InventoryComponent } from './modules/inventory/inventory.component';
import { WeaponsComponent } from './modules/weapons/weapons.component';
import { ArmorsComponent } from './modules/armors/armors.component';
import { CommonModule } from '@angular/common';
import { MissionLogComponent } from "./modules/mission-log/mission-log.component";
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { DxButtonModule, DxTabPanelModule, DxTabsModule } from 'devextreme-angular';
import { MissionComponent } from './modules/mission/mission.component';

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
  selected: any;
  inQuest = true;
  loading = true;
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
      text: 'Item Box',
      icon: 'assets/icons/box.png',
    },
    {
      id: 2,
      text: 'Armors',
      icon: 'assets/icons/armors/helm.png',
    },
    {
      id: 3,
      text: 'Weapons',
      icon: 'assets/icons/weapons/sword-and-shield.png',
    },
  ];

  constructor(
    private ds: DataService,
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.ds.getCampaign(0).subscribe((campaign) => {
      this.ds.getItems().subscribe((items) => {
        this.ds.materials = items;
        this.loading = false;
      });
    }
    );
  }

  goTo(route: any) {
    this.selected = route;
  }
}

