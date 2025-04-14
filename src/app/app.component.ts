import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InventoryComponent } from './modules/inventory/inventory.component';
import { WeaponsComponent } from './modules/weapons/weapons.component';
import { ArmorsComponent } from './modules/armors/armors.component';
import { CommonModule } from '@angular/common';
import { MissionLogComponent } from "./modules/mission-log/mission-log.component";
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { DxTabPanelModule, DxTabsModule } from 'devextreme-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    DxTabsModule,
    InventoryComponent,
    WeaponsComponent,
    ArmorsComponent,
    MissionLogComponent,
    HttpClientModule,
  ],

  providers: [
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'MHW Boardgame';
  router: any;
  selected: any;
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
    // this.selected = 1;
  }

  ngOnInit(): void {
    this.loading = true;
    this.ds.getItems().subscribe((response) => {
      this.ds.materials = response;
      this.loading = false;
    });
  }

  goTo(route: any) {
    this.selected = route;
  }
}

