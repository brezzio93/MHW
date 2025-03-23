import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-armors',
  standalone: true,
  imports: [CommonModule, DxDataGridModule],
  templateUrl: './armors.component.html',
  styleUrl: './armors.component.css'
})
export class ArmorsComponent implements OnInit {

  armors: any;

  constructor(private ds: DataService) {

  }

  ngOnInit() {
    this.armors = this.ds.armors;
    this.armors.forEach((armor: any) => {
      armor.craftable = 100;
      armor.materials.forEach((material: any) => {
        material.owned = this.ds.materials.find(x => x.name == material.material)?.quantity;
        material.craftable = Math.floor(material.owned / material.needed);
        if (material.craftable < armor.craftable) armor.craftable = material.craftable;
      });
    });
  }

  /**
   * cambia el color de las celdas según semáforo
   * @param e evento de componente tabla
   * @param itemID ID de activeItem
   */
  paintCellTable(e: any) {
    if (e.rowType === "data") {
      if (e.data.crafted < 4 && e.data.craftable == 0) e.cellElement.style.cssText = "background-color: #f5c6cb";
      //=AND((K2<$C$2),(L2=0))
      if (e.data.craftable + e.data.crafted < 4 && e.data.craftable > 0) e.cellElement.style.cssText = "background-color: #ffecbf";
      //=AND((craftable + crafted < players),( craftables > 0))
      if (e.data.craftable + e.data.crafted >= 4) e.cellElement.style.cssText = "background-color: #d4edda";
      //=(craftable + crafted >= players)
    }
  }

  forge(e: any) {

  }

  log(e: any) {
    console.log(e)
  }

}
