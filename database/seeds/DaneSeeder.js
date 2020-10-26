'use strict'

const Department = use('App/Models/Department');
const Country = use('App/Models/Country');
const City = use('App/Models/City');


/*
|--------------------------------------------------------------------------
| DaneSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/


/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class DaneSeeder {
  async run() {
    await Country.create({ name: 'Colombia', code: 'CO' });
    // 1
    await Department.create({
      name: 'Amazonas',
      country_id: 1,
      code: '91'
    });
    // 2
    await Department.create({
      name: 'Antioquia',
      country_id: 1,
      code: '05'
    });
    // 3
    await Department.create({
      name: 'Arauca',
      country_id: 1,
      code: '81'
    });
    // 4
    await Department.create({
      name: 'Archipiélago de San Andrés, Providencia y Santa Catalina',
      country_id: 1,
      code: '88'
    });
    // 5
    await Department.create({
      name: 'Atlántico',
      country_id: 1,
      code: '08'
    });
    // 6
    await Department.create({
      name: 'Bogotá D.C.',
      country_id: 1,
      code: '11'
    });
    // 7
    await Department.create({
      name: 'Bolívar',
      country_id: 1,
      code: '13'
    });
    // 8
    await Department.create({
      name: 'Boyacá',
      country_id: 1,
      code: '15'
    });
    // 9
    await Department.create({
      name: 'Caldas',
      country_id: 1,
      code: '17'
    });
    // 10
    await Department.create({
      name: 'Caquetá',
      country_id: 1,
      code: '18'
    });
    // 11
    await Department.create({
      name: 'Casanare',
      country_id: 1,
      code: '85'
    });
    // 12
    await Department.create({
      name: 'Cauca',
      country_id: 1,
      code: '19'
    });
    // 13
    await Department.create({
      name: 'Cesar',
      country_id: 1,
      code: '20'
    });
    // 14
    await Department.create({
      name: 'Chocó',
      country_id: 1,
      code: '27'
    });
    // 15
    await Department.create({
      name: 'Córdoba',
      country_id: 1,
      code: '23'
    });
    // 16
    await Department.create({
      name: 'Cundinamarca',
      country_id: 1,
      code: '25'
    });
    // 17
    await Department.create({
      name: 'Guainía',
      country_id: 1,
      code: '94'
    });
    // 18
    await Department.create({
      name: 'Guaviare',
      country_id: 1,
      code: '95'
    });
    // 19
    await Department.create({
      name: 'Huila',
      country_id: 1,
      code: '41'
    });
    // 20
    await Department.create({
      name: 'La Guajira',
      country_id: 1,
      code: '44'
    });
    // 21
    await Department.create({
      name: 'Magdalena',
      country_id: 1,
      code: '47'
    });
    // 22
    await Department.create({
      name: 'Meta',
      country_id: 1,
      code: '50'
    });
    // 23
    await Department.create({
      name: 'Nariño',
      country_id: 1,
      code: '52'
    });
    // 24
    await Department.create({
      name: 'Norte de Santander',
      country_id: 1,
      code: '54'
    });
    // 25
    await Department.create({
      name: 'Putumayo',
      country_id: 1,
      code: '86'
    });
    // 26
    await Department.create({
      name: 'Quindío',
      country_id: 1,
      code: '63'
    });
    // 27
    await Department.create({
      name: 'Risaralda',
      country_id: 1,
      code: '66'
    });
    // 28
    await Department.create({
      name: 'Santander',
      country_id: 1,
      code: '68'
    });
    // 29
    await Department.create({
      name: 'Sucre',
      country_id: 1,
      code: '70'
    });
    // 30
    await Department.create({
      name: 'Tolima',
      country_id: 1,
      code: '73'
    });
    // 31
    await Department.create({
      name: 'Valle del Cauca',
      country_id: 1,
      code: '76'
    });
    // 32
    await Department.create({
      name: 'Vaupés',
      country_id: 1,
      code: '97'
    });
    // 33
    await Department.create({
      name: 'Vichada',
      country_id: 1,
      code: '99'
    });


    await City.create({ name: 'Leticia', code: '91001', department_id: 1 });
    await City.create({ name: 'El Encanto', code: '91263', department_id: 1 });
    await City.create({ name: 'La Chorrera', code: '91405', department_id: 1 });
    await City.create({ name: 'La Pedrera', code: '91407', department_id: 1 });
    await City.create({ name: 'La Victoria', code: '91430', department_id: 1 });
    await City.create({ name: 'Miriti - Paraná', code: '91460', department_id: 1 });
    await City.create({ name: 'Puerto Alegría', code: '91530', department_id: 1 });
    await City.create({ name: 'Puerto Arica', code: '91536', department_id: 1 });
    await City.create({ name: 'Puerto Nariño', code: '91540', department_id: 1 });
    await City.create({ name: 'Puerto Santander', code: '91669', department_id: 1 });
    await City.create({ name: 'Tarapacá', code: '91798', department_id: 1 });
    await City.create({ name: 'Medellín', code: '05001', department_id: 2 });
    await City.create({ name: 'Abejorral', code: '05002', department_id: 2 });
    await City.create({ name: 'Abriaquí', code: '05004', department_id: 2 });
    await City.create({ name: 'Alejandría', code: '05021', department_id: 2 });
    await City.create({ name: 'Amagá', code: '05030', department_id: 2 });
    await City.create({ name: 'Amalfi', code: '05031', department_id: 2 });
    await City.create({ name: 'Andes', code: '05034', department_id: 2 });
    await City.create({ name: 'Angelópolis', code: '05036', department_id: 2 });
    await City.create({ name: 'Angostura', code: '05038', department_id: 2 });
    await City.create({ name: 'Anorí', code: '05040', department_id: 2 });
    await City.create({ name: 'Santafé De Antioquia', code: '05042', department_id: 2 });
    await City.create({ name: 'Anza', code: '05044', department_id: 2 });
    await City.create({ name: 'Apartadó', code: '05045', department_id: 2 });
    await City.create({ name: 'Arboletes', code: '05051', department_id: 2 });
    await City.create({ name: 'Argelia', code: '05055', department_id: 2 });
    await City.create({ name: 'Armenia', code: '05059', department_id: 2 });
    await City.create({ name: 'Barbosa', code: '05079', department_id: 2 });
    await City.create({ name: 'Belmira', code: '05086', department_id: 2 });
    await City.create({ name: 'Bello', code: '05088', department_id: 2 });
    await City.create({ name: 'Betania', code: '05091', department_id: 2 });
    await City.create({ name: 'Betulia', code: '05093', department_id: 2 });
    await City.create({ name: 'Ciudad Bolívar', code: '05101', department_id: 2 });
    await City.create({ name: 'Briceño', code: '05107', department_id: 2 });
    await City.create({ name: 'Buriticá', code: '05113', department_id: 2 });
    await City.create({ name: 'Cáceres', code: '05120', department_id: 2 });
    await City.create({ name: 'Caicedo', code: '05125', department_id: 2 });
    await City.create({ name: 'Caldas', code: '05129', department_id: 2 });
    await City.create({ name: 'Campamento', code: '05134', department_id: 2 });
    await City.create({ name: 'Cañasgordas', code: '05138', department_id: 2 });
    await City.create({ name: 'Caracolí', code: '05142', department_id: 2 });
    await City.create({ name: 'Caramanta', code: '05145', department_id: 2 });
    await City.create({ name: 'Carepa', code: '05147', department_id: 2 });
    await City.create({ name: 'El Carmen De Viboral', code: '05148', department_id: 2 });
    await City.create({ name: 'Carolina', code: '05150', department_id: 2 });
    await City.create({ name: 'Caucasia', code: '05154', department_id: 2 });
    await City.create({ name: 'Chigorodó', code: '05172', department_id: 2 });
    await City.create({ name: 'Cisneros', code: '05190', department_id: 2 });
    await City.create({ name: 'Cocorná', code: '05197', department_id: 2 });
    await City.create({ name: 'Concepción', code: '05206', department_id: 2 });
    await City.create({ name: 'Concordia', code: '05209', department_id: 2 });
    await City.create({ name: 'Copacabana', code: '05212', department_id: 2 });
    await City.create({ name: 'Dabeiba', code: '05234', department_id: 2 });
    await City.create({ name: 'Donmatías', code: '05237', department_id: 2 });
    await City.create({ name: 'Ebéjico', code: '05240', department_id: 2 });
    await City.create({ name: 'El Bagre', code: '05250', department_id: 2 });
    await City.create({ name: 'Entrerrios', code: '05264', department_id: 2 });
    await City.create({ name: 'Envigado', code: '05266', department_id: 2 });
    await City.create({ name: 'Fredonia', code: '05282', department_id: 2 });
    await City.create({ name: 'Frontino', code: '05284', department_id: 2 });
    await City.create({ name: 'Giraldo', code: '05306', department_id: 2 });
    await City.create({ name: 'Girardota', code: '05308', department_id: 2 });
    await City.create({ name: 'Gómez Plata', code: '05310', department_id: 2 });
    await City.create({ name: 'Granada', code: '05313', department_id: 2 });
    await City.create({ name: 'Guadalupe', code: '05315', department_id: 2 });
    await City.create({ name: 'Guarne', code: '05318', department_id: 2 });
    await City.create({ name: 'Guatape', code: '05321', department_id: 2 });
    await City.create({ name: 'Heliconia', code: '05347', department_id: 2 });
    await City.create({ name: 'Hispania', code: '05353', department_id: 2 });
    await City.create({ name: 'Itagui', code: '05360', department_id: 2 });
    await City.create({ name: 'Ituango', code: '05361', department_id: 2 });
    await City.create({ name: 'Jardín', code: '05364', department_id: 2 });
    await City.create({ name: 'Jericó', code: '05368', department_id: 2 });
    await City.create({ name: 'La Ceja', code: '05376', department_id: 2 });
    await City.create({ name: 'La Estrella', code: '05380', department_id: 2 });
    await City.create({ name: 'La Pintada', code: '05390', department_id: 2 });
    await City.create({ name: 'La Unión', code: '05400', department_id: 2 });
    await City.create({ name: 'Liborina', code: '05411', department_id: 2 });
    await City.create({ name: 'Maceo', code: '05425', department_id: 2 });
    await City.create({ name: 'Marinilla', code: '05440', department_id: 2 });
    await City.create({ name: 'Montebello', code: '05467', department_id: 2 });
    await City.create({ name: 'Murindó', code: '05475', department_id: 2 });
    await City.create({ name: 'Mutatá', code: '05480', department_id: 2 });
    await City.create({ name: 'Nariño', code: '05483', department_id: 2 });
    await City.create({ name: 'Necoclí', code: '05490', department_id: 2 });
    await City.create({ name: 'Nechí', code: '05495', department_id: 2 });
    await City.create({ name: 'Olaya', code: '05501', department_id: 2 });
    await City.create({ name: 'Peñol', code: '05541', department_id: 2 });
    await City.create({ name: 'Peque', code: '05543', department_id: 2 });
    await City.create({ name: 'Pueblorrico', code: '05576', department_id: 2 });
    await City.create({ name: 'Puerto Berrío', code: '05579', department_id: 2 });
    await City.create({ name: 'Puerto Nare', code: '05585', department_id: 2 });
    await City.create({ name: 'Puerto Triunfo', code: '05591', department_id: 2 });
    await City.create({ name: 'Remedios', code: '05604', department_id: 2 });
    await City.create({ name: 'Retiro', code: '05607', department_id: 2 });
    await City.create({ name: 'Rionegro', code: '05615', department_id: 2 });
    await City.create({ name: 'Sabanalarga', code: '05628', department_id: 2 });
    await City.create({ name: 'Sabaneta', code: '05631', department_id: 2 });
    await City.create({ name: 'Salgar', code: '05642', department_id: 2 });
    await City.create({ name: 'San Andrés De Cuerquía', code: '05647', department_id: 2 });
    await City.create({ name: 'San Carlos', code: '05649', department_id: 2 });
    await City.create({ name: 'San Francisco', code: '05652', department_id: 2 });
    await City.create({ name: 'San Jerónimo', code: '05656', department_id: 2 });
    await City.create({ name: 'San José De La Montaña', code: '05658', department_id: 2 });
    await City.create({ name: 'San Juan De Urabá', code: '05659', department_id: 2 });
    await City.create({ name: 'San Luis', code: '05660', department_id: 2 });
    await City.create({ name: 'San Pedro De Los Milagros', code: '05664', department_id: 2 });
    await City.create({ name: 'San Pedro De Uraba', code: '05665', department_id: 2 });
    await City.create({ name: 'San Rafael', code: '05667', department_id: 2 });
    await City.create({ name: 'San Roque', code: '05670', department_id: 2 });
    await City.create({ name: 'San Vicente', code: '05674', department_id: 2 });
    await City.create({ name: 'Santa Bárbara', code: '05679', department_id: 2 });
    await City.create({ name: 'Santa Rosa De Osos', code: '05686', department_id: 2 });
    await City.create({ name: 'Santo Domingo', code: '05690', department_id: 2 });
    await City.create({ name: 'El Santuario', code: '05697', department_id: 2 });
    await City.create({ name: 'Segovia', code: '05736', department_id: 2 });
    await City.create({ name: 'Sonson', code: '05756', department_id: 2 });
    await City.create({ name: 'Sopetrán', code: '05761', department_id: 2 });
    await City.create({ name: 'Támesis', code: '05789', department_id: 2 });
    await City.create({ name: 'Tarazá', code: '05790', department_id: 2 });
    await City.create({ name: 'Tarso', code: '05792', department_id: 2 });
    await City.create({ name: 'Titiribí', code: '05809', department_id: 2 });
    await City.create({ name: 'Toledo', code: '05819', department_id: 2 });
    await City.create({ name: 'Turbo', code: '05837', department_id: 2 });
    await City.create({ name: 'Uramita', code: '05842', department_id: 2 });
    await City.create({ name: 'Urrao', code: '05847', department_id: 2 });
    await City.create({ name: 'Valdivia', code: '05854', department_id: 2 });
    await City.create({ name: 'Valparaíso', code: '05856', department_id: 2 });
    await City.create({ name: 'Vegachí', code: '05858', department_id: 2 });
    await City.create({ name: 'Venecia', code: '05861', department_id: 2 });
    await City.create({ name: 'Vigía Del Fuerte', code: '05873', department_id: 2 });
    await City.create({ name: 'Yalí', code: '05885', department_id: 2 });
    await City.create({ name: 'Yarumal', code: '05887', department_id: 2 });
    await City.create({ name: 'Yolombó', code: '05890', department_id: 2 });
    await City.create({ name: 'Yondó', code: '05893', department_id: 2 });
    await City.create({ name: 'Zaragoza', code: '05895', department_id: 2 });
    await City.create({ name: 'Arauca', code: '81001', department_id: 3 });
    await City.create({ name: 'Arauquita', code: '81065', department_id: 3 });
    await City.create({ name: 'Cravo Norte', code: '81220', department_id: 3 });
    await City.create({ name: 'Fortul', code: '81300', department_id: 3 });
    await City.create({ name: 'Puerto Rondón', code: '81591', department_id: 3 });
    await City.create({ name: 'Saravena', code: '81736', department_id: 3 });
    await City.create({ name: 'Tame', code: '81794', department_id: 3 });
    await City.create({ name: 'Barranquilla', code: '08001', department_id: 5 });
    await City.create({ name: 'Baranoa', code: '08078', department_id: 5 });
    await City.create({ name: 'Campo De La Cruz', code: '08137', department_id: 5 });
    await City.create({ name: 'Candelaria', code: '08141', department_id: 5 });
    await City.create({ name: 'Galapa', code: '08296', department_id: 5 });
    await City.create({ name: 'Juan De Acosta', code: '08372', department_id: 5 });
    await City.create({ name: 'Luruaco', code: '08421', department_id: 5 });
    await City.create({ name: 'Malambo', code: '08433', department_id: 5 });
    await City.create({ name: 'Manatí', code: '08436', department_id: 5 });
    await City.create({ name: 'Palmar De Varela', code: '08520', department_id: 5 });
    await City.create({ name: 'Piojó', code: '08549', department_id: 5 });
    await City.create({ name: 'Polonuevo', code: '08558', department_id: 5 });
    await City.create({ name: 'Ponedera', code: '08560', department_id: 5 });
    await City.create({ name: 'Puerto Colombia', code: '08573', department_id: 5 });
    await City.create({ name: 'Repelón', code: '08606', department_id: 5 });
    await City.create({ name: 'Sabanagrande', code: '08634', department_id: 5 });
    await City.create({ name: 'Sabanalarga', code: '08638', department_id: 5 });
    await City.create({ name: 'Santa Lucía', code: '08675', department_id: 5 });
    await City.create({ name: 'Santo Tomás', code: '08685', department_id: 5 });
    await City.create({ name: 'Soledad', code: '08758', department_id: 5 });
    await City.create({ name: 'Suan', code: '08770', department_id: 5 });
    await City.create({ name: 'Tubará', code: '08832', department_id: 5 });
    await City.create({ name: 'Usiacurí', code: '08849', department_id: 5 });
    await City.create({ name: 'Bogotá, D.C.', code: '11001', department_id: 6 });
    await City.create({ name: 'Cartagena', code: '13001', department_id: 7 });
    await City.create({ name: 'Achí', code: '13006', department_id: 7 });
    await City.create({ name: 'Altos Del Rosario', code: '13030', department_id: 7 });
    await City.create({ name: 'Arenal', code: '13042', department_id: 7 });
    await City.create({ name: 'Arjona', code: '13052', department_id: 7 });
    await City.create({ name: 'Arroyohondo', code: '13062', department_id: 7 });
    await City.create({ name: 'Barranco De Loba', code: '13074', department_id: 7 });
    await City.create({ name: 'Calamar', code: '13140', department_id: 7 });
    await City.create({ name: 'Cantagallo', code: '13160', department_id: 7 });
    await City.create({ name: 'Cicuco', code: '13188', department_id: 7 });
    await City.create({ name: 'Córdoba', code: '13212', department_id: 7 });
    await City.create({ name: 'Clemencia', code: '13222', department_id: 7 });
    await City.create({ name: 'El Carmen De Bolívar', code: '13244', department_id: 7 });
    await City.create({ name: 'El Guamo', code: '13248', department_id: 7 });
    await City.create({ name: 'El Peñón', code: '13268', department_id: 7 });
    await City.create({ name: 'Hatillo De Loba', code: '13300', department_id: 7 });
    await City.create({ name: 'Magangué', code: '13430', department_id: 7 });
    await City.create({ name: 'Mahates', code: '13433', department_id: 7 });
    await City.create({ name: 'Margarita', code: '13440', department_id: 7 });
    await City.create({ name: 'María La Baja', code: '13442', department_id: 7 });
    await City.create({ name: 'Montecristo', code: '13458', department_id: 7 });
    await City.create({ name: 'Mompós', code: '13468', department_id: 7 });
    await City.create({ name: 'Morales', code: '13473', department_id: 7 });
    await City.create({ name: 'Norosí', code: '13490', department_id: 7 });
    await City.create({ name: 'Pinillos', code: '13549', department_id: 7 });
    await City.create({ name: 'Regidor', code: '13580', department_id: 7 });
    await City.create({ name: 'Río Viejo', code: '13600', department_id: 7 });
    await City.create({ name: 'San Cristóbal', code: '13620', department_id: 7 });
    await City.create({ name: 'San Estanislao', code: '13647', department_id: 7 });
    await City.create({ name: 'San Fernando', code: '13650', department_id: 7 });
    await City.create({ name: 'San Jacinto', code: '13654', department_id: 7 });
    await City.create({ name: 'San Jacinto Del Cauca', code: '13655', department_id: 7 });
    await City.create({ name: 'San Juan Nepomuceno', code: '13657', department_id: 7 });
    await City.create({ name: 'San Martín De Loba', code: '13667', department_id: 7 });
    await City.create({ name: 'San Pablo', code: '13670', department_id: 7 });
    await City.create({ name: 'Santa Catalina', code: '13673', department_id: 7 });
    await City.create({ name: 'Santa Rosa', code: '13683', department_id: 7 });
    await City.create({ name: 'Santa Rosa Del Sur', code: '13688', department_id: 7 });
    await City.create({ name: 'Simití', code: '13744', department_id: 7 });
    await City.create({ name: 'Soplaviento', code: '13760', department_id: 7 });
    await City.create({ name: 'Talaigua Nuevo', code: '13780', department_id: 7 });
    await City.create({ name: 'Tiquisio', code: '13810', department_id: 7 });
    await City.create({ name: 'Turbaco', code: '13836', department_id: 7 });
    await City.create({ name: 'Turbaná', code: '13838', department_id: 7 });
    await City.create({ name: 'Villanueva', code: '13873', department_id: 7 });
    await City.create({ name: 'Zambrano', code: '13894', department_id: 7 });
    await City.create({ name: 'Tunja', code: '15001', department_id: 8 });
    await City.create({ name: 'Almeida', code: '15022', department_id: 8 });
    await City.create({ name: 'Aquitania', code: '15047', department_id: 8 });
    await City.create({ name: 'Arcabuco', code: '15051', department_id: 8 });
    await City.create({ name: 'Belén', code: '15087', department_id: 8 });
    await City.create({ name: 'Berbeo', code: '15090', department_id: 8 });
    await City.create({ name: 'Betéitiva', code: '15092', department_id: 8 });
    await City.create({ name: 'Boavita', code: '15097', department_id: 8 });
    await City.create({ name: 'Boyacá', code: '15104', department_id: 8 });
    await City.create({ name: 'Briceño', code: '15106', department_id: 8 });
    await City.create({ name: 'Buenavista', code: '15109', department_id: 8 });
    await City.create({ name: 'Busbanzá', code: '15114', department_id: 8 });
    await City.create({ name: 'Caldas', code: '15131', department_id: 8 });
    await City.create({ name: 'Campohermoso', code: '15135', department_id: 8 });
    await City.create({ name: 'Cerinza', code: '15162', department_id: 8 });
    await City.create({ name: 'Chinavita', code: '15172', department_id: 8 });
    await City.create({ name: 'Chiquinquirá', code: '15176', department_id: 8 });
    await City.create({ name: 'Chiscas', code: '15180', department_id: 8 });
    await City.create({ name: 'Chita', code: '15183', department_id: 8 });
    await City.create({ name: 'Chitaraque', code: '15185', department_id: 8 });
    await City.create({ name: 'Chivatá', code: '15187', department_id: 8 });
    await City.create({ name: 'Ciénega', code: '15189', department_id: 8 });
    await City.create({ name: 'Cómbita', code: '15204', department_id: 8 });
    await City.create({ name: 'Coper', code: '15212', department_id: 8 });
    await City.create({ name: 'Corrales', code: '15215', department_id: 8 });
    await City.create({ name: 'Covarachía', code: '15218', department_id: 8 });
    await City.create({ name: 'Cubará', code: '15223', department_id: 8 });
    await City.create({ name: 'Cucaita', code: '15224', department_id: 8 });
    await City.create({ name: 'Cuítiva', code: '15226', department_id: 8 });
    await City.create({ name: 'Chíquiza', code: '15232', department_id: 8 });
    await City.create({ name: 'Chivor', code: '15236', department_id: 8 });
    await City.create({ name: 'Duitama', code: '15238', department_id: 8 });
    await City.create({ name: 'El Cocuy', code: '15244', department_id: 8 });
    await City.create({ name: 'El Espino', code: '15248', department_id: 8 });
    await City.create({ name: 'Firavitoba', code: '15272', department_id: 8 });
    await City.create({ name: 'Floresta', code: '15276', department_id: 8 });
    await City.create({ name: 'Gachantivá', code: '15293', department_id: 8 });
    await City.create({ name: 'Gameza', code: '15296', department_id: 8 });
    await City.create({ name: 'Garagoa', code: '15299', department_id: 8 });
    await City.create({ name: 'Guacamayas', code: '15317', department_id: 8 });
    await City.create({ name: 'Guateque', code: '15322', department_id: 8 });
    await City.create({ name: 'Guayatá', code: '15325', department_id: 8 });
    await City.create({ name: 'Güicán', code: '15332', department_id: 8 });
    await City.create({ name: 'Iza', code: '15362', department_id: 8 });
    await City.create({ name: 'Jenesano', code: '15367', department_id: 8 });
    await City.create({ name: 'Jericó', code: '15368', department_id: 8 });
    await City.create({ name: 'Labranzagrande', code: '15377', department_id: 8 });
    await City.create({ name: 'La Capilla', code: '15380', department_id: 8 });
    await City.create({ name: 'La Victoria', code: '15401', department_id: 8 });
    await City.create({ name: 'La Uvita', code: '15403', department_id: 8 });
    await City.create({ name: 'Villa De Leyva', code: '15407', department_id: 8 });
    await City.create({ name: 'Macanal', code: '15425', department_id: 8 });
    await City.create({ name: 'Maripí', code: '15442', department_id: 8 });
    await City.create({ name: 'Miraflores', code: '15455', department_id: 8 });
    await City.create({ name: 'Mongua', code: '15464', department_id: 8 });
    await City.create({ name: 'Monguí', code: '15466', department_id: 8 });
    await City.create({ name: 'Moniquirá', code: '15469', department_id: 8 });
    await City.create({ name: 'Motavita', code: '15476', department_id: 8 });
    await City.create({ name: 'Muzo', code: '15480', department_id: 8 });
    await City.create({ name: 'Nobsa', code: '15491', department_id: 8 });
    await City.create({ name: 'Nuevo Colón', code: '15494', department_id: 8 });
    await City.create({ name: 'Oicatá', code: '15500', department_id: 8 });
    await City.create({ name: 'Otanche', code: '15507', department_id: 8 });
    await City.create({ name: 'Pachavita', code: '15511', department_id: 8 });
    await City.create({ name: 'Páez', code: '15514', department_id: 8 });
    await City.create({ name: 'Paipa', code: '15516', department_id: 8 });
    await City.create({ name: 'Pajarito', code: '15518', department_id: 8 });
    await City.create({ name: 'Panqueba', code: '15522', department_id: 8 });
    await City.create({ name: 'Pauna', code: '15531', department_id: 8 });
    await City.create({ name: 'Paya', code: '15533', department_id: 8 });
    await City.create({ name: 'Paz De Río', code: '15537', department_id: 8 });
    await City.create({ name: 'Pesca', code: '15542', department_id: 8 });
    await City.create({ name: 'Pisba', code: '15550', department_id: 8 });
    await City.create({ name: 'Puerto Boyacá', code: '15572', department_id: 8 });
    await City.create({ name: 'Quípama', code: '15580', department_id: 8 });
    await City.create({ name: 'Ramiriquí', code: '15599', department_id: 8 });
    await City.create({ name: 'Ráquira', code: '15600', department_id: 8 });
    await City.create({ name: 'Rondón', code: '15621', department_id: 8 });
    await City.create({ name: 'Saboyá', code: '15632', department_id: 8 });
    await City.create({ name: 'Sáchica', code: '15638', department_id: 8 });
    await City.create({ name: 'Samacá', code: '15646', department_id: 8 });
    await City.create({ name: 'San Eduardo', code: '15660', department_id: 8 });
    await City.create({ name: 'San José De Pare', code: '15664', department_id: 8 });
    await City.create({ name: 'San Luis De Gaceno', code: '15667', department_id: 8 });
    await City.create({ name: 'San Mateo', code: '15673', department_id: 8 });
    await City.create({ name: 'San Miguel De Sema', code: '15676', department_id: 8 });
    await City.create({ name: 'San Pablo De Borbur', code: '15681', department_id: 8 });
    await City.create({ name: 'Santana', code: '15686', department_id: 8 });
    await City.create({ name: 'Santa María', code: '15690', department_id: 8 });
    await City.create({ name: 'Santa Rosa De Viterbo', code: '15693', department_id: 8 });
    await City.create({ name: 'Santa Sofía', code: '15696', department_id: 8 });
    await City.create({ name: 'Sativanorte', code: '15720', department_id: 8 });
    await City.create({ name: 'Sativasur', code: '15723', department_id: 8 });
    await City.create({ name: 'Siachoque', code: '15740', department_id: 8 });
    await City.create({ name: 'Soatá', code: '15753', department_id: 8 });
    await City.create({ name: 'Socotá', code: '15755', department_id: 8 });
    await City.create({ name: 'Socha', code: '15757', department_id: 8 });
    await City.create({ name: 'Sogamoso', code: '15759', department_id: 8 });
    await City.create({ name: 'Somondoco', code: '15761', department_id: 8 });
    await City.create({ name: 'Sora', code: '15762', department_id: 8 });
    await City.create({ name: 'Sotaquirá', code: '15763', department_id: 8 });
    await City.create({ name: 'Soracá', code: '15764', department_id: 8 });
    await City.create({ name: 'Susacón', code: '15774', department_id: 8 });
    await City.create({ name: 'Sutamarchán', code: '15776', department_id: 8 });
    await City.create({ name: 'Sutatenza', code: '15778', department_id: 8 });
    await City.create({ name: 'Tasco', code: '15790', department_id: 8 });
    await City.create({ name: 'Tenza', code: '15798', department_id: 8 });
    await City.create({ name: 'Tibaná', code: '15804', department_id: 8 });
    await City.create({ name: 'Tibasosa', code: '15806', department_id: 8 });
    await City.create({ name: 'Tinjacá', code: '15808', department_id: 8 });
    await City.create({ name: 'Tipacoque', code: '15810', department_id: 8 });
    await City.create({ name: 'Toca', code: '15814', department_id: 8 });
    await City.create({ name: 'Togüí', code: '15816', department_id: 8 });
    await City.create({ name: 'Tópaga', code: '15820', department_id: 8 });
    await City.create({ name: 'Tota', code: '15822', department_id: 8 });
    await City.create({ name: 'Tununguá', code: '15832', department_id: 8 });
    await City.create({ name: 'Turmequé', code: '15835', department_id: 8 });
    await City.create({ name: 'Tuta', code: '15837', department_id: 8 });
    await City.create({ name: 'Tutazá', code: '15839', department_id: 8 });
    await City.create({ name: 'Umbita', code: '15842', department_id: 8 });
    await City.create({ name: 'Ventaquemada', code: '15861', department_id: 8 });
    await City.create({ name: 'Viracachá', code: '15879', department_id: 8 });
    await City.create({ name: 'Zetaquira', code: '15897', department_id: 8 });
    await City.create({ name: 'Manizales', code: '17001', department_id: 9 });
    await City.create({ name: 'Aguadas', code: '17013', department_id: 9 });
    await City.create({ name: 'Anserma', code: '17042', department_id: 9 });
    await City.create({ name: 'Aranzazu', code: '17050', department_id: 9 });
    await City.create({ name: 'Belalcázar', code: '17088', department_id: 9 });
    await City.create({ name: 'Chinchiná', code: '17174', department_id: 9 });
    await City.create({ name: 'Filadelfia', code: '17272', department_id: 9 });
    await City.create({ name: 'La Dorada', code: '17380', department_id: 9 });
    await City.create({ name: 'La Merced', code: '17388', department_id: 9 });
    await City.create({ name: 'Manzanares', code: '17433', department_id: 9 });
    await City.create({ name: 'Marmato', code: '17442', department_id: 9 });
    await City.create({ name: 'Marquetalia', code: '17444', department_id: 9 });
    await City.create({ name: 'Marulanda', code: '17446', department_id: 9 });
    await City.create({ name: 'Neira', code: '17486', department_id: 9 });
    await City.create({ name: 'Norcasia', code: '17495', department_id: 9 });
    await City.create({ name: 'Pácora', code: '17513', department_id: 9 });
    await City.create({ name: 'Palestina', code: '17524', department_id: 9 });
    await City.create({ name: 'Pensilvania', code: '17541', department_id: 9 });
    await City.create({ name: 'Riosucio', code: '17614', department_id: 9 });
    await City.create({ name: 'Risaralda', code: '17616', department_id: 9 });
    await City.create({ name: 'Salamina', code: '17653', department_id: 9 });
    await City.create({ name: 'Samaná', code: '17662', department_id: 9 });
    await City.create({ name: 'San José', code: '17665', department_id: 9 });
    await City.create({ name: 'Supía', code: '17777', department_id: 9 });
    await City.create({ name: 'Victoria', code: '17867', department_id: 9 });
    await City.create({ name: 'Villamaría', code: '17873', department_id: 9 });
    await City.create({ name: 'Viterbo', code: '17877', department_id: 9 });
    await City.create({ name: 'Florencia', code: '18001', department_id: 10 });
    await City.create({ name: 'Albania', code: '18029', department_id: 10 });
    await City.create({ name: 'Belén De Los Andaquíes', code: '18094', department_id: 10 });
    await City.create({ name: 'Cartagena Del Chairá', code: '18150', department_id: 10 });
    await City.create({ name: 'Curillo', code: '18205', department_id: 10 });
    await City.create({ name: 'El Doncello', code: '18247', department_id: 10 });
    await City.create({ name: 'El Paujil', code: '18256', department_id: 10 });
    await City.create({ name: 'La Montañita', code: '18410', department_id: 10 });
    await City.create({ name: 'Milán', code: '18460', department_id: 10 });
    await City.create({ name: 'Morelia', code: '18479', department_id: 10 });
    await City.create({ name: 'Puerto Rico', code: '18592', department_id: 10 });
    await City.create({ name: 'San José Del Fragua', code: '18610', department_id: 10 });
    await City.create({ name: 'San Vicente Del Caguán', code: '18753', department_id: 10 });
    await City.create({ name: 'Solano', code: '18756', department_id: 10 });
    await City.create({ name: 'Solita', code: '18785', department_id: 10 });
    await City.create({ name: 'Valparaíso', code: '18860', department_id: 10 });
    await City.create({ name: 'Yopal', code: '85001', department_id: 11 });
    await City.create({ name: 'Aguazul', code: '85010', department_id: 11 });
    await City.create({ name: 'Chameza', code: '85015', department_id: 11 });
    await City.create({ name: 'Hato Corozal', code: '85125', department_id: 11 });
    await City.create({ name: 'La Salina', code: '85136', department_id: 11 });
    await City.create({ name: 'Maní', code: '85139', department_id: 11 });
    await City.create({ name: 'Monterrey', code: '85162', department_id: 11 });
    await City.create({ name: 'Nunchía', code: '85225', department_id: 11 });
    await City.create({ name: 'Orocué', code: '85230', department_id: 11 });
    await City.create({ name: 'Paz De Ariporo', code: '85250', department_id: 11 });
    await City.create({ name: 'Pore', code: '85263', department_id: 11 });
    await City.create({ name: 'Recetor', code: '85279', department_id: 11 });
    await City.create({ name: 'Sabanalarga', code: '85300', department_id: 11 });
    await City.create({ name: 'Sácama', code: '85315', department_id: 11 });
    await City.create({ name: 'San Luis De Palenque', code: '85325', department_id: 11 });
    await City.create({ name: 'Támara', code: '85400', department_id: 11 });
    await City.create({ name: 'Tauramena', code: '85410', department_id: 11 });
    await City.create({ name: 'Trinidad', code: '85430', department_id: 11 });
    await City.create({ name: 'Villanueva', code: '85440', department_id: 11 });
    await City.create({ name: 'Popayán', code: '19001', department_id: 12 });
    await City.create({ name: 'Almaguer', code: '19022', department_id: 12 });
    await City.create({ name: 'Argelia', code: '19050', department_id: 12 });
    await City.create({ name: 'Balboa', code: '19075', department_id: 12 });
    await City.create({ name: 'Bolívar', code: '19100', department_id: 12 });
    await City.create({ name: 'Buenos Aires', code: '19110', department_id: 12 });
    await City.create({ name: 'Cajibío', code: '19130', department_id: 12 });
    await City.create({ name: 'Caldono', code: '19137', department_id: 12 });
    await City.create({ name: 'Caloto', code: '19142', department_id: 12 });
    await City.create({ name: 'Corinto', code: '19212', department_id: 12 });
    await City.create({ name: 'El Tambo', code: '19256', department_id: 12 });
    await City.create({ name: 'Florencia', code: '19290', department_id: 12 });
    await City.create({ name: 'Guachené', code: '19300', department_id: 12 });
    await City.create({ name: 'Guapi', code: '19318', department_id: 12 });
    await City.create({ name: 'Inzá', code: '19355', department_id: 12 });
    await City.create({ name: 'Jambaló', code: '19364', department_id: 12 });
    await City.create({ name: 'La Sierra', code: '19392', department_id: 12 });
    await City.create({ name: 'La Vega', code: '19397', department_id: 12 });
    await City.create({ name: 'López', code: '19418', department_id: 12 });
    await City.create({ name: 'Mercaderes', code: '19450', department_id: 12 });
    await City.create({ name: 'Miranda', code: '19455', department_id: 12 });
    await City.create({ name: 'Morales', code: '19473', department_id: 12 });
    await City.create({ name: 'Padilla', code: '19513', department_id: 12 });
    await City.create({ name: 'Paez', code: '19517', department_id: 12 });
    await City.create({ name: 'Patía', code: '19532', department_id: 12 });
    await City.create({ name: 'Piamonte', code: '19533', department_id: 12 });
    await City.create({ name: 'Piendamó', code: '19548', department_id: 12 });
    await City.create({ name: 'Puerto Tejada', code: '19573', department_id: 12 });
    await City.create({ name: 'Puracé', code: '19585', department_id: 12 });
    await City.create({ name: 'Rosas', code: '19622', department_id: 12 });
    await City.create({ name: 'San Sebastián', code: '19693', department_id: 12 });
    await City.create({ name: 'Santander De Quilichao', code: '19698', department_id: 12 });
    await City.create({ name: 'Santa Rosa', code: '19701', department_id: 12 });
    await City.create({ name: 'Silvia', code: '19743', department_id: 12 });
    await City.create({ name: 'Sotara', code: '19760', department_id: 12 });
    await City.create({ name: 'Suárez', code: '19780', department_id: 12 });
    await City.create({ name: 'Sucre', code: '19785', department_id: 12 });
    await City.create({ name: 'Timbío', code: '19807', department_id: 12 });
    await City.create({ name: 'Timbiquí', code: '19809', department_id: 12 });
    await City.create({ name: 'Toribio', code: '19821', department_id: 12 });
    await City.create({ name: 'Totoró', code: '19824', department_id: 12 });
    await City.create({ name: 'Villa Rica', code: '19845', department_id: 12 });
    await City.create({ name: 'Valledupar', code: '20001', department_id: 13 });
    await City.create({ name: 'Aguachica', code: '20011', department_id: 13 });
    await City.create({ name: 'Agustín Codazzi', code: '20013', department_id: 13 });
    await City.create({ name: 'Astrea', code: '20032', department_id: 13 });
    await City.create({ name: 'Becerril', code: '20045', department_id: 13 });
    await City.create({ name: 'Bosconia', code: '20060', department_id: 13 });
    await City.create({ name: 'Chimichagua', code: '20175', department_id: 13 });
    await City.create({ name: 'Chiriguaná', code: '20178', department_id: 13 });
    await City.create({ name: 'Curumaní', code: '20228', department_id: 13 });
    await City.create({ name: 'El Copey', code: '20238', department_id: 13 });
    await City.create({ name: 'El Paso', code: '20250', department_id: 13 });
    await City.create({ name: 'Gamarra', code: '20295', department_id: 13 });
    await City.create({ name: 'González', code: '20310', department_id: 13 });
    await City.create({ name: 'La Gloria', code: '20383', department_id: 13 });
    await City.create({ name: 'La Jagua De Ibirico', code: '20400', department_id: 13 });
    await City.create({ name: 'Manaure', code: '20443', department_id: 13 });
    await City.create({ name: 'Pailitas', code: '20517', department_id: 13 });
    await City.create({ name: 'Pelaya', code: '20550', department_id: 13 });
    await City.create({ name: 'Pueblo Bello', code: '20570', department_id: 13 });
    await City.create({ name: 'Río De Oro', code: '20614', department_id: 13 });
    await City.create({ name: 'La Paz', code: '20621', department_id: 13 });
    await City.create({ name: 'San Alberto', code: '20710', department_id: 13 });
    await City.create({ name: 'San Diego', code: '20750', department_id: 13 });
    await City.create({ name: 'San Martín', code: '20770', department_id: 13 });
    await City.create({ name: 'Tamalameque', code: '20787', department_id: 13 });
    await City.create({ name: 'Quibdó', code: '27001', department_id: 14 });
    await City.create({ name: 'Acandí', code: '27006', department_id: 14 });
    await City.create({ name: 'Alto Baudó', code: '27025', department_id: 14 });
    await City.create({ name: 'Atrato', code: '27050', department_id: 14 });
    await City.create({ name: 'Bagadó', code: '27073', department_id: 14 });
    await City.create({ name: 'Bahía Solano', code: '27075', department_id: 14 });
    await City.create({ name: 'Bajo Baudó', code: '27077', department_id: 14 });
    await City.create({ name: 'Belén de bajirá', code: '27086', department_id: 14 });
    await City.create({ name: 'Bojaya', code: '27099', department_id: 14 });
    await City.create({ name: 'El Cantón Del San Pablo', code: '27135', department_id: 14 });
    await City.create({ name: 'Carmen Del Darién', code: '27150', department_id: 14 });
    await City.create({ name: 'Cértegui', code: '27160', department_id: 14 });
    await City.create({ name: 'Condoto', code: '27205', department_id: 14 });
    await City.create({ name: 'El Carmen De Atrato', code: '27245', department_id: 14 });
    await City.create({ name: 'El Litoral Del San Juan', code: '27250', department_id: 14 });
    await City.create({ name: 'Istmina', code: '27361', department_id: 14 });
    await City.create({ name: 'Juradó', code: '27372', department_id: 14 });
    await City.create({ name: 'Lloró', code: '27413', department_id: 14 });
    await City.create({ name: 'Medio Atrato', code: '27425', department_id: 14 });
    await City.create({ name: 'Medio Baudó', code: '27430', department_id: 14 });
    await City.create({ name: 'Medio San Juan', code: '27450', department_id: 14 });
    await City.create({ name: 'Nóvita', code: '27491', department_id: 14 });
    await City.create({ name: 'Nuquí', code: '27495', department_id: 14 });
    await City.create({ name: 'Río Iró', code: '27580', department_id: 14 });
    await City.create({ name: 'Río Quito', code: '27600', department_id: 14 });
    await City.create({ name: 'Riosucio', code: '27615', department_id: 14 });
    await City.create({ name: 'San José Del Palmar', code: '27660', department_id: 14 });
    await City.create({ name: 'Sipí', code: '27745', department_id: 14 });
    await City.create({ name: 'Tadó', code: '27787', department_id: 14 });
    await City.create({ name: 'Unguía', code: '27800', department_id: 14 });
    await City.create({ name: 'Unión Panamericana', code: '27810', department_id: 14 });
    await City.create({ name: 'Montería', code: '23001', department_id: 15 });
    await City.create({ name: 'Ayapel', code: '23068', department_id: 15 });
    await City.create({ name: 'Buenavista', code: '23079', department_id: 15 });
    await City.create({ name: 'Canalete', code: '23090', department_id: 15 });
    await City.create({ name: 'Cereté', code: '23162', department_id: 15 });
    await City.create({ name: 'Chimá', code: '23168', department_id: 15 });
    await City.create({ name: 'Chinú', code: '23182', department_id: 15 });
    await City.create({ name: 'Ciénaga De Oro', code: '23189', department_id: 15 });
    await City.create({ name: 'Cotorra', code: '23300', department_id: 15 });
    await City.create({ name: 'La Apartada', code: '23350', department_id: 15 });
    await City.create({ name: 'Lorica', code: '23417', department_id: 15 });
    await City.create({ name: 'Los Córdobas', code: '23419', department_id: 15 });
    await City.create({ name: 'Momil', code: '23464', department_id: 15 });
    await City.create({ name: 'Montelíbano', code: '23466', department_id: 15 });
    await City.create({ name: 'Moñitos', code: '23500', department_id: 15 });
    await City.create({ name: 'Planeta Rica', code: '23555', department_id: 15 });
    await City.create({ name: 'Pueblo Nuevo', code: '23570', department_id: 15 });
    await City.create({ name: 'Puerto Escondido', code: '23574', department_id: 15 });
    await City.create({ name: 'Puerto Libertador', code: '23580', department_id: 15 });
    await City.create({ name: 'Purísima', code: '23586', department_id: 15 });
    await City.create({ name: 'Sahagún', code: '23660', department_id: 15 });
    await City.create({ name: 'San Andrés Sotavento', code: '23670', department_id: 15 });
    await City.create({ name: 'San Antero', code: '23672', department_id: 15 });
    await City.create({ name: 'San Bernardo Del Viento', code: '23675', department_id: 15 });
    await City.create({ name: 'San Carlos', code: '23678', department_id: 15 });
    await City.create({ name: 'San José De Uré', code: '23682', department_id: 15 });
    await City.create({ name: 'San Pelayo', code: '23686', department_id: 15 });
    await City.create({ name: 'Tierralta', code: '23807', department_id: 15 });
    await City.create({ name: 'Tuchín', code: '23815', department_id: 15 });
    await City.create({ name: 'Valencia', code: '23855', department_id: 15 });
    await City.create({ name: 'Agua De Dios', code: '25001', department_id: 16 });
    await City.create({ name: 'Albán', code: '25019', department_id: 16 });
    await City.create({ name: 'Anapoima', code: '25035', department_id: 16 });
    await City.create({ name: 'Anolaima', code: '25040', department_id: 16 });
    await City.create({ name: 'Arbeláez', code: '25053', department_id: 16 });
    await City.create({ name: 'Beltrán', code: '25086', department_id: 16 });
    await City.create({ name: 'Bituima', code: '25095', department_id: 16 });
    await City.create({ name: 'Bojacá', code: '25099', department_id: 16 });
    await City.create({ name: 'Cabrera', code: '25120', department_id: 16 });
    await City.create({ name: 'Cachipay', code: '25123', department_id: 16 });
    await City.create({ name: 'Cajicá', code: '25126', department_id: 16 });
    await City.create({ name: 'Caparrapí', code: '25148', department_id: 16 });
    await City.create({ name: 'Caqueza', code: '25151', department_id: 16 });
    await City.create({ name: 'Carmen De Carupa', code: '25154', department_id: 16 });
    await City.create({ name: 'Chaguaní', code: '25168', department_id: 16 });
    await City.create({ name: 'Chía', code: '25175', department_id: 16 });
    await City.create({ name: 'Chipaque', code: '25178', department_id: 16 });
    await City.create({ name: 'Choachí', code: '25181', department_id: 16 });
    await City.create({ name: 'Chocontá', code: '25183', department_id: 16 });
    await City.create({ name: 'Cogua', code: '25200', department_id: 16 });
    await City.create({ name: 'Cota', code: '25214', department_id: 16 });
    await City.create({ name: 'Cucunubá', code: '25224', department_id: 16 });
    await City.create({ name: 'El Colegio', code: '25245', department_id: 16 });
    await City.create({ name: 'El Peñón', code: '25258', department_id: 16 });
    await City.create({ name: 'El Rosal', code: '25260', department_id: 16 });
    await City.create({ name: 'Facatativá', code: '25269', department_id: 16 });
    await City.create({ name: 'Fomeque', code: '25279', department_id: 16 });
    await City.create({ name: 'Fosca', code: '25281', department_id: 16 });
    await City.create({ name: 'Funza', code: '25286', department_id: 16 });
    await City.create({ name: 'Fúquene', code: '25288', department_id: 16 });
    await City.create({ name: 'Fusagasugá', code: '25290', department_id: 16 });
    await City.create({ name: 'Gachala', code: '25293', department_id: 16 });
    await City.create({ name: 'Gachancipá', code: '25295', department_id: 16 });
    await City.create({ name: 'Gachetá', code: '25297', department_id: 16 });
    await City.create({ name: 'Gama', code: '25299', department_id: 16 });
    await City.create({ name: 'Girardot', code: '25307', department_id: 16 });
    await City.create({ name: 'Granada', code: '25312', department_id: 16 });
    await City.create({ name: 'Guachetá', code: '25317', department_id: 16 });
    await City.create({ name: 'Guaduas', code: '25320', department_id: 16 });
    await City.create({ name: 'Guasca', code: '25322', department_id: 16 });
    await City.create({ name: 'Guataquí', code: '25324', department_id: 16 });
    await City.create({ name: 'Guatavita', code: '25326', department_id: 16 });
    await City.create({ name: 'Guayabal De Siquima', code: '25328', department_id: 16 });
    await City.create({ name: 'Guayabetal', code: '25335', department_id: 16 });
    await City.create({ name: 'Gutiérrez', code: '25339', department_id: 16 });
    await City.create({ name: 'Jerusalén', code: '25368', department_id: 16 });
    await City.create({ name: 'Junín', code: '25372', department_id: 16 });
    await City.create({ name: 'La Calera', code: '25377', department_id: 16 });
    await City.create({ name: 'La Mesa', code: '25386', department_id: 16 });
    await City.create({ name: 'La Palma', code: '25394', department_id: 16 });
    await City.create({ name: 'La Peña', code: '25398', department_id: 16 });
    await City.create({ name: 'La Vega', code: '25402', department_id: 16 });
    await City.create({ name: 'Lenguazaque', code: '25407', department_id: 16 });
    await City.create({ name: 'Macheta', code: '25426', department_id: 16 });
    await City.create({ name: 'Madrid', code: '25430', department_id: 16 });
    await City.create({ name: 'Manta', code: '25436', department_id: 16 });
    await City.create({ name: 'Medina', code: '25438', department_id: 16 });
    await City.create({ name: 'Mosquera', code: '25473', department_id: 16 });
    await City.create({ name: 'Nariño', code: '25483', department_id: 16 });
    await City.create({ name: 'Nemocón', code: '25486', department_id: 16 });
    await City.create({ name: 'Nilo', code: '25488', department_id: 16 });
    await City.create({ name: 'Nimaima', code: '25489', department_id: 16 });
    await City.create({ name: 'Nocaima', code: '25491', department_id: 16 });
    await City.create({ name: 'Venecia', code: '25506', department_id: 16 });
    await City.create({ name: 'Pacho', code: '25513', department_id: 16 });
    await City.create({ name: 'Paime', code: '25518', department_id: 16 });
    await City.create({ name: 'Pandi', code: '25524', department_id: 16 });
    await City.create({ name: 'Paratebueno', code: '25530', department_id: 16 });
    await City.create({ name: 'Pasca', code: '25535', department_id: 16 });
    await City.create({ name: 'Puerto Salgar', code: '25572', department_id: 16 });
    await City.create({ name: 'Pulí', code: '25580', department_id: 16 });
    await City.create({ name: 'Quebradanegra', code: '25592', department_id: 16 });
    await City.create({ name: 'Quetame', code: '25594', department_id: 16 });
    await City.create({ name: 'Quipile', code: '25596', department_id: 16 });
    await City.create({ name: 'Apulo', code: '25599', department_id: 16 });
    await City.create({ name: 'Ricaurte', code: '25612', department_id: 16 });
    await City.create({ name: 'San Antonio Del Tequendama', code: '25645', department_id: 16 });
    await City.create({ name: 'San Bernardo', code: '25649', department_id: 16 });
    await City.create({ name: 'San Cayetano', code: '25653', department_id: 16 });
    await City.create({ name: 'San Francisco', code: '25658', department_id: 16 });
    await City.create({ name: 'San Juan De Río Seco', code: '25662', department_id: 16 });
    await City.create({ name: 'Sasaima', code: '25718', department_id: 16 });
    await City.create({ name: 'Sesquilé', code: '25736', department_id: 16 });
    await City.create({ name: 'Sibaté', code: '25740', department_id: 16 });
    await City.create({ name: 'Silvania', code: '25743', department_id: 16 });
    await City.create({ name: 'Simijaca', code: '25745', department_id: 16 });
    await City.create({ name: 'Soacha', code: '25754', department_id: 16 });
    await City.create({ name: 'Sopó', code: '25758', department_id: 16 });
    await City.create({ name: 'Subachoque', code: '25769', department_id: 16 });
    await City.create({ name: 'Suesca', code: '25772', department_id: 16 });
    await City.create({ name: 'Supatá', code: '25777', department_id: 16 });
    await City.create({ name: 'Susa', code: '25779', department_id: 16 });
    await City.create({ name: 'Sutatausa', code: '25781', department_id: 16 });
    await City.create({ name: 'Tabio', code: '25785', department_id: 16 });
    await City.create({ name: 'Tausa', code: '25793', department_id: 16 });
    await City.create({ name: 'Tena', code: '25797', department_id: 16 });
    await City.create({ name: 'Tenjo', code: '25799', department_id: 16 });
    await City.create({ name: 'Tibacuy', code: '25805', department_id: 16 });
    await City.create({ name: 'Tibirita', code: '25807', department_id: 16 });
    await City.create({ name: 'Tocaima', code: '25815', department_id: 16 });
    await City.create({ name: 'Tocancipá', code: '25817', department_id: 16 });
    await City.create({ name: 'Topaipí', code: '25823', department_id: 16 });
    await City.create({ name: 'Ubalá', code: '25839', department_id: 16 });
    await City.create({ name: 'Ubaque', code: '25841', department_id: 16 });
    await City.create({ name: 'Villa De San Diego De Ubate', code: '25843', department_id: 16 });
    await City.create({ name: 'Une', code: '25845', department_id: 16 });
    await City.create({ name: 'Útica', code: '25851', department_id: 16 });
    await City.create({ name: 'Vergara', code: '25862', department_id: 16 });
    await City.create({ name: 'Vianí', code: '25867', department_id: 16 });
    await City.create({ name: 'Villagómez', code: '25871', department_id: 16 });
    await City.create({ name: 'Villapinzón', code: '25873', department_id: 16 });
    await City.create({ name: 'Villeta', code: '25875', department_id: 16 });
    await City.create({ name: 'Viotá', code: '25878', department_id: 16 });
    await City.create({ name: 'Yacopí', code: '25885', department_id: 16 });
    await City.create({ name: 'Zipacón', code: '25898', department_id: 16 });
    await City.create({ name: 'Zipaquirá', code: '25899', department_id: 16 });
    await City.create({ name: 'Inírida', code: '94001', department_id: 17 });
    await City.create({ name: 'Barranco Minas', code: '94343', department_id: 17 });
    await City.create({ name: 'Mapiripana', code: '94663', department_id: 17 });
    await City.create({ name: 'San Felipe', code: '94883', department_id: 17 });
    await City.create({ name: 'Puerto Colombia', code: '94884', department_id: 17 });
    await City.create({ name: 'La Guadalupe', code: '94885', department_id: 17 });
    await City.create({ name: 'Cacahual', code: '94886', department_id: 17 });
    await City.create({ name: 'Pana Pana', code: '94887', department_id: 17 });
    await City.create({ name: 'Morichal', code: '94888', department_id: 17 });
    await City.create({ name: 'San José Del Guaviare', code: '95001', department_id: 18 });
    await City.create({ name: 'Calamar', code: '95015', department_id: 18 });
    await City.create({ name: 'El Retorno', code: '95025', department_id: 18 });
    await City.create({ name: 'Miraflores', code: '95200', department_id: 18 });
    await City.create({ name: 'Neiva', code: '41001', department_id: 19 });
    await City.create({ name: 'Acevedo', code: '41006', department_id: 19 });
    await City.create({ name: 'Agrado', code: '41013', department_id: 19 });
    await City.create({ name: 'Aipe', code: '41016', department_id: 19 });
    await City.create({ name: 'Algeciras', code: '41020', department_id: 19 });
    await City.create({ name: 'Altamira', code: '41026', department_id: 19 });
    await City.create({ name: 'Baraya', code: '41078', department_id: 19 });
    await City.create({ name: 'Campoalegre', code: '41132', department_id: 19 });
    await City.create({ name: 'Colombia', code: '41206', department_id: 19 });
    await City.create({ name: 'Elías', code: '41244', department_id: 19 });
    await City.create({ name: 'Garzón', code: '41298', department_id: 19 });
    await City.create({ name: 'Gigante', code: '41306', department_id: 19 });
    await City.create({ name: 'Guadalupe', code: '41319', department_id: 19 });
    await City.create({ name: 'Hobo', code: '41349', department_id: 19 });
    await City.create({ name: 'Iquira', code: '41357', department_id: 19 });
    await City.create({ name: 'Isnos', code: '41359', department_id: 19 });
    await City.create({ name: 'La Argentina', code: '41378', department_id: 19 });
    await City.create({ name: 'La Plata', code: '41396', department_id: 19 });
    await City.create({ name: 'Nátaga', code: '41483', department_id: 19 });
    await City.create({ name: 'Oporapa', code: '41503', department_id: 19 });
    await City.create({ name: 'Paicol', code: '41518', department_id: 19 });
    await City.create({ name: 'Palermo', code: '41524', department_id: 19 });
    await City.create({ name: 'Palestina', code: '41530', department_id: 19 });
    await City.create({ name: 'Pital', code: '41548', department_id: 19 });
    await City.create({ name: 'Pitalito', code: '41551', department_id: 19 });
    await City.create({ name: 'Rivera', code: '41615', department_id: 19 });
    await City.create({ name: 'Saladoblanco', code: '41660', department_id: 19 });
    await City.create({ name: 'San Agustín', code: '41668', department_id: 19 });
    await City.create({ name: 'Santa María', code: '41676', department_id: 19 });
    await City.create({ name: 'Suaza', code: '41770', department_id: 19 });
    await City.create({ name: 'Tarqui', code: '41791', department_id: 19 });
    await City.create({ name: 'Tesalia', code: '41797', department_id: 19 });
    await City.create({ name: 'Tello', code: '41799', department_id: 19 });
    await City.create({ name: 'Teruel', code: '41801', department_id: 19 });
    await City.create({ name: 'Timaná', code: '41807', department_id: 19 });
    await City.create({ name: 'Villavieja', code: '41872', department_id: 19 });
    await City.create({ name: 'Yaguará', code: '41885', department_id: 19 });
    await City.create({ name: 'Riohacha', code: '44001', department_id: 20 });
    await City.create({ name: 'Albania', code: '44035', department_id: 20 });
    await City.create({ name: 'Barrancas', code: '44078', department_id: 20 });
    await City.create({ name: 'Dibulla', code: '44090', department_id: 20 });
    await City.create({ name: 'Distracción', code: '44098', department_id: 20 });
    await City.create({ name: 'El Molino', code: '44110', department_id: 20 });
    await City.create({ name: 'Fonseca', code: '44279', department_id: 20 });
    await City.create({ name: 'Hatonuevo', code: '44378', department_id: 20 });
    await City.create({ name: 'La Jagua Del Pilar', code: '44420', department_id: 20 });
    await City.create({ name: 'Maicao', code: '44430', department_id: 20 });
    await City.create({ name: 'Manaure', code: '44560', department_id: 20 });
    await City.create({ name: 'San Juan Del Cesar', code: '44650', department_id: 20 });
    await City.create({ name: 'Uribia', code: '44847', department_id: 20 });
    await City.create({ name: 'Urumita', code: '44855', department_id: 20 });
    await City.create({ name: 'Villanueva', code: '44874', department_id: 20 });
    await City.create({ name: 'Santa Marta', code: '47001', department_id: 21 });
    await City.create({ name: 'Algarrobo', code: '47030', department_id: 21 });
    await City.create({ name: 'Aracataca', code: '47053', department_id: 21 });
    await City.create({ name: 'Ariguaní', code: '47058', department_id: 21 });
    await City.create({ name: 'Cerro San Antonio', code: '47161', department_id: 21 });
    await City.create({ name: 'Chivolo', code: '47170', department_id: 21 });
    await City.create({ name: 'Ciénaga', code: '47189', department_id: 21 });
    await City.create({ name: 'Concordia', code: '47205', department_id: 21 });
    await City.create({ name: 'El Banco', code: '47245', department_id: 21 });
    await City.create({ name: 'El Piñon', code: '47258', department_id: 21 });
    await City.create({ name: 'El Retén', code: '47268', department_id: 21 });
    await City.create({ name: 'Fundación', code: '47288', department_id: 21 });
    await City.create({ name: 'Guamal', code: '47318', department_id: 21 });
    await City.create({ name: 'Nueva Granada', code: '47460', department_id: 21 });
    await City.create({ name: 'Pedraza', code: '47541', department_id: 21 });
    await City.create({ name: 'Pijiño Del Carmen', code: '47545', department_id: 21 });
    await City.create({ name: 'Pivijay', code: '47551', department_id: 21 });
    await City.create({ name: 'Plato', code: '47555', department_id: 21 });
    await City.create({ name: 'Puebloviejo', code: '47570', department_id: 21 });
    await City.create({ name: 'Remolino', code: '47605', department_id: 21 });
    await City.create({ name: 'Sabanas De San Angel', code: '47660', department_id: 21 });
    await City.create({ name: 'Salamina', code: '47675', department_id: 21 });
    await City.create({ name: 'San Sebastián De Buenavista', code: '47692', department_id: 21 });
    await City.create({ name: 'San Zenón', code: '47703', department_id: 21 });
    await City.create({ name: 'Santa Ana', code: '47707', department_id: 21 });
    await City.create({ name: 'Santa Bárbara De Pinto', code: '47720', department_id: 21 });
    await City.create({ name: 'Sitionuevo', code: '47745', department_id: 21 });
    await City.create({ name: 'Tenerife', code: '47798', department_id: 21 });
    await City.create({ name: 'Zapayán', code: '47960', department_id: 21 });
    await City.create({ name: 'Zona Bananera', code: '47980', department_id: 21 });
    await City.create({ name: 'Villavicencio', code: '50001', department_id: 22 });
    await City.create({ name: 'Acacías', code: '50006', department_id: 22 });
    await City.create({ name: 'Barranca De Upía', code: '50110', department_id: 22 });
    await City.create({ name: 'Cabuyaro', code: '50124', department_id: 22 });
    await City.create({ name: 'Castilla La Nueva', code: '50150', department_id: 22 });
    await City.create({ name: 'Cubarral', code: '50223', department_id: 22 });
    await City.create({ name: 'Cumaral', code: '50226', department_id: 22 });
    await City.create({ name: 'El Calvario', code: '50245', department_id: 22 });
    await City.create({ name: 'El Castillo', code: '50251', department_id: 22 });
    await City.create({ name: 'El Dorado', code: '50270', department_id: 22 });
    await City.create({ name: 'Fuente De Oro', code: '50287', department_id: 22 });
    await City.create({ name: 'Granada', code: '50313', department_id: 22 });
    await City.create({ name: 'Guamal', code: '50318', department_id: 22 });
    await City.create({ name: 'Mapiripán', code: '50325', department_id: 22 });
    await City.create({ name: 'Mesetas', code: '50330', department_id: 22 });
    await City.create({ name: 'La Macarena', code: '50350', department_id: 22 });
    await City.create({ name: 'Uribe', code: '50370', department_id: 22 });
    await City.create({ name: 'Lejanías', code: '50400', department_id: 22 });
    await City.create({ name: 'Puerto Concordia', code: '50450', department_id: 22 });
    await City.create({ name: 'Puerto Gaitán', code: '50568', department_id: 22 });
    await City.create({ name: 'Puerto López', code: '50573', department_id: 22 });
    await City.create({ name: 'Puerto Lleras', code: '50577', department_id: 22 });
    await City.create({ name: 'Puerto Rico', code: '50590', department_id: 22 });
    await City.create({ name: 'Restrepo', code: '50606', department_id: 22 });
    await City.create({ name: 'San Carlos De Guaroa', code: '50680', department_id: 22 });
    await City.create({ name: 'San Juan De Arama', code: '50683', department_id: 22 });
    await City.create({ name: 'San Juanito', code: '50686', department_id: 22 });
    await City.create({ name: 'San Martín', code: '50689', department_id: 22 });
    await City.create({ name: 'Vistahermosa', code: '50711', department_id: 22 });
    await City.create({ name: 'Pasto', code: '52001', department_id: 23 });
    await City.create({ name: 'Albán', code: '52019', department_id: 23 });
    await City.create({ name: 'Aldana', code: '52022', department_id: 23 });
    await City.create({ name: 'Ancuyá', code: '52036', department_id: 23 });
    await City.create({ name: 'Arboleda', code: '52051', department_id: 23 });
    await City.create({ name: 'Barbacoas', code: '52079', department_id: 23 });
    await City.create({ name: 'Belén', code: '52083', department_id: 23 });
    await City.create({ name: 'Buesaco', code: '52110', department_id: 23 });
    await City.create({ name: 'Colón', code: '52203', department_id: 23 });
    await City.create({ name: 'Consaca', code: '52207', department_id: 23 });
    await City.create({ name: 'Contadero', code: '52210', department_id: 23 });
    await City.create({ name: 'Córdoba', code: '52215', department_id: 23 });
    await City.create({ name: 'Cuaspud', code: '52224', department_id: 23 });
    await City.create({ name: 'Cumbal', code: '52227', department_id: 23 });
    await City.create({ name: 'Cumbitara', code: '52233', department_id: 23 });
    await City.create({ name: 'Chachagüí', code: '52240', department_id: 23 });
    await City.create({ name: 'El Charco', code: '52250', department_id: 23 });
    await City.create({ name: 'El Peñol', code: '52254', department_id: 23 });
    await City.create({ name: 'El Rosario', code: '52256', department_id: 23 });
    await City.create({ name: 'El Tablón De Gómez', code: '52258', department_id: 23 });
    await City.create({ name: 'El Tambo', code: '52260', department_id: 23 });
    await City.create({ name: 'Funes', code: '52287', department_id: 23 });
    await City.create({ name: 'Guachucal', code: '52317', department_id: 23 });
    await City.create({ name: 'Guaitarilla', code: '52320', department_id: 23 });
    await City.create({ name: 'Gualmatán', code: '52323', department_id: 23 });
    await City.create({ name: 'Iles', code: '52352', department_id: 23 });
    await City.create({ name: 'Imués', code: '52354', department_id: 23 });
    await City.create({ name: 'Ipiales', code: '52356', department_id: 23 });
    await City.create({ name: 'La Cruz', code: '52378', department_id: 23 });
    await City.create({ name: 'La Florida', code: '52381', department_id: 23 });
    await City.create({ name: 'La Llanada', code: '52385', department_id: 23 });
    await City.create({ name: 'La Tola', code: '52390', department_id: 23 });
    await City.create({ name: 'La Unión', code: '52399', department_id: 23 });
    await City.create({ name: 'Leiva', code: '52405', department_id: 23 });
    await City.create({ name: 'Linares', code: '52411', department_id: 23 });
    await City.create({ name: 'Los Andes', code: '52418', department_id: 23 });
    await City.create({ name: 'Magüi', code: '52427', department_id: 23 });
    await City.create({ name: 'Mallama', code: '52435', department_id: 23 });
    await City.create({ name: 'Mosquera', code: '52473', department_id: 23 });
    await City.create({ name: 'Nariño', code: '52480', department_id: 23 });
    await City.create({ name: 'Olaya Herrera', code: '52490', department_id: 23 });
    await City.create({ name: 'Ospina', code: '52506', department_id: 23 });
    await City.create({ name: 'Francisco Pizarro', code: '52520', department_id: 23 });
    await City.create({ name: 'Policarpa', code: '52540', department_id: 23 });
    await City.create({ name: 'Potosí', code: '52560', department_id: 23 });
    await City.create({ name: 'Providencia', code: '52565', department_id: 23 });
    await City.create({ name: 'Puerres', code: '52573', department_id: 23 });
    await City.create({ name: 'Pupiales', code: '52585', department_id: 23 });
    await City.create({ name: 'Ricaurte', code: '52612', department_id: 23 });
    await City.create({ name: 'Roberto Payán', code: '52621', department_id: 23 });
    await City.create({ name: 'Samaniego', code: '52678', department_id: 23 });
    await City.create({ name: 'Sandoná', code: '52683', department_id: 23 });
    await City.create({ name: 'San Bernardo', code: '52685', department_id: 23 });
    await City.create({ name: 'San Lorenzo', code: '52687', department_id: 23 });
    await City.create({ name: 'San Pablo', code: '52693', department_id: 23 });
    await City.create({ name: 'San Pedro De Cartago', code: '52694', department_id: 23 });
    await City.create({ name: 'Santa Bárbara', code: '52696', department_id: 23 });
    await City.create({ name: 'Santacruz', code: '52699', department_id: 23 });
    await City.create({ name: 'Sapuyes', code: '52720', department_id: 23 });
    await City.create({ name: 'Taminango', code: '52786', department_id: 23 });
    await City.create({ name: 'Tangua', code: '52788', department_id: 23 });
    await City.create({ name: 'San Andres De Tumaco', code: '52835', department_id: 23 });
    await City.create({ name: 'Túquerres', code: '52838', department_id: 23 });
    await City.create({ name: 'Yacuanquer', code: '52885', department_id: 23 });
    await City.create({ name: 'Cúcuta', code: '54001', department_id: 24 });
    await City.create({ name: 'Abrego', code: '54003', department_id: 24 });
    await City.create({ name: 'Arboledas', code: '54051', department_id: 24 });
    await City.create({ name: 'Bochalema', code: '54099', department_id: 24 });
    await City.create({ name: 'Bucarasica', code: '54109', department_id: 24 });
    await City.create({ name: 'Cácota', code: '54125', department_id: 24 });
    await City.create({ name: 'Cachirá', code: '54128', department_id: 24 });
    await City.create({ name: 'Chinácota', code: '54172', department_id: 24 });
    await City.create({ name: 'Chitagá', code: '54174', department_id: 24 });
    await City.create({ name: 'Convención', code: '54206', department_id: 24 });
    await City.create({ name: 'Cucutilla', code: '54223', department_id: 24 });
    await City.create({ name: 'Durania', code: '54239', department_id: 24 });
    await City.create({ name: 'El Carmen', code: '54245', department_id: 24 });
    await City.create({ name: 'El Tarra', code: '54250', department_id: 24 });
    await City.create({ name: 'El Zulia', code: '54261', department_id: 24 });
    await City.create({ name: 'Gramalote', code: '54313', department_id: 24 });
    await City.create({ name: 'Hacarí', code: '54344', department_id: 24 });
    await City.create({ name: 'Herrán', code: '54347', department_id: 24 });
    await City.create({ name: 'Labateca', code: '54377', department_id: 24 });
    await City.create({ name: 'La Esperanza', code: '54385', department_id: 24 });
    await City.create({ name: 'La Playa', code: '54398', department_id: 24 });
    await City.create({ name: 'Los Patios', code: '54405', department_id: 24 });
    await City.create({ name: 'Lourdes', code: '54418', department_id: 24 });
    await City.create({ name: 'Mutiscua', code: '54480', department_id: 24 });
    await City.create({ name: 'Ocaña', code: '54498', department_id: 24 });
    await City.create({ name: 'Pamplona', code: '54518', department_id: 24 });
    await City.create({ name: 'Pamplonita', code: '54520', department_id: 24 });
    await City.create({ name: 'Puerto Santander', code: '54553', department_id: 24 });
    await City.create({ name: 'Ragonvalia', code: '54599', department_id: 24 });
    await City.create({ name: 'Salazar', code: '54660', department_id: 24 });
    await City.create({ name: 'San Calixto', code: '54670', department_id: 24 });
    await City.create({ name: 'San Cayetano', code: '54673', department_id: 24 });
    await City.create({ name: 'Santiago', code: '54680', department_id: 24 });
    await City.create({ name: 'Sardinata', code: '54720', department_id: 24 });
    await City.create({ name: 'Silos', code: '54743', department_id: 24 });
    await City.create({ name: 'Teorama', code: '54800', department_id: 24 });
    await City.create({ name: 'Tibú', code: '54810', department_id: 24 });
    await City.create({ name: 'Toledo', code: '54820', department_id: 24 });
    await City.create({ name: 'Villa Caro', code: '54871', department_id: 24 });
    await City.create({ name: 'Villa Del Rosario', code: '54874', department_id: 24 });
    await City.create({ name: 'Mocoa', code: '86001', department_id: 25 });
    await City.create({ name: 'Colón', code: '86219', department_id: 25 });
    await City.create({ name: 'Orito', code: '86320', department_id: 25 });
    await City.create({ name: 'Puerto Asís', code: '86568', department_id: 25 });
    await City.create({ name: 'Puerto Caicedo', code: '86569', department_id: 25 });
    await City.create({ name: 'Puerto Guzmán', code: '86571', department_id: 25 });
    await City.create({ name: 'Puerto Leguízamo', code: '86573', department_id: 25 });
    await City.create({ name: 'Sibundoy', code: '86749', department_id: 25 });
    await City.create({ name: 'San Francisco', code: '86755', department_id: 25 });
    await City.create({ name: 'San Miguel', code: '86757', department_id: 25 });
    await City.create({ name: 'Santiago', code: '86760', department_id: 25 });
    await City.create({ name: 'Valle Del Guamuez', code: '86865', department_id: 25 });
    await City.create({ name: 'Villagarzón', code: '86885', department_id: 25 });
    await City.create({ name: 'Armenia', code: '63001', department_id: 26 });
    await City.create({ name: 'Buenavista', code: '63111', department_id: 26 });
    await City.create({ name: 'Calarca', code: '63130', department_id: 26 });
    await City.create({ name: 'Circasia', code: '63190', department_id: 26 });
    await City.create({ name: 'Córdoba', code: '63212', department_id: 26 });
    await City.create({ name: 'Filandia', code: '63272', department_id: 26 });
    await City.create({ name: 'Génova', code: '63302', department_id: 26 });
    await City.create({ name: 'La Tebaida', code: '63401', department_id: 26 });
    await City.create({ name: 'Montenegro', code: '63470', department_id: 26 });
    await City.create({ name: 'Pijao', code: '63548', department_id: 26 });
    await City.create({ name: 'Quimbaya', code: '63594', department_id: 26 });
    await City.create({ name: 'Salento', code: '63690', department_id: 26 });
    await City.create({ name: 'Pereira', code: '66001', department_id: 27 });
    await City.create({ name: 'Apía', code: '66045', department_id: 27 });
    await City.create({ name: 'Balboa', code: '66075', department_id: 27 });
    await City.create({ name: 'Belén De Umbría', code: '66088', department_id: 27 });
    await City.create({ name: 'Dosquebradas', code: '66170', department_id: 27 });
    await City.create({ name: 'Guática', code: '66318', department_id: 27 });
    await City.create({ name: 'La Celia', code: '66383', department_id: 27 });
    await City.create({ name: 'La Virginia', code: '66400', department_id: 27 });
    await City.create({ name: 'Marsella', code: '66440', department_id: 27 });
    await City.create({ name: 'Mistrató', code: '66456', department_id: 27 });
    await City.create({ name: 'Pueblo Rico', code: '66572', department_id: 27 });
    await City.create({ name: 'Quinchía', code: '66594', department_id: 27 });
    await City.create({ name: 'Santa Rosa De Cabal', code: '66682', department_id: 27 });
    await City.create({ name: 'Santuario', code: '66687', department_id: 27 });
    await City.create({ name: 'San Andrés', code: '88001', department_id: 4 });
    await City.create({ name: 'Providencia', code: '88564', department_id: 4 });
    await City.create({ name: 'Bucaramanga', code: '68001', department_id: 28 });
    await City.create({ name: 'Aguada', code: '68013', department_id: 28 });
    await City.create({ name: 'Albania', code: '68020', department_id: 28 });
    await City.create({ name: 'Aratoca', code: '68051', department_id: 28 });
    await City.create({ name: 'Barbosa', code: '68077', department_id: 28 });
    await City.create({ name: 'Barichara', code: '68079', department_id: 28 });
    await City.create({ name: 'Barrancabermeja', code: '68081', department_id: 28 });
    await City.create({ name: 'Betulia', code: '68092', department_id: 28 });
    await City.create({ name: 'Bolívar', code: '68101', department_id: 28 });
    await City.create({ name: 'Cabrera', code: '68121', department_id: 28 });
    await City.create({ name: 'California', code: '68132', department_id: 28 });
    await City.create({ name: 'Capitanejo', code: '68147', department_id: 28 });
    await City.create({ name: 'Carcasí', code: '68152', department_id: 28 });
    await City.create({ name: 'Cepitá', code: '68160', department_id: 28 });
    await City.create({ name: 'Cerrito', code: '68162', department_id: 28 });
    await City.create({ name: 'Charalá', code: '68167', department_id: 28 });
    await City.create({ name: 'Charta', code: '68169', department_id: 28 });
    await City.create({ name: 'Chima', code: '68176', department_id: 28 });
    await City.create({ name: 'Chipatá', code: '68179', department_id: 28 });
    await City.create({ name: 'Cimitarra', code: '68190', department_id: 28 });
    await City.create({ name: 'Concepción', code: '68207', department_id: 28 });
    await City.create({ name: 'Confines', code: '68209', department_id: 28 });
    await City.create({ name: 'Contratación', code: '68211', department_id: 28 });
    await City.create({ name: 'Coromoro', code: '68217', department_id: 28 });
    await City.create({ name: 'Curití', code: '68229', department_id: 28 });
    await City.create({ name: 'El Carmen De Chucurí', code: '68235', department_id: 28 });
    await City.create({ name: 'El Guacamayo', code: '68245', department_id: 28 });
    await City.create({ name: 'El Peñón', code: '68250', department_id: 28 });
    await City.create({ name: 'El Playón', code: '68255', department_id: 28 });
    await City.create({ name: 'Encino', code: '68264', department_id: 28 });
    await City.create({ name: 'Enciso', code: '68266', department_id: 28 });
    await City.create({ name: 'Florián', code: '68271', department_id: 28 });
    await City.create({ name: 'Floridablanca', code: '68276', department_id: 28 });
    await City.create({ name: 'Galán', code: '68296', department_id: 28 });
    await City.create({ name: 'Gambita', code: '68298', department_id: 28 });
    await City.create({ name: 'Girón', code: '68307', department_id: 28 });
    await City.create({ name: 'Guaca', code: '68318', department_id: 28 });
    await City.create({ name: 'Guadalupe', code: '68320', department_id: 28 });
    await City.create({ name: 'Guapotá', code: '68322', department_id: 28 });
    await City.create({ name: 'Guavatá', code: '68324', department_id: 28 });
    await City.create({ name: 'Güepsa', code: '68327', department_id: 28 });
    await City.create({ name: 'Hato', code: '68344', department_id: 28 });
    await City.create({ name: 'Jesús María', code: '68368', department_id: 28 });
    await City.create({ name: 'Jordán', code: '68370', department_id: 28 });
    await City.create({ name: 'La Belleza', code: '68377', department_id: 28 });
    await City.create({ name: 'Landázuri', code: '68385', department_id: 28 });
    await City.create({ name: 'La Paz', code: '68397', department_id: 28 });
    await City.create({ name: 'Lebrija', code: '68406', department_id: 28 });
    await City.create({ name: 'Los Santos', code: '68418', department_id: 28 });
    await City.create({ name: 'Macaravita', code: '68425', department_id: 28 });
    await City.create({ name: 'Málaga', code: '68432', department_id: 28 });
    await City.create({ name: 'Matanza', code: '68444', department_id: 28 });
    await City.create({ name: 'Mogotes', code: '68464', department_id: 28 });
    await City.create({ name: 'Molagavita', code: '68468', department_id: 28 });
    await City.create({ name: 'Ocamonte', code: '68498', department_id: 28 });
    await City.create({ name: 'Oiba', code: '68500', department_id: 28 });
    await City.create({ name: 'Onzaga', code: '68502', department_id: 28 });
    await City.create({ name: 'Palmar', code: '68522', department_id: 28 });
    await City.create({ name: 'Palmas Del Socorro', code: '68524', department_id: 28 });
    await City.create({ name: 'Páramo', code: '68533', department_id: 28 });
    await City.create({ name: 'Piedecuesta', code: '68547', department_id: 28 });
    await City.create({ name: 'Pinchote', code: '68549', department_id: 28 });
    await City.create({ name: 'Puente Nacional', code: '68572', department_id: 28 });
    await City.create({ name: 'Puerto Parra', code: '68573', department_id: 28 });
    await City.create({ name: 'Puerto Wilches', code: '68575', department_id: 28 });
    await City.create({ name: 'Rionegro', code: '68615', department_id: 28 });
    await City.create({ name: 'Sabana De Torres', code: '68655', department_id: 28 });
    await City.create({ name: 'San Andrés', code: '68669', department_id: 28 });
    await City.create({ name: 'San Benito', code: '68673', department_id: 28 });
    await City.create({ name: 'San Gil', code: '68679', department_id: 28 });
    await City.create({ name: 'San Joaquín', code: '68682', department_id: 28 });
    await City.create({ name: 'San José De Miranda', code: '68684', department_id: 28 });
    await City.create({ name: 'San Miguel', code: '68686', department_id: 28 });
    await City.create({ name: 'San Vicente De Chucurí', code: '68689', department_id: 28 });
    await City.create({ name: 'Santa Bárbara', code: '68705', department_id: 28 });
    await City.create({ name: 'Santa Helena Del Opón', code: '68720', department_id: 28 });
    await City.create({ name: 'Simacota', code: '68745', department_id: 28 });
    await City.create({ name: 'Socorro', code: '68755', department_id: 28 });
    await City.create({ name: 'Suaita', code: '68770', department_id: 28 });
    await City.create({ name: 'Sucre', code: '68773', department_id: 28 });
    await City.create({ name: 'Suratá', code: '68780', department_id: 28 });
    await City.create({ name: 'Tona', code: '68820', department_id: 28 });
    await City.create({ name: 'Valle De San José', code: '68855', department_id: 28 });
    await City.create({ name: 'Vélez', code: '68861', department_id: 28 });
    await City.create({ name: 'Vetas', code: '68867', department_id: 28 });
    await City.create({ name: 'Villanueva', code: '68872', department_id: 28 });
    await City.create({ name: 'Zapatoca', code: '68895', department_id: 28 });
    await City.create({ name: 'Sincelejo', code: '70001', department_id: 29 });
    await City.create({ name: 'Buenavista', code: '70110', department_id: 29 });
    await City.create({ name: 'Caimito', code: '70124', department_id: 29 });
    await City.create({ name: 'Coloso', code: '70204', department_id: 29 });
    await City.create({ name: 'Corozal', code: '70215', department_id: 29 });
    await City.create({ name: 'Coveñas', code: '70221', department_id: 29 });
    await City.create({ name: 'Chalán', code: '70230', department_id: 29 });
    await City.create({ name: 'El Roble', code: '70233', department_id: 29 });
    await City.create({ name: 'Galeras', code: '70235', department_id: 29 });
    await City.create({ name: 'Guaranda', code: '70265', department_id: 29 });
    await City.create({ name: 'La Unión', code: '70400', department_id: 29 });
    await City.create({ name: 'Los Palmitos', code: '70418', department_id: 29 });
    await City.create({ name: 'Majagual', code: '70429', department_id: 29 });
    await City.create({ name: 'Morroa', code: '70473', department_id: 29 });
    await City.create({ name: 'Ovejas', code: '70508', department_id: 29 });
    await City.create({ name: 'Palmito', code: '70523', department_id: 29 });
    await City.create({ name: 'Sampués', code: '70670', department_id: 29 });
    await City.create({ name: 'San Benito Abad', code: '70678', department_id: 29 });
    await City.create({ name: 'San Juan De Betulia', code: '70702', department_id: 29 });
    await City.create({ name: 'San Marcos', code: '70708', department_id: 29 });
    await City.create({ name: 'San Onofre', code: '70713', department_id: 29 });
    await City.create({ name: 'San Pedro', code: '70717', department_id: 29 });
    await City.create({ name: 'San Luis De Sincé', code: '70742', department_id: 29 });
    await City.create({ name: 'Sucre', code: '70771', department_id: 29 });
    await City.create({ name: 'Santiago De Tolú', code: '70820', department_id: 29 });
    await City.create({ name: 'Tolú Viejo', code: '70823', department_id: 29 });
    await City.create({ name: 'Ibagué', code: '73001', department_id: 30 });
    await City.create({ name: 'Alpujarra', code: '73024', department_id: 30 });
    await City.create({ name: 'Alvarado', code: '73026', department_id: 30 });
    await City.create({ name: 'Ambalema', code: '73030', department_id: 30 });
    await City.create({ name: 'Anzoátegui', code: '73043', department_id: 30 });
    await City.create({ name: 'Armero', code: '73055', department_id: 30 });
    await City.create({ name: 'Ataco', code: '73067', department_id: 30 });
    await City.create({ name: 'Cajamarca', code: '73124', department_id: 30 });
    await City.create({ name: 'Carmen De Apicalá', code: '73148', department_id: 30 });
    await City.create({ name: 'Casabianca', code: '73152', department_id: 30 });
    await City.create({ name: 'Chaparral', code: '73168', department_id: 30 });
    await City.create({ name: 'Coello', code: '73200', department_id: 30 });
    await City.create({ name: 'Coyaima', code: '73217', department_id: 30 });
    await City.create({ name: 'Cunday', code: '73226', department_id: 30 });
    await City.create({ name: 'Dolores', code: '73236', department_id: 30 });
    await City.create({ name: 'Espinal', code: '73268', department_id: 30 });
    await City.create({ name: 'Falan', code: '73270', department_id: 30 });
    await City.create({ name: 'Flandes', code: '73275', department_id: 30 });
    await City.create({ name: 'Fresno', code: '73283', department_id: 30 });
    await City.create({ name: 'Guamo', code: '73319', department_id: 30 });
    await City.create({ name: 'Herveo', code: '73347', department_id: 30 });
    await City.create({ name: 'Honda', code: '73349', department_id: 30 });
    await City.create({ name: 'Icononzo', code: '73352', department_id: 30 });
    await City.create({ name: 'Lérida', code: '73408', department_id: 30 });
    await City.create({ name: 'Líbano', code: '73411', department_id: 30 });
    await City.create({ name: 'San Sebastián De Mariquita', code: '73443', department_id: 30 });
    await City.create({ name: 'Melgar', code: '73449', department_id: 30 });
    await City.create({ name: 'Murillo', code: '73461', department_id: 30 });
    await City.create({ name: 'Natagaima', code: '73483', department_id: 30 });
    await City.create({ name: 'Ortega', code: '73504', department_id: 30 });
    await City.create({ name: 'Palocabildo', code: '73520', department_id: 30 });
    await City.create({ name: 'Piedras', code: '73547', department_id: 30 });
    await City.create({ name: 'Planadas', code: '73555', department_id: 30 });
    await City.create({ name: 'Prado', code: '73563', department_id: 30 });
    await City.create({ name: 'Purificación', code: '73585', department_id: 30 });
    await City.create({ name: 'Rioblanco', code: '73616', department_id: 30 });
    await City.create({ name: 'Roncesvalles', code: '73622', department_id: 30 });
    await City.create({ name: 'Rovira', code: '73624', department_id: 30 });
    await City.create({ name: 'Saldaña', code: '73671', department_id: 30 });
    await City.create({ name: 'San Antonio', code: '73675', department_id: 30 });
    await City.create({ name: 'San Luis', code: '73678', department_id: 30 });
    await City.create({ name: 'Santa Isabel', code: '73686', department_id: 30 });
    await City.create({ name: 'Suárez', code: '73770', department_id: 30 });
    await City.create({ name: 'Valle De San Juan', code: '73854', department_id: 30 });
    await City.create({ name: 'Venadillo', code: '73861', department_id: 30 });
    await City.create({ name: 'Villahermosa', code: '73870', department_id: 30 });
    await City.create({ name: 'Villarrica', code: '73873', department_id: 30 });
    await City.create({ name: 'Cali', code: '76001', department_id: 31 });
    await City.create({ name: 'Alcalá', code: '76020', department_id: 31 });
    await City.create({ name: 'Andalucía', code: '76036', department_id: 31 });
    await City.create({ name: 'Ansermanuevo', code: '76041', department_id: 31 });
    await City.create({ name: 'Argelia', code: '76054', department_id: 31 });
    await City.create({ name: 'Bolívar', code: '76100', department_id: 31 });
    await City.create({ name: 'Buenaventura', code: '76109', department_id: 31 });
    await City.create({ name: 'Guadalajara De Buga', code: '76111', department_id: 31 });
    await City.create({ name: 'Bugalagrande', code: '76113', department_id: 31 });
    await City.create({ name: 'Caicedonia', code: '76122', department_id: 31 });
    await City.create({ name: 'Calima', code: '76126', department_id: 31 });
    await City.create({ name: 'Candelaria', code: '76130', department_id: 31 });
    await City.create({ name: 'Cartago', code: '76147', department_id: 31 });
    await City.create({ name: 'Dagua', code: '76233', department_id: 31 });
    await City.create({ name: 'El Águila', code: '76243', department_id: 31 });
    await City.create({ name: 'El Cairo', code: '76246', department_id: 31 });
    await City.create({ name: 'El Cerrito', code: '76248', department_id: 31 });
    await City.create({ name: 'El Dovio', code: '76250', department_id: 31 });
    await City.create({ name: 'Florida', code: '76275', department_id: 31 });
    await City.create({ name: 'Ginebra', code: '76306', department_id: 31 });
    await City.create({ name: 'Guacarí', code: '76318', department_id: 31 });
    await City.create({ name: 'Jamundí', code: '76364', department_id: 31 });
    await City.create({ name: 'La Cumbre', code: '76377', department_id: 31 });
    await City.create({ name: 'La Unión', code: '76400', department_id: 31 });
    await City.create({ name: 'La Victoria', code: '76403', department_id: 31 });
    await City.create({ name: 'Obando', code: '76497', department_id: 31 });
    await City.create({ name: 'Palmira', code: '76520', department_id: 31 });
    await City.create({ name: 'Pradera', code: '76563', department_id: 31 });
    await City.create({ name: 'Restrepo', code: '76606', department_id: 31 });
    await City.create({ name: 'Riofrío', code: '76616', department_id: 31 });
    await City.create({ name: 'Roldanillo', code: '76622', department_id: 31 });
    await City.create({ name: 'San Pedro', code: '76670', department_id: 31 });
    await City.create({ name: 'Sevilla', code: '76736', department_id: 31 });
    await City.create({ name: 'Toro', code: '76823', department_id: 31 });
    await City.create({ name: 'Trujillo', code: '76828', department_id: 31 });
    await City.create({ name: 'Tuluá', code: '76834', department_id: 31 });
    await City.create({ name: 'Ulloa', code: '76845', department_id: 31 });
    await City.create({ name: 'Versalles', code: '76863', department_id: 31 });
    await City.create({ name: 'Vijes', code: '76869', department_id: 31 });
    await City.create({ name: 'Yotoco', code: '76890', department_id: 31 });
    await City.create({ name: 'Yumbo', code: '76892', department_id: 31 });
    await City.create({ name: 'Zarzal', code: '76895', department_id: 31 });
    await City.create({ name: 'Mitú', code: '97001', department_id: 32 });
    await City.create({ name: 'Caruru', code: '97161', department_id: 32 });
    await City.create({ name: 'Pacoa', code: '97511', department_id: 32 });
    await City.create({ name: 'Taraira', code: '97666', department_id: 32 });
    await City.create({ name: 'Papunaua', code: '97777', department_id: 32 });
    await City.create({ name: 'Yavaraté', code: '97889', department_id: 32 });
    await City.create({ name: 'Puerto Carreño', code: '99001', department_id: 33 });
    await City.create({ name: 'La Primavera', code: '99524', department_id: 33 });
    await City.create({ name: 'Santa Rosalía', code: '99624', department_id: 33 });
    await City.create({ name: 'Cumaribo', code: '99773', department_id: 33 });
  }

}

module.exports = DaneSeeder
