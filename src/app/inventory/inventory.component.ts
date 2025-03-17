import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, DxDataGridModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {

  materials = [
    { "name": "Carbalite Ore", "quantity": 14 },
    { "name": "Machalite Ore", "quantity": 9 },
    { "name": "Dragonite Ore", "quantity": 10 },
    { "name": "Fucium", "quantity": 10 },
    { "name": "Quality Bone", "quantity": 12 },
    { "name": "Monster Bone Small", "quantity": 11 },
    { "name": "Monster Bone Medium", "quantity": 8 },
    { "name": "Monster Bone Large", "quantity": 3 },
    { "name": "Monster Hardbone", "quantity": 0 },
    { "name": "Monster Keenbone", "quantity": 5 },
    { "name": "Ancient Bone", "quantity": 2 },
    { "name": "Boulder Bone", "quantity": 0 },
    { "name": "Dragonvein Crystal", "quantity": 6 },
    { "name": "Wingdrake Hide", "quantity": 0 },
    { "name": "Firecell Stone", "quantity": 0 },
    { "name": "Coral Crystal", "quantity": 0 },
    { "name": "Piercing Claw", "quantity": 5 },
    { "name": "Sharp Claw", "quantity": 3 },
    { "name": "Warm Pelt", "quantity": 0 },
    { "name": "Great Jagras Claw", "quantity": 2 },
    { "name": "Great Jagras Hide", "quantity": 1 },
    { "name": "Great Jagras Mane", "quantity": 2 },
    { "name": "Great Jagras Scale", "quantity": 0 },
    { "name": "Electro Sac", "quantity": 0 },
    { "name": "Thunder Sac", "quantity": 2 },
    { "name": "Tobi-Kadachi Claw", "quantity": 4 },
    { "name": "Tobi-Kadachi Electrode", "quantity": 3 },
    { "name": "Tobi-Kadachi Membrane", "quantity": 5 },
    { "name": "Tobi-Kadachi Pelt", "quantity": 4 },
    { "name": "Tobi-Kadachi Scale", "quantity": 3 },
    { "name": "Flame Sac", "quantity": 0 },
    { "name": "Inferno Sac", "quantity": 0 },
    { "name": "Anjanath Fang", "quantity": 0 },
    { "name": "Anjanath Nosebone", "quantity": 0 },
    { "name": "Anjanath Pelt", "quantity": 0 },
    { "name": "Anjanath Scale", "quantity": 0 },
    { "name": "Anjanath Tail", "quantity": 0 },
    { "name": "Rathalos Carapace", "quantity": 0 },
    { "name": "Rathalos Marrow", "quantity": 0 },
    { "name": "Rathalos Medulla", "quantity": 0 },
    { "name": "Rathalos Plate", "quantity": 0 },
    { "name": "Rathalos Scale", "quantity": 0 },
    { "name": "Rathalos Shell", "quantity": 0 },
    { "name": "Rathalos Tail", "quantity": 0 },
    { "name": "Rathalos Webbing", "quantity": 0 },
    { "name": "Rathalos Wing", "quantity": 0 },
    { "name": "Rathalos Wingtalon", "quantity": 0 },
    { "name": "Azure Rathalos Carapace", "quantity": 0 },
    { "name": "Azure Rathalos Marrow", "quantity": 0 },
    { "name": "Azure Rathalos Plate", "quantity": 0 },
    { "name": "Azure Rathalos Scale", "quantity": 0 },
    { "name": "Azure Rathalos Shell", "quantity": 0 },
    { "name": "Azure Rathalos Tail", "quantity": 0 },
    { "name": "Azure Rathalos Webbing", "quantity": 0 },
    { "name": "Azure Rathalos Wingtalon", "quantity": 0 },
    { "name": "Azure Rathalos Wing", "quantity": 0 }
  ]
  popupTitle: string | undefined;


  constructor() { }

  ngOnInit(): void {
    console.log("TEST");

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
