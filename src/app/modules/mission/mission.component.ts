import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DxButtonModule, DxDataGridModule, DxPopupModule, DxSelectBoxModule, DxTextBoxModule } from 'devextreme-angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [
    CommonModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxPopupModule,
    DxButtonModule,
  ],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.css'
})

export class MissionComponent {

  jagrasQuest = [
    {
      id: 1,
      potions: 1,
      text: 'La costa cerca del Campamento Suroeste se baña en el sol, con una luz brillante que se refleja en las pozas poco profundas donde beben Kestodon y Aptonoth. Más adelante se ve la entrada al Bosque Antiguo, formado por un arco de ramas gruesas, que se abre como unas fauces abiertas... los sonidos del mundo que hay detrás de ti se desvanecen en silencio al pasar bajo el rico dosel verde, dejando una breve sensación de calma, que pronto se rompe cuando las Moscas Exploradoras se agrupan emocionadas alrededor de una enorme huella en el suelo.',
      options: [
        {
          progressTo: 21,
          text: '¡Sigue las Scoutflies!\n <b> Descarta una carta de tiempo. Ganan 1 Track Token.\n Avanzan a la entrada 1 </b>',
          trackTokens: 1,
        }
      ]
    },
    {
      id: 2,
      potions: 2,
      text: 'Un Great Jagras anda suelto; la última semana te ha presentado abundantes pruebas: docenas de cadáveres, destrozados en un frenesí y medio comidos. Esta será una cacería que pondrá a prueba incluso a los rastreadores más experimentados. Has oído hablar de Jagras que consumen cazadores de un solo bocado. Ese no serás tú.',
      action: '<b> Cada cazador gana 1 Great Jagras Claw. </b>',
      materials: [
        { name: 'Great Jagras Claw', qty: 1, playerMultiplier: true },
      ],
      options: [
        {
          progressTo: 27,
          text: '¿Echarse a correr por el sendero?\n <b> Ganan 1 Track Token. Avanzan a la entrada 27 </b>',
          trackTokens: 1,
        },
        {
          progressTo: 25,
          text: '¿Se quedan y rebuscan entre los restos?\n<b> Descarta 1 Carta de Tiempo. Cada cazador gana 1 Monster Bone Medium. Avanzan a la entrada 25</b>',
          timeCards: -1,
          materials: [
            { name: 'Monster Bone Medium', qty: 1, playerMultiplier: true },
          ],
        },
        {
          progressTo: 30,
          text: '¡Corren hacia donde se vió por última vez a su presa!\n<b>Descarta 5 Cartas de Tiempo. Avanzan a la entrada 30</b>',
          timeCards: -5,
        }
      ]
    },
    {
      id: 3,
      potions: 1,
      text: "La encargada que está junto a las huellas te lanza una mirada evaluadora. 'Yo tendría mucho cuidado al perseguir a esta bestia,' dice, rascándose la barbilla distraídamente. 'Es agresiva incluso para los estándares de los Jagras. Pero, si insistes en rastrearla toma esa ruta...,' señala un sendero de tierra que conduce al bosque. 'Todavía tiene hambre. ¡Buena suerte!.' Dada su advertencia, se desvanece en el bosque.",
      options: [
        {
          progressTo: 26,
          text: 'Siguen su consejo y avanzan lentamente. \n <b> Ganan y revelan 1 Track Token, luego eligen mantenerla o descartarla. Avanzan a la entrada 26 <b>',
          trackTokens: 1,
        },
        {
          progressTo: 16,
          text: '!Con tantos rastros, no hay tiempo que perder! \n <b> Ganan 2 Track Tokens. Avanzan a la entrada 16. </b>',
          trackTokens: 2,
        },
        {
          progressTo: 30,
          text: '¡Corren hacia donde se vió por última vez a su presa! \n <b> Descarta 5 Cartas de Tiempo. Avanzan a la entrada 30\n </b>',
          timeCards: -5,
        }
      ]
    },
    {
      id: 4,
      potions: 2,
      text: 'La playa se extiende ante ti, una exquisita extensión de arena intacta. El mar la atraviesa, dejando una espuma brillante que marca cada ola. El bosque se alza detrás de ti, un recuerdo opresivo, pero puede que tengas que retirarte a su follaje y dejar atrás esta hermosa escena. Tu...',
      options: [
        {
          progressTo: 22,
          text: 'Bajas por la playa. \n <b>Descartan 1 Carta de Tiempo. Ganan 1 Track Token.\n Avanzan a la entrada 22 </b>',
          timeCards: -1,
          trackTokens: 1,
        },
        {
          progressTo: 9,
          text: 'Regresa al bosque, hacia un campamento que puedes ver entre los árboles. \n <b> Descartan 1 Carta de Tiempo. Avanzan a la entrada 9 </b>',
          timeCards: -1,
        },
        {
          progressTo: 30,
          text: '¡Corren hacia donde se vió por última vez a su presa! \n <b> Descartan 5 Cartas de Tiempo. Avanzan a la entrada 30. </b>',
          timeCards: -5,
        }
      ]
    },
    {
      id: 5,
      potions: 1,
      text: 'El estruendo de agua amenaza con distraer tu mente mientras exploras el terreno cercano. El Great Jagras está de caza, y tú estás tras su rastro. El río de abajo se adentra en el bosque, y el espeso follaje de los árboles oscurece el camino de la criatura que buscas.',
      options: [
        {
          progressTo: 13,
          text: 'Sigue las huellas que puedas.\n <b> Descartan 1 Carta de Tiempo. Ganan 2 Track Tokens.\n Avanzan a la entrada 13 </b>',
          timeCards: -1,
          trackTokens: 2,
        },
        {
          progressTo: 24,
          text: 'Investiga el área. \n <b> Descartan 2 Cartas de Tiempo. Cada Cazador gana 1 Piercing Claw y 1 Monster Bone Large. Avanzan a la entrada 24. </b>',
          timeCards: -2,
          materials: [
            { name: 'Piercing Claw', qty: 1, playerMultiplier: true },
            { name: 'Monster Bone Large', qty: 1, playerMultiplier: true },
          ],
        },
        {
          progressTo: 14,
          text: 'Dirígete río abajo hasta donde se vio al Great Jagras por última vez.\n <b> Descartan 1 Carta de Tiempo. Avanzan a la entrada 14 </b>',
          timeCards: -1,
        },
        {
          progressTo: 30,
          text: '¡Corren hacia donde se vió por última vez a su presa!\n <b> Descartan 5 Cartas de Tiempo. Avanzan a la entrada 30 </b>',
          timeCards: -5,
        },
      ]
    },
    {
      id: 6,
      text: 'Justo cuando estás a punto de desanimarte, te encuentras con un montón de excrementos del Great Jagras, dejados por tu presa. Puede ser una vista espantosa, pero te llena el corazón de esperanza mientras te diriges a un claro más adelante.',
      options: [
        {
          progressTo: 18,
          text: 'No hay tiempo para mirar atrás.\n <b> Descarta 1 Carta de Tiempo. Gana 3 Track Tokens. Avanzan a la entrada 18</b>',
          timeCards: -1,
          trackTokens: 3,
        },
        {
          progressTo: 30,
          text: 'Espera, escuchen... ¿Hay algo detrás de nosotros?\n <b>Avanzan a la entrada 30 </b>',
        },
      ]
    },
    {
      id: 7,
      text: 'La luz parpadeante pinta sombras espeluznantes en las paredes, charcos danzantes de oscuridad que dan mente a feroces depredadores. Tus pies levantan polvo y crujen a través de pequeños huesos, revelando metales y gemas brillantes.',
      options: [
        {
          text: 'Registra la cueva.\n<b>Descarta 1 Carta de Tiempo.\nCada cazador lanza dados en la siguiente tabla.</b>\n \n <b> 1-2 </b> Ganan 1 Dragonite Ore.\n <b> 3-4 </b> Ganan 1 Fucium Ore.\n <b> 5-6 </b> Ganan 1 Ancient Bone.\n \n <b> Una vez que cada jugador haya tirado. Avanzan a la entrada 11 </b>',
          timeCards: -1,
          customPopup: {
            type: 'diceRoll',
            title: "Cada cazador tira un dado",
            multipleChoices: true,
            progressTo: 11,
            options: [
              {
                progressTo: 11,
                text: '<b>1-2 </b> Ganan 1 Dragonite Ore',
                materials: [{ name: 'Dragonite Ore', qty: 1, playerMultiplier: false }],
              },
              {
                progressTo: 11,
                text: '<b>3-4 </b> Ganan 1 Fucium Ore',
                materials: [{ name: 'Fucium Ore', qty: 1, playerMultiplier: false }]
              },
              {
                progressTo: 11,
                text: '<b>5-6 </b> Ganan 1 Ancient Bone',
                materials: [{ name: 'Ancient Bone', qty: 1, playerMultiplier: false }]
              },
            ],
          }
        },
        {
          progressTo: 30,
          text: 'Regresa de este sinistro lugar.\n<b> Avanzan a la entrada 30 </b>',
        },
      ]
    },
    {
      id: 8,
      text: '¿Has estado por aqui antes? Todo te parece familiar. Pero entonces... el bosque siempre te parece familiar. Definitivamente estás perdido. Finalmente ves una cueva, algo en las rocas de afuera está brillando al sol. Estás a punto de usar tu pico, cuando ves unas huellas, medio enterradas en el polvo.',
      action: 'Descarta 1 Carta de Tiempo.',
      timeCards: -1,
      options: [
        {
          text: 'Extrae el mineral y entra en la cueva. \n <b>Descarta 1 Track Token. \nCada cazador lanza dados en la siguiente tabla.</b>\n \n <b>1-2</b> Ganan 1 Dragonite Ore.\n <b>3-4</b> Ganan 1 Fucium Ore.\n <b>5-6</b> Ganan 1 Firecell Stone.\n \n <b>Una vez que cada jugador haya tirado. Avanzan a la entrada 7 </b>',
          trackTokens: -1,
          customPopup: {
            type: 'diceRoll',
            title: "Cada cazador tira un dado",
            multipleChoices: true,
            progressTo: 7,
            options: [
              {
                progressTo: 7,
                text: '<b>1-2</b> Ganan 1 Dragonite Ore.</b>',
                materials: [{ name: 'Dragonite Ore', qty: 1, playerMultiplier: false }]
              },
              {
                progressTo: 7,
                text: '<b>3-4</b> Ganan 1 Fucium Ore.</b>',
                materials: [{ name: 'Fucium Ore', qty: 1, playerMultiplier: false }]
              },
              {
                progressTo: 7,
                text: '<b>5-6</b> Ganan 1 Firecell Stone.</b>',
                materials: [{ name: 'Firecell Stone', qty: 1, playerMultiplier: false }]
              },
            ],
          }
        },
        {
          progressTo: 6,
          text: 'Sigue las huellas que puedas ver, y espera que estén frescas.\n <b> Descarta 1 Carta de Tiempo. Gana 1 Track Token. Avanzan a la entrada 6.</b>',
          timeCards: -1,
          trackTokens: 1,
        },
      ]
    },
    {
      id: 9,
      text: 'Un grupo de Palicos se reúne en el borde del campamento a medida que te acercas, maullando con interés. Las criaturas reanudan rápidamente sus ejercicios de entrenamiento, esquivando y revoloteando alrededor del campamento mientras te tomas unos momentos para descansar. La caza tiene que continuar, pero, por unos momentos, estar entre los Palico es una cura para los peligros de tu trabajo.',
      action: 'Descarta 2 Cartas de Tiempo',
      timeCards: -2,
      options: [
        {
          progressTo: 29,
          text: 'Pide su ayuda.\n <b> Cada cazador que no tenga un Palico roba una carta de Palico.\n Pueden usarla durante la siguiente fase de caza luego se descarta. Avanzan a la entrada 29.</b>',
        },
        {
          progressTo: 19,
          text: 'Pide un guía.\n <b> Ganan y revelan 4 Track Tokens, luego elijan si las conservan o descartarlas.\n Avanzan a la entrada 19. </b>',
          trackTokens: 4,
        },
      ]
    },
    {
      id: 10,
      text: 'Has acechado a través del bosque, de forma intrincada y cuidadosamente te has abierto camino... a la misma cueva que has visitado muchas veces antes. Aún así, tal vez, todavía haya algún mineral por descubrir.',
      options: [
        {
          text: '<b>Tira un dado.</b>\n Con <b> 1-4 </b>, se ha extraido todo el mineral.\n <b> Hora de darse prisa. Avanzan a la entrada 18. </b> \n Con <b> 5-6 </b>, todavía queda algo aquí. \n <b> Descarta 1 Carta de Tiempo.\nCada cazador gana 1 Carbalite Ore y 1 Machalite Ore.\n Avanzan a la entrada 7. </b>',
          customPopup: {
            type: 'diceRoll',
            title: "Tira un dado",
            multipleChoices: false,
            options: [
              {
                progressTo: 18,
                text: 'Con <b> 1-4 </b>, se ha extraido todo el mineral.\n <b> Hora de darse prisa. Avanzan a la entrada 18. </b> ',
              },
              {
                progressTo: 7,
                text: 'Con <b> 5-6 </b>, todavía queda algo aquí. \n <b> Descarta 1 Carta de Tiempo.\nCada cazador gana 1 Carbalite Ore y 1 Machalite Ore.\n Avanzan a la entrada 7. </b>',
                timeCards: -1,
                materials: [
                  { name: 'Carbalite Ore', qty: 1, playerMultiplier: true },
                  { name: 'Machalite Ore', qty: 1, playerMultiplier: true },
                ],
              }
            ]
          }
        },
      ]
    },
    {
      id: 11,
      text: 'Algo enorme ha pasado claramente por aquí, marcas frescas cubren las paredes donde se escurrió su enorme masa a través del pasadizo. Esta madriguera es un laberinto; puedes correr a ciegas o detenerte para orientarte.',
      options: [
        {
          progressTo: 30,
          text: '¡Sigue moviendote! \n <b> Descarta 1 Carta de Tiempo. Gana 2 Track Tokens.\n Avanzan a la entrada 30. </b>',
          timeCards: -1,
          trackTokens: 2,
        },
        {
          progressTo: 18,
          text: 'Avanzacon cuidado. \n <b> Descarta 1 Carta de Tiempo. Revela hasta 3 de tus Track Tokens.\n Avanzan a la entrada 18. </b>',
          timeCards: -1,
        },
      ]
    },
    {
      id: 12,
      text: 'Mareado y respirando con dificultad, te apoyas contra la corteza de un árbol. Te duelen los brazos, el entumecimiento se extiende a través de ellos hacia tus hombros. Si tan solo hubiera una manera de aliviar tu garganta reseca...',
      options: [
        {
          progressTo: 6,
          text: 'Se obligan a continuar. \n <b> Todos los cazadores sufren 2 de daño.\n Avanzan a la entrada 6. </b>',
        },
        {
          progressTo: 6,
          text: 'Bebe de tus suministros.\n <b> (Los cazadores solo pueden elegir esta opción si tienen al menos 1 Potion). Descarta 1 Potion.\n Avanzan a la entrada 6. </b>',
          disabled: {
            disabled: true,
            if: { variable: 'Potion', operator: '>=', value: 1, then: { disable: false } }
          },
          potions: -1,
        },
      ]
    },
    {
      id: 13,
      text: '"¿En qué puedo ayudarte?" dice el hombre pequeño al pasar junto a él. Deberías reconocerlo como un comerciante antes. Sonríe y señala la mochila que lleva a su espalda. "¡Tengo todo lo que puedas necesitar, justo aquí!" Estás seguro de que si, pero sabes que te va a costar...',
      options: [
        {
          progressTo: 10,
          text: '<b> Los jugadores pueden descartar 3 recursos cualesquiera y añadir 1 Potion a la reserva, o ganar 1 Track Token. Si lo hacen, descartan 1 Carta de Tiempo.\n Avanzan a la entrada 10. </b>',
          customPopup: {
            type: 'choice',
            title: 'Seleccionen Recompensas',
            progressTo: 10,
            text: '<b> Los jugadores pueden descartar 3 recursos cualesquiera y añadir 1 Potion a la reserva, o ganar 1 Track Token. Si lo hacen, descartan 1 Carta de Tiempo.\n Avanzan a la entrada 10. </b>',
            requiredMaterials: [0, 1, 2],
            possibleRewards: [
              {
                type: 'Cancel',
                text: 'Cerrar',
                progressTo: 10,
              },
              {
                type: 'Accept',
                text: 'Añadir 1 Potion',
                potions: 1,
                progressTo: 10,
              },
              {
                type: 'Accept',
                text: 'Añadir 1 Track Token',
                trackTokens: 1,
                progressTo: 10,
              },
            ],
            timeCards: -1,
          }
        },
      ]
    },
    {
      id: 14,
      text: '"Tu presa está cerca... ¡sigue el ritmo!" entona una voz, desde algún lugar entre los árboles. No puedes localizar la voz, pero no está mal. El Great Jagras está cerca y te estás acercando. No hará falta mucho para controlarlo... pero ¿quién te habla?',
      action: 'Cada cazador gana 1 Great Jagras Claw',
      materials: [
        { name: 'Great Jagras Claw', qty: 1, playerMultiplier: true },
      ],
      options: [
        {
          progressTo: 13,
          text: 'Investiga la voz.\n <b> Avancen a la entrada 13. </b>',
        },
        {
          progressTo: 24,
          text: '<b>(Los jugadores sólo pueden seleccionar esta opción si tienen al menos 1 Great Jagras Hide en sus inventarios).</b>\n\nIgnóralo y continúa buscando en el nido de la criatura.\n <b> Descarta 2 tarjetas de tiempo. Gana 1 Great Jagras Mane. Avancen a la entrada 24. </b>',
          disabled: {
            disabled: true,
            if: { variable: 'Great Jagras Hide', operator: '>=', value: 1, then: { disable: false } }
          },
          timeCards: -2,
          materials: [
            { name: 'Great Jagras Claw', qty: 1, playerMultiplier: false },
          ]
        },
      ]
    },
    {
      id: 15,
      text: 'La luz ha comenzado a atenuarse, el sol se pone detrás de los altos árboles en el horizonte. Si planeas mantener la caza, tendrás que adelantarte o puedes acampar para pasar la noche y reanudarla mañana.',
      options: [
        {
          progressTo: 30,
          text: 'No podemos perder el tiempo. ¡Sigue con la persecución! \n <b> Baraja la carta de Rushed Advance en el mazo de tiempo.\n Avancen a la entrada 30. </b>',
        },
        {
          progressTo: 19,
          text: 'Acampa por la noche. \n <b> Descarta 2 Cartas de Tiempo, todos los cazadores se sanan por completo.\n Avancen a la entrada 19. </b>',
          timeCards: -2,
        },
      ]
    },
    {
      id: 16,
      text: 'Un rugido llena el aire y resuena en el bosque. La bestia está cerca. Una mochila abandonada yace en el suelo, en medio del camino, con la correa rota. ¿Pero es esto una trampa?',
      options: [
        {
          text: 'Revisa la mochila. <b> Tira 1 dado. </b> \n Con un <b> 1-2 </b> "¡No hay tiempo!"\n <b> Avanzan a la entrada 27. </b> \n Con <b> 3-4 </b>"¡Toma la bolsa antes de que caiga sobre ti!"\n<b> Agrega 1 Potion. Avanzan a la entrada 27. </b> \n Con <b> 5-6 </b> "¡Agarra los minerales del suelo!". \n <b> Cada cazador gana 1 Carbalite Ore y 1 Machalite Ore.\n Avancen a la entrada 27. </b>',
          customPopup: {
            type: 'diceRoll',
            title: "Tira un dado",
            multipleChoices: false,
            options: [
              {
                progressTo: 27,
                text: 'Con un <b> 1-2 </b> "¡No hay tiempo!"\n <b> Avanzan a la entrada 27. </b>',
              },
              {
                progressTo: 27,
                text: ' Con <b> 3-4 </b>"¡Toma la bolsa antes de que caiga sobre ti!"\n<b> Agrega 1 Potion. Avanzan a la entrada 27. </b>',
                potions: 1,
              },
              {
                progressTo: 27,
                text: 'Con <b> 5-6 </b> "¡Agarra los minerales del suelo!". \n <b> Cada cazador gana 1 Carbalite Ore y 1 Machalite Ore.\n Avancen a la entrada 27. </b>',
                materials: [
                  { name: 'Carbalite Ore', qty: 1, playerMultiplier: true },
                  { name: 'Machalite Ore', qty: 1, playerMultiplier: true },
                ],
              },
            ]
          },
        },
        {
          progressTo: 29,
          text: 'Déjalo y explora a través de un hueco entre los árboles. \n <b> Avancen a la entrada 29. </b>',
        },
      ]
    },
    {
      id: 17,
      text: 'Otro Great Jagras muerto. Éste fue derribado desde arriba... algún enorme depredador aéreo lo hizo trizas. Escudriñas el aire con atención, desesperado por asegurarte de no ser sorprendido como lo fue Great Jagras, pero el cadáver está intacto. Quieres esa piel... y esas escamas.',
      action: 'Cada cazador gana 1 Great Jagras Hide',
      materials: [
        { name: 'Great Jagras Hide', qty: 1, playerMultiplier: true }
      ],
      options: [
        {
          progressTo: 6,
          text: 'Obtienes una escama con cuidado \n <b> Descarta 1 Carta de Tiempo.\n Ganas 1 Great Jagras Scale.\n Avancen a la entrada 6. </b>',
          timeCards: -1,
          materials: [
            { name: 'Great Jagras Scale', qty: 1, playerMultiplier: false }
          ],
        },
        {
          progressTo: 28,
          text: '¡El rastro se está enfriando! \n <b> Avancen a la entrada 28. </b>',
        },
      ]
    },
    {
      id: 18,
      text: 'Emerges a la luz del sol brillante, con un río de corriente rápida gorgoteando a tu lado. Un rastro de huellas frescas ha sido estampado en el barro, un camino que te lleva hacia adelante',
      options: [
        {
          progressTo: 28,
          text: 'Sigue el rastro.\n <b> Descarta 1 Carta de Tiempo. Gana 1 Track Token.\n Avancen a la entrada 28. </b>',
          timeCards: -1,
          trackTokens: 1,
        },
        {
          progressTo: 15,
          text: 'Detente a examinarlas más de cerca.\n <b> Descarta 2 Cartas de Tiempo. Descarta 1 Track Token.\n Avancen a la entrada 15. </b>',
          timeCards: -2,
          trackTokens: -1,
        },
      ]
    },
    {
      id: 19,
      text: 'Un nuevo día amanece sobre el Bosque Antiguo, revelando huellas frescas a través del rocío de la mañana. Tu presa está cerca, y por un momento te preguntas si eres el cazador o el cazado...',
      options: [
        {
          progressTo: 30,
          text: '<b> Si el grupo tiene 4 o menos Track Tokens, ganan 1 Track Token.\n Avancen a la entrada 30.</b>',
          condition: { variable: 'trackTokens', operator: '<=', value: 4, then: { add: 1 } }
        },
      ]
    },
    {
      id: 20,
      text: 'Por un momento, mientras avanzas por la jungla, estás convencido de que el Great Jagras te ha atrapado. Hasta que la enorme bestia permanezca inmóvil, incluso cuando te acercas a ella. La criatura está muerta. Parece muerto de vejez. Sus ojos están pálidos a causa de las cataratas y sus escamas ya no vibran. Has llegado antes que los carroñeros al cadáver, está intacto. No durará mucho.',
      options: [
        {
          progressTo: 15,
          text: 'Limpiar el cuerpo.\n <b> Descarta 2 Cartas de Tiempo. Cada cazador gana 1 Great Jagras Scale.\n\nSi el grupo tiene al menos 1 Great Jagras Mane, cada cazador gana 1 Great Jagras Mane adicional.\n Avancen a la entrada 15. </b>',
          timeCards: -2,
          materials: [
            { name: 'Great Jagras Scale', qty: 1, playerMultiplier: true },
          ],
          condition: { variable: 'Great Jagras Mane', operator: '>=', value: 1, then: { add: 1 } }
        },
        {
          progressTo: 9,
          text: 'Regresa al sendero y dirígete a un campamento que puedes ver entre los árboles. <b> Avancen a la entrada 9. </b>',
        },
      ]
    },
    {
      id: 21,
      text: 'Sigues un sendero muy transitado, rasguños y hendiduras en la tierra y a lo largo de los árboles delatando a los monstruos que frecuentemente pasan por este camino. \nEl hueso roído de un monstruo, sin carne, queda tirado a un lado.',
      action: 'Cada cazador gana 1 Monster Bone Medium.',
      materials: [
        { name: 'Monster Bone Medium', qty: 1, playerMultiplier: true },
      ],
      options: [
        {
          progressTo: 23,
          text: '¿Te apresuras por seguir las huellas del sendero?\n <b> Gana 1 Track Token. Avancen a la entrada 23.</b>',
          trackTokens: 1,
        },
        {
          progressTo: 23,
          text: '¿Parar a buscar otros huesos cercanos?\n <b> Descarta 1 Carta de Tiempo. Cada cazador gana 1 Quality Bone y 1 Monster Bone Small. Avancen a la entrada 23.</b>',
          timeCards: -1,
          materials: [
            { name: 'Quality Bone', qty: 1 },
            { name: 'Monster Bone Small', qty: 1 }
          ]
        },
      ]
    },
    {
      id: 22,
      text: 'Dos Kestodon masacrados yacen expuestos bajo el implacable sol. Su carne ya está empezando a voltear. Solo tienes unas pocas horas antes de que los carroñeros que descienden arruinen cualquier cosa útil de cualquiera de los cadáveres.',
      options: [
        {
          progressTo: 25,
          text: 'Prioriza recolectar.\n <b> Descarta 1 Carta de Tiempo. Cada cazador gana 1 Piercing Claw y 1 Monster Hardbone. Avancen a la entrada 25.</b>',
          timeCards: -1,
          materials: [
            { name: 'Piercing Claw', qty: 1, playerMultiplier: true },
            { name: 'Monster Hardbone', qty: 1, playerMultiplier: true },
          ]
        },
        {
          progressTo: 20,
          text: 'Olvídate del cadáver. Prioriza el seguimiento \n <b> Descarta 1 Carta de Tiempo. Gana 1 Track Token. Avancen a la entrada 20.</b>',
          timeCards: -1,
          trackTokens: 1,
        },
      ]
    },
    {
      id: 23,
      text: 'Los árboles delante son mucho más viejos y tienen un follaje considerablemente más espeso; sería agotador atravesarlos. Alternativamente, un rastro de mineral a lo largo del camino conduce a una gran cueva que se abre en la distancia. Podrías buscar allí, con la esperanza de encontrar la guarida de tu presa...',
      action: 'Descarta 1 Carta de Tiempo.\n Cada cazador gana 1 Carbalite Ore y 1 Machalite Ore.',
      timeCards: -1,
      materials: [
        { name: 'Carbalite Ore', qty: 1, playerMultiplier: true },
        { name: 'Machalite Ore', qty: 1, playerMultiplier: true },
      ],
      options: [
        {
          progressTo: 12,
          text: 'Ábrete camino a través del bosque.\n <b> Descarta 1 Carta de Tiempo. Avancen a la entrada 12.</b>',
          timeCards: -1,
        },
        {
          progressTo: 7,
          text: 'Retrocede hasta la entrada de la cueva. \n <b> Descarta 2 Cartas de Tiempo. Avancen a la entrada 7.</b>',
          timeCards: -2,
        },
      ]
    },
    {
      id: 24,
      text: 'Después de una hora de exploración de la zona, te topas con algo extraño. Una serie de formas inusuales envueltas en verde. Consigues quitar el musgo y las enredaderas que crecen alrededor de los extraños ídolos de piedra, antes de reconocer qué son. Piedras funerarias antiguas, olvidadas hace mucho tiempo.',
      action: 'Descarta 1 Carta de Tiempo',
      timeCards: -1,
      options: [
        {
          progressTo: 27,
          text: 'Juras vengar a los espíritus.\n<b> Descarta 1 Carta de Tiempo.\nBaraja una carta Jagras Slayer en la Baraja de Tiempo.\n Avancen a la entrada 27.</b>',
          timeCards: -1,
        },
        {
          progressTo: 26,
          text: 'Inclina la cabeza con reverencia... pero date prisa.\n <b> Baraja una carta Unavenged en la Baraja de Tiempo.\n Avancen a la entrada 26.</b>',
        },
      ]
    },
    {
      id: 25,
      text: 'La maleza cercana contiene otro cadáver. Otro Aptonoth muerto. Pero quizá valga la pena examinarlo más a fondo. Recopilar cualquier detalle sobre Great Jagras podría resultar invaluable más adelante',
      options: [
        {
          progressTo: 27,
          text: '¿Pasas algo de tiempo limpiando los huesos para poder llevártelos contigo? \n <b> Descarta 2 Cartas de Tiempo.\n Cada cazador gana 1 Monster Bone Large y 1 Great Jagras Scale. Avancen a la entrada 27.</b>',
          timeCards: -2,
          materials: [
            { name: 'Monster Bone Large', qty: 1, playerMultiplier: true },
            { name: 'Great Jagras Scale', qty: 1, playerMultiplier: true },
          ],
        },
        {
          progressTo: 8,
          text: 'Hemos pasado suficiente tiempo aquí. <b> \n Avancen a la entrada 8.</b>',
        },
      ]
    },
    {
      id: 26,
      text: 'Un vasto conjunto de huesos, carne disecada y dientes rotos te recibe cuando sales del círculo de árboles. Aquí es donde los titanes vienen a morir; un cementerio de monstruos. Cerca hay un cadáver fresco. Por las marcas en su garganta, fue víctima del Great Jagras. Otro. Sin embargo, estás tras su rastro y, por lo que sabes sobre el camino de la bestia, hay un atajo que debería llevarte justo encima de ella...',
      options: [
        {
          progressTo: 29,
          text: 'Tómate tiempo para pelar la carcasa.\n <b> Descarta 2 Cartas de Tiempo. Cada cazador gana 1 Monster Keenbone.\n Avancen a la entrada 29.</b>',
          timeCards: -2,
          materials: [
            { name: 'Monster Keenbone', qty: 1, playerMultiplier: true },
          ],
        },
        {
          progressTo: 28,
          text: 'Sigue el atajo. \n <b> Descarta 1 Carta de Tiempo. Gana 2 Track Tokens.\n Avancen a la entrada 28.</b>',
          timeCards: -1,
          trackTokens: 2,
        },
        {
          progressTo: 17,
          text: '<b> (Los jugadores sólo pueden elegir esta opción si tienen al menos 1 Great Jagras Hide en sus inventarios) </b> \n ¿Qué es ese montón peludo de ahí? \n <b> Avancen a la entrada 17.</b>',
          disabled: {
            disabled: true,
            if: { variable: 'Great Jagras Hide', operator: '>=', value: 1, then: { disable: false } }
          },
        },
      ]
    },
    {
      id: 27,
      text: 'Pequeños Jagras surgen de la maleza, rodeándote y mordiéndote con un hambre desesperada. Estás abrumado y, por un momento, piensas que te pueden arrastrar hacia abajo. Tu entrenamiento te ayuda a salir adelante, ahuyentando a la manada y dándote un momento para respirar. Pero están a punto de atacar de nuevo...',
      options: [
        {
          progressTo: 12,
          text: 'Lucha contra la manada.\n <b> Descarta 2 Cartas de Tiempo. Cada cazador sufre 1 de daño, luego ganan 1 Sharp Claw. Avancen a la entrada 12.</b>',
          timeCards: -2,
          materials: [
            { name: 'Sharp Claw', qty: 1, playerMultiplier: true },
          ],
        },
        {
          progressTo: 29,
          text: 'Huye entre la maleza.\n <b> Descarta 1 Carta de Tiempo. Avancen a la entrada 29.</b>',
          timeCards: -1,
        },
      ]
    },
    {
      id: 28,
      text: 'Un grito corta el aire. Más adelante, una cartera ensangrentada yace desatendida en el suelo; parece que algo ha alcanzado a uno de los investigadores de campo. Seguramente no puedes dejarlos a su suerte, ¿verdad?',
      options: [
        {
          progressTo: 15,
          text: "No, no podemos. ¡Abandona la caza para salvarlos!\n <b> Descarta 1 Track Token y baraja Researcher's Favour en la Baraja de Tiempo. Avancen a la entrada 15.</b>",
          timeCards: -1,
        },
        {
          progressTo: 19,
          text: 'Si podemos. Busca en la cartera y dirígete a un lugar más seguro.\n <b> Descarta 1 Carta de Tiempo. Cada cazador gana 1 Coral Crystal, luego añade 1 Potion. Avancen a la entrada 19.</b>',
          timeCards: -1,
          materials: [
            { name: 'Coral Crystal', qty: 1, playerMultiplier: true },
          ],
          potions: 1,
        },
      ]
    },
    {
      id: 29,
      text: 'El cadáver con el que te has topado es increíblemente viejo. Más viejo que la humanidad, estás seguro. Una criatura olvidada hace mucho tiempo pero aún así, incluso muerta, magnífica. Se te queda el aliento en la garganta al imaginar las batallas que esta criatura debe haber librado.',
      options: [
        {
          progressTo: 6,
          text: 'Toma en reverencia un hueso antes de partir.\n <b> Descarta 1 Carta de Tiempo. Cada cazador gana 1 Ancient Bone.\n Avancen a la entrada 6.</b>',
          timeCards: -1,
          materials: [
            { name: 'Ancient Bone', qty: 1, playerMultiplier: true },
          ]
        },
        {
          progressTo: 18,
          text: 'Deje esta tranquila escena sin molestar.\n <b> Descarta 1 Carta de Tiempo. Baraja la carta Ancient Guardian en la Baraja de Tiempo. Avancen a la entrada 18.</b>',
          timeCards: -1,
        },
      ]
    },
    {
      id: 30,
      text: 'Un rugido ensordecedor es su única advertencia, ¡y de repente se encuentran cara a cara con su presa! Ha llegado el momento de luchar contra este aterrador adversario.',
      options: [
        {
          text: '<b> Revelen sus Track Tokens, revisen su nivel de Scoutfly, y comiencen la fase de caza </b>',
        }
      ]
    },

  ]

