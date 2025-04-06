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

  armors: any = [];
  weapons: any = [];

  recipeArmors = [
    {
      "armorName": "Alloy Helm",
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
      "level": 1,
      "materials": [
        { "material": "Monster Bone Small", "needed": 1 }
      ],
    },
    {
      "weaponName": "Bone Slasher",
      "type": "Great Sword",
      "tree": "Bone",
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
      "level": 1,
      "materials": [
        { "material": "Monster Bone Small", "needed": 1 }
      ],
    },
    {
      "weaponName": "Chief Kukri",
      "type": "Sword and Shield",
      "tree": "Bone",
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
      "level": 1,
      "materials": [
        { "material": "Monster Bone Small", "needed": 1 }
      ],
    },
    {
      "weaponName": "Wild Hatchets",
      "type": "Dual Blades",
      "tree": "Bone",
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
      "level": 1,
      "materials": [
        { "material": "Monster Bone Small", "needed": 1 }
      ],
    },
    {
      "weaponName": "Hunter's Stoutbow",
      "type": "Bow",
      "tree": "Bone",
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
      "level": 2,
      "materials": [
        { "material": "Majestic Horn", "needed": 2 },
        { "material": "Diablos Carapace", "needed": 2 },
        { "material": "Diablos Ridge", "needed": 2 },
        { "material": "Blos Medulla", "needed": 1 }
      ],
    }
  ];

  materials: any[] = [
    // { "material": "Carbalite Ore", "quantity": 14 },
    // { "material": "Machalite Ore", "quantity": 9 },
    // { "material": "Dragonite Ore", "quantity": 10 },
    // { "material": "Fucium Ore", "quantity": 10 },
    // { "material": "Quality Bone", "quantity": 12 },
    // { "material": "Monster Bone Small", "quantity": 11 },
    // { "material": "Monster Bone Medium", "quantity": 8 },
    // { "material": "Monster Bone Large", "quantity": 3 },
    // { "material": "Monster Hardbone", "quantity": 0 },
    // { "material": "Monster Keenbone", "quantity": 5 },
    // { "material": "Ancient Bone", "quantity": 2 },
    // { "material": "Boulder Bone", "quantity": 0 },
    // { "material": "Dragonvein Crystal", "quantity": 6 },
    // { "material": "Wingdrake Hide", "quantity": 0 },
    // { "material": "Firecell Stone", "quantity": 0 },
    // { "material": "Coral Crystal", "quantity": 0 },
    // { "material": "Piercing Claw", "quantity": 5 },
    // { "material": "Sharp Claw", "quantity": 3 },
    // { "material": "Warm Pelt", "quantity": 0 },
    // { "material": "Great Jagras Claw", "quantity": 2 },
    // { "material": "Great Jagras Hide", "quantity": 1 },
    // { "material": "Great Jagras Mane", "quantity": 2 },
    // { "material": "Great Jagras Scale", "quantity": 0 },
    // { "material": "Electro Sac", "quantity": 0 },
    // { "material": "Thunder Sac", "quantity": 2 },
    // { "material": "Tobi-Kadachi Claw", "quantity": 4 },
    // { "material": "Tobi-Kadachi Electrode", "quantity": 3 },
    // { "material": "Tobi-Kadachi Membrane", "quantity": 5 },
    // { "material": "Tobi-Kadachi Pelt", "quantity": 4 },
    // { "material": "Tobi-Kadachi Scale", "quantity": 3 },
    // { "material": "Flame Sac", "quantity": 0 },
    // { "material": "Inferno Sac", "quantity": 0 },
    // { "material": "Anjanath Fang", "quantity": 0 },
    // { "material": "Anjanath Nosebone", "quantity": 0 },
    // { "material": "Anjanath Pelt", "quantity": 0 },
    // { "material": "Anjanath Scale", "quantity": 0 },
    // { "material": "Anjanath Tail", "quantity": 0 },
    // { "material": "Rathalos Carapace", "quantity": 0 },
    // { "material": "Rathalos Marrow", "quantity": 0 },
    // { "material": "Rathalos Medulla", "quantity": 0 },
    // { "material": "Rathalos Plate", "quantity": 0 },
    // { "material": "Rathalos Scale", "quantity": 0 },
    // { "material": "Rathalos Shell", "quantity": 0 },
    // { "material": "Rathalos Tail", "quantity": 0 },
    // { "material": "Rathalos Webbing", "quantity": 0 },
    // { "material": "Rathalos Wing", "quantity": 0 },
    // { "material": "Rathalos Wingtalon", "quantity": 0 },
    // { "material": "Azure Rathalos Carapace", "quantity": 0 },
    // { "material": "Azure Rathalos Marrow", "quantity": 0 },
    // { "material": "Azure Rathalos Plate", "quantity": 0 },
    // { "material": "Azure Rathalos Scale", "quantity": 0 },
    // { "material": "Azure Rathalos Shell", "quantity": 0 },
    // { "material": "Azure Rathalos Tail", "quantity": 0 },
    // { "material": "Azure Rathalos Webbing", "quantity": 0 },
    // { "material": "Azure Rathalos Wingtalon", "quantity": 0 },
    // { "material": "Azure Rathalos Wing", "quantity": 0 }
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
