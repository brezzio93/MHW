import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DxSelectBoxModule, DxTextBoxModule } from 'devextreme-angular';
import { DataService } from '../../services/data.service';

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
      potions: 1,
      text: 'La costa cerca del Campamento Suroeste se baña en el sol, con una luz brillante que se refleja en las pozas poco profundas donde beben Kestodon y Aptonoth. Más adelante se ve la entrada al Bosque Antiguo, formado por un arco de ramas gruesas, que se abre como unas fauces abiertas... los sonidos del mundo que hay detrás de ti se desvanecen en silencio al pasar bajo el rico dosel verde, dejando una breve sensación de calma, que pronto se rompe cuando las Moscas Exploradoras se agrupan emocionadas alrededor de una enorme huella en el suelo.',
      options: [
        {
          progressTo: 21,
          text: '¡Sigue las Scoutflies!',
          action: 'Descarta una carta de tiempo. Ganan 1 Ficha de Rastreo. \n',
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
          text: '¿Echarse a correr por el sendero?',
          action: 'Ganan 1 Ficha de Rastreo. \n',
          trackTokens: 1,
        },
        {
          progressTo: 25,
          text: '¿Se quedan y rebuscan entre los restos?',
          action: 'Descarta 1 Carta de Tiempo. Cada cazador gana 1 Monster Bone Medium. \n',
          timeCards: -1,
          materials: [
            { name: 'Monster Bone Medium', qty: 1, playerMultiplier: true },
          ],
        },
        {
          progressTo: 30,
          text: '¡Corren hacia donde se vió por última vez a su presa!',
          action: 'Descarta 5 Cartas de Tiempo. \n',
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
          text: 'Siguen su consejo y avanzan lentamente.',
          action: 'Ganan y revelan 1 Ficha de Rastreo, luego eligen mantenerla o descartarla. \n',
          trackTokens: 1,
        },
        {
          progressTo: 16,
          text: '!Con tantos rastros, no hay tiempo que perder!',
          action: 'Ganan 2 Fichas de Rastreo. \n',
          trackTokens: 2,
        },
        {
          progressTo: 30,
          text: '¡Corren hacia donde se vió por última vez a su presa!',
          action: 'Descarta 5 Cartas de Tiempo. \n',
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
          text: 'Bajas por la playa',
          action: ' Descartan 1 Carta de Tiempo. Ganan 1 Ficha de Rastreo. \n',
          timeCards: -1,
          trackTokens: 1,
        },
        {
          progressTo: 9,
          text: 'Regresa al bosque, hacia un campamento que puedes ver entre los árboles.',
          action: 'Descartan 1 Carta de Tiempo. \n',
          timeCards: -1,
        },
        {
          progressTo: 30,
          text: '¡Corren hacia donde se vió por última vez a su presa!',
          action: 'Descartan 5 Cartas de Tiempo. \n',
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
          text: 'Sigue las huellas que puedas',
          action: 'Descartan 1 Carta de Tiempo. Ganan 2 Fichas de Rastreo. \n',
          timeCards: -1,
          trackTokens: 2,
        },
        {
          progressTo: 24,
          text: 'Investiga el área',
          action: 'Descartan 2 Cartas de Tiempo. Cada Cazador gana 1 Piercing Claw y 1 Monster Bone Large. \n',
          timeCards: -2,
          materials: [
            { name: 'Piercing Claw', qty: 1, playerMultiplier: true },
            { name: 'Monster Bone Large', qty: 1, playerMultiplier: true },
          ],
        },
        {
          progressTo: 14,
          text: 'Dirígete río abajo hasta donde se vio al Great Jagras por última vez. \n',
          action: 'Descartan 1 Carta de Tiempo. \n',
          timeCards: -1,
        },
        {
          progressTo: 30,
          text: '¡Corren hacia donde se vió por última vez a su presa!',
          action: 'Descartan 5 Cartas de Tiempo. \n',
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
          text: 'No hay tiempo para mirar atrás.',
          action: 'Descarta 1 Carta de Tiempo. Gana 3 Fichas de Rastreo. \n',
          timeCards: -1,
          trackTokens: 3,
        },
        {
          progressTo: 30,
          text: 'Espera, escuchen... ¿Hay algo detrás de nosotros?',
          action: '\n',
        },
      ]
    },
    {
      id: 7,
      text: 'La luz parpadeante pinta sombras espeluznantes en las paredes, charcos danzantes de oscuridad que dan mente a feroces depredadores. Tus pies levantan polvo y crujen a través de pequeños huesos, revelando metales y gemas brillantes.',
      options: [
        {
          progressTo: 11,
          text: 'Registra la cueva',
          action: 'Descarta 1 Carta de Tiempo. \nCada cazador lanza dados en la siguiente tabla.\n \n 1-2 Ganan 1 Dragonite Ore.\n 3-4 Ganan 1 Fucium Ore.\n 5-6 Ganan 1 Ancient Bone.\n \n Una vez que cada jugador haya tirado. \n',
          timeCards: -1,
          diceRoll: [
            { roll: '1-2', rewards: { material: 'Dragonite Ore', qty: 1 } },
            { roll: '3-4', rewards: { material: 'Fucium Ore', qty: 1 } },
            { roll: '5-6', rewards: { material: 'Ancient Bone', qty: 1 } },
          ],
        },
        {
          progressTo: 30,
          text: 'Regresa de este sinistro lugar',
          action: '',
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
          progressTo: 7,
          text: 'Extrae el mineral y entra en la cueva.',
          action: 'Descarta 1 Ficha de Rastreo. \nCada cazador lanza dados en la siguiente tabla.\n \n 1-2 Ganan 1 Dragonite Ore.\n 3-4 Ganan 1 Fucium Ore.\n 5-6 Ganan 1 Firecell Stone.\n \n Una vez que cada jugador haya tirado. \n',
          trackTokens: -1,
          diceRoll: [
            { roll: '1-2', rewards: { material: 'Dragonite Ore', qty: 1 } },
            { roll: '3-4', rewards: { material: 'Fucium Ore', qty: 1 } },
            { roll: '5-6', rewards: { material: 'Firecell Stone', qty: 1 } },
          ],
        },
        {
          progressTo: 6,
          text: 'Sigue las huellas que puedas ver, y espera que estén frescas.',
          action: 'Descarta 1 Carta de Tiempo. Gana 1 Ficha de Rastreo.',
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
          text: 'Pide su ayuda',
          action: 'Cada cazador que no tenga un Palico roba una carta de Palico.\n Pueden usarla durante la siguiente fase de caza luego se descarta.\n',
        },
        {
          progressTo: 19,
          text: 'Pide un guía',
          action: 'Ganan y revelan 4 Fichas de Rastreo, luego elijan si las conservan o descartarlas.\n',
          trackTokens: 4,
        },
      ]
    },
    {
      id: 10,
      text: 'Has acechado a través del bosque, de forma intrincada y cuidadosamente te has abierto camino... a la misma cueva que has visitado muchas veces antes. Aún así, tal vez, todavía haya algún mineral por descubrir.',
      options: [
        {
          progressTo: 18,
          text: 'Tira un dado, con 1-4, se ha extraido todo el mineral',
          action: 'Hora de darse prisa.\n',
        },
        {
          progressTo: 7,
          text: 'Tira un dado, con 5-6, todavía queda algo aquí.',
          action: 'Descarta 1 Carta de Tiempo.\nCada cazador gana 1 Carbalite Ore y 1 Machalite Ore.\n',
          timeCards: -1,
          materials: [
            { name: 'Carbalite Ore', qty: 1, playerMultiplier: true },
            { name: 'Machalite Ore', qty: 1, playerMultiplier: true },
          ],
        },
      ]
    },
    {
      id: 11,
      text: 'Algo enorme ha pasado claramente por aquí, marcas frescas cubren las paredes donde se escurrió su enorme masa a través del pasadizo. Esta madriguera es un laberinto; puedes correr a ciegas o detenerte para orientarte.',
      options: [
        {
          progressTo: 30,
          text: '¡Sigue moviendote!',
          action: 'Descarta 1 Carta de Tiempo. Gana 2 Fichas de Rastreo.\n',
          timeCards: -1,
          trackTokens: 2,
        },
        {
          progressTo: 18,
          text: 'Avanzacon cuidado',
          action: 'Descarta 1 Carta de Tiempo. Revela hasta 3 de tus Fichas de Rastreo.\n',
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
          text: 'Se obligan a continuar.',
          action: 'Todos los cazadores sufren 2 de daño.\n',
        },
        {
          progressTo: 6,
          text: 'Bebe de tus suministros.',
          action: '(Los cazadores solo pueden elegir esta opción si tienen al menos 1 Poción). Descarta 1 Poción.\n',
          disabled: {
            disabled: true,
            if: { variable: 'Potion', operator: '>=', value: 1, then: { disable: false } }
          },
        },
      ]
    },
    {
      id: 13,
      text: '"¿En qué puedo ayudarte?" dice el hombre pequeño al pasar junto a él. Deberías reconocerlo como un comerciante antes. Sonríe y señala la mochila que lleva a su espalda. "¡Tengo todo lo que puedas necesitar, justo aquí!" Estás seguro de que si, pero sabes que te va a costar...',
      options: [
        {
          progressTo: 10,
          text: '\n',
          action: 'Los jugadores pueden descartar 3 recursos cualesquiera y añadir 1 Poción a l areserva, o ganar 1 Ficha de Rastreo. Si lo hacen, descartan 1 Carta de Tiempo.\n',
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
          text: 'Investiga la voz.',
          action: '\n',
        },
        {
          progressTo: 24,
          text: 'Ignóralo y continúa buscando en el nido de la criatura.',
          action: '(Los jugadores sólo pueden seleccionar esta opción si tienen al menos 1 Great Jagras Hide en sus inventarios). Descarta 2 tarjetas de tiempo. Gana 1 Great Jagras Mane.',
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
          text: 'No podemos perder el tiempo. ¡Sigue con la persecución!',
          action: 'Baraja la carta de Rushed Advance en el mazo de tiempo.\n',
        },
        {
          progressTo: 19,
          text: 'Acampa por la noche.',
          action: 'Descarta 2 Cartas de Tiempo, todos los cazadores se sanan por completo.\n',
          timeCards: -2,
        },
      ]
    },
    {
      id: 16,
      text: 'Un rugido llena el aire y resuena en el bosque. La bestia está cerca. Una mochila abandonada yace en el suelo, en medio del camino, con la correa rota. ¿Pero es esto una trampa?',
      options: [
        {
          progressTo: 27,
          text: 'Revisa la mochila.',
          action: 'Tira 1 dado.\n Con un 1-2 "¡No hay tiempo!"\n Avanzan a la entrada 27.\n Con 3-4 "¡Toma la bolsa antes de que caiga sobre ti!"\n Agrega 1 poción. Avanzan a la entrada 27.\n Con 5-6 "¡Agarra los minerales del suelo!". \n Cada cazador gana 1 Carbalite Ore y 1 Machalite Ore.\n',
        },
        {
          progressTo: 29,
          text: 'Déjalo y explora a través de un hueco entre los árboles.',
          action: '\n',
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
          text: 'Obtienes una escama con cuidado',
          action: 'Descarta 1 Carta de Tiempo.\n Ganas 1 Great Jagras Scale.\n',
          timeCards: -1,
          materials: [
            { name: 'Great Jagras Scale', qty: 1, playerMultiplier: false }
          ],
        },
        {
          progressTo: 28,
          text: '¡El rastro se está enfriando!',
          action: '\n',
        },
      ]
    },
    {
      id: 18,
      text: 'Emerges a la luz del sol brillante, con un río de corriente rápida gorgoteando a tu lado. Un rastro de huellas frescas ha sido estampado en el barro, un camino que te lleva hacia adelante',
      options: [
        {
          progressTo: 28,
          text: 'Sigue el rastro.',
          action: 'Descarta 1 Carta de Tiempo. Gana 1 Ficha de Rastreo.\n',
          timeCards: -1,
          trackTokens: 1,
        },
        {
          progressTo: 15,
          text: 'Detente a examinarlas más de cerca.',
          action: 'Descarta 2 Cartas de Tiempo. Descarta 1 Ficha de Rastreo.\n',
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
          text: '\n',
          action: 'Si el grupo tiene 4 o menos Fichas de Rastreo, ganan 1 Ficha de Rastreo.',
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
          text: 'Limpiar el cuerpo.',
          action: 'Descarta 2 Cartas de Tiempo. Cada cazador gana 1 Great Jagras Scale.\n\nSi el grupo tiene al menos 1 Great Jagras Mane, cada cazador gana 1 Great Jagras Mane adicional.\n',
          timeCards: -2,
          materials: [
            { name: 'Great Jagras Scale', qty: 1, playerMultiplier: true },
          ],
          condition: { variable: 'Great Jagras Mane', operator: '>=', value: 1, then: { add: 1 } }
        },
        {
          progressTo: 9,
          text: 'Regresa al sendero y dirígete a un campamento que puedes ver entre los árboles.',
          action: '\n',
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
          text: '¿Te apresuras por seguir las huellas del sendero?',
          action: 'Gana 1 Ficha de Rastreo. ',
          trackTokens: 1,
        },
        {
          progressTo: 23,
          text: '¿Parar a buscar otros huesos cercanos?',
          action: 'Descarta 1 Carta de Tiempo. Cada cazador gana 1 Quality Bone y 1 Monster Bone Small. ',
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
          text: 'Prioriza recolectar.',
          action: 'Descarta 1 Carta de Tiempo. Cada cazador gana 1 Piercing Claw y 1 Monster Hardbone. ',
          timeCards: -1,
          materials: [
            { name: 'Piercing Claw', qty: 1, playerMultiplier: true },
            { name: 'Monster Hardbone', qty: 1, playerMultiplier: true },
          ]
        },
        {
          progressTo: 20,
          text: 'Olvídate del cadáver. Prioriza el seguimiento',
          action: 'Descarta 1 Carta de Tiempo. Gana 1 Ficha de Rastreo. ',
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
          text: 'Ábrete camino a través del bosque',
          action: 'Descarta 1 Carta de Tiempo. ',
          timeCards: -1,
        },
        {
          progressTo: 7,
          text: 'Retrocede hasta la entrada de la cueva',
          action: 'Descarta 2 Cartas de Tiempo. ',
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
          text: 'Juras vengar a los espíritus.',
          action: 'Descarta 1 Carta de Tiempo.\nBaraja una carta Jagras Slayer en la Baraja de Tiempo.\n',
          timeCards: -1,
        },
        {
          progressTo: 26,
          text: 'Inclina la cabeza con reverencia... pero date prisa.',
          action: 'Baraja una carta Unavenged en la Baraja de Tiempo.\n',
        },
      ]
    },
    {
      id: 25,
      text: 'La maleza cercana contiene otro cadáver. Otro Aptonoth muerto. Pero quizá valga la pena examinarlo más a fondo. Recopilar cualquier detalle sobre Great Jagras podría resultar invaluable más adelante',
      options: [
        {
          progressTo: 27,
          text: '¿Pasas algo de tiempo limpiando los huesos para poder llevártelos contigo?',
          action: 'Descarta 2 Cartas de Tiempo.\nCada cazador gana 1 Monster Bone Large y 1 Great Jagras Scale. ',
          timeCards: -2,
          materials: [
            { name: 'Monster Bone Large', qty: 1, playerMultiplier: true },
            { name: 'Great Jagras Scale', qty: 1, playerMultiplier: true },
          ],
        },
        {
          progressTo: 8,
          text: 'Hemos pasado suficiente tiempo aquí.',
          action: '\n',
        },
      ]
    },
    {
      id: 26,
      text: 'Un vasto conjunto de huesos, carne disecada y dientes rotos te recibe cuando sales del círculo de árboles. Aquí es donde los titanes vienen a morir; un cementerio de monstruos. Cerca hay un cadáver fresco. Por las marcas en su garganta, fue víctima del Great Jagras. Otro. Sin embargo, estás tras su rastro y, por lo que sabes sobre el camino de la bestia, hay un atajo que debería llevarte justo encima de ella...',
      options: [
        {
          progressTo: 29,
          text: 'Tómate tiempo para pelar la carcasa.',
          action: 'Descarta 2 Cartas de Tiempo. Cada cazador gana 1 Monster Keenbone.\n',
          timeCards: -2,
          materials: [
            { name: 'Monster Keenbone', qty: 1, playerMultiplier: true },
          ],
        },
        {
          progressTo: 28,
          text: 'Sigue el atajo.',
          action: 'Descarta 1 Carta de Tiempo. Gana 2 Fichas de Rastreo.\n',
          timeCards: -1,
          trackTokens: 2,
        },
        {
          progressTo: 17,
          text: '¿Qué es ese montón peludo de ahí?',
          action: '(Los jugadores sólo pueden elegir esta opción si tienen al menos 1 Great Jagras Hide en sus inventarios)\n',
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
          text: 'Lucha contra la manada.',
          action: 'Descarta 2 Cartas de Tiempo. Cada cazador sufre 1 de daño, luego ganan 1 Sharp Claw. ',
          timeCards: -2,
          materials: [
            { name: 'Sharp Claw', qty: 1, playerMultiplier: true },
          ],
        },
        {
          progressTo: 29,
          text: 'Huye entre la maleza.',
          action: 'Descarta 1 Carta de Tiempo. ',
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
          text: 'No, no podemos. ¡Abandona la caza para salvarlos!',
          action: "Descarta 1 Ficha de Rastreo y baraja Researcher's Favour en la Baraja de Tiempo. ",
          timeCards: -1,
        },
        {
          progressTo: 19,
          text: 'Si podemos. Busca en la cartera y dirígete a un lugar más seguro',
          action: 'Descarta 1 Carta de Tiempo. Cada cazador gana 1 Coral Crystal, luego añade 1 Poción. ',
          timeCards: -1,
          materials: [
            { name: 'Coral Crystal', qty: 1, playerMultiplier: true },
          ]
        },
      ]
    },
    {
      id: 29,
      text: 'El cadáver con el que te has topado es increíblemente viejo. Más viejo que la humanidad, estás seguro. Una criatura olvidada hace mucho tiempo pero aún así, incluso muerta, magnífica. Se te queda el aliento en la garganta al imaginar las batallas que esta criatura debe haber librado.',
      options: [
        {
          progressTo: 6,
          text: 'Toma en reverencia un hueso antes de partir.',
          action: 'Descarta 1 Carta de Tiempo. Cada cazador gana 1 Ancient Bone.\n',
          timeCards: -1,
          materials: [
            { name: 'Ancient Bone', qty: 1, playerMultiplier: true },
          ]
        },
        {
          progressTo: 18,
          text: 'Deje esta tranquila escena sin molestar.',
          action: 'Descarta 1 Carta de Tiempo. Baraja la carta Ancient Guardian en la Baraja de Tiempo. ',
          timeCards: -1,
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

  quest: any = [];
  node: any;
  startingPoint: any = [];
  trackTokens = 0;
  showTrackTokens = false;

  gainedMaterials: any = [];
  potions = 0;
  playersQty: any = 4;

  constructor(
    private ds: DataService
  ) {

  }

  ngOnInit(): void {
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

    this.showTrackTokens = false;
    this.trackTokens = 0;
    this.node = undefined;

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
    console.log('startingNode:', index);
    this.node = this.quest[index - 1];
    this.potions = this.node.potions;

    //Obtiene materiales
    if (this.node.materials != undefined) {
      this.node.materials.forEach((mat: any) => {
        if (this.gainedMaterials[mat.name] == undefined) this.gainedMaterials[mat.name] = 0;
        console.log(mat.qty * ((mat.playerMultiplier) ? this.playersQty : 1))
        this.gainedMaterials[mat.name] = mat.qty * ((mat.playerMultiplier) ? this.playersQty : 1);
      });
    }
    console.log('node', this.node)
    console.log('startingPotions:', this.potions)
    console.log('gainedMaterials:', this.gainedMaterials)
  }

  selectNode(option: any) {
    console.log('option:', option);
    if (option.progressTo != undefined) {

      //Avanza al siguiente nodo
      this.node = this.quest[option.progressTo - 1];

      //Añade Tokens
      this.trackTokens += (option.trackTokens) ? option.trackTokens : 0;

      //Revisa si la opción bloqueada cumple las condiciones para desbloquearla
      this.node.options.forEach((nodeOption: any) => {
        if (nodeOption.disabled) {
          console.log('nodeOption:', nodeOption);
          if (nodeOption.disabled.if.variable == 'Potion') {
            if (nodeOption.disabled.if.operator == '<=')
              if (this.potions <= nodeOption.disabled.if.value)
                nodeOption.disabled.disabled = nodeOption.disabled.if.then.disable;
            if (nodeOption.disabled.if.operator == '>=')
              if (this.potions >= nodeOption.disabled.if.value)
                nodeOption.disabled.disabled = nodeOption.disabled.if.then.disable;
          }
          //De no ser así, es un material
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

      //Abre menú de Dados
      if (option.diceRoll != undefined) {

        // diceRoll: [
        //   { roll: '1-2', rewards: { material: 'Dragonite Ore', qty: 1 } },
        //   { roll: '3-4', rewards: { material: 'Fucium Ore', qty: 1 } },
        //   { roll: '5-6', rewards: { material: 'Ancient Bone', qty: 1 } },
        // ],      
      }
      else {
      }


      //Obtiene materiales del nodo
      if (this.node.materials != undefined) {
        this.updateGainedMaterials(this.node.materials);
      }

      //Obtiene materiales de la opción elegida
      if (option.materials != undefined) {
        this.updateGainedMaterials(option.materials);
      }

      //Revisa si se cumple la condición extra
      if (option.condition != undefined) {
        this.checkConditions(option);
      }

    }
    else { //Termina la fase de investigación
      this.showTrackTokens = true;
      console.log('trackTokens:', this.trackTokens)
      console.log('gainedMaterials:', this.gainedMaterials)
    }
  }

  updateGainedMaterials(materials: any) {
    materials.forEach((mat: any) => {
      this.gainedMaterials[mat.name] = mat.qty * ((mat.playerMultiplier) ? this.playersQty : 1);
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

      console.log('trackTokens:', this.trackTokens)
    }

    //De no ser así, es un material
    else {
      let material = this.ds.materials.find(x => x.materialName == option.condition.variable);
      console.log(option.condition.variable, material)
      if (this.gainedMaterials[option.condition.variable] == undefined) this.gainedMaterials[option.condition.variable] = 0;

      if (option.condition.operator == '>=')
        if (material.materialQuantity >= option.condition.value)
          this.gainedMaterials[option.condition.variable] += option.then.add;

      if (option.condition.operator == '<=')
        if (material.materialQuantity <= option.condition.value)
          this.gainedMaterials[option.condition.variable] += option.then.add;

      console.log('gainedMaterials:', this.gainedMaterials)
    }
  }

  diceRoll(option: any) {

  }

}
