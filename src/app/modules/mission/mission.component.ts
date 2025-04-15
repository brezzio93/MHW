import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DxSelectBoxModule, DxTextBoxModule } from 'devextreme-angular';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [
    CommonModule,
    DxSelectBoxModule,
    DxTextBoxModule,
  ],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.css'
})

export class MissionComponent {

  jagrasQuest = [
    {
      id: 1,
      text: 'La costa cerca del Campamento Suroeste se baña en el sol, con una luz brillante que se refleja en las pozas poco profundas donde beben Kestodon y Aptonoth. Más adelante se ve la entrada al Bosque Antiguo, formado por un arco de ramas gruesas, que se abre como unas fauces abiertas... los sonidos del mundo que hay detrás de ti se desvanecen en silencio al pasar bajo el rico dosel verde, dejando una breve sensación de calma, que pronto se rompe cuando las Moscas Exploradoras se agrupan emocionadas alrededor de una enorme huella en el suelo.',
      potions: 1,
      options: [
        {
          progressTo: 21,
          text: '¡Sigue las Scoutflies!',
          action: 'Descarta una carta de tiempo. Ganan 1 Ficha de Rastreo. Avanzan a la entrada 21.',
        }
      ]
    },
    {
      id: 2,
      text: 'Un Gran Jagras anda suelto; la última semana te ha presentado abundantes pruebas: docenas de cadáveres, destrozados en un frenesí y medio comidos. Esta será una cacería que pondrá a prueba incluso a los rastreadores más experimentados. Has oído hablar de Jagras que consumen cazadores de un solo bocado. Ese no serás tú.',
      action: 'Cada cazador gana 1 Great Jagras Claw.',
      potions: 2,
      options: [
        {
          progressTo: 27,
          text: '¿Echarse a correr por el sendero?',
          action: 'Ganan 1 Ficha de Rastreo. Avanzan a la entrada 27.',
        },
        {
          progressTo: 25,
          text: '¿Se quedan y rebuscan entre los restos?',
          action: 'Descarta 1 Carta de Tiempo. Cada cazador gana 1 Monster Bone Medium. Avanzan a la entrada 25.',
        },
        {
          progressTo: 30,
          text: '¡Corren hacia donde se vió por última vez a su presa!',
          action: 'Descarta 5 Cartas de Tiempo. Avanzan a la entrada 30.',
        }
      ]
    },
    {
      id: 3,
      text: "La encargada que está junto a las huellas te lanza una mirada evaluadora. 'Yo tendría mucho cuidado al perseguir a esta bestia,' dice, rascándose la barbilla distraídamente. 'Es agresiva incluso para los estándares de los Jagras. Pero, si insistes en rastrearla toma esa ruta...,' señala un sendero de tierra que conduce al bosque. 'Todavía tiene hambre. ¡Buena suerte!.' Dada su advertencia, se desvanece en el bosque.",
      potions: 1,
      options: [
        {
          progressTo: 26,
          text: 'Siguen su consejo y avanzan lentamente.',
          action: 'Ganan y revelan 1 Ficha de Rastreo, luego eligen mantenerla o descartarla. Avanzan a la entrada 26.',
        },
        {
          progressTo: 16,
          text: '!Con tantos rastros, no hay tiempo que perder!',
          action: 'Ganan 2 Fichas de Rastreo. Avanzan a la entrada 16',
        },
        {
          progressTo: 30,
          text: '¡Corren hacia donde se vió por última vez a su presa!',
          action: 'Descarta 5 Cartas de Tiempo. Avanzan a la entrada 30.',
        }
      ]
    },
    {
      id: 4,
      text: 'La playa se extiende ante ti, una exquisita extensión de arena intacta. El mar la atraviesa, dejando una espuma brillante que marca cada ola. El bosque se alza detrás de ti, un recuerdo opresivo, pero puede que tengas que retirarte a su follaje y dejar atrás esta hermosa escena. Tu...',
      potions: 2,
      options: [
        {
          progressTo: 22,
          text: 'Bajas por la playa',
          action: ' Descartan 1 Carta de Tiempo. Ganan 1 Ficha de Rastreo. Avanzan a la entrada 22.',
        },
        {
          progressTo: 9,
          text: 'Regresa al bosque, hacia un campamento que puedes ver entre los árboles.',
          action: 'Descartan 1 Carta de Tiempo. Avanzan a la entrada 9.',
        },
        {
          progressTo: 30,
          text: '¡Corren hacia donde se vió por última vez a su presa!',
          action: 'Descarta 5 Cartas de Tiempo. Avanzan a la entrada 30.',
        }
      ]
    },
    {
      id: 5,
      text: 'El estruendo de agua amenaza con distraer tu mente mientras exploras el terreno cercano. El Gran Jagras está de caza, y tú estás tras su rastro. El río de abajo se adentra en el bosque, y el espeso follaje de los árboles oscurece el camino de la criatura que buscas.',
      potions: 1,
      options: [
        {
          progressTo: 13,
          text: 'Sigue las huellas que puedas',
          action: 'Descartan 1 Carta de Tiempo. Ganan 2 Fichas de Rastreo. Avanzan a la entrada 13.',
        },
        {
          progressTo: 24,
          text: 'Investiga el área',
          action: 'Descartan 2 Cartas de Tiempo. Cada Cazador gana 1 Piercing Claw y 1 Monster Bone Large. Avanzan a la entrada 14.',
        },
        {
          progressTo: 14,
          text: 'Dirígete río abajo hasta donde se vio al Gran Jagras por última vez.',
          action: 'Descartan 1 Carta de Tiempo. Avanzan a la entrada 14.',
        },
        {
          progressTo: 30,
          text: '¡Corren hacia donde se vió por última vez a su presa!',
          action: 'Descarta 5 Cartas de Tiempo. Avanzan a la entrada 30.',
        },
      ]
    },
    {
      id: 6,
      text: '',
      options: [
        {
          progressTo: 18,
          text: '',
          action: '',
        },
        {
          progressTo: 30,
          text: '',
          action: '',
        },
      ]
    },
    {
      id: 7,
      text: '',
      options: [
        {
          progressTo: 11,
          text: '',
          action: '',
        },
        {
          progressTo: 30,
          text: '',
          action: '',
        },
      ]
    },
    {
      id: 8,
      text: '',
      options: [
        {
          progressTo: 7,
          text: '',
          action: '',
        },
        {
          progressTo: 6,
          text: '',
          action: '',
        },
      ]
    },
    {
      id: 9,
      text: '',
      options: [
        {
          progressTo: 29,
          text: '',
          action: '',
        },
        {
          progressTo: 19,
          text: '',
          action: '',
        },
      ]
    },
    {
      id: 10,
      options: [
        {
          progressTo: 7,
          text: '',
          action: '',
        },
      ]
    },
    {
      id: 11,
      options: [
        {
          progressTo: 30,
          text: '',
          action: '',
        },
        {
          progressTo: 18,
          text: '',
          action: '',
        },
      ]
    },
    {
      id: 12,
      options: [
        {
          progressTo: 6,
          text: '',
          action: '',
        },
        {
          progressTo: 6,
          text: '',
          action: '',
        },
      ]
    },
    {
      id: 13,
      options: [
        {
          progressTo: 10,
          text: '',
          action: '',
        },
      ]
    },
    {
      id: 14,
      options: [
        {
          progressTo: 13,
          text: '',
          action: '',
        },
        {
          progressTo: 24,
          text: '',
          action: '',
        },
      ]
    },
    {
      id: 15,
      options: [
        {
          progressTo: 30,
          text: '',
          action: '',
        },
        {
          progressTo: 19,
          text: '',
          action: '',
        },
      ]
    },
    {
      id: 16,
      options: [
        {
          progressTo: 27,
          text: '',
          action: '',
        },
        {
          progressTo: 29,
          text: '',
          action: '',
        },
      ]
    },
    {
      id: 17,
      options: [
        {
          progressTo: 6,
          text: '',
          action: '',
        },
        {
          progressTo: 28,
          text: '',
          action: '',
        },
      ]
    },
    {
      id: 18,
      options: [
        {
          progressTo: 28,
          text: '',
          action: '',
        },
        {
          progressTo: 15,
          text: '',
          action: '',
        },
      ]
    },
    {
      id: 19,
      options: [
        {
          progressTo: 30,
          text: '',
          action: '',
        },
      ]
    },
    {
      id: 20,
      options: [
        {
          progressTo: 15,
          text: '',
          action: '',
        },
        {
          progressTo: 9,
          text: '',
          action: '',
        },
      ]
    },
    {
      id: 21,
      options: [
        {
          progressTo: 23,
          text: '',
          action: '',
        },
        {
          progressTo: 23,
          text: '',
          action: '',
        },
      ]
    },
    {
      id: 22,
      options: [
        {
          progressTo: 25,
          text: '',
          action: '',
        },
        {
          progressTo: 20,
          text: '',
          action: '',
        },
      ]
    },
    {
      id: 23,
      options: [
        {
          progressTo: 12,
          text: '',
          action: '',
        },
        {
          progressTo: 7,
          text: '',
          action: '',
        },
      ]
    },
    {
      id: 24,
      options: [
        {
          progressTo: 27,
          text: '',
          action: '',
        },
        {
          progressTo: 26,
          text: '',
          action: '',
        },
      ]
    },
    {
      id: 25,
      options: [
        {
          progressTo: 27,
          text: '',
          action: '',
        },
        {
          progressTo: 8,
          text: '',
          action: '',
        },
      ]
    },
    {
      id: 26,
      options: [
        {
          progressTo: 29,
          text: '',
          action: '',
        },
        {
          progressTo: 28,
          text: '',
          action: '',
        },
        {
          progressTo: 17,
          text: '',
          action: '',
        },
      ]
    },
    {
      id: 27,
      options: [
        {
          progressTo: 12,
          text: '',
          action: '',
        },
        {
          progressTo: 29,
          text: '',
          action: '',
        },
      ]
    },
    {
      id: 28,
      options: [
        {
          progressTo: 15,
          text: '',
          action: '',
        },
        {
          progressTo: 19,
          text: '',
          action: '',
        },
      ]
    },
    {
      id: 29,
      options: [
        {
          progressTo: 6,
          text: '',
          action: '',
        },
        {
          progressTo: 18,
          text: '',
          action: '',
        },
      ]
    },
    {
      id: 30,
      text: 'Un rugido ensordecedor es su única advertencia, ¡y de repente se encuentran cara a cara con su presa! Ha llegado el momento de luchar contra este aterrador adversario.',
      options: [
        {
          action: 'Revelen sus Ficha de Rastreos, revisen su nivel de Scoutfly, y comiencen la fase de caza',
        }
      ]
    },

  ]

