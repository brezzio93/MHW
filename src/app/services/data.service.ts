import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private apiUrl = 'http://localhost:8080/api/'; // Replace with actual URL
  // private apiUrl = 'http://localhost:5230/api/'; // Replace with actual URL
  private apiUrl = 'https://mhw-api.up.railway.app/api/'; // Replace with actual URL

  headers = {
    headers: {
      'ngrok-skip-browser-warning': 'true',
    }
  }

  armors: any[] = [];
  weapons: any[] = [];
  materials: any[] = [];
  recipeArmors = [
    {
      "armorName": "Alloy Helm",
      "tree": "Iron",
      "treeIcon": "assets/icons/materials/ore.png",
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
      "armorName": "Alloy Mail",
      "tree": "Iron",
      "treeIcon": "assets/icons/materials/ore.png",
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
      "armorName": "Alloy Greaves",
      "tree": "Iron",
      "treeIcon": "assets/icons/materials/ore.png",
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
      "armorName": "Bone Helm",
      "tree": "Bone",
      "treeIcon": "assets/icons/materials/bone.png",
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
      "armorName": "Bone Mail",
      "tree": "Bone",
      "treeIcon": "assets/icons/materials/bone.png",
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
      "armorName": "Bone Greaves",
      "tree": "Bone",
      "treeIcon": "assets/icons/materials/bone.png",
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
      "armorName": "Jagras Helm",
      "tree": "Great Jagras",
      "treeIcon": "assets/icons/monsters/g-jagr.png",
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
      "armorName": "Jagras Mail",
      "tree": "Great Jagras",
      "treeIcon": "assets/icons/monsters/g-jagr.png",
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
      "armorName": "Jagras Greaves",
      "tree": "Great Jagras",
      "treeIcon": "assets/icons/monsters/g-jagr.png",
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
      "armorName": "Kadachi Helm",
      "tree": "Tobi-Kadachi",
      "treeIcon": "assets/icons/monsters/tobi.png",
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
      "armorName": "Kadachi Mail",
      "tree": "Tobi-Kadachi",
      "treeIcon": "assets/icons/monsters/tobi.png",
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
      "armorName": "Kadachi Greaves",
      "tree": "Tobi-Kadachi",
      "treeIcon": "assets/icons/monsters/tobi.png",
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
      "armorName": "Anja Helm",
      "tree": "Anjanath",
      "treeIcon": "assets/icons/monsters/anja.png",
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
      "armorName": "Anja Mail",
      "tree": "Anjanath",
      "treeIcon": "assets/icons/monsters/anja.png",
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
      "armorName": "Anja Greaves",
      "tree": "Anjanath",
      "treeIcon": "assets/icons/monsters/anja.png",
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
      "armorName": "Rathalos Helm",
      "tree": "Rathalos",
      "treeIcon": "assets/icons/monsters/ratha.png",
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
      "armorName": "Rathalos Mail",
      "tree": "Rathalos",
      "treeIcon": "assets/icons/monsters/ratha.png",
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
      "armorName": "Rathalos Greaves",
      "tree": "Rathalos",
      "treeIcon": "assets/icons/monsters/ratha.png",
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
      "armorName": "Rath Soul Helm",
      "tree": "Azure Rathalos",
      "treeIcon": "assets/icons/monsters/a-ratha.png",
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
      "armorName": "Rath Soul Mail",
      "tree": "Azure Rathalos",
      "treeIcon": "assets/icons/monsters/a-ratha.png",
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
      "armorName": "Rath Soul Greaves",
      "tree": "Azure Rathalos",
      "treeIcon": "assets/icons/monsters/a-ratha.png",
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

  recipeWeapons = [
    //GS
    {
      "weaponName": "Buster Blade",
      "type": "Great Sword",
      "tree": "Iron",
      "treeIcon": "assets/icons/materials/ore.png",
      "level": 1,
      "materials": [
        { "material": "Dragonite Ore", "needed": 1 },
        { "material": "Machalite Ore", "needed": 1 },
        { "material": "Monster Bone Medium", "needed": 1 }
      ],
    },
    {
      "weaponName": "Chrome Razor",
      "type": "Great Sword",
      "tree": "Iron",
      "treeIcon": "assets/icons/materials/ore.png",
      "level": 2,
      "materials": [
        { "material": "Fucium Ore", "needed": 2 },
        { "material": "Carbalite Ore", "needed": 2 },
        { "material": "Dragonite Ore", "needed": 3 },
        { "material": "Dragonvein Crystal", "needed": 2 }
      ],
    },
    {
      "weaponName": "Bone Blade",
      "type": "Great Sword",
      "tree": "Bone",
      "treeIcon": "assets/icons/materials/bone.png",
      "level": 1,
      "materials": [
        { "material": "Monster Bone Small", "needed": 1 }
      ],
    },
    {
      "weaponName": "Bone Slasher",
      "type": "Great Sword",
      "tree": "Bone",
      "treeIcon": "assets/icons/materials/bone.png",
      "level": 2,
      "materials": [
        { "material": "Monster Bone Large", "needed": 1 },
        { "material": "Monster Bone Medium", "needed": 1 },
        { "material": "Boulder Bone", "needed": 1 }
      ],
    },
    {
      "weaponName": "Giant Jawblade",
      "type": "Great Sword",
      "tree": "Bone",
      "treeIcon": "assets/icons/materials/bone.png",
      "level": 3,
      "materials": [
        { "material": "Monster Hardbone", "needed": 2 },
        { "material": "Monster Keenbone", "needed": 2 },
        { "material": "Quality Bone", "needed": 3 }
      ],
    },
    {
      "weaponName": "Jagras Blade",
      "type": "Great Sword",
      "tree": "Jagras",
      "treeIcon": "assets/icons/monsters/g-jagr.png",
      "level": 1,
      "materials": [
        { "material": "Great Jagras Claw", "needed": 2 },
        { "material": "Great Jagras Hide", "needed": 1 },
        { "material": "Great Jagras Scale", "needed": 2 },
        { "material": "Sharp Claw", "needed": 1 }
      ],
    },
    {
      "weaponName": "Jagras Hacker",
      "type": "Great Sword",
      "tree": "Jagras",
      "treeIcon": "assets/icons/monsters/g-jagr.png",
      "level": 2,
      "materials": [
        { "material": "Great Jagras Scale", "needed": 2 },
        { "material": "Great Jagras Claw", "needed": 2 },
        { "material": "Great Jagras Mane", "needed": 2 },
        { "material": "Piercing Claw", "needed": 1 }
      ],
    },
    {
      "weaponName": "Flame Blade",
      "type": "Great Sword",
      "tree": "Rathalos",
      "treeIcon": "assets/icons/monsters/ratha.png",
      "level": 1,
      "materials": [
        { "material": "Rathalos Scale", "needed": 2 },
        { "material": "Rathalos Webbing", "needed": 2 },
        { "material": "Inferno Sac", "needed": 1 },
        { "material": "Rathalos Marrow", "needed": 1 }
      ],
    },
    {
      "weaponName": "Red Wing",
      "type": "Great Sword",
      "tree": "Rathalos",
      "treeIcon": "assets/icons/monsters/ratha.png",
      "level": 2,
      "materials": [
        { "material": "Rathalos Scale", "needed": 2 },
        { "material": "Rathalos Carapace", "needed": 1 },
        { "material": "Rathalos Wing", "needed": 1 },
        { "material": "Rathalos Medulla", "needed": 1 }
      ],
    },
    {
      "weaponName": "Blooming Blade",
      "type": "Great Sword",
      "tree": "Pukei-Pukei",
      "treeIcon": "assets/icons/monsters/puke.png",
      "level": 1,
      "materials": [
        { "material": "Pukei-Pukei Quill", "needed": 2 },
        { "material": "Pukei-Pukei Scale", "needed": 2 },
        { "material": "Poison Sac", "needed": 1 },
        { "material": "Pukei-Pukei Tail", "needed": 1 }
      ],
    },
    {
      "weaponName": "Datura Blaze",
      "type": "Great Sword",
      "tree": "Pukei-Pukei",
      "treeIcon": "assets/icons/monsters/puke.png",
      "level": 2,
      "materials": [
        { "material": "Pukei-Pukei Scale", "needed": 2 },
        { "material": "Pukei-Pukei Wing", "needed": 2 },
        { "material": "Toxin Sac", "needed": 2 },
        { "material": "Quality Bone", "needed": 3 }
      ],
    },
    {
      "weaponName": "Carapace Buster",
      "type": "Great Sword",
      "tree": "Barroth",
      "treeIcon": "assets/icons/monsters/barr.png",
      "level": 1,
      "materials": [
        { "material": "Barroth Claw", "needed": 1 },
        { "material": "Barroth Shell", "needed": 3 },
        { "material": "Barroth Ridge", "needed": 3 }
      ],
    },
    {
      "weaponName": "Barroth Shredder",
      "type": "Great Sword",
      "tree": "Barroth",
      "treeIcon": "assets/icons/monsters/barr.png",
      "level": 2,
      "materials": [
        { "material": "Barroth Claw", "needed": 2 },
        { "material": "Barroth Carapace", "needed": 3 },
        { "material": "Barroth Ridge", "needed": 3 }
      ],
    },

    //SNS
    {
      "weaponName": "Steel Knife",
      "type": "Sword and Shield",
      "tree": "Iron",
      "treeIcon": "assets/icons/materials/ore.png",
      "level": 1,
      "materials": [
        { "material": "Dragonite Ore", "needed": 1 },
        { "material": "Machalite Ore", "needed": 1 },
        { "material": "Monster Bone Medium", "needed": 1 }
      ],
    },
    {
      "weaponName": "Chrome Slicer",
      "type": "Sword and Shield",
      "tree": "Iron",
      "treeIcon": "assets/icons/materials/ore.png",
      "level": 2,
      "materials": [
        { "material": "Fucium Ore", "needed": 2 },
        { "material": "Carbalite Ore", "needed": 2 },
        { "material": "Dragonite Ore", "needed": 3 },
        { "material": "Dragonvein Crystal", "needed": 2 }
      ],
    },
    {
      "weaponName": "Bone Kukri",
      "type": "Sword and Shield",
      "tree": "Bone",
      "treeIcon": "assets/icons/materials/bone.png",
      "level": 1,
      "materials": [
        { "material": "Monster Bone Small", "needed": 1 }
      ],
    },
    {
      "weaponName": "Chief Kukri",
      "type": "Sword and Shield",
      "tree": "Bone",
      "treeIcon": "assets/icons/materials/bone.png",
      "level": 2,
      "materials": [
        { "material": "Monster Bone Large", "needed": 1 },
        { "material": "Monster Bone Medium", "needed": 1 },
        { "material": "Boulder Bone", "needed": 1 }
      ],
    },
    {
      "weaponName": "Grand Barong",
      "type": "Sword and Shield",
      "tree": "Bone",
      "treeIcon": "assets/icons/materials/bone.png",
      "level": 3,
      "materials": [
        { "material": "Monster Hardbone", "needed": 2 },
        { "material": "Monster Keenbone", "needed": 2 },
        { "material": "Quality Bone", "needed": 3 }
      ],
    },
    {
      "weaponName": "Jagras Edge",
      "type": "Sword and Shield",
      "tree": "Jagras",
      "treeIcon": "assets/icons/monsters/g-jagr.png",
      "level": 1,
      "materials": [
        { "material": "Great Jagras Claw", "needed": 2 },
        { "material": "Great Jagras Hide", "needed": 1 },
        { "material": "Great Jagras Scale", "needed": 2 },
        { "material": "Sharp Claw", "needed": 1 }
      ],
    },
    {
      "weaponName": "Jagras Garotte",
      "type": "Sword and Shield",
      "tree": "Jagras",
      "treeIcon": "assets/icons/monsters/g-jagr.png",
      "level": 2,
      "materials": [
        { "material": "Great Jagras Scale", "needed": 3 },
        { "material": "Great Jagras Claw", "needed": 1 },
        { "material": "Great Jagras Mane", "needed": 2 },
        { "material": "Piercing Claw", "needed": 1 }
      ],
    },
    {
      "weaponName": "Flame Knife",
      "type": "Sword and Shield",
      "tree": "Rathalos",
      "treeIcon": "assets/icons/monsters/ratha.png",
      "level": 1,
      "materials": [
        { "material": "Rathalos Scale", "needed": 1 },
        { "material": "Rathalos Tail", "needed": 2 },
        { "material": "Rathalos Plate", "needed": 1 },
        { "material": "Inferno Sac", "needed": 1 }
      ],
    },
    {
      "weaponName": "Heat Edge",
      "type": "Sword and Shield",
      "tree": "Rathalos",
      "treeIcon": "assets/icons/monsters/ratha.png",
      "level": 2,
      "materials": [
        { "material": "Rathalos Scale", "needed": 2 },
        { "material": "Rathalos Carapace", "needed": 2 },
        { "material": "Rathalos Wing", "needed": 1 }
      ],
    },
    {
      "weaponName": "Blooming Knife",
      "type": "Sword and Shield",
      "tree": "Pukei-Pukei",
      "treeIcon": "assets/icons/monsters/puke.png",
      "level": 1,
      "materials": [
        { "material": "Pukei-Pukei Quill", "needed": 2 },
        { "material": "Pukei-Pukei Scale", "needed": 2 },
        { "material": "Poison Sac", "needed": 1 },
        { "material": "Pukei-Pukei Tail", "needed": 1 }
      ],
    },
    {
      "weaponName": "Datura Blossom",
      "type": "Sword and Shield",
      "tree": "Pukei-Pukei",
      "treeIcon": "assets/icons/monsters/puke.png",
      "level": 2,
      "materials": [
        { "material": "Pukei-Pukei Scale", "needed": 2 },
        { "material": "Pukei-Pukei Wing", "needed": 2 },
        { "material": "Toxin Sac", "needed": 2 },
        { "material": "Quality Bone", "needed": 3 }
      ],
    },
    {
      "weaponName": "Carapace Edge",
      "type": "Sword and Shield",
      "tree": "Barroth",
      "treeIcon": "assets/icons/monsters/barr.png",
      "level": 1,
      "materials": [
        { "material": "Barroth Claw", "needed": 1 },
        { "material": "Barroth Shell", "needed": 3 },
        { "material": "Barroth Ridge", "needed": 3 }
      ],
    },
    {
      "weaponName": "Barroth Club",
      "type": "Sword and Shield",
      "tree": "Barroth",
      "treeIcon": "assets/icons/monsters/barr.png",
      "level": 2,
      "materials": [
        { "material": "Barroth Claw", "needed": 2 },
        { "material": "Barroth Carapace", "needed": 3 },
        { "material": "Barroth Ridge", "needed": 3 }
      ],
    },
    //DB
    {
      "weaponName": "Dual Slicers",
      "type": "Dual Blades",
      "tree": "Iron",
      "treeIcon": "assets/icons/materials/ore.png",
      "level": 1,
      "materials": [
        { "material": "Dragonite Ore", "needed": 1 },
        { "material": "Machalite Ore", "needed": 1 },
        { "material": "Monster Bone Medium", "needed": 1 }
      ],
    },
    {
      "weaponName": "Chrome Slicers",
      "type": "Dual Blades",
      "tree": "Iron",
      "treeIcon": "assets/icons/materials/ore.png",
      "level": 2,
      "materials": [
        { "material": "Fucium Ore", "needed": 2 },
        { "material": "Carbalite Ore", "needed": 2 },
        { "material": "Dragonite Ore", "needed": 3 },
        { "material": "Dragonvein Crystal", "needed": 2 }
      ],
    },
    {
      "weaponName": "Bone Hatchets",
      "type": "Dual Blades",
      "tree": "Bone",
      "treeIcon": "assets/icons/materials/bone.png",
      "level": 1,
      "materials": [
        { "material": "Monster Bone Small", "needed": 1 }
      ],
    },
    {
      "weaponName": "Wild Hatchets",
      "type": "Dual Blades",
      "tree": "Bone",
      "treeIcon": "assets/icons/materials/bone.png",
      "level": 2,
      "materials": [
        { "material": "Monster Bone Large", "needed": 1 },
        { "material": "Monster Bone Medium", "needed": 1 },
        { "material": "Boulder Bone", "needed": 1 }
      ],
    },
    {
      "weaponName": "Strong Hatchets",
      "type": "Dual Blades",
      "tree": "Bone",
      "treeIcon": "assets/icons/materials/bone.png",
      "level": 3,
      "materials": [
        { "material": "Monster Hardbone", "needed": 2 },
        { "material": "Monster Keenbone", "needed": 2 },
        { "material": "Quality Bone", "needed": 3 }
      ],
    },
    {
      "weaponName": "Pulsar Hatchets",
      "type": "Dual Blades",
      "tree": "Tobi-Kadachi",
      "treeIcon": "assets/icons/monsters/tobi.png",
      "level": 1,
      "materials": [
        { "material": "Tobi-Kadachi Electrode", "needed": 1 },
        { "material": "Tobi-Kadachi Claw", "needed": 2 },
        { "material": "Electro Sac", "needed": 2 },
        { "material": "Coral Crystal", "needed": 2 }
      ],
    },
    {
      "weaponName": "Kadachi Claws",
      "type": "Dual Blades",
      "tree": "Tobi-Kadachi",
      "treeIcon": "assets/icons/monsters/tobi.png",
      "level": 2,
      "materials": [
        { "material": "Tobi-Kadachi Electrode", "needed": 2 },
        { "material": "Tobi-Kadachi Claw", "needed": 2 },
        { "material": "Thunder Sac", "needed": 2 }
      ],
    },
    {
      "weaponName": "Blazing Hatchets",
      "type": "Dual Blades",
      "tree": "Anjanath",
      "treeIcon": "assets/icons/monsters/anja.png",
      "level": 1,
      "materials": [
        { "material": "Anjanath Scale", "needed": 3 },
        { "material": "Anjanath Fang", "needed": 2 },
        { "material": "Flame Sac", "needed": 1 }
      ],
    },
    {
      "weaponName": "Anja Cyclone",
      "type": "Dual Blades",
      "tree": "Anjanath",
      "treeIcon": "assets/icons/monsters/anja.png",
      "level": 2,
      "materials": [
        { "material": "Anjanath Fang", "needed": 4 },
        { "material": "Anjanath Pelt", "needed": 4 },
        { "material": "Firecell Stone", "needed": 2 }
      ],
    },
    {
      "weaponName": "Madness Pangas",
      "type": "Dual Blades",
      "tree": "Jyuratodus",
      "treeIcon": "assets/icons/monsters/jyur.png",
      "level": 1,
      "materials": [
        { "material": "Jyuratodus Fin", "needed": 1 },
        { "material": "Jyura Shell", "needed": 2 },
        { "material": "Jyura Scale", "needed": 3 },
        { "material": "Aqua Sac", "needed": 1 }
      ],
    },
    {
      "weaponName": "Jyura Hatchets",
      "type": "Dual Blades",
      "tree": "Jyuratodus",
      "treeIcon": "assets/icons/monsters/jyur.png",
      "level": 2,
      "materials": [
        { "material": "Jyuratodus Fin", "needed": 1 },
        { "material": "Jyura Carapace", "needed": 2 },
        { "material": "Jyura Scale", "needed": 2 },
        { "material": "Aqua Sac", "needed": 1 },
        { "material": "Gajau Scale", "needed": 1 }
      ],
    },
    {
      "weaponName": "Diablos Hatchets",
      "type": "Dual Blades",
      "tree": "Diablos",
      "treeIcon": "assets/icons/monsters/diab.png",
      "level": 1,
      "materials": [
        { "material": "Twisted Horn", "needed": 1 },
        { "material": "Diablos Fang", "needed": 2 },
        { "material": "Diablos Shell", "needed": 4 },
        { "material": "Monster Bone Large", "needed": 2 }
      ],
    },
    {
      "weaponName": "Diablos Clibs",
      "type": "Dual Blades",
      "tree": "Diablos",
      "treeIcon": "assets/icons/monsters/diab.png",
      "level": 2,
      "materials": [
        { "material": "Majestic Horn", "needed": 2 },
        { "material": "Diablos Carapace", "needed": 2 },
        { "material": "Diablos Ridge", "needed": 2 },
        { "material": "Blos Medulla", "needed": 1 }
      ],
    },
    //Bow
    {
      "weaponName": "Steel Bow",
      "type": "Bow",
      "tree": "Iron",
      "treeIcon": "assets/icons/materials/ore.png",
      "level": 1,
      "materials": [
        { "material": "Dragonite Ore", "needed": 1 },
        { "material": "Machalite Ore", "needed": 1 },
        { "material": "Monster Bone Medium", "needed": 1 }
      ],
    },
    {
      "weaponName": "Alloy Bow",
      "type": "Bow",
      "tree": "Iron",
      "treeIcon": "assets/icons/materials/ore.png",
      "level": 2,
      "materials": [
        { "material": "Fucium Ore", "needed": 2 },
        { "material": "Carbalite Ore", "needed": 2 },
        { "material": "Dragonite Ore", "needed": 3 },
        { "material": "Dragonvein Crystal", "needed": 2 }
      ],
    },
    {
      "weaponName": "Hunter's Bow",
      "type": "Bow",
      "tree": "Bone",
      "treeIcon": "assets/icons/materials/bone.png",
      "level": 1,
      "materials": [
        { "material": "Monster Bone Small", "needed": 1 }
      ],
    },
    {
      "weaponName": "Hunter's Stoutbow",
      "type": "Bow",
      "tree": "Bone",
      "treeIcon": "assets/icons/materials/bone.png",
      "level": 2,
      "materials": [
        { "material": "Monster Bone Large", "needed": 1 },
        { "material": "Monster Bone Medium", "needed": 1 },
        { "material": "Boulder Bone", "needed": 1 }
      ],
    },
    {
      "weaponName": "Hunter's Proudbow",
      "type": "Bow",
      "tree": "Bone",
      "treeIcon": "assets/icons/materials/bone.png",
      "level": 3,
      "materials": [
        { "material": "Monster Hardbone", "needed": 2 },
        { "material": "Monster Keenbone", "needed": 2 },
        { "material": "Quality Bone", "needed": 3 }
      ],
    },
    {
      "weaponName": "Pulsar Bow",
      "type": "Bow",
      "tree": "Tobi-Kadachi",
      "treeIcon": "assets/icons/monsters/tobi.png",
      "level": 1,
      "materials": [
        { "material": "Tobi-Kadachi Electrode", "needed": 2 },
        { "material": "Tobi-Kadachi Claw", "needed": 2 },
        { "material": "Electro Sac", "needed": 1 },
        { "material": "Coral Crystal", "needed": 2 }
      ],
    },
    {
      "weaponName": "Flying Kadachi Strikebow",
      "type": "Bow",
      "tree": "Tobi-Kadachi",
      "treeIcon": "assets/icons/monsters/tobi.png",
      "level": 2,
      "materials": [
        { "material": "Tobi-Kadachi Claw", "needed": 2 },
        { "material": "Tobi-Kadachi Scale", "needed": 2 },
        { "material": "Tobi-Kadachi Pelt", "needed": 2 },
        { "material": "Dragonvein Crystal", "needed": 2 }
      ],
    },
    {
      "weaponName": "Blazing Bow",
      "type": "Bow",
      "tree": "Anjanath",
      "treeIcon": "assets/icons/monsters/anja.png",
      "level": 1,
      "materials": [
        { "material": "Anjanath Scale", "needed": 3 },
        { "material": "Anjanath Fang", "needed": 2 },
        { "material": "Flame Sac", "needed": 1 }
      ],
    },
    {
      "weaponName": "Anja Arch",
      "type": "Bow",
      "tree": "Anjanath",
      "treeIcon": "assets/icons/monsters/anja.png",
      "level": 2,
      "materials": [
        { "material": "Anjanath Fang", "needed": 4 },
        { "material": "Anjanath Pelt", "needed": 4 },
        { "material": "Firecell Stone", "needed": 2 }
      ],
    },
    {
      "weaponName": "Blooming Arch",
      "type": "Bow",
      "tree": "Pukei-Pukei",
      "treeIcon": "assets/icons/monsters/puke.png",
      "level": 1,
      "materials": [
        { "material": "Pukei-Pukei Quill", "needed": 2 },
        { "material": "Pukei-Pukei Scale", "needed": 2 },
        { "material": "Poison Sac", "needed": 1 },
        { "material": "Pukei-Pukei Tail", "needed": 1 }
      ],
    },
    {
      "weaponName": "Datura String",
      "type": "Bow",
      "tree": "Pukei-Pukei",
      "treeIcon": "assets/icons/monsters/puke.png",
      "level": 2,
      "materials": [
        { "material": "Pukei-Pukei Scale", "needed": 2 },
        { "material": "Pukei-Pukei Wing", "needed": 2 },
        { "material": "Toxin Sac", "needed": 2 },
        { "material": "Quality Bone", "needed": 3 }
      ],
    },
    {
      "weaponName": "Diablos Bow",
      "type": "Bow",
      "tree": "Diablos",
      "treeIcon": "assets/icons/monsters/diab.png",
      "level": 1,
      "materials": [
        { "material": "Twisted Horn", "needed": 1 },
        { "material": "Diablos Fang", "needed": 2 },
        { "material": "Diablos Shell", "needed": 4 },
        { "material": "Monster Bone Large", "needed": 2 }
      ],
    },
    {
      "weaponName": "Diablos Coilbender",
      "type": "Bow",
      "tree": "Diablos",
      "treeIcon": "assets/icons/monsters/diab.png",
      "level": 2,
      "materials": [
        { "material": "Majestic Horn", "needed": 2 },
        { "material": "Diablos Carapace", "needed": 2 },
        { "material": "Diablos Ridge", "needed": 2 },
        { "material": "Blos Medulla", "needed": 1 }
      ],
    },
    // Hunting Horn
    {
      "weaponName": "Great Bagpipe",
      "type": "Hunting Horn",
      "tree": "Iron",
      "treeIcon": "assets/icons/materials/ore.png",
      "level": 1,
      "materials": [
        { "material": "Dragonite Ore", "needed": 1 },
        { "material": "Machalite Ore", "needed": 1 },
        { "material": "Monster Bone Medium", "needed": 1 },
      ],
    },
    {
      "weaponName": "Fortissimo",
      "type": "Hunting Horn",
      "tree": "Iron",
      "treeIcon": "assets/icons/materials/ore.png",
      "level": 2,
      "materials": [
        { "material": "Fucium Ore", "needed": 2 },
        { "material": "Carbalite Ore", "needed": 2 },
        { "material": "Dragonite Ore", "needed": 3 },
        { "material": "Dragonvein Crystal", "needed": 2 },
      ]
    },
    {
      "weaponName": "Bone Horn",
      "type": "Hunting Horn",
      "tree": "Bone",
      "treeIcon": "assets/icons/materials/bone.png",
      "level": 1,
      "materials": [
        { "material": "Monster Bone Small", "needed": 1 },
      ]
    },
    {
      "weaponName": "Hard Bone Horn",
      "type": "Hunting Horn",
      "tree": "Bone",
      "treeIcon": "assets/icons/materials/bone.png",
      "level": 2,
      "materials": [
        { "material": "Monster Bone Large", "needed": 1 },
        { "material": "Monster Bone Medium", "needed": 1 },
        { "material": "Boulder Bone", "needed": 1 },
      ]
    },
    {
      "weaponName": "Heavy Bone Horn",
      "type": "Hunting Horn",
      "tree": "Bone",
      "treeIcon": "assets/icons/materials/bone.png",
      "level": 3,
      "materials": [
        { "material": "Monster Hardbone", "needed": 2 },
        { "material": "Monster Keenbone", "needed": 2 },
        { "material": "Quality Bone", "needed": 3 },
      ]
    },
    {
      "weaponName": "Thunder Gaida",
      "type": "Hunting Horn",
      "tree": "Tobi-Kadachi",
      "treeIcon": "assets/icons/monsters/tobi.png",
      "level": 1,
      "materials": [
        { "material": "Dragonite Ore", "needed": 2 },
        { "material": "Tobi-Kadachi Electrode", "needed": 1 },
        { "material": "Tobi-Kadachi Claw", "needed": 2 },
        { "material": "Electro Sac", "needed": 2 },
        { "material": "Coral Crystal", "needed": 2 },
      ],
    },
    {
      "weaponName": "Lightning Drum",
      "type": "Hunting Horn",
      "tree": "Tobi-Kadachi",
      "treeIcon": "assets/icons/monsters/tobi.png",
      "level": 2,
      "materials": [
        { "material": "Fucium Ore", "needed": 2 },
        { "material": "Tobi-Kadachi Electrode", "needed": 2 },
        { "material": "Tobi-Kadachi Claw", "needed": 2 },
        { "material": "Thunder Sac", "needed": 1 },
      ]
    },
    {
      "weaponName": "Blazing Horn",
      "type": "Hunting Horn",
      "tree": "Anjanath",
      "treeIcon": "assets/icons/monsters/anja.png",
      "level": 1,
      "materials": [
        { "material": "Anjanath Scale", "needed": 3 },
        { "material": "Anjanath Fang", "needed": 2 },
        { "material": "Flame Sac", "needed": 1 },
      ]
    },
    {
      "weaponName": "Anja Barone",
      "type": "Hunting Horn",
      "tree": "Anjanath",
      "treeIcon": "assets/icons/monsters/anja.png",
      "level": 2,
      "materials": [
        { "material": "Anjanath Fang", "needed": 4 },
        { "material": "Anjanath Pelt", "needed": 4 },
        { "material": "Firecell Stone", "needed": 2 },
      ]
    },
    {
      "weaponName": "Blooming Horn",
      "type": "Hunting Horn",
      "tree": "Pukei-Pukei",
      "treeIcon": "assets/icons/monsters/puke.png",
      "level": 1,
      "materials": [
        { "material": "Pukei-Pukei Quill", "needed": 2 },
        { "material": "Pukei-Pukei Scale", "needed": 2 },
        { "material": "Poison Sac", "needed": 1 },
        { "material": "Pukei-Pukei Tail", "needed": 1 },
      ]
    },
    {
      "weaponName": "Datura Horn",
      "type": "Hunting Horn",
      "tree": "Pukei-Pukei",
      "treeIcon": "assets/icons/monsters/puke.png",
      "level": 2,
      "materials": [
        { "material": "Pukei-Pukei Scale", "needed": 2 },
        { "material": "Pukei-Pukei Wing", "needed": 2 },
        { "material": "Toxin Sac", "needed": 2 },
        { "material": "Quality Bone", "needed": 3 },
      ]
    },
    {
      "weaponName": "Aqua Bagpipe",
      "type": "Hunting Horn",
      "tree": "Jyuratodus",
      "treeIcon": "assets/icons/monsters/jyur.png",
      "level": 1,
      "materials": [
        { "material": "Jyuratodus Fin", "needed": 1 },
        { "material": "Jyura Shell", "needed": 2 },
        { "material": "Jyura Scale", "needed": 3 },
        { "material": "Aqua Sac", "needed": 1 },
      ]
    },
    {
      "weaponName": "Water Tamtam",
      "type": "Hunting Horn",
      "tree": "Jyuratodus",
      "treeIcon": "assets/icons/monsters/jyur.png",
      "level": 2,
      "materials": [
        { "material": "Jyuratodus Fin", "needed": 1 },
        { "material": "Jyura Carapace", "needed": 2 },
        { "material": "Jyura Scale", "needed": 2 },
        { "material": "Aqua Sac", "needed": 1 },
        { "material": "Gajau Scale", "needed": 1 },
      ]
    },
    // Hammer

  ];

  basicMaterials = [
    {
      "materialName": "Carbalite Ore",
      "tree": "Ore",
      "treeIcon": "assets/icons/materials/ore.png",
    },
    {
      "materialName": "Machalite Ore",
      "tree": "Ore",
      "treeIcon": "assets/icons/materials/ore.png",
    },
    {
      "materialName": "Dragonite Ore",
      "tree": "Ore",
      "treeIcon": "assets/icons/materials/ore.png",
    },
    {
      "materialName": "Fucium Ore",
      "tree": "Ore",
      "treeIcon": "assets/icons/materials/ore.png",
    },
    {
      "materialName": "Quality Bone",
      "tree": "Bone",
      "treeIcon": "assets/icons/materials/bone.png",
    },
    {
      "materialName": "Monster Bone Small",
      "tree": "Bone",
      "treeIcon": "assets/icons/materials/bone.png",
    },
    {
      "materialName": "Monster Bone Medium",
      "tree": "Bone",
      "treeIcon": "assets/icons/materials/bone.png",
    },
    {
      "materialName": "Monster Bone Large",
      "tree": "Bone",
      "treeIcon": "assets/icons/materials/bone.png",
    },
    {
      "materialName": "Monster Hardbone",
      "tree": "Bone",
      "treeIcon": "assets/icons/materials/bone.png",
    },
    {
      "materialName": "Monster Keenbone",
      "tree": "Bone",
      "treeIcon": "assets/icons/materials/bone.png",
    },
    {
      "materialName": "Ancient Bone",
      "tree": "Bone",
      "treeIcon": "assets/icons/materials/bone.png",
    },
    {
      "materialName": "Boulder Bone",
      "tree": "Bone",
      "treeIcon": "assets/icons/materials/bone.png",
    },
    {
      "materialName": "Dragonvein Crystal",
      "tree": "Ore",
      "treeIcon": "assets/icons/materials/ore.png",
    },
    {
      "materialName": "Wingdrake Hide",
      "tree": "Monster",
    },
    {
      "materialName": "Gajau Scale",
      "tree": "Monster",
    },
    {
      "materialName": "Firecell Stone",
      "tree": "Ore",
      "treeIcon": "assets/icons/materials/ore.png",
    },
    {
      "materialName": "Coral Crystal",
      "tree": "Ore",
      "treeIcon": "assets/icons/materials/ore.png",
    },
    {
      "materialName": "Piercing Claw",
      "tree": "Monster",
      "treeIcon": "assets/icons/materials/leather.png",
    },
    {
      "materialName": "Sharp Claw",
      "tree": "Monster",
      "treeIcon": "assets/icons/materials/leather.png",
    },
    {
      "materialName": "Warm Pelt",
      "tree": "Monster",
      "treeIcon": "assets/icons/materials/leather.png",
    },
    {
      "materialName": "Great Jagras Claw",
      "tree": "Great Jagras",
      "treeIcon": "assets/icons/monsters/g-jagr.png",
    },
    {
      "materialName": "Great Jagras Hide",
      "tree": "Great Jagras",
      "treeIcon": "assets/icons/monsters/g-jagr.png",
    },
    {
      "materialName": "Great Jagras Mane",
      "tree": "Great Jagras",
      "treeIcon": "assets/icons/monsters/g-jagr.png",
    },
    {
      "materialName": "Great Jagras Scale",
      "tree": "Great Jagras",
      "treeIcon": "assets/icons/monsters/g-jagr.png",
    },
    {
      "materialName": "Electro Sac",
      "tree": "Tobi-Kadachi",
      "treeIcon": "assets/icons/monsters/tobi.png",
    },
    {
      "materialName": "Thunder Sac",
      "tree": "Tobi-Kadachi",
      "treeIcon": "assets/icons/monsters/tobi.png",
    },
    {
      "materialName": "Tobi-Kadachi Claw",
      "tree": "Tobi-Kadachi",
      "treeIcon": "assets/icons/monsters/tobi.png",
    },
    {
      "materialName": "Tobi-Kadachi Electrode",
      "tree": "Tobi-Kadachi",
      "treeIcon": "assets/icons/monsters/tobi.png",
    },
    {
      "materialName": "Tobi-Kadachi Membrane",
      "tree": "Tobi-Kadachi",
      "treeIcon": "assets/icons/monsters/tobi.png",
    },
    {
      "materialName": "Tobi-Kadachi Pelt",
      "tree": "Tobi-Kadachi",
      "treeIcon": "assets/icons/monsters/tobi.png",
    },
    {
      "materialName": "Tobi-Kadachi Scale",
      "tree": "Tobi-Kadachi",
      "treeIcon": "assets/icons/monsters/tobi.png",
    },
    {
      "materialName": "Flame Sac",
      "tree": "Monster",
      "treeIcon": "assets/icons/materials/leather.png",
    },
    {
      "materialName": "Inferno Sac",
      "tree": "Monster",
      "treeIcon": "assets/icons/materials/leather.png",
    },
    {
      "materialName": "Anjanath Fang",
      "tree": "Anjanath",
      "treeIcon": "assets/icons/monsters/anja.png",
    },
    {
      "materialName": "Anjanath Nosebone",
      "tree": "Anjanath",
      "treeIcon": "assets/icons/monsters/anja.png",
    },
    {
      "materialName": "Anjanath Pelt",
      "tree": "Anjanath",
      "treeIcon": "assets/icons/monsters/anja.png",
    },
    {
      "materialName": "Anjanath Scale",
      "tree": "Anjanath",
      "treeIcon": "assets/icons/monsters/anja.png",
    },
    {
      "materialName": "Anjanath Tail",
      "tree": "Anjanath",
      "treeIcon": "assets/icons/monsters/anja.png",
    },
    {
      "materialName": "Rathalos Carapace",
      "tree": "Rathalos",
      "treeIcon": "assets/icons/monsters/ratha.png",
    },
    {
      "materialName": "Rathalos Marrow",
      "tree": "Rathalos",
      "treeIcon": "assets/icons/monsters/ratha.png",
    },
    {
      "materialName": "Rathalos Medulla",
      "tree": "Rathalos",
      "treeIcon": "assets/icons/monsters/ratha.png",
    },
    {
      "materialName": "Rathalos Plate",
      "tree": "Rathalos",
      "treeIcon": "assets/icons/monsters/ratha.png",
    },
    {
      "materialName": "Rathalos Scale",
      "tree": "Rathalos",
      "treeIcon": "assets/icons/monsters/ratha.png",
    },
    {
      "materialName": "Rathalos Shell",
      "tree": "Rathalos",
      "treeIcon": "assets/icons/monsters/ratha.png",
    },
    {
      "materialName": "Rathalos Tail",
      "tree": "Rathalos",
      "treeIcon": "assets/icons/monsters/ratha.png",
    },
    {
      "materialName": "Rathalos Webbing",
      "tree": "Rathalos",
      "treeIcon": "assets/icons/monsters/ratha.png",
    },
    {
      "materialName": "Rathalos Wing",
      "tree": "Rathalos",
      "treeIcon": "assets/icons/monsters/ratha.png",
    },
    {
      "id": "47",
      "idCampaign": "0",
      "materialName": "Rathalos Wingtalon",
      "tree": "Rathalos",
      "treeIcon": "assets/icons/monsters/ratha.png",
    },
    {
      "materialName": "Azure Rathalos Carapace",
      "tree": "Azure Rathalos",
      "treeIcon": "assets/icons/monsters/a-ratha.png",
    },
    {
      "materialName": "Azure Rathalos Marrow",
      "tree": "Azure Rathalos",
      "treeIcon": "assets/icons/monsters/a-ratha.png",
    },
    {
      "materialName": "Azure Rathalos Plate",
      "tree": "Azure Rathalos",
      "treeIcon": "assets/icons/monsters/a-ratha.png",
    },
    {
      "materialName": "Azure Rathalos Scale",
      "tree": "Azure Rathalos",
      "treeIcon": "assets/icons/monsters/a-ratha.png",
    },
    {
      "materialName": "Azure Rathalos Shell",
      "tree": "Azure Rathalos",
      "treeIcon": "assets/icons/monsters/a-ratha.png",
    },
    {
      "materialName": "Azure Rathalos Tail",
      "tree": "Azure Rathalos",
      "treeIcon": "assets/icons/monsters/a-ratha.png",
    },
    {
      "materialName": "Azure Rathalos Webbing",
      "tree": "Azure Rathalos",
      "treeIcon": "assets/icons/monsters/a-ratha.png",
    },
    {
      "materialName": "Azure Rathalos Wingtalon",
      "tree": "Azure Rathalos",
      "treeIcon": "assets/icons/monsters/a-ratha.png",
    },
    {
      "materialName": "Azure Rathalos Wing",
      "tree": "Azure Rathalos",
      "treeIcon": "assets/icons/monsters/a-ratha.png",
    }
  ]




  constructor(private http: HttpClient) { }

  getItems(): Observable<any> {
    return this.http.get(this.apiUrl + 'itemBox/getItemBox', this.headers);
  }

  updateItem(e: any): Observable<any> {
    return this.http.post(this.apiUrl + 'itemBox/updateItembox', e, this.headers);
  }

  getArmors(): Observable<any> {
    return this.http.get(this.apiUrl + 'armors/getArmors', this.headers);
  }

  updateArmor(armor: any): Observable<any> {
    return this.http.post(this.apiUrl + 'armors/updateArmor', armor, this.headers);
  }

  getWeapons(): Observable<any> {
    return this.http.get(this.apiUrl + 'weapons/getWeapons', this.headers);
  }

  updateWeapon(weapon: any): Observable<any> {
    return this.http.post(this.apiUrl + 'weapons/updateWeapon', weapon, this.headers);
  }

}
