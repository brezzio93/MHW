import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DxDataGridModule } from 'devextreme-angular';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [
    CommonModule,
    DxDataGridModule,
  ],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {

  materials: any;
  popupTitle: string | undefined;
  addedAmount = 0;
  loading: boolean = false;

  constructor(
    private ds: DataService,
  ) { }

  ngOnInit(): void {
    this.materials = this.ds.materials;
  }

  add(addedAmount: any) {
    this.addedAmount += addedAmount;
  }

  update(material: any) {
    this.loading = true;
    let params = {
      idMaterial: material.idMaterial,
      idCampaign: material.idCampaign,
      addedAmount:this.addedAmount
    }

    this.ds.updateItem(params).subscribe((res)=>{
      material.materialQuantity += this.addedAmount;
      this.addedAmount = 0;
      this.loading = false;
    })
  }


  /**
   * cambia el color de las celdas según semáforo
   * @param e evento de componente tabla
   * @param itemID ID de activeItem
   */
  paintCellTable(e: any) {
    if (e.rowType === "data") {
      if (e.data.materialQuantity < 4) e.cellElement.style.cssText = "background-color: #f5c6cb; text-align: center;";
      if (e.data.materialQuantity >= 4 && e.data.materialQuantity < 12) e.cellElement.style.cssText = "background-color: #ffecbf; text-align: center;";
      if (e.data.materialQuantity >= 12) e.cellElement.style.cssText = "background-color: #d4edda; text-align: center;";
    }
  }

  onEditingStart(event: any) {
    this.popupTitle = event.data.materialName;
  }



}