  tobiQuest = [
    {},
  ]

  anjaQuest = [
    {},
  ]

  rathQuest = [
    {},
  ]

  azureQuest = [
    {},
  ]

  missionList = [
    {
      id: 0,
      monster: 'Great Jagras',
      difficulty: 'Assigned Quest',
      icon: "assets/icons/monsters/g-jagr.png",

    },
    {
      id: 1,
      monster: 'Great Jagras',
      difficulty: 'Investigation Quest',
      icon: "assets/icons/monsters/g-jagr.png",
    },
    {
      id: 2,
      monster: 'Great Jagras',
      difficulty: 'Tempered Investigation Quest',
      icon: "assets/icons/monsters/g-jagr.png",
    },
    {
      id: 3,
      monster: 'Tobi-Kadachi',
      difficulty: 'Assigned Quest',
      icon: "assets/icons/monsters/tobi.png",
    },
    {
      id: 4,
      monster: 'Tobi-Kadachi',
      difficulty: 'Investigation Quest',
      icon: "assets/icons/monsters/tobi.png",
    },
    {
      id: 5,
      monster: 'Tobi-Kadachi',
      difficulty: 'Tempered Investigation Quest',
      icon: "assets/icons/monsters/tobi.png",
    },
    {
      id: 6,
      monster: 'Anjanath',
      difficulty: 'Assigned Quest',
      icon: "assets/icons/monsters/anja.png",
    },
    {
      id: 7,
      monster: 'Anjanath',
      difficulty: 'Investigation Quest',
      icon: "assets/icons/monsters/anja.png",
    },
    {
      id: 8,
      monster: 'Anjanath',
      difficulty: 'Tempered Investigation Quest',
      icon: "assets/icons/monsters/anja.png",
    },
    {
      id: 9,
      monster: 'Rathalos',
      difficulty: 'Assigned Quest',
      icon: "assets/icons/monsters/ratha.png",
    },
    {
      id: 10,
      monster: 'Rathalos',
      difficulty: 'Investigation Quest',
      icon: "assets/icons/monsters/ratha.png",
    },
    {
      id: 11,
      monster: 'Rathalos',
      difficulty: 'Tempered Investigation Quest',
      icon: "assets/icons/monsters/ratha.png",
    },
    {
      id: 12,
      monster: 'Azure Rathalos',
      difficulty: 'Assigned Quest',
      icon: "assets/icons/monsters/a-ratha.png",
    },
    {
      id: 13,
      monster: 'Azure Rathalos',
      difficulty: 'Investigation Quest',
      icon: "assets/icons/monsters/a-ratha.png",
    },
    {
      id: 14,
      monster: 'Azure Rathalos',
      difficulty: 'Tempered Investigation Quest',
      icon: "assets/icons/monsters/a-ratha.png",
    },
  ]

