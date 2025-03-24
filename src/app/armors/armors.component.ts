import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-armors',
  standalone: true,
  imports: [CommonModule,
    DxDataGridModule,
  ],
  providers: [],
  templateUrl: './armors.component.html',
  styleUrl: './armors.component.css'
})
export class ArmorsComponent implements OnInit {

  armors: any;

  constructor(private ds: DataService) {

  }

  ngOnInit() {
    this.armors = this.ds.armors;
    this.setOwned();
  }

  setOwned() {
    this.armors.forEach((armor: any) => {
      armor.craftable = 100;
      armor.materials.forEach((material: any) => {
        material.owned = this.ds.materials.find(x => x.name == material.material)?.quantity;
        material.craftable = Math.floor(material.owned / material.needed);
        if (material.craftable < armor.craftable) armor.craftable = material.craftable;
      });
    });
  }

  paintCellTable(e: any) {
    if (e.rowType === "data") {
      if (e.data.crafted < 4 && e.data.craftable == 0) e.cellElement.style.cssText = "background-color: #f5c6cb";
      if (e.data.craftable + e.data.crafted < 4 && e.data.craftable > 0) e.cellElement.style.cssText = "background-color: #ffecbf";
      if (e.data.craftable + e.data.crafted >= 4) e.cellElement.style.cssText = "background-color: #d4edda";
    }
  }

  paintInnerCellTable(e: any) {
    if (e.rowType === "data") {
      if (e.data.owned < e.data.needed) e.cellElement.style.cssText = "background-color: #f5c6cb";
      else e.cellElement.style.cssText = "background-color: #d4edda";
    }
  }

  forge(e: any) {
    let auxArmor = this.armors.find((x: any) => x.armor == e.armor);
    auxArmor.crafted++;

    auxArmor.materials.forEach((material: any) => {
      this.ds.materials.forEach((itemBox: any) => {
        if (material.material == itemBox.name) {
          itemBox.quantity -= material.needed;
        }
      })
    });

    this.ds.updateArmor(auxArmor).subscribe((response) => {
      this.setOwned();
    })

  }

  log(e: any) {
    console.log(e)
  }

}
