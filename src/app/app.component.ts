import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InventoryComponent } from './modules/inventory/inventory.component';
import { WeaponsComponent } from './modules/weapons/weapons.component';
import { ArmorsComponent } from './modules/armors/armors.component';
import { CommonModule } from '@angular/common';
import { MissionLogComponent } from "./modules/mission-log/mission-log.component";
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
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
  title = 'Monster Hunter World Boardgame';
  router: any;
  selected: any;
  loading = true;

  constructor(
    private ds: DataService,
  ) {
    this.selected = 'Armors';
  }

  ngOnInit(): void {
    this.loading = true;
    this.ds.getItems().subscribe((response) => {
      this.ds.materials = response;
      this.loading = false;
    });
  }

  goTo(route: any) {
    // this.router.navigate([route]);
    this.selected = route;
  }
}

