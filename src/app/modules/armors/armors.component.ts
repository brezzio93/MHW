import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DxDataGridModule } from 'devextreme-angular';

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
  loadingTable: boolean = true;
  loadingUpdate: boolean = false;

  constructor(private ds: DataService) {
  }

  ngOnInit() {
    this.getArmors();
  }

  getArmors() {
    this.loadingTable = true;
    this.ds.getArmors().subscribe((res) => {
      this.ds.armors = res;
      this.setOwned();
      this.loadingTable = false;
    });
  }

  setOwned() {
    this.armors = [];
    this.ds.recipeArmors.forEach((armor: any) => {
      let auxArmor = this.ds.armors.find(x => x.armorName == armor.armorName);
      armor.amountCrafted = (auxArmor?.amountCrafted) ? auxArmor?.amountCrafted : 0;

      if (armor.materials != undefined) {
        armor.craftable = 100;

        armor.materials.forEach((material: any) => {
          material.owned = this.ds.materials.find(x => x.materialName == material.material)?.materialQuantity;
          material.craftable = Math.floor(material.owned / material.needed);
          if (material.craftable < armor.craftable) armor.craftable = material.craftable;
        });
      }
      this.armors.push(armor)
    });
    console.log(this.armors);
  }

  paintCellTable(e: any) {
    if (e.rowType === "data") {
      if ((e.data.amountCrafted == 0 && e.data.craftable == 0) || e.data.materials == undefined) e.cellElement.style.cssText = "background-color: #f5c6cb; text-align: center;";
      if ((e.data.amountCrafted > 0 && e.data.craftable == 0) && e.data.materials != undefined) e.cellElement.style.cssText = "background-color: #f5c6cb; text-align: center; font-weight:600;";
      if (e.data.amountCrafted < 4 && e.data.craftable > 0 && e.data.amountCrafted == 0) e.cellElement.style.cssText = "background-color: #ffecbf; text-align: center;";
      if (e.data.craftable + e.data.amountCrafted < 4 && e.data.craftable > 0 && e.data.amountCrafted > 0) e.cellElement.style.cssText = "background-color: #ffecbf; text-align: center; font-weight:600;";
      if (e.data.craftable + e.data.amountCrafted >= 4 && e.data.amountCrafted == 0) e.cellElement.style.cssText = "background-color: #d4edda; text-align: center;";
      if (e.data.craftable + e.data.amountCrafted >= 4 && e.data.amountCrafted > 0) e.cellElement.style.cssText = "background-color: #d4edda; text-align: center; font-weight:600;";
    }
  }

  paintInnerCellTable(e: any) {
    if (e.rowType === "data") {
      if (e.data.owned < e.data.needed) e.cellElement.style.cssText = "background-color: #f5c6cb; text-align: center;";
      else e.cellElement.style.cssText = "background-color: #d4edda; text-align: center;";
    }
  }

  forge(e: any) {
    this.loadingUpdate = true;
    let auxArmorRecipe = this.ds.recipeArmors.find((x) => x.armorName == e.armorName);

    let params = {
      idCampaign: this.ds.campaignID.toString(),
      armorJson: auxArmorRecipe,
    }

    this.ds.updateArmor(params).subscribe((responseArmors) => {
      this.ds.getItems().subscribe((resMaterials) => {
        this.ds.materials = resMaterials;
        this.getArmors();
        this.loadingUpdate = false;
      })
    })
  }

}
