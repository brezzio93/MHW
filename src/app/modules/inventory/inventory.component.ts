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
    this.itemsInit();
  }

  itemsInit() {
    this.loading = true;
    this.ds.getItems().subscribe((response) => {
      this.ds.materials = response;
      this.ds.materials.forEach(element => {
        let auxMaterial = this.ds.basicMaterials.find(x => x.materialName == element.materialName);
        element.tree = auxMaterial?.tree;
        element.treeIcon = auxMaterial?.treeIcon;
      });
      this.materials = this.ds.materials;
      this.loading = false;
      console.log(this.materials)
    });
  }

  add(addedAmount: any) {
    this.addedAmount += addedAmount;
  }

  update(material: any) {
    this.loading = true;
    let params = {
      materialName: material.materialName,
      idCampaign: this.ds.campaignID.toString(),
      addedAmount: this.addedAmount,
    }

    this.ds.updateItem(params).subscribe((resUpdate) => {
      this.addedAmount = 0;
      this.itemsInit();
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
