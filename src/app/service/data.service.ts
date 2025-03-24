import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  armors = [
    {
      "armor": "Alloy Helm",
      "crafted": 0,
      "materials": [
        {
          "material": "Machalite Ore",
          "needed": 2,
        },
        {
          "material": "Carbalite Ore",
          "needed": 1,
        },
        {
          "material": "Dragonite Ore",
          "needed": 1,
        }
      ]
    },
    {
      "armor": "Alloy Mail",
      "crafted": 0,
      "materials": [
        {
          "material": "Machalite Ore",
          "needed": 1,
        },
        {
          "material": "Carbalite Ore",
          "needed": 2,
        },
        {
          "material": "Dragonite Ore",
          "needed": 1,
        }
      ]
    },
    {
      "armor": "Alloy Greaves",
      "crafted": 0,
      "materials": [
        {
          "material": "Machalite Ore",
          "needed": 1,
        },
        {
          "material": "Carbalite Ore",
          "needed": 2,
        },
        {
          "material": "Dragonite Ore",
          "needed": 1,
        }
      ]
    },
    {
      "armor": "Bone Helm",
      "crafted": 0,
      "materials": [
        {
          "material": "Monster Bone Small",
          "needed": 2,
        },
        {
          "material": "Ancient Bone",
          "needed": 2,
        }
      ]
    },
    {
      "armor": "Bone Mail",
      "crafted": 0,
      "materials": [
        {
          "material": "Monster Bone Small",
          "needed": 1,
        },
        {
          "material": "Ancient Bone",
          "needed": 1,
        }
      ]
    },
    {
      "armor": "Bone Greaves",
      "crafted": 0,
      "materials": [
        {
          "material": "Monster Bone Small",
          "needed": 1,
        },
        {
          "material": "Ancient Bone",
          "needed": 1,
        }
      ]
    },
    {
      "armor": "Jagras Helm",
      "crafted": 2,
      "materials": [
        {
          "material": "Great Jagras Hide",
          "needed": 1,
        },
        {
          "material": "Great Jagras Mane",
          "needed": 1,
        },
        {
          "material": "Great Jagras Claw",
          "needed": 1,
        },
        {
          "material": "Ancient Bone",
          "needed": 1,
        }
      ]
    },
    {
      "armor": "Jagras Mail",
      "crafted": 4,
      "materials": [
        {
          "material": "Great Jagras Hide",
          "needed": 1,
        },
        {
          "material": "Great Jagras Claw",
          "needed": 1,
        },
        {
          "material": "Great Jagras Scale",
          "needed": 1,
        },
        {
          "material": "Monster Bone Small",
          "needed": 1,
        }
      ]
    },
    {
      "armor": "Jagras Greaves",
      "crafted": 0,
      "materials": [
        {
          "material": "Great Jagras Scale",
          "needed": 1,
        },
        {
          "material": "Great Jagras Hide",
          "needed": 1,
        },
        {
          "material": "Great Jagras Mane",
          "needed": 1,
        }
      ]
    },
    {
      "armor": "Kadachi Helm",
      "crafted": 0,
      "materials": [
        {
          "material": "Tobi-Kadachi Pelt",
          "needed": 1,
        },
        {
          "material": "Tobi-Kadachi Claw",
          "needed": 1,
        },
        {
          "material": "Electro Sac",
          "needed": 1,
        }
      ]
    },
    {
      "armor": "Kadachi Mail",
      "crafted": 0,
      "materials": [
        {
          "material": "Tobi-Kadachi Pelt",
          "needed": 1,
        },
        {
          "material": "Tobi-Kadachi Electrode",
          "needed": 1,
        },
        {
          "material": "Tobi-Kadachi Membrane",
          "needed": 2,
        },
        {
          "material": "Wingdrake Hide",
          "needed": 1,
        }
      ]
    },
    {
      "armor": "Kadachi Greaves",
      "crafted": 0,
      "materials": [
        {
          "material": "Tobi-Kadachi Scale",
          "needed": 2,
        },
        {
          "material": "Tobi-Kadachi Pelt",
          "needed": 1,
        },
        {
          "material": "Warm Pelt",
          "needed": 1,
        }
      ]
    },
    {
      "armor": "Anja Helm",
      "crafted": 0,
      "materials": [
        {
          "material": "Anjanath Pelt",
          "needed": 1,
        },
        {
          "material": "Anjanath Scale",
          "needed": 1,
        },
        {
          "material": "Anjanath Tail",
          "needed": 1,
        }
      ]
    },
    {
      "armor": "Anja Mail",
      "crafted": 0,
      "materials": [
        {
          "material": "Anjanath Pelt",
          "needed": 1,
        },
        {
          "material": "Anjanath Fang",
          "needed": 1,
        },
        {
          "material": "Anjanath Nosebone",
          "needed": 1,
        }
      ]
    },
    {
      "armor": "Anja Greaves",
      "crafted": 0,
      "materials": [
        {
          "material": "Anjanath Scale",
          "needed": 1,
        },
        {
          "material": "Anjanath Pelt",
          "needed": 1,
        },
        {
          "material": "Flame Sac",
          "needed": 1,
        },
        {
          "material": "Machalite Ore",
          "needed": 2,
        }
      ]
    },
    {
      "armor": "Rathalos Helm",
      "crafted": 0,
      "materials": [
        {
          "material": "Rathalos Scale",
          "needed": 1,
        },
        {
          "material": "Rathalos Shell",
          "needed": 1,
        },
        {
          "material": "Rathalos Marrow",
          "needed": 1,
        }
      ]
    },
    {
      "armor": "Rathalos Mail",
      "crafted": 0,
      "materials": [
        {
          "material": "Rathalos Scale",
          "needed": 1,
        },
        {
          "material": "Rathalos Webbing",
          "needed": 1,
        },
        {
          "material": "Rathalos Plate",
          "needed": 1,
        }
      ]
    },
    {
      "armor": "Rathalos Greaves",
      "crafted": 0,
      "materials": [
        {
          "material": "Rathalos Shell",
          "needed": 1,
        },
        {
          "material": "Rathalos Wingtalon",
          "needed": 1,
        },
        {
          "material": "Rathalos Tail",
          "needed": 1,
        }
      ]
    },
    {
      "armor": "Rath Soul Helm",
      "crafted": 0,
      "materials": [
        {
          "material": "Azure Rathalos Scale",
          "needed": 1,
        },
        {
          "material": "Azure Rathalos Carapace",
          "needed": 1,
        },
        {
          "material": "Azure Rathalos Marrow",
          "needed": 1,
        }
      ]
    },
    {
      "armor": "Rath Soul Mail",
      "crafted": 0,
      "materials": [
        {
          "material": "Azure Rathalos Scale",
          "needed": 1,
        },
        {
          "material": "Azure Rathalos Wing",
          "needed": 2,
        },
        {
          "material": "Azure Rathalos Plate",
          "needed": 1,
        }
      ]
    },
    {
      "armor": "Rath Soul Greaves",
      "crafted": 0,
      "materials": [
        {
          "material": "Azure Rathalos Carapace",
          "needed": 1,
        },
        {
          "material": "Azure Rathalos Wingtalon",
          "needed": 2,
        },
        {
          "material": "Azure Rathalos Tail",
          "needed": 1,
        }
      ]

    },
  ];

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

  constructor(private http: HttpClient) { }

  updateArmor(armor: any): Observable<any> {

    //DATA TO UPDATE:
    //-armor name
    //-amount crafted
    //-materials qty
    return this.http.get('https://es.marvelcdb.com/api/public/cards/?encounter=1');
  }

}
