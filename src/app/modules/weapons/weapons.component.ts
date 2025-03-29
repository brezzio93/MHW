import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { DxDataGridModule, DxSelectBoxModule } from 'devextreme-angular';

@Component({
  selector: 'app-weapons',
  standalone: true,
  imports: [
    CommonModule,
    DxDataGridModule,
    DxSelectBoxModule,
  ],
  templateUrl: './weapons.component.html',
  styleUrl: './weapons.component.css'
})

export class WeaponsComponent implements OnInit {

  weapons: any;
  weaponsType = [
    { id: 'gs', name: 'Great Sword' },
    { id: 'sns', name: 'Sword and Shield' },
    { id: 'db', name: 'Dual Blades' },
    { id: 'bow', name: 'Bow' },
  ];
  chosenType: any;

  constructor(private ds: DataService) {

  }

  ngOnInit(): void {
    this.chosenType = this.weaponsType[0].name;
    this.selectType(this.chosenType);
  }

  selectType(e: any) {
    this.chosenType = e;
    this.weapons = this.ds.weapons.filter(x => x.type == e);
    this.setOwned();
  }

  setOwned() {
    this.weapons.forEach((w: any) => {
      w.craftable = true;
      w.materials.forEach((material: any) => {
        material.owned = this.ds.materials.find(x => x.materialName == material.name)?.materialQuantity;
        material.craftable = (Math.floor(material.owned / material.needed) > 1);
        if (!material.craftable) w.craftable = false;
      });
    });
  }

  forge(e: any) {
    let auxWeapon = this.weapons.find((x: any) => x.name == e.name);
    if (auxWeapon.crafted == false) {
      auxWeapon.crafted = true;

      //Esto se actualiza en el endpoint
      auxWeapon.materials.forEach((material: any) => {
        this.ds.materials.forEach((itemBox: any) => {
          if (material.name == itemBox.materialName) {
            itemBox.materialQuantity -= material.needed;
          }
        })
      });

      this.ds.updateWeapon(auxWeapon).subscribe((response) => {
        this.setOwned();
      })

    }
  }

  paintCellTable(e: any) {
    if (e.rowType === "data") {
      if (!e.data.craftable) e.cellElement.style.cssText = "background-color: #f5c6cb; text-align: center;";
      if (e.data.craftable || e.data.crafted) e.cellElement.style.cssText = "background-color: #d4edda; text-align: center;";
    }
  }

  paintInnerCellTable(e: any) {
    if (e.rowType === "data") {
      if (e.data.owned < e.data.needed) e.cellElement.style.cssText = "background-color: #f5c6cb; text-align: center;";
      else e.cellElement.style.cssText = "background-color: #d4edda; text-align: center;";
    }
  }

  log(e: any) {
    console.log(e);
  }

}
