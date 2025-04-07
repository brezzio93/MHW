import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { DxDataGridModule, DxSelectBoxModule, DxTextBoxModule } from 'devextreme-angular';

@Component({
  selector: 'app-weapons',
  standalone: true,
  imports: [
    CommonModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxTextBoxModule
  ],
  templateUrl: './weapons.component.html',
  styleUrl: './weapons.component.css'
})

export class WeaponsComponent implements OnInit {

  weapons: any;
  weaponsType = [
    { id: 'gs', name: 'Great Sword' , icon: 'assets/icons/weapons/great-sword.png'},
    { id: 'sns', name: 'Sword and Shield' , icon: 'assets/icons/weapons/sword-and-shield.png'},
    { id: 'db', name: 'Dual Blades' , icon: 'assets/icons/weapons/dual-blades.png'},
    { id: 'bow', name: 'Bow' , icon: 'assets/icons/weapons/bow.png'},
    { id: 'h', name: 'Hammer' , icon: 'assets/icons/weapons/hammer.png'},
    { id: 'hh', name: 'Hunting Horn' , icon: 'assets/icons/weapons/hammer.png'},
    { id: 'l', name: 'Lance' , icon: 'assets/icons/weapons/lance.png'},
    { id: 'gl', name: 'Gunlance' , icon: 'assets/icons/weapons/gunlance.png'},
    { id: 'ls', name: 'Longsword' , icon: 'assets/icons/weapons/long-sword.png'},
    { id: 'lbg', name: 'Light Bowgun' , icon: 'assets/icons/weapons/light-gun.png'},
  ];
  chosenType: any;
  loadingTable = false;
  loadingUpdate = false;

  constructor(private ds: DataService) {

  }

  ngOnInit(): void {
    this.chosenType = this.weaponsType[0].name;
    this.getWeapons();
  }

  getWeapons() {
    this.loadingTable = true;
    
    this.ds.getWeapons().subscribe((res) => {
      this.ds.weapons = res;
      this.initWeapons();
      this.selectType(this.chosenType);
      this.loadingTable = false;
    });
  }

  initWeapons() {
    this.ds.recipeWeapons.forEach((weapon: any) => {
      let auxWeapon = this.ds.weapons.find(x => x.weaponName == weapon.weaponName);
      weapon.weaponCrafted = (auxWeapon?.weaponCrafted) ? auxWeapon?.weaponCrafted : false;
    });
  }

  selectType(e: any) {
    this.chosenType = e;
    this.weapons = this.ds.recipeWeapons.filter((x: any) => x.type == e);
    this.setOwned();
    console.log(this.weapons)
  }

  setOwned() {
    this.weapons.forEach((w: any, index: any) => {

      w.craftable = true;

      //Check if previous weapon of the same tree has been crafted
      if (index != 0 && w.tree == this.weapons[index - 1].tree) {
        w.craftable = (this.weapons[index - 1].weaponCrafted) ? true : false;
      }

      w.materials.forEach((material: any) => {
        material.owned = this.ds.materials.find(x => x.materialName == material.material)?.materialQuantity;
        material.craftable = (Math.floor(material.owned / material.needed) > 1);
        if (!material.craftable) w.craftable = false;
      });
    });
  }

  forge(e: any) {

    this.loadingUpdate = true;
    let auxRecipe = this.ds.recipeWeapons.find((x) => x.weaponName == e.weaponName);

    let params = {
      idCampaign: this.ds.campaignID.toString(),
      weaponJson: auxRecipe,
    }

    this.ds.updateWeapon(params).subscribe((response) => {
      this.ds.getItems().subscribe((resMaterials) => {
        this.ds.materials = resMaterials;
        this.getWeapons();
        this.loadingUpdate = false;
      });
    })

  }

  paintCellTable(e: any) {
    if (e.rowType === "data") {
      if (!e.data.craftable) e.cellElement.style.cssText = "background-color: #f5c6cb; text-align: center;";
      if (e.data.craftable) e.cellElement.style.cssText = "background-color: #d4edda; text-align: center;";
      if (e.data.weaponCrafted) e.cellElement.style.cssText = "background-color: #d4edda; text-align: center; font-weight:600;";
    }
  }

  paintInnerCellTable(e: any) {
    if (e.rowType === "data") {
      if (e.data.owned < e.data.needed) e.cellElement.style.cssText = "background-color: #f5c6cb; text-align: center;";
      else e.cellElement.style.cssText = "background-color: #d4edda; text-align: center;";
    }
  }

}