  tobiQuest = [
    {
      id: 1,
      text: 'Siempre acompañado por el inconfundible aroma del ozono, Tobi-Kadachi se abre paso entre los árboles, cayendo cerca del suelo en busca de su presa. Su hambre es legendaria, al igual que la electricidad estática que recorre su pelaje. Estás preparado para cazarlo, o tan preparado como puedas estar. La bestia espera y tú estás tras su pista.',
      potions: 1,
      options: [
        {
          progressTo: 12,
          text: 'Dirígete al denso bosque.\n <b>Descarta 1 Carta de Tiempo. Cada cazador gana 1 Dragonvein Crystal y 1 Dragonite Ore. Avancen a la entrada 12</b>',
          timeCards: -1,
          materials: [
            { name: 'Dragonvein Crystal', qty: 1, playerMultiplier: true },
            { name: 'Dragonite Ore', qty: 1, playerMultiplier: true },
          ]
        },
        {
          progressTo: 34,
          text: '¡Corre hacia donde fue vista tu presa por última vez! \n <b> Descarta 6 Cartas de Tiempo. Avancen a la entrada 34 </b>',
          timeCards: -6,
        },
      ],
    },
    {
      id: 2,
      text: 'Arriba entre las ramas, algo está esperando. Es un Tobi-Kadachi, estás seguro de eso.Al trepar al árbol, tus sospechas se confirman. Un nido… y todavía está caliente. La criatura que lo construyó está cerca',
      potions: 2,
      options: [
        {
          progressTo: 34,
          text: '<b> (Los cazadores sólo podrán elegir esta opción si han completado Tobi-Kadachi Assigned Quest) </b>\n\n ¡Espera en el nido a que regrese Tobi-Kadachi! \n <b> Descarta 6 Cartas de Tiempo. Avancen a la entrada 34 </b>',
          timeCards: -6,
        },
        {
          progressTo: 18,
          text: 'La bestia atravesó aquí...\n <b> Cada cazador gana Tobi-Kadachi Pelt. Avancen a la entrada 18. </b>',
          materials: [
            { name: 'Tobi-Kadachi Pelt', qty: 1, playerMultiplier: true },
          ]
        },
      ]
    },
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

  missionList: any = [
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

  rewardsTable: any = [];

  rewardsJagras = [
    { rolls: '1, 9', name: 'Monster Bone Small', },
    { rolls: '2, 6', name: 'Great Jagras Claw', partBreakIcon: '/claw.svg' },
    { rolls: '3, 10', name: 'Great Jagras Hide', partBreakIcon: '/body.svg' },
    { rolls: '4, 11', name: 'Great Jagras Scale', },
    { rolls: '5, 12', name: 'Great Jagras Mane', partBreakIcon: '/head.svg' },
    { rolls: '7', name: 'Sharp Claw', },
    { rolls: '8', name: 'Piercing Claw', },
  ]

  rewardsTobi = [
    { rolls: '1-9', name: 'Monster Bone Medium' },
    { rolls: '2', name: 'Tobi-Kadachi Pelt', partBreakIcon: '/body.svg' },
    { rolls: '3', name: 'Tobi-Kadachi Scale' },
    { rolls: '4', name: 'Electro Sac' },
    { rolls: '5-12', name: 'Tobi-Kadachi Electrode', partBreakIcon: '/tail.svg' },
    { rolls: '6', name: 'Tobi-Kadachi Membrane', partBreakIcon: '/head.svg' },
    { rolls: '7-11', name: 'Monster Keenbone' },
    { rolls: '8', name: 'Tobi-Kadachi Claw' },
    { rolls: '10', name: 'Thunder Sac' },
  ]

  rewardsAnja = [
    { rolls: '1', name: 'Anjanath Scale', partBreakIcon: '/leg.svg' },
    { rolls: '2-9', name: 'Anjanath Pelt' },
    { rolls: '3', name: 'Anjanath Nosebone' },
    { rolls: '4', name: 'Anjanath Tail', partBreakIcon: '/tail.svg' },
    { rolls: '5', name: 'Anjanath Fang', partBreakIcon: '/head.svg' },
    { rolls: '6', name: 'Monster Keenbone' },
    { rolls: '7-11', name: 'Flame Sac' },
    { rolls: '8-10', name: 'Monster Bone Large' },
    { rolls: '12', name: 'Inferno Sac', partBreakIcon: '/body.svg' },
  ]

  rewardsRathalos = [
    { rolls: '1', name: 'Rathalos Wingtalon' },
    { rolls: '2', name: 'Monster Bone Large' },
    { rolls: '3', name: 'Rathalos Scale' },
    { rolls: '4', name: 'Rathalos Webbing' },
    { rolls: '5', name: 'Rathalos Tail' },
    { rolls: '6', name: 'Rathalos Marrow', partBreakIcon: '/body.svg' },
    { rolls: '7', name: 'Rathalos Plate', partBreakIcon: '/tail.svg' },
    { rolls: '8', name: 'Rathalos Wing', partBreakIcon: '/wing.svg' },
    { rolls: '9', name: 'Rathalos Carapace' },
    { rolls: '10', name: 'Rathalos Shell' },
    { rolls: '11', name: 'Rathalos Medulla' },
    { rolls: '12', name: 'Inferno Sac', partBreakIcon: '/head.svg' },
  ]

  rewardsAzure = [
    { rolls: '1-9', name: 'Azure Rathalos Wingtalon', partBreakIcon: '/wing.svg' },
    { rolls: '2', name: 'Monster Bone Large' },
    { rolls: '3', name: 'Azure Rathalos Scale' },
    { rolls: '4', name: 'Azure Rathalos Wing' },
    { rolls: '5', name: 'Azure Rathalos Plate' },
    { rolls: '6', name: 'Azure Rathalos Marrow', partBreakIcon: '/body.svg' },
    { rolls: '7-11', name: 'Azure Rathalos Tail', partBreakIcon: '/tail.svg' },
    { rolls: '8-10', name: 'Azure Rathalos Carapace' },
    { rolls: '12', name: 'Inferno Sac', partBreakIcon: '/head.svg' },
  ]

  quest: any;
  node: any;
  startingPoint: any = [];
  trackTokens = 0;
  showTrackTokens = false;

  gainedMaterials: any = [];
  potions = 0;
  popupVisible: boolean = false;
  diceRollTitle = '';
  customPopup: any;

  playersQty: any = 0;
  playersOption = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
  ]

  selectedMaterials: any = [];

  phases = [
    'Investigation', 'Hunt'
  ];
  phase: String | null = '';

  mission: any;
  missionListIndex: number | undefined;
  missionState: boolean | undefined;

  loading = false;

  constructor(
    public ds: DataService
  ) {
    // this.quest = this.jagrasQuest;
    // this.node = this.quest[26];
    // this.potions = 2;
  }

  ngOnInit(): void {

    if (sessionStorage.getItem('players') != undefined) this.playersQty = Number(sessionStorage.getItem('players'));
    if (sessionStorage.getItem('quest') != undefined) this.selectQuest(Number(sessionStorage.getItem('quest')));
    if (sessionStorage.getItem('phase') != undefined) this.phase = sessionStorage.getItem('phase');

    if (sessionStorage.getItem('potions') != undefined) this.potions = Number(sessionStorage.getItem('potions'));
    if (sessionStorage.getItem('nodeID') != undefined) this.node = this.quest[Number(sessionStorage.getItem('nodeID')) - 1];
    if (sessionStorage.getItem('gainedMaterials') != undefined) {
      let auxJson = sessionStorage.getItem('gainedMaterials');
      if (auxJson) {
        this.gainedMaterials = JSON.parse(auxJson);
      }
    }

    this.ds.getMissionLog(this.ds.campaignID).subscribe(logs => {
      this.missionList.forEach((mission: any, i: number) => {
        //Estado inicial
        if (mission.disabled == undefined) {
          if (i == 0) mission.disabled = false;
          else mission.disabled = true;
        }

        let logMission = logs.find((x: any) => x.mission == (mission.monster + ' ' + mission.difficulty))
        if (logMission != undefined) {
          if (mission.difficulty == 'Assigned Quest') {
            if (logMission.missionStatus == 'victory') {
              this.missionList[i].disabled = true; //Se bloquea mission assigned
              this.missionList[i + 1].disabled = false; //Desbloquea misión de investigación

              if (this.missionList[i + 3] != undefined)
                this.missionList[i + 3].disabled = false; //Desbloquea siguiente monstruo
            }
          }
          if (mission.difficulty == 'Investigation Quest') {
            this.missionList[i + 1].disabled = false; //Desbloquea versión tempered

          }
        }

      })

    })

  }

  /**
   *  Asigna las variables Quest y StartingPoint
   */
  selectQuest(index: number) {

    this.missionListIndex = index;

    this.showTrackTokens = false;
    this.trackTokens = 0;
    this.node = undefined;
    this.mission = this.missionList[index];

    //Great Jagras
    if (index == 0) {
      this.quest = this.jagrasQuest;
      this.startingPoint = [1];
      this.rewardsTable = this.rewardsJagras;
    }
    if (index == 1) {
      this.quest = this.jagrasQuest;
      this.startingPoint = [2, 3, 4, 5];
      this.rewardsTable = this.rewardsJagras;
    }
    if (index == 2) {
      this.quest = this.jagrasQuest;
      this.startingPoint = [2, 3, 4, 5];
      this.rewardsTable = this.rewardsJagras;
    }

    //Tobi-Kadachi
    if (index == 3) {
      this.quest = this.tobiQuest;
      this.startingPoint = [1];
      this.rewardsTable = this.rewardsTobi;
    }
    if (index == 4) {
      this.quest = this.tobiQuest;
      this.startingPoint = [2, 3, 4, 5];
      this.rewardsTable = this.rewardsTobi;
    }
    if (index == 5) {
      this.quest = this.tobiQuest;
      this.startingPoint = [2, 3, 4, 5];
      this.rewardsTable = this.rewardsTobi;
    }

    //Anjanath
    if (index == 6) {
      this.quest = this.anjaQuest;
      this.startingPoint = [1];
      this.rewardsTable = this.rewardsAnja;
    }
    if (index == 7) {
      this.quest = this.anjaQuest;
      this.startingPoint = [2, 3, 4, 5];
      this.rewardsTable = this.rewardsAnja;
    }
    if (index == 8) {
      this.quest = this.anjaQuest;
      this.startingPoint = [2, 3, 4, 5];
      this.rewardsTable = this.rewardsAnja;
    }

    //Rathalos
    if (index == 9) {
      this.quest = this.rathQuest;
      this.startingPoint = [1];
      this.rewardsTable = this.rewardsRathalos;
    }
    if (index == 10) {
      this.quest = this.rathQuest;
      this.startingPoint = [2, 3, 4, 5];
      this.rewardsTable = this.rewardsRathalos;
    }
    if (index == 11) {
      this.quest = this.rathQuest;
      this.startingPoint = [2, 3, 4, 5];
      this.rewardsTable = this.rewardsRathalos;
    }

    //Azure Rathalos
    if (index == 12) {
      this.quest = this.azureQuest;
      this.startingPoint = [1];
      this.rewardsTable = this.rewardsAzure;
    }
    if (index == 13) {
      this.quest = this.azureQuest;
      this.startingPoint = [2, 3, 4, 5];
      this.rewardsTable = this.rewardsAzure;
    }
    if (index == 14) {
      this.quest = this.azureQuest;
      this.startingPoint = [2, 3, 4, 5];
      this.rewardsTable = this.rewardsAzure;
    }
    sessionStorage.setItem('quest', index.toString());
  }

  selectPlayers(qty: number) {
    this.playersQty = qty;
    sessionStorage.setItem('players', qty.toString());
  }

  selectPhase(phase: String) {
    this.phase = phase;
    sessionStorage.setItem('phase', phase.toString());
  }

  selectStartingNode(index: number) {
    this.node = this.quest[index - 1];
    this.potions = this.node.potions;

    //Obtiene materiales
    if (this.node.materials != undefined) {
      this.node.materials.forEach((mat: any) => {
        if (this.gainedMaterials.find((x: any) => x.name == mat.name) == undefined)
          this.gainedMaterials.push({ name: mat.name, qty: 0 });
        this.gainedMaterials.find((x: any) => x.name == mat.name).qty += mat.qty * ((mat.playerMultiplier) ? this.playersQty : 1);
      });
    }

    sessionStorage.setItem('nodeID', this.node.id.toString());
    sessionStorage.setItem('potions', this.potions.toString());
    sessionStorage.setItem('trackTokens', this.trackTokens.toString());
    sessionStorage.setItem('gainedMaterials', JSON.stringify(this.gainedMaterials).toString());
  }

  selectNode(option: any) {
    console.log(option)
    if (option.progressTo != undefined) {

      //Avanza al siguiente nodo
      this.node = this.quest[option.progressTo - 1];

      //Añade Tokens
      this.trackTokens += (option.trackTokens) ? option.trackTokens : 0;

      //Revisa si la opción bloqueada cumple las condiciones para desbloquearla
      this.enableOption()

      //Obtiene materiales del nodo
      if (this.node.materials != undefined) {
        this.updateGainedMaterials(this.node.materials);
      }

      //Obtiene materiales de la opción elegida
      if (option.materials != undefined) {
        this.updateGainedMaterials(option.materials);
      }

      if (option.potions != undefined) {
        this.potions += option.potions;
      }

      //Revisa si se cumple la condición extra
      if (option.condition != undefined) {
        this.checkConditions(option);
      }

      if (option.customPopup != undefined) {
        this.openCustomMenu(option);
      }
    }
    else {
      if (option.customPopup != undefined) {
        this.openCustomMenu(option);
      }
      else {
        //Termina la fase de investigación      
        this.showTrackTokens = true;
      }
    }

    sessionStorage.setItem('nodeID', this.node.id.toString());
    sessionStorage.setItem('potions', this.potions.toString());
    sessionStorage.setItem('trackTokens', this.trackTokens.toString());
    sessionStorage.setItem('gainedMaterials', JSON.stringify(this.gainedMaterials).toString());
  }

  enableOption() {
    this.node.options.forEach((nodeOption: any) => {
      if (nodeOption.disabled) {
        //Revisa tipo de variable
        if (nodeOption.disabled.if.variable == 'Potion') {
          if (nodeOption.disabled.if.operator == '<=')
            if (this.potions <= nodeOption.disabled.if.value)
              nodeOption.disabled.disabled = nodeOption.disabled.if.then.disable;
          if (nodeOption.disabled.if.operator == '>=')
            if (this.potions >= nodeOption.disabled.if.value)
              nodeOption.disabled.disabled = nodeOption.disabled.if.then.disable;
        }
        //De no ser tipo predefinido, es un material
        else {
          let material = this.ds.materials.find(x => x.materialName == nodeOption.disabled.if.variable);

          if (nodeOption.disabled.if.operator == '>=')
            if (material.materialQuantity >= nodeOption.disabled.if.value)
              nodeOption.disabled.disabled = nodeOption.disabled.if.then.disable;
          if (nodeOption.disabled.if.operator == '<=')
            if (material.materialQuantity <= nodeOption.disabled.if.value)
              nodeOption.disabled.disabled = nodeOption.disabled.if.then.disable;
        }
      }
    });
  }

  updateGainedMaterials(materials: any) {

    materials.forEach((mat: any) => {

      if (this.gainedMaterials.find((x: any) => x.name == mat.name) == undefined)
        this.gainedMaterials.push({ name: mat.name, qty: 0 });

      this.gainedMaterials.find((x: any) => x.name == mat.name).qty += (mat.qty * ((mat.playerMultiplier) ? this.playersQty : 1));
    });
  }

  checkConditions(option: any) {

    //Revisa si la condición afecta a tracktokens
    if (option.condition.variable == 'trackTokens') {
      if (option.condition.operator == '<=')
        if (this.trackTokens <= option.condition.value)
          this.trackTokens += option.condition.then.add;

      if (option.condition.operator == '>=')
        if (this.trackTokens >= option.condition.value)
          this.trackTokens += option.condition.then.add;
    }

    //De no ser así, es un material
    else {
      let material = this.ds.materials.find(x => x.materialName == option.condition.variable);
      if (this.gainedMaterials.find((x: any) => x.name == option.condition.variable) == undefined)
        this.gainedMaterials.push({ name: option.condition.variable, qty: 0 });

      if (option.condition.operator == '>=')
        if (material.materialQuantity >= option.condition.value)
          this.gainedMaterials.find((x: any) => x.name == option.condition.variable).qty += option.then.add;

      if (option.condition.operator == '<=')
        if (material.materialQuantity <= option.condition.value)
          this.gainedMaterials.find((x: any) => x.name == option.condition.variable).qty += option.then.add;
    }
  }

  openCustomMenu(option: any) {
    console.log(option.customPopup)
    this.popupVisible = true;
    this.customPopup = option.customPopup;
  }

  selectMaterial(e: any, index: number) {
    this.selectedMaterials[index] = e;
  }

  setChoiceMenuRewards(rewards?: any) {
    this.popupVisible = false;
    this.customPopup = undefined;

    //Revisa materiales sacrificados
    this.selectedMaterials.forEach((element: any) => {
      if (this.gainedMaterials.find((x: any) => x.name == element) == undefined)
        this.gainedMaterials.push({ name: element, qty: 0 });
      this.gainedMaterials.find((x: any) => x.name == element).qty--;
    });
    if(rewards.potions) this.potions += rewards.potions;
    if(rewards.trackTokens) this.trackTokens += rewards.trackTokens;
    
    sessionStorage.setItem('gainedMaterials', JSON.stringify(this.gainedMaterials).toString());

  }

  selectDiceRoll(option: any) {
    this.popupVisible = false;
    this.customPopup = undefined;
    this.selectNode(option);
  }

  add(diceOption: any, value: number) {
    if (diceOption.addedAmount == undefined) diceOption.addedAmount = 0;
    diceOption.addedAmount += value;
  }

  addReward(material: any, addedAmmount: any) {
    material.addedAmmount = (material.addedAmmount != undefined) ? material.addedAmmount : 0;
    material.addedAmmount += addedAmmount;
  }

  updateReward(material: any) {
    this.loading = true;
    let params = {
      materialName: material.name,
      idCampaign: this.ds.campaignID.toString(),
      addedAmount: material.addedAmmount
    }

    this.ds.updateItem(params).subscribe((resUpdate) => {
      material.addedAmmount = 0;
      this.loading = false;
    })
  }

  updateBulkMaterials() {
    this.loading = true;

    this.gainedMaterials.forEach((element: any) => {
      element.idCampaign = this.ds.campaignID;
    });

    this.ds.updateItemBulk(this.gainedMaterials).subscribe((res) => {
      this.loading = false;

      sessionStorage.removeItem('nodeID');
      sessionStorage.removeItem('trackTokens');
      sessionStorage.removeItem('gainedMaterials');
      this.selectPhase('Hunt');
    },
      (error) => {
        this.loading = false;
      }
    )

  }

  setMissionState(missionState: boolean) {
    this.missionState = missionState;

    let params = {
      idCampaign: this.ds.campaignID.toString(),
      mission: this.mission.monster + ' ' + this.mission.difficulty,
    }

    //Actualiza missionLog
    this.log("ToDo: Actualizar missionLog");
  }

  closeMultipleSelection(customPopup: any) {

    //Se añade el addedAmmount configurado en customMenu
    customPopup.options.forEach((opt: any) => {
      if (this.gainedMaterials.find((x: any) => x.name == opt.materials[0].name) == undefined && opt.addedAmount != undefined)
        this.gainedMaterials.push({ name: opt.materials[0].name, qty: 0 });
      if (this.gainedMaterials.find((x: any) => x.name == opt.materials[0].name))
        this.gainedMaterials.find((x: any) => x.name == opt.materials[0].name).qty += (opt.addedAmount) ? (opt.addedAmount) : 0;
    });

    this.popupVisible = false;
    this.customPopup = undefined;

    this.selectNode(customPopup);

  }

  log(e: any) {
    console.log(e)
  }


}
