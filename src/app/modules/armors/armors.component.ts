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
  loading: boolean = true;

  constructor(private ds: DataService) {
  }

  ngOnInit() {
    this.loading = true;
    this.ds.getArmors().subscribe((res) => {
      this.armors = this.ds.armors;
      console.log(this.armors)
    });

    this.setOwned();
  }

  setOwned() {
    this.armors.forEach((armor: any) => {
      armor.craftable = 100;
      armor.materials.forEach((material: any) => {
        material.owned = this.ds.materials.find(x => x.name == material.material)?.materialQuantity;
        material.craftable = Math.floor(material.owned / material.needed);
        if (material.craftable < armor.craftable) armor.craftable = material.craftable;
      });
    });
  }

  paintCellTable(e: any) {
    if (e.rowType === "data") {
      if (e.data.crafted < 4 && e.data.craftable == 0) e.cellElement.style.cssText = "background-color: #f5c6cb; text-align: center;";
      if (e.data.craftable + e.data.crafted < 4 && e.data.craftable > 0) e.cellElement.style.cssText = "background-color: #ffecbf; text-align: center;";
      if (e.data.craftable + e.data.crafted >= 4) e.cellElement.style.cssText = "background-color: #d4edda; text-align: center;";
    }
  }

  paintInnerCellTable(e: any) {
    if (e.rowType === "data") {
      if (e.data.owned < e.data.needed) e.cellElement.style.cssText = "background-color: #f5c6cb; text-align: center;";
      else e.cellElement.style.cssText = "background-color: #d4edda; text-align: center;";
    }
  }

  forge(e: any) {
    let auxArmor = this.armors.find((x: any) => x.armor == e.armor);
    auxArmor.crafted++;

    //Esto se actualiza en el endpoint
    auxArmor.materials.forEach((material: any) => {
      this.ds.materials.forEach((itemBox: any) => {
        if (material.material == itemBox.name) {
          itemBox.materialQuantity -= material.needed;
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
