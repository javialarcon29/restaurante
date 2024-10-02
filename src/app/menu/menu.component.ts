import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Item {
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  // Entrantes
  entrantes: Item[] = [
    { nombre: 'Ensalada César', descripcion: 'Fresca ensalada con pollo, crutones y aderezo César.', precio: 12, imagen: 'https://images.pexels.com/photos/1406336/pexels-photo-1406336.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { nombre: 'Carpaccio de Res', descripcion: 'Finísimas láminas de carne de res con aceite de oliva.', precio: 15, imagen: 'https://images.pexels.com/photos/8963412/pexels-photo-8963412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { nombre: 'Queso Provolone', descripcion: 'Provolone derretido con orégano y tomate.', precio: 10, imagen: 'https://media.istockphoto.com/id/1262423191/es/foto/cooking-provoleta-argentina.jpg?b=1&s=612x612&w=0&k=20&c=4StTTYBH8xr_j2wNCtL9tjsWJxYrA5EBeRQyC3KOoa0=' },
    { nombre: 'Jamón Ibérico', descripcion: 'Jamón ibérico de bellota con pan tostado.', precio: 18, imagen: 'https://media.istockphoto.com/id/1192465378/es/foto/concepto-de-jam%C3%B3n-de-bellota-producto-de-cerdo-alimentado-con-bellotas-de-roble-tambi%C3%A9n.jpg?b=1&s=612x612&w=0&k=20&c=M6JoiF8kcwheCNEKGjZlw0yQl7aJDwMb2oCn2AkcZsg=' },
    { nombre: 'Ensaladilla Rusa', descripcion: 'Ensalada rusa con atun y marisco.', precio: 8, imagen: 'https://media.istockphoto.com/id/1447985870/es/foto/ensalada-rusa-con-gambas-servida-en-un-plato-blanco.jpg?b=1&s=612x612&w=0&k=20&c=INccUH53NjE6Dn1WD_r01XbsGd8z5WWtzY4cGGlQ8EM=' },
    { nombre: 'Gambas Pil-pil', descripcion: 'Gasbas al pil-pil de la casa.', precio: 9, imagen: 'https://media.istockphoto.com/id/505827754/es/foto/camarones-pil-pil.jpg?s=2048x2048&w=is&k=20&c=CdmN7gCQ-FpUEtk0pxu17z_YNM1NXEka13MQHbuv3wE=' },
  ];

  // Carnes
  carnes: Item[] = [
    { nombre: 'Filete de Res', descripcion: 'Un delicioso corte de carne de res.', precio: 25, imagen: 'https://media.istockphoto.com/id/1363601737/es/foto/solomillo-superior-a-la-parrilla-o-taza-de-carne-de-res-en-tabla-de-m%C3%A1rmol-fondo-negro-vista.jpg?b=1&s=612x612&w=0&k=20&c=m_fVyEWoxm1hzTIH07HZLJXQqnqXmPV4cXCSKi2NLMY=' },
    { nombre: 'Costillas de Cerdo', descripcion: 'Costillas tiernas con salsa BBQ.', precio: 20, imagen: 'https://images.pexels.com/photos/27662744/pexels-photo-27662744/free-photo-of-comida-plato-restaurante-cena.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { nombre: 'Chuleta de Cordero', descripcion: 'Chuletas de cordero frescas.', precio: 30, imagen: 'https://images.pexels.com/photos/13443236/pexels-photo-13443236.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { nombre: 'Bife de Chorizo', descripcion: 'Carne jugosa con especias argentinas.', precio: 28, imagen: 'https://images.pexels.com/photos/15476366/pexels-photo-15476366/free-photo-of-comida-delicioso-sabroso-salchicha.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { nombre: 'Solomillo de Ternera', descripcion: 'Solomillo tierno a la parrilla.', precio: 32, imagen: 'https://images.pexels.com/photos/27643019/pexels-photo-27643019/free-photo-of-comida-plato-vegetales-verduras.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { nombre: 'Picaña', descripcion: 'Picaña brasileña al punto.', precio: 26, imagen: 'https://media.istockphoto.com/id/1317622457/es/foto/barbacoa-picanha-carne-cortada-en-tablero-de-madera.jpg?s=2048x2048&w=is&k=20&c=6qKN_ao9M685722w3fUnEYtCQmmN3pY8mta62bl0N3E=' }
  ];

  // Vinos
  vinos: Item[] = [
    { nombre: 'Vino Tinto Cabernet', descripcion: 'Un vino tinto robusto y afrutado.', precio: 45, imagen: 'https://images.pexels.com/photos/11401286/pexels-photo-11401286.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { nombre: 'Vino Blanco Chardonnay', descripcion: 'Un vino blanco fresco y ligero.', precio: 35, imagen: 'https://images.pexels.com/photos/3490355/pexels-photo-3490355.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { nombre: 'Vino Rosado', descripcion: 'Un vino rosado refrescante.', precio: 25, imagen: 'https://images.pexels.com/photos/6390283/pexels-photo-6390283.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { nombre: 'Vino Tinto Malbec', descripcion: 'Un vino argentino con cuerpo.', precio: 40, imagen: 'https://images.pexels.com/photos/20644769/pexels-photo-20644769/free-photo-of-alcohol-beber-bebida-vaso.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { nombre: 'Vino Moet Chandon', descripcion: 'Un espumoso para celebraciones.', precio: 50, imagen: 'https://images.pexels.com/photos/3858809/pexels-photo-3858809.jpeg?auto=compress&cs=tinysrgb&w=600' }
  ];

  // Refrescos
  refrescos: Item[] = [
    { nombre: 'Coca-Cola,Fanta', descripcion: 'Refresco clásico con burbujas.', precio: 3, imagen: 'https://images.pexels.com/photos/17559580/pexels-photo-17559580/free-photo-of-botellas-vaso-cristal-vidrio.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { nombre: 'Copa Vino de Ronda', descripcion: 'Refresco de naranja con gas.', precio: 3, imagen: 'https://media.istockphoto.com/id/615269202/es/foto/verter-vino-en-copa.jpg?b=1&s=612x612&w=0&k=20&c=RnTakwYnFTxnxpZhgCJKxr1sXIvWEzVZJwrZtGZA8P0=' },
    { nombre: 'Sprite', descripcion: 'Refresco de lima-limón.', precio: 3, imagen: 'https://images.pexels.com/photos/15811838/pexels-photo-15811838/free-photo-of-coca-cola-bebidas-duende-bebidas-sin-alcohol.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { nombre: 'Agua Solan de Cabras', descripcion: 'Agua mineral con o sin gas.', precio: 2, imagen: 'https://images.pexels.com/photos/10140534/pexels-photo-10140534.jpeg?auto=compress&cs=tinysrgb&w=600'}
  ];

  // Guarniciones
  guarniciones: Item[] = [
    { nombre: 'Papas Fritas', descripcion: 'Papas fritas crocantes.', precio: 4, imagen: 'https://images.pexels.com/photos/2271110/pexels-photo-2271110.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { nombre: 'Ensalada Mixta', descripcion: 'Fresca mezcla de vegetales.', precio: 5, imagen: 'https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { nombre: 'Arroz Basmati', descripcion: 'Arroz largo con especias.', precio: 3, imagen: 'https://images.pexels.com/photos/5638541/pexels-photo-5638541.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { nombre: 'Papas Gajos', descripcion: 'Papas al el estilo Gajo.', precio: 4, imagen: 'https://images.pexels.com/photos/1439177/pexels-photo-1439177.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { nombre: 'Verduras Asadas', descripcion: 'Mix de verduras de temporada.', precio: 6, imagen: 'https://images.pexels.com/photos/5637760/pexels-photo-5637760.jpeg?auto=compress&cs=tinysrgb&w=600' }
  ];
}