  quest: any = [];
  node: any;
  startingPoint: any = [];

  ngOnInit(): void {

  }

  selectQuest(index: number) {

    //Great Jagras
    if (index == 0) {
      this.quest = this.jagrasQuest;
      this.startingPoint = [1];
    }
    if (index == 1) {
      this.quest = this.jagrasQuest;
      this.startingPoint = [2, 3, 4, 5];
    }
    if (index == 2) {
      this.quest = this.jagrasQuest;
      this.startingPoint = [2, 3, 4, 5];
    }

    //Tobi-Kadachi
    if (index == 3) {
      this.quest = this.tobiQuest;
      this.startingPoint = [1];
    }
    if (index == 4) {
      this.quest = this.tobiQuest;
      this.startingPoint = [2, 3, 4, 5];
    }
    if (index == 5) {
      this.quest = this.tobiQuest;
      this.startingPoint = [2, 3, 4, 5];
    }

    //Anjanath
    if (index == 6) {
      this.quest = this.anjaQuest;
      this.startingPoint = [1];
    }
    if (index == 7) {
      this.quest = this.anjaQuest;
      this.startingPoint = [2, 3, 4, 5];
    }
    if (index == 8) {
      this.quest = this.anjaQuest;
      this.startingPoint = [2, 3, 4, 5];
    }

    //Rathalos
    if (index == 9) {
      this.quest = this.rathQuest;
      this.startingPoint = [1];
    }
    if (index == 10) {
      this.quest = this.rathQuest;
      this.startingPoint = [2, 3, 4, 5];
    }
    if (index == 11) {
      this.quest = this.rathQuest;
      this.startingPoint = [2, 3, 4, 5];
    }

    //Azure Rathalos
    if (index == 12) {
      this.quest = this.azureQuest;
      this.startingPoint = [1];
    }
    if (index == 13) {
      this.quest = this.azureQuest;
      this.startingPoint = [2, 3, 4, 5];
    }
    if (index == 14) {
      this.quest = this.azureQuest;
      this.startingPoint = [2, 3, 4, 5];
    }

    console.log(this.quest)

  }

  selectStartingNode(index: number) {
    console.log(index)

  }

}
