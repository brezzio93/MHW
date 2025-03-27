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

  weapons = [
    //GS
    {
      "name": "Buster Blade",
      "tree": "Iron",
      "type": "Great Sword",
      "materials": [
        { "name": "Dragonite Ore", "needed": 1 },
        { "name": "Machalite Ore", "needed": 1 },
        { "name": "Monster Bone Medium", "needed": 1 }
      ],
      "crafted": false
    },
    {
      "name": "Chrome Razor",
      "tree": "Iron",
      "type": "Great Sword",
      "materials": [
        { "name": "Fucium Ore", "needed": 2 },
        { "name": "Carbalite Ore", "needed": 2 },
        { "name": "Dragonite Ore", "needed": 3 },
        { "name": "Dragonvein Crystal", "needed": 2 }
      ],
      "crafted": false
    },
    {
      "name": "Bone Blade",
      "tree": "Bone",
      "type": "Great Sword",
      "materials": [
        { "name": "Monster Bone Small", "needed": 1 }
      ],
      "crafted": false
    },
    {
      "name": "Bone Slasher",
      "tree": "Bone",
      "type": "Great Sword",
      "materials": [
        { "name": "Monster Bone Large", "needed": 1 },
        { "name": "Monster Bone Medium", "needed": 1 },
        { "name": "Boulder Bone", "needed": 1 }
      ],
      "crafted": false
    },
    {
      "name": "Giant Jawblade",
      "tree": "Bone",
      "type": "Great Sword",
      "materials": [
        { "name": "Monster Hardbone", "needed": 2 },
        { "name": "Monster Keenbone", "needed": 2 },
        { "name": "Quality Bone", "needed": 3 }
      ],
      "crafted": false
    },
    {
      "name": "Jagras Blade",
      "tree": "Jagras",
      "type": "Great Sword",
      "materials": [
        { "name": "Great Jagras Claw", "needed": 2 },
        { "name": "Great Jagras Hide", "needed": 1 },
        { "name": "Great Jagras Scale", "needed": 2 },
        { "name": "Sharp Claw", "needed": 1 }
      ],
      "crafted": true
    },
    {
      "name": "Jagras Hacker",
      "tree": "Jagras",
      "type": "Great Sword",
      "materials": [
        { "name": "Great Jagras Scale", "needed": 2 },
        { "name": "Great Jagras Claw", "needed": 2 },
        { "name": "Great Jagras Mane", "needed": 2 },
        { "name": "Piercing Claw", "needed": 1 }
      ],
      "crafted": true
    },
    {
      "name": "Flame Blade",
      "tree": "Rathalos",
      "type": "Great Sword",
      "materials": [
        { "name": "Rathalos Scale", "needed": 2 },
        { "name": "Rathalos Webbing", "needed": 2 },
        { "name": "Inferno Sac", "needed": 1 },
        { "name": "Rathalos Marrow", "needed": 1 }
      ],
      "crafted": false
    },
    {
      "name": "Red Wing",
      "tree": "Rathalos",
      "type": "Great Sword",
      "materials": [
        { "name": "Rathalos Scale", "needed": 2 },
        { "name": "Rathalos Carapace", "needed": 1 },
        { "name": "Rathalos Wing", "needed": 1 },
        { "name": "Rathalos Medulla", "needed": 1 }
      ],
      "crafted": false
    },
    {
      "name": "Blooming Blade",
      "tree": "Pukei-Pukei",
      "type": "Great Sword",
      "materials": [
        { "name": "Pukei-Pukei Quill", "needed": 2 },
        { "name": "Pukei-Pukei Scale", "needed": 2 },
        { "name": "Poison Sac", "needed": 1 },
        { "name": "Pukei-Pukei Tail", "needed": 1 }
      ],
      "crafted": false
    },
    {
      "name": "Datura Blaze",
      "tree": "Pukei-Pukei",
      "type": "Great Sword",
      "materials": [
        { "name": "Pukei-Pukei Scale", "needed": 2 },
        { "name": "Pukei-Pukei Wing", "needed": 2 },
        { "name": "Toxin Sac", "needed": 2 },
        { "name": "Quality Bone", "needed": 3 }
      ],
      "crafted": false
    },
    {
      "name": "Carapace Buster",
      "tree": "Barroth",
      "type": "Great Sword",
      "materials": [
        { "name": "Barroth Claw", "needed": 1 },
        { "name": "Barroth Shell", "needed": 3 },
        { "name": "Barroth Ridge", "needed": 3 }
      ],
      "crafted": false
    },
    {
      "name": "Barroth Shredder",
      "tree": "Barroth",
      "type": "Great Sword",
      "materials": [
        { "name": "Barroth Claw", "needed": 2 },
        { "name": "Barroth Carapace", "needed": 3 },
        { "name": "Barroth Ridge", "needed": 3 }
      ],
      "crafted": false
    },

    //SNS
    {
      "name": "Steel Knife",
      "tree": "Iron",
      "type": "Sword and Shield",
      "materials": [
        { "name": "Dragonite Ore", "needed": 1 },
        { "name": "Machalite Ore", "needed": 1 },
        { "name": "Monster Bone Medium", "needed": 1 }
      ],
      "crafted": false
    },
    {
      "name": "Chrome Slicer",
      "tree": "Iron",
      "type": "Sword and Shield",
      "materials": [
        { "name": "Fucium Ore", "needed": 2 },
        { "name": "Carbalite Ore", "needed": 2 },
        { "name": "Dragonite Ore", "needed": 3 },
        { "name": "Dragonvein Crystal", "needed": 2 }
      ],
      "crafted": false
    },
    {
      "name": "Bone Kukri",
      "tree": "Bone",
      "type": "Sword and Shield",
      "materials": [
        { "name": "Monster Bone Small", "needed": 1 }
      ],
      "crafted": false
    },
    {
      "name": "Chief Kukri",
      "tree": "Bone",
      "type": "Sword and Shield",
      "materials": [
        { "name": "Monster Bone Large", "needed": 1 },
        { "name": "Monster Bone Medium", "needed": 1 },
        { "name": "Boulder Bone", "needed": 1 }
      ],
      "crafted": false
    },
    {
      "name": "Grand Barong",
      "tree": "Bone",
      "type": "Sword and Shield",
      "materials": [
        { "name": "Monster Hardbone", "needed": 2 },
        { "name": "Monster Keenbone", "needed": 2 },
        { "name": "Quality Bone", "needed": 3 }
      ],
      "crafted": false
    },
    {
      "name": "Jagras Edge",
      "tree": "Jagras",
      "type": "Sword and Shield",
      "materials": [
        { "name": "Great Jagras Claw", "needed": 2 },
        { "name": "Great Jagras Hide", "needed": 1 },
        { "name": "Great Jagras Scale", "needed": 2 },
        { "name": "Sharp Claw", "needed": 1 }
      ],
      "crafted": true
    },
    {
      "name": "Jagras Garotte",
      "tree": "Jagras",
      "type": "Sword and Shield",
      "materials": [
        { "name": "Great Jagras Scale", "needed": 3 },
        { "name": "Great Jagras Claw", "needed": 1 },
        { "name": "Great Jagras Mane", "needed": 2 },
        { "name": "Piercing Claw", "needed": 1 }
      ],
      "crafted": true
    },
    {
      "name": "Flame Knife",
      "tree": "Rathalos",
      "type": "Sword and Shield",
      "materials": [
        { "name": "Rathalos Scale", "needed": 1 },
        { "name": "Rathalos Tail", "needed": 2 },
        { "name": "Rathalos Plate", "needed": 1 },
        { "name": "Inferno Sac", "needed": 1 }
      ],
      "crafted": false
    },
    {
      "name": "Heat Edge",
      "tree": "Rathalos",
      "type": "Sword and Shield",
      "materials": [
        { "name": "Rathalos Scale", "needed": 2 },
        { "name": "Rathalos Carapace", "needed": 2 },
        { "name": "Rathalos Wing", "needed": 1 }
      ],
      "crafted": false
    },
    {
      "name": "Blooming Knife",
      "tree": "Pukei-Pukei",
      "type": "Sword and Shield",
      "materials": [
        { "name": "Pukei-Pukei Quill", "needed": 2 },
        { "name": "Pukei-Pukei Scale", "needed": 2 },
        { "name": "Poison Sac", "needed": 1 },
        { "name": "Pukei-Pukei Tail", "needed": 1 }
      ],
      "crafted": false
    },
    {
      "name": "Datura Blossom",
      "tree": "Pukei-Pukei",
      "type": "Sword and Shield",
      "materials": [
        { "name": "Pukei-Pukei Scale", "needed": 2 },
        { "name": "Pukei-Pukei Wing", "needed": 2 },
        { "name": "Toxin Sac", "needed": 2 },
        { "name": "Quality Bone", "needed": 3 }
      ],
      "crafted": false
    },
    {
      "name": "Carapace Edge",
      "tree": "Barroth",
      "type": "Sword and Shield",
      "materials": [
        { "name": "Barroth Claw", "needed": 1 },
        { "name": "Barroth Shell", "needed": 3 },
        { "name": "Barroth Ridge", "needed": 3 }
      ],
      "crafted": false
    },
    {
      "name": "Barroth Club",
      "tree": "Barroth",
      "type": "Sword and Shield",
      "materials": [
        { "name": "Barroth Claw", "needed": 2 },
        { "name": "Barroth Carapace", "needed": 3 },
        { "name": "Barroth Ridge", "needed": 3 }
      ],
      "crafted": false
    },
    //DB
    {
      "name": "Dual Slicers",
      "tree": "Iron",
      "type": "Dual Blades",
      "materials": [
        { "name": "Dragonite Ore", "needed": 1 },
        { "name": "Machalite Ore", "needed": 1 },
        { "name": "Monster Bone Medium", "needed": 1 }
      ],
      "crafted": false
    },
    {
      "name": "Chrome Slicers",
      "tree": "Iron",
      "type": "Dual Blades",
      "materials": [
        { "name": "Fucium Ore", "needed": 2 },
        { "name": "Carbalite Ore", "needed": 2 },
        { "name": "Dragonite Ore", "needed": 3 },
        { "name": "Dragonvein Crystal", "needed": 2 }
      ],
      "crafted": false
    },
    {
      "name": "Bone Hatchets",
      "tree": "Bone",
      "type": "Dual Blades",
      "materials": [
        { "name": "Monster Bone Small", "needed": 1 }
      ],
      "crafted": true
    },
    {
      "name": "Wild Hatchets",
      "tree": "Bone",
      "type": "Dual Blades",
      "materials": [
        { "name": "Monster Bone Large", "needed": 1 },
        { "name": "Monster Bone Medium", "needed": 1 },
        { "name": "Boulder Bone", "needed": 1 }
      ],
      "crafted": true
    },
    {
      "name": "Strong Hatchets",
      "tree": "Bone",
      "type": "Dual Blades",
      "materials": [
        { "name": "Monster Hardbone", "needed": 2 },
        { "name": "Monster Keenbone", "needed": 2 },
        { "name": "Quality Bone", "needed": 3 }
      ],
      "crafted": true
    },
    {
      "name": "Pulsar Hatchets",
      "tree": "Tobi-Kadachi",
      "type": "Dual Blades",
      "materials": [
        { "name": "Tobi-Kadachi Electrode", "needed": 1 },
        { "name": "Tobi-Kadachi Claw", "needed": 2 },
        { "name": "Electro Sac", "needed": 2 },
        { "name": "Coral Crystal", "needed": 2 }
      ],
      "crafted": true
    },
    {
      "name": "Kadachi Claws",
      "tree": "Tobi-Kadachi",
      "type": "Dual Blades",
      "materials": [
        { "name": "Tobi-Kadachi Electrode", "needed": 2 },
        { "name": "Tobi-Kadachi Claw", "needed": 2 },
        { "name": "Thunder Sac", "needed": 2 }
      ],
      "crafted": true
    },
    {
      "name": "Blazing Hatchets",
      "tree": "Anjanath",
      "type": "Dual Blades",
      "materials": [
        { "name": "Anjanath Scale", "needed": 3 },
        { "name": "Anjanath Fang", "needed": 2 },
        { "name": "Flame Sac", "needed": 1 }
      ],
      "crafted": false
    },
    {
      "name": "Anja Cyclone",
      "tree": "Anjanath",
      "type": "Dual Blades",
      "materials": [
        { "name": "Anjanath Fang", "needed": 4 },
        { "name": "Anjanath Pelt", "needed": 4 },
        { "name": "Firecell Stone", "needed": 2 }
      ],
      "crafted": false
    },
    {
      "name": "Madness Pangas",
      "tree": "Jyuratodus",
      "type": "Dual Blades",
      "materials": [
        { "name": "Jyuratodus Fin", "needed": 1 },
        { "name": "Jyura Shell", "needed": 2 },
        { "name": "Jyura Scale", "needed": 3 },
        { "name": "Aqua Sac", "needed": 1 }
      ],
      "crafted": false
    },
    {
      "name": "Jyura Hatchets",
      "tree": "Jyuratodus",
      "type": "Dual Blades",
      "materials": [
        { "name": "Jyuratodus Fin", "needed": 1 },
        { "name": "Jyura Carapace", "needed": 2 },
        { "name": "Jyura Scale", "needed": 2 },
        { "name": "Aqua Sac", "needed": 1 },
        { "name": "Gajau Scale", "needed": 1 }
      ],
      "crafted": false
    },
    {
      "name": "Diablos Hatchets",
      "tree": "Diablos",
      "type": "Dual Blades",
      "materials": [
        { "name": "Twisted Horn", "needed": 1 },
        { "name": "Diablos Fang", "needed": 2 },
        { "name": "Diablos Shell", "needed": 4 },
        { "name": "Monster Bone Large", "needed": 2 }
      ],
      "crafted": false
    },
    {
      "name": "Diablos Clibs",
      "tree": "Diablos",
      "type": "Dual Blades",
      "materials": [
        { "name": "Majestic Horn", "needed": 2 },
        { "name": "Diablos Carapace", "needed": 2 },
        { "name": "Diablos Ridge", "needed": 2 },
        { "name": "Blos Medulla", "needed": 1 }
      ],
      "crafted": false
    },
    //Bow
    {
      "name": "Steel Bow",
      "tree": "Iron",
      "type": "Bow",
      "materials": [
        { "name": "Dragonite Ore", "needed": 1 },
        { "name": "Machalite Ore", "needed": 1 },
        { "name": "Monster Bone Medium", "needed": 1 }
      ],
      "crafted": false
    },
    {
      "name": "Alloy Bow",
      "tree": "Iron",
      "type": "Bow",
      "materials": [
        { "name": "Fucium Ore", "needed": 2 },
        { "name": "Carbalite Ore", "needed": 2 },
        { "name": "Dragonite Ore", "needed": 3 },
        { "name": "Dragonvein Crystal", "needed": 2 }
      ],
      "crafted": false
    },
    {
      "name": "Hunter's Bow",
      "tree": "Bone",
      "type": "Bow",
      "materials": [
        { "name": "Monster Bone Small", "needed": 1 }
      ],
      "crafted": false
    },
    {
      "name": "Hunter's Stoutbow",
      "tree": "Bone",
      "type": "Bow",
      "materials": [
        { "name": "Monster Bone Large", "needed": 1 },
        { "name": "Monster Bone Medium", "needed": 1 },
        { "name": "Boulder Bone", "needed": 1 }
      ],
      "crafted": false
    },
    {
      "name": "Hunter's Proudbow",
      "tree": "Bone",
      "type": "Bow",
      "materials": [
        { "name": "Monster Hardbone", "needed": 2 },
        { "name": "Monster Keenbone", "needed": 2 },
        { "name": "Quality Bone", "needed": 3 }
      ],
      "crafted": false
    },
    {
      "name": "Pulsar Bow",
      "tree": "Tobi-Kadachi",
      "type": "Bow",
      "materials": [
        { "name": "Tobi-Kadachi Electrode", "needed": 2 },
        { "name": "Tobi-Kadachi Claw", "needed": 2 },
        { "name": "Electro Sac", "needed": 1 },
        { "name": "Coral Crystal", "needed": 2 }
      ],
      "crafted": false
    },
    {
      "name": "Flying Kadachi Strikebow",
      "tree": "Tobi-Kadachi",
      "type": "Bow",
      "materials": [
        { "name": "Tobi-Kadachi Claw", "needed": 2 },
        { "name": "Tobi-Kadachi Scale", "needed": 2 },
        { "name": "Tobi-Kadachi Pelt", "needed": 2 },
        { "name": "Dragonvein Crystal", "needed": 2 }
      ],
      "crafted": false
    },
    {
      "name": "Blazing Bow",
      "tree": "Anjanath",
      "type": "Bow",
      "materials": [
        { "name": "Anjanath Scale", "needed": 3 },
        { "name": "Anjanath Fang", "needed": 2 },
        { "name": "Flame Sac", "needed": 1 }
      ],
      "crafted": false
    },
    {
      "name": "Anja Arch",
      "tree": "Anjanath",
      "type": "Bow",
      "materials": [
        { "name": "Anjanath Fang", "needed": 4 },
        { "name": "Anjanath Pelt", "needed": 4 },
        { "name": "Firecell Stone", "needed": 2 }
      ],
      "crafted": false
    },
    {
      "name": "Blooming Arch",
      "tree": "Pukei-Pukei",
      "type": "Bow",
      "materials": [
        { "name": "Pukei-Pukei Quill", "needed": 2 },
        { "name": "Pukei-Pukei Scale", "needed": 2 },
        { "name": "Poison Sac", "needed": 1 },
        { "name": "Pukei-Pukei Tail", "needed": 1 }
      ],
      "crafted": false
    },
    {
      "name": "Datura String",
      "tree": "Pukei-Pukei",
      "type": "Bow",
      "materials": [
        { "name": "Pukei-Pukei Scale", "needed": 2 },
        { "name": "Pukei-Pukei Wing", "needed": 2 },
        { "name": "Toxin Sac", "needed": 2 },
        { "name": "Quality Bone", "needed": 3 }
      ],
      "crafted": false
    },
    {
      "name": "Diablos Bow",
      "tree": "Diablos",
      "type": "Bow",
      "materials": [
        { "name": "Twisted Horn", "needed": 1 },
        { "name": "Diablos Fang", "needed": 2 },
        { "name": "Diablos Shell", "needed": 4 },
        { "name": "Monster Bone Large", "needed": 2 }
      ],
      "crafted": false
    },
    {
      "name": "Diablos Coilbender",
      "tree": "Diablos",
      "type": "Bow",
      "materials": [
        { "name": "Majestic Horn", "needed": 2 },
        { "name": "Diablos Carapace", "needed": 2 },
        { "name": "Diablos Ridge", "needed": 2 },
        { "name": "Blos Medulla", "needed": 1 }
      ],
      "crafted": false
    }
  ];

  materials = [
    { "name": "Carbalite Ore", "quantity": 14 },
    { "name": "Machalite Ore", "quantity": 9 },
    { "name": "Dragonite Ore", "quantity": 10 },
    { "name": "Fucium Ore", "quantity": 10 },
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

  getItems(): Observable<any> {
    return this.http.get('https://es.marvelcdb.com/api/public/cards/?encounter=1');
  }

  updateArmor(armor: any): Observable<any> {

    //DATA TO UPDATE:
    //-armor name
    //-materials needed
    return this.http.get('https://es.marvelcdb.com/api/public/cards/?encounter=1');
  }

  updateWeapon(weapon: any): Observable<any> {

    //DATA TO UPDATE:
    //-weapon name
    //-materials needed
    return this.http.get('https://es.marvelcdb.com/api/public/cards/?encounter=1');
  }

}
