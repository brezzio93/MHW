import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, DxDataGridModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {

  materials: any;
  popupTitle: string | undefined;


  constructor(
    private ds: DataService,
  ) { }

  ngOnInit(): void {
    console.log("TEST");
    this.materials = this.ds.materials;
  }

  substract(material: any) { }
  add(material: any) { }

  /**
   * cambia el color de las celdas según semáforo
   * @param e evento de componente tabla
   * @param itemID ID de activeItem
   */
  paintCellTable(e: any) {
    if (e.rowType === "data") {
      if (e.data.quantity < 4) e.cellElement.style.cssText = "background-color: #f5c6cb";
      if (e.data.quantity >= 4 && e.data.quantity < 12) e.cellElement.style.cssText = "background-color: #ffecbf";
      if (e.data.quantity >= 12) e.cellElement.style.cssText = "background-color: #d4edda";
    }
  }

  onEditingStart(event: any) {
    this.popupTitle = event.data.name;
  }



}
