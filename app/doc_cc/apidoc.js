
// ******* A N O T A C I O N E S ( tabla inter_notes para CC ) ********** //
/**
 * @api {POST} /anotaciones/ Guardar una Anotación
 * @apiDescription Recibe los campos necesarios para realizar una anotación,
 * devuelve un error HTTP 400 en caso de no cumplir con los requerimientos.
 * @apiName PostAnotaciones
 * @apiGroup Anotaciones
 * @apiParam {Integer} idCarrera Id de la carrera donde se va a realizar la anotación
 * @apiParam {String} tipo_doc_caballeriza Tipo de Documento de la caballeriza ['C.I', 'D.U', 'L.C', 'L.E', 'MAQ', 'PAS']
 * @apiParam {String} num_doc_caballeriza Número de documento de la caballeriza
 * @apiParam {Date} fecha_carrera Fecha y Hora programada para la carrera
 * @apiParam {Float} kg_programa Kilogramos de programa
 * @apiParam {Float} kg_reales Kilogramos reales
 * @apiParam {String} cod_hip Código del hipódromo
 * @apiParam {String} nombre_premio Nombre del Premio
 * @apiParam {String} tomo Número de tomo del ejemplar
 * @apiParam {String} folio Número de folio del ejemplar
 * @apiParam {String} nombre_ejemplar Nombre del ejemplar anotado/ratificado
 * @apiParam {String} tipo_doc_cuidador Tipo de documento del cuidador
 * @apiParam {String} num_doc_cuidador Nombre del cuidador del ejemplar
 * @apiParam {String} tipo_doc_jockey  Tipo de documento del jockey
 * @apiParam {String} num_doc_jockey Nombre del jockey
 * @apiParam {String} tipo_doc_capataz Tipo de documento del capataz
 * @apiParam {String} num_doc_capataz Nombre del capataz
 * @apiParam {String} tipo_doc_peon Tipo de documento del peon
 * @apiParam {String} num_doc_peon Nombre del peon
 * @apiParam {String} tipo_doc_sereno Tipo de documento del sereno
 * @apiParam {String} num_doc_sereno Nombre del sereno
 * @apiParam {Boolean} tiro Define si el ejemplar va de tiro o no
 * @apiParamExample {String} /anotaciones/
 *  { "id": 20, "tipo_doc_caballeriza": "C.I", "num_doc_caballeriza": "8549655", "fecha_carrera": "2019-12-31",
 * "kg_programa": 57.0, "kg_reales": 56.9, "cod_hip": "HIPSI", "nombre_premio": "RASPAIL I",
 * "tomo": "1169", "folio": "115", "nombre_ejemplar": "GALICIA GOLD",
 * "tipo_doc_cuidador": "D.U", "num_doc_cuidador": "8291211", "tipo_doc_jockey": "C.I", "num_doc_jockey": "38180140",
 * "tipo_doc_capataz": "D.U", "num_doc_capataz": "14915854", "tipo_doc_peon": "D.U", "num_doc_peon": "8320828",
 * "tipo_doc_sereno": "D.U", "num_doc_sereno": "94626747", "tiro": 1},
 * @apiError (Error 404) {json} CarreraNoExiste El <code>id</code> de la carrera no existe en la base de datos.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "mensaje": "OK"
 *     }

 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "CarreraNoExiste"
 *     }
 * @apiError (Error 400) {json} DatosIncorrectos Los datos no están completos o tienen el formato incorrecto.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Bad Request
 *     {
 *       "error": "DatosIncorrectos"
 *     }
 *
 * @apiError (Error 400) {json} RegistroDuplicado El ejemplar ya se encuentra registrado para esa carrera.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "RegistroDuplicado"
 *     }
 *
 * @apiError (Error 400) {json} DatosIncorrectos Los datos no están completos o tienen el formato incorrecto.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Bad Request
 *     {
 *       "error": "DatosIncorrectos"
 *     }
 */
// ******* F I N   A N O T A C I O N E S ********** //

// ********** C A B A L L E R I Z A S **********//
/**
 * @api {GET} /caballerizas/ Listar Caballerizas
 * @apiDescription Retorna una lista de las caballerizas registradas en el sistema, ordenadas alfabéticamente,
 * si no existen caballerizas se retorna un objeto JSON vacío.
 * @apiName GetCaballerizasListar
 * @apiGroup Caballerizas
 * @apiParamExample {Null} /caballerizas/
 * { "id": 14318, "tipo_doc": "D.U", "num_doc": "10958925", "nombre": "11LATO (V*T*)" },
 * { "id": 22036, "tipo_doc": "MAQ", "num_doc": "2139", "nombre": "AGUSTIN ROCA" },
 * { "id": 22036, "tipo_doc": "MAQ", "num_doc": "58467", "nombre": "ESPERANZA (SFE)" }
 * @apiSuccess {String} id Id de la Caballeriza
 * @apiSuccess {String} tipo_doc Tipo de documento ['D.U', 'MAQ']
 * @apiSuccess {String} num_doc Número de documento
 * @apiSuccess {String} nombre Nombre de la caballeriza
 */

/**
 * @api {GET} /caballerizas/:id Detalle de caballeriza
 * @apiDescription Retorna el detalle de una caballeriza identificada por el campo Id,
 * si no existe la caballeriza se retorna un error HTTP 404.
 * @apiName GetCaballerizas
 * @apiGroup Caballerizas
 * @apiParam  {Integer} id Id de la caballeriza
 * @apiParamExample {Integer} /caballerizas/14318
 * { "id": 14318, "tipo_doc": "D.U", "num_doc": "10958925", "nombre": "11LATO (V*T*)" }
 * @apiSuccess {String} id Id de la Caballeriza
 * @apiSuccess {String} tipo_doc Tipo de documento ['D.U', 'MAQ', 'C.I']
 * @apiSuccess {String} num_doc Número de documento
 * @apiSuccess {String} nombre Nombre de la caballeriza
 * @apiError (Error 404) {json} CaballerizaNoExiste El <code>id</code> de la caballeriza no existe en la base de datos.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "CaballerizaNoExiste"
 *     }
 */

// ********** F I N   C A B A L L E R I Z A S **********//


// **********  C A B A L L O S **********//
/**
 * @api {GET} /ejemplares/porTomoFolio/:tomo/:folio Consulta por Tomo y Folio
 * @apiDescription Retorna el detalle de un ejemplar identificado por tomo y folio,
 * si no existe el ejemplar se retorna un error HTTP 404.
 * @apiName GetEjemplarPorTomo
 * @apiGroup Ejemplares
 * @apiParam  {String} tomo Tomo que identifica al ejemplar
 * @apiParam  {String} folio Folio que identifica al ejemplar
 * @apiSuccess {Integer} id Id del ejemplar
 * @apiSuccess {String} tomo Tomo que identifica al ejemplar
 * @apiSuccess {String} folio Folio que identifica al ejemplar
 * @apiSuccess {String} nombre Nombre del ejemplar
 * @apiSuccess {String} sexo Sexo del ejemplar (H, M)
 * @apiSuccess {Date} fecha_nacimiento Fecha de nacimiento del ejemplar
 * @apiSuccess {Date} fecha_muerte Fecha de muerte del ejemplar
 * @apiSuccess {Integer} ganadas_comunes Cantidad de carreras comunes ganadas
 * @apiSuccess {Integer} ganadas_clasicos Cantidad de clásicos ganadas
 * @apiSuccess {Integer} ganadas_grupo Cantidad de carreras de grupo ganadas
 * @apiSuccess {Integer} ganadas_internacionales Cantidad de carreras internacionales ganadas
 * @apiSuccess {Integer} ganadas_series Cantidad de carreras de series ganadas
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 {
   "id": 10029,
   "tomo": "1041",
   "folio": "369",
   "nombre": "NEGRA ALEGRE",
   "sexo": "H",
   "fecha_nacimiento": "1995-11-19",
   "fecha_muerte": "N/A",
   "ganadas_comunes": 0,
   "ganadas_clasicos": 0,
   "ganadas_grupo": null,
   "ganadas_internacionales": 0,
   "ganadas_series": 0
 }
 * @apiError (Error 404) {json} EjemplarNoExiste La combinación de <code>tomo</code> y <code>folio</code> del ejemplar no existe
 * en la base de datos.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "EjemplarNoExiste"
 *     }
 */
/**
 * @api {GET} /ejemplares/PorNombre/:nombre Consulta por nombre
 * @apiDescription Retorna el un arreglo de objetos con el detalle de los ejemplares que tienen un nombre
 * coincidente con el parámetro enviado, si no existe ninguno se devuelve un error HTTP 404.
 * @apiName GetEjemplarPorNombre
 * @apiGroup Ejemplares
 * @apiParam  /ejemplares/PorNombre/negr nombre Nombre o parte del nombre del ejemplar
 * @apiSuccess {Integer} id Id del ejemplar
 * @apiSuccess {String} tomo Tomo que identifica al ejemplar
 * @apiSuccess {String} folio Folio que identifica al ejemplar
 * @apiSuccess {String} nombre Nombre del ejemplar
 * @apiSuccess {String} sexo Nombre del ejemplar (H, M)
 * @apiSuccess {Date} fecha_nacimiento Fecha de nacimiento del ejemplar
 * @apiSuccess {Date} fecha_muerte Fecha de muerte del ejemplar
 * @apiSuccess {Integer} ganadas_comunes Cantidad de carreras comunes ganadas
 * @apiSuccess {Integer} ganadas_clasicos Cantidad de clásicos ganadas
 * @apiSuccess {Integer} ganadas_grupo Cantidad de carreras de grupo ganadas
 * @apiSuccess {Integer} ganadas_internacionales Cantidad de carreras internacionales ganadas
 * @apiSuccess {Integer} ganadas_series Cantidad de carreras de series ganadas
 * @apiSuccessExample {json} /ejemplares/PorNombre/negr
 *     HTTP/1.1 200 OK
 [
     {
       "id": 10029,
       "tomo": "1041",
       "folio": "369",
       "nombre": "NEGRA ALEGRE",
       "sexo": "H",
       "fecha_nacimiento": "1995-11-19",
       "fecha_muerte": "N/A",
       "ganadas_comunes": 0,
       "ganadas_clasicos": 0,
       "ganadas_grupo": null,
       "ganadas_internacionales": 0,
       "ganadas_series": 0
     },
     {
       "id": 57586,
       "tomo": "803",
       "folio": "80",
       "nombre": "NEGRA ALTIVA",
       "sexo": "H",
       "fecha_nacimiento": "1986-10-17",
       "fecha_muerte": "N/A",
       "ganadas_comunes": 0,
       "ganadas_clasicos": 0,
       "ganadas_grupo": null,
       "ganadas_internacionales": 0,
       "ganadas_series": 0
     }
 ]
 * @apiError (Error 404) {json} EjemplarNoExiste No hay ejemplares con ese nombre en la base de datos.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "EjemplarNoExiste"
 *     }
 */

// ********** F I N   C A B A L L O S **********//


// ********** C A R R E R A S **********//

/**
 * @api {GET} /carreras/porID/:idCarrera Consulta por Id
 * @apiDescription Retorna el detalle de una carerra específica, en caso de no existir el id de la carrera, se retorna un error HTTP 404.
 * @apiName GetCarreras
 * @apiGroup Carreras
 * @apiParam  {Integer} idCarrera Id que identifica a la carrera.
 * @apiSuccess {Integer} id Id de la Carrera
 * @apiSuccess {DateTime} fecha Fecha y hora de la carrera
 * @apiSuccess {String} numero Número de la carrera
 * @apiSuccess {String} nombre Nombre de la carrera
 * @apiSuccess {String} reunion Número de reunión a la que pertenece la carrera
 * @apiSuccess {String} tipo Tipo de carrera ['M', 'MJ', 'MA', 'C', 'MP', 'H', 'C2', 'C3', 'E']
 * @apiSuccess {String} pista Estado de la pista  ['CDI', 'RCN', 'RCO', 'PCO', 'PRE', 'CRE', 'CCO']
 * @apiSuccess {Integer} distancia Distancia de la carrera
 * @apiSuccess {Float} monto_premio Monto en pesos del premio
 * @apiSuccess {Integer} edad_desde Edad minima en años de los ejemplares que participan en la carrera
 * @apiSuccess {Integer} edad_hasta Edad máxima en años de los ejemplares que participan en la carrera
 * @apiSuccess {String} sexo Sexo de los ejemplares que participan en la carrera  ['H', 'M', 'T']
 * @apiSuccess {Integer} ganadas_desde Cantidad minima de carreras ganadas por el ejemplar para participar en la carrera
 * @apiSuccess {Integer} ganadas_hasta Cantidad máxima de carreras ganadas por el ejemplar para participar en la carrera
 * @apiSuccess {Float} kilos Kilos especificados en el programa
 * @apiSuccess {String} tiempo Tiempo registrado para el ganador de la carrera
 * @apiSuccessExample {json} /carreras/16
 * HTTP/1.1 200 OK
{
   "id": 16,
   "fecha": "2016-09-07 14:00:00",
   "numero": "1",
   "nombre": "GATITA RYE 2014(ALT)",
   "reunion": "83",
   "tipo": "MA",
   "pista": "RCN",
   "estado_pista": "P",
   "distancia": 1100,
   "monto_premio": "16632.00",
   "edad_desde": 4,
   "edad_hasta": 5,
   "sexo": "T",
   "ganadas_desde": 1,
   "ganadas_hasta": 1,
   "kilos": "57.00",
   "tiempo": "105371"
 }
 * @apiError (Error 404) {json} CarreraNoExiste El <code>id</code> de la carrera no existe en la base de datos.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "CarreraNoExiste"
 *     }
 */

/**
 * @api {GET} /carreras/porFecha/:fecha_inicio/:fecha_fin Consulta por fecha
 * @apiDescription Retorna un arreglo de objetos JSON con detalle de las carreras entre dos fechas, ambas inclusive,
 * en caso de no existir carreras, se retorna un objeto JSON vacío.
 * @apiName GetCarrerasPorFecha
 * @apiGroup Carreras
 * @apiParam  {Date} fecha_inicio Fecha de inicio de la consulta en formato YYYY-mm-dd, inclusive.
 * @apiParam  {Date} fecha_fin Fecha de fin de la consulta en formato YYYY-mm-dd, inclusive.
 * @apiSuccess {String} id Id de la Carrera
 * @apiSuccess {DateTime} fecha Fecha y hora de la carrera
 * @apiSuccess {Integer} numero Número de la carrera
 * @apiSuccess {String} nombre Nombre de la carrera
 * @apiSuccess {String} reunion Número de reunión a la que pertenece la carrera
 * @apiSuccess {String} tipo Tipo de carrera ['M', 'MJ', 'MA', 'C', 'MP', 'H', 'C2', 'C3', 'E']
 * @apiSuccess {String} pista Estado de la pista  ['CDI', 'RCN', 'RCO', 'PCO', 'PRE', 'CRE', 'CCO']
 * @apiSuccess {Integer} distancia Distancia de la carrera
 * @apiSuccess {Float} monto_premio Monto en pesos del premio
 * @apiSuccess {Integer} edad_desde Edad minima en años de los ejemplares que participan en la carrera
 * @apiSuccess {Integer} edad_hasta Edad máxima en años de los ejemplares que participan en la carrera
 * @apiSuccess {String} sexo Sexo de los ejemplares que participan en la carrera  ['H', 'M', 'T']
 * @apiSuccess {Integer} ganadas_desde Cantidad minima de carreras ganadas por el ejemplar para participar en la carrera
 * @apiSuccess {Integer} ganadas_hasta Cantidad máxima de carreras ganadas por el ejemplar para participar en la carrera
 * @apiSuccess {Float} kilos Kilos especificados en el programa
 * @apiSuccess {String} tiempo Tiempo registrado para el ganador de la carrera
 * @apiSuccessExample {json} /carreras/2016-09-07/2016-09-08
 *  HTTP/1.1 200 OK 
 *  [
 {
   "id": 16,
   "fecha": "2016-09-07 14:00:00",
   "numero": "1",
   "nombre": "GATITA RYE 2014(ALT)",
   "reunion": "83",
   "tipo": "MA",
   "pista": "RCN",
   "estado_pista": "P",
   "distancia": 1100,
   "monto_premio": "16632.00",
   "edad_desde": 4,
   "edad_hasta": 5,
   "sexo": "T",
   "ganadas_desde": 1,
   "ganadas_hasta": 1,
   "kilos": "57.00",
   "tiempo": "105371"
 },
 {
   "id": 17,
   "fecha": "2016-09-08 14:25:00",
   "numero": "2",
   "nombre": "SULTAN BID (ALT)",
   "reunion": "83",
   "tipo": "MA",
   "pista": "RCN",
   "estado_pista": "P",
   "distancia": 1100,
   "monto_premio": "15120.00",
   "edad_desde": 4,
   "edad_hasta": 4,
   "sexo": "H",
   "ganadas_desde": 0,
   "ganadas_hasta": 0,
   "kilos": "57.00",
   "tiempo": "106611"
 }
 ]

 * @apiError (Error 404) {json} FechaEnFormatoIncorrecto Alguno de los parámetros <code>fecha_inicio</code> o <code>fecha_fin</code>
 * no sigue el formato YYYY-mm-dd.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "message": "FechaEnFormatoIncorrecto"
 *     }
 * @apiError (Error 404) {json} FechaInvalida Alguno de los parámetros <code>fecha_inicio</code> o <code>fecha_fin</code>
 * no sigue el formato YYYY-MM-DD.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "message": "FechaInvalida"
 *     }
 */

/**
 * @api {GET} /carreras/ Listar Carreras habilitadas
 * @apiDescription Retorna un arreglo de objetos JSON de las carreras programadas que pueden recibir anotaciones de ejemplares,
 * en caso de no existir carreras programadas, se retorna un objeto JSON vacío.
 * @apiName GetCarrerasListar
 * @apiGroup Carreras
 * @apiSuccess {String} id Id de la Carrera
 * @apiSuccess {DateTime} fecha Fecha y hora de la carrera
 * @apiSuccess {Integer} numero Número de la carrera
 * @apiSuccess {String} nombre Nombre de la carrera
 * @apiSuccess {String} reunion Número de reunión a la que pertenece la carrera
 * @apiSuccess {String} tipo Tipo de carrera ['M', 'MJ', 'MA', 'C', 'MP', 'H', 'C2', 'C3', 'E']
 * @apiSuccess {String} pista Estado de la pista  ['CDI', 'RCN', 'RCO', 'PCO', 'PRE', 'CRE', 'CCO']
 * @apiSuccess {Integer} distancia Distancia de la carrera
 * @apiSuccess {Float} monto_premio Monto en pesos del premio
 * @apiSuccess {Integer} edad_desde Edad minima en años de los ejemplares que participan en la carrera
 * @apiSuccess {Integer} edad_hasta Edad máxima en años de los ejemplares que participan en la carrera
 * @apiSuccess {String} sexo Sexo de los ejemplares que participan en la carrera  ['H', 'M', 'T']
 * @apiSuccess {Integer} ganadas_desde Cantidad minima de carreras ganadas por el ejemplar para participar en la carrera
 * @apiSuccess {Integer} ganadas_hasta Cantidad máxima de carreras ganadas por el ejemplar para participar en la carrera
 * @apiSuccess {Float} kilos Kilos especificados en el programa
 * @apiSuccess {String} tiempo Tiempo registrado para el ganador de la carrera
 * @apiSuccessExample {json} /carreras/
 *  HTTP/1.1 200 OK
 [
     {
       "id": 16,
       "fecha": "2016-09-07 14:00:00",
       "numero": "1",
       "nombre": "GATITA RYE 2014(ALT)",
       "reunion": "83",
       "tipo": "MA",
       "pista": "RCN",
       "estado_pista": "P",
       "distancia": 1100,
       "monto_premio": "16632.00",
       "edad_desde": 4,
       "edad_hasta": 5,
       "sexo": "T",
       "ganadas_desde": 1,
       "ganadas_hasta": 1,
       "kilos": "57.00",
       "tiempo": "105371"
     },
     {
       "id": 17,
       "fecha": "2016-09-08 14:25:00",
       "numero": "2",
       "nombre": "SULTAN BID (ALT)",
       "reunion": "83",
       "tipo": "MA",
       "pista": "RCN",
       "estado_pista": "P",
       "distancia": 1100,
       "monto_premio": "15120.00",
       "edad_desde": 4,
       "edad_hasta": 4,
       "sexo": "H",
       "ganadas_desde": 0,
       "ganadas_hasta": 0,
       "kilos": "57.00",
       "tiempo": "106611"
     }
 ]
 */

// ********** F I N   C A R R E R A S **********//


// ********** P R O F E S I O N A L E S **********//
/**
 * @api {GET} /profesionales/:tipo_documento/:numero_documento Listar detalles de un profesional
 * @apiDescription Retorna el detalle de un profesional (Propietario, Cuidador, Jockey, Peon o Sereno),
 * en caso de no existir, se retorna el código HTTP 404.
 * @apiName GetProfesional
 * @apiGroup Profesionales
 * @apiParam {String} tipo_documento Tipo de Documento ['C.I', 'D.U', 'L.C', 'L.E', 'MAQ', 'PAS']
 * @apiParam {String} numero_documento Número de documento del profesional
 * @apiParamExample {String} /profesionales/C.I/2935631
 *  { "id": "20", "tipo_doc": "D.U", "num_doc": "7021548", "nombre": "PEÑALVA MARCELO R.", "email": "mail@mail.com",
 *  "propietario": 0, "cuidador": 1, "jockey": 0, "cuidador_jockey": 0, "capataz": 0, "peon": 0,
 *  "sereno": 0, "categoria": "4", "patente1": "R4", "patente2": "CDU" }
 * @apiSuccess {Integer} id Id del profesional
 * @apiSuccess {String} tipo_doc Tipo de Documento ['C.I', 'D.U', 'L.C', 'L.E', 'MAQ', 'PAS']
 * @apiSuccess {String} num_doc Número de Documento
 * @apiSuccess {String} nombre Nombre del profesional
 * @apiSuccess {String} email Correo electrónico del profesional
 * @apiSuccess {Boolean} propietario Define si el profesional es un propietario o no.
 * @apiSuccess {Boolean} cuidador Define si el profesional es un cuidador o no.
 * @apiSuccess {Boolean} jockey Define si el profesional es un jockey o no.
 * @apiSuccess {Boolean} cuidador_jockey Define si el profesional es cuidador y jockey o no.
 * @apiSuccess {Boolean} capataz Define si el profesional es un capataz o no.
 * @apiSuccess {Boolean} peon Define si el profesional es un peon o no.
 * @apiSuccess {Boolean} sereno Define si el profesional es un sereno o no.
 * @apiSuccess {String} categoria Categoria del profesional ['2', '3', '4', 'A', 'E', 'J', 'P', 'X']
 * @apiSuccess {String} patente1 Tipo de patente que posee el profesional
 * ['LP', 'CTE', 'AR', 'AZL', 'RS',	'RFL', 'CBA', 'M*',	'BV', 'VM', 'CCA', 'CDU', 'SR', 'VT*', 'SFE',
 * 'GGY', 'VGY', 'SJN', 'MAD', 'TUC', 'R4', 'MDP'', 'CHI', 'PS', 'BCH, 'TDL', 'PNA', 'GCH', 'CR', 'SI',
 * 'MZA', 'AZ', 'RDJ', 'SP', 'SFO', 'PDL', 'ST', 'VME', 'PER', 'VIC', 'NEU', 'GB', 'SDE', 'SL', 'USA',
 * 'LPT', 'MRS', 'NQN', 'R*', 'STA', '408',	'DOL', 'RN', 'VDM']
 * @apiSuccess {String} patente2 Tipo de patente que posee el profesional ['CAD', 'ÑÑÑ', 'AR', 'RS', 'CBA', 'LP', 'CDU', 'SFE', 'SJN', 'CDA',
 * 'PER', 'SI', 'BV', 'AZL', 'TUC', 'VT*',	'GCH',	'SR',	'M*',	'LPT',	'PAN',	'MZA',	'CHI',
 * 'VM', 'RDJ',	'USA', 'PS', 'TDL', 'CCA', 'VGY', 'GGY', 'PNA', 'SFO', 'R4', 'SL',
 * 'VME', 'RFL', '338', 'R*', 'DOL', 'SP', 'VDM', 'PDL', 'MDP', 'NQN', 'MRS' ]
 * @apiError (Error 404) {json} UsuarioNoExiste la combinación de <code>tipo_documento</code> y <code>num_documento</code>
 * no existe en la base de datos.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UsuarioNoExiste"
 *     }
 */
// ********** F I N   P R O F E S I O N A L E S **********//

// ******* R A T I F I C A C I O N E S ********** //
/**
 * @api {GET} /ratificaciones/porCarrera/:idCarrera Listar Ratificaciones por carrera
 * @apiDescription Retorna el listado de ejemplares ratificados en una carrera particular,
 * en caso de no existir la carrera, se retorna el código HTTP 404.
 * @apiName GetRatificaciones
 * @apiGroup Ratificaciones
 * @apiParam {Integer} idCarrera Id de la carrera a consultar
 * @apiParamExample {String} /anotaciones/293
 *  { "id": 20, "tipo_doc_caballeriza": "C.I", "num_doc_caballeriza": "8549655", "fecha_carrera": "2019-12-31",
 * "carrera_id": 45, "kg_programa": 57.0, "kg_reales": 56.9, "cod_hip": "HIPSI", "nombre_premio": "RASPAIL I",
 * "tomo": "1169", "folio": "115", "nombre_ejemplar": "GALICIA GOLD",
 * "tipo_doc_cuidador": "D.U", "num_doc_cuidador": "8291211", "tipo_doc_jockey": "C.I", "num_doc_jockey": "38180140",
 * "tipo_doc_capataz": "D.U", "num_doc_capataz": "14915854", "tipo_doc_peon": "D.U", "num_doc_peon": "8320828",
 * "tipo_doc_sereno": "D.U", "num_doc_sereno": "94626747", "puesto": 0, "orden": "", "partida": "", "tiro": 1},
 * { "id": 21, "tipo_doc_caballeriza": "C.I", "num_doc_caballeriza": "8549655", "fecha_carrera": "2019-12-31",
 * "carrera_id": 45, "kg_programa": 57.0, "kg_reales": 56.7, "cod_hip": "HIPSI", "nombre_premio": "RASPAIL I",
 * "tomo": "1161", "folio": "311", "nombre_ejemplar": "MALVADO SERIAL",
 * "tipo_doc_cuidador": "D.U", "num_doc_cuidador": "8291211", "tipo_doc_jockey": "C.I", "num_doc_jockey": "388391789",
 * "tipo_doc_capataz": "D.U", "num_doc_capataz": "14915854", "tipo_doc_peon": "D.U", "num_doc_peon": "8320828",
 * "tipo_doc_sereno": "D.U", "num_doc_sereno": "94626747", "puesto": 0, "orden": "", "partida": "", "tiro": 1},
 * @apiSuccess {Integer} id Id de la anotación
 * @apiSuccess {String} tipo_doc_caballeriza Tipo de Documento de la caballeriza ['C.I', 'D.U', 'L.C', 'L.E', 'MAQ', 'PAS']
 * @apiSuccess {String} num_doc_caballeriza Número de documento de la caballeriza
 * @apiSuccess {Date} fecha_carrera Fecha y Hora programada para la carrera
 * @apiSuccess {Integer} carrera_id Id de la carrera de la anotación
 * @apiSuccess {Float} kg_programa Kilogramos de programa
 * @apiSuccess {Float} kg_reales Kilogramos reales
 * @apiSuccess {String} cod_hip Código del hipódromo
 * @apiSuccess {String} nombre_premio Nombre del Premio
 * @apiSuccess {String} tomo Número de tomo del ejemplar
 * @apiSuccess {String} folio Número de folio del ejemplar
 * @apiSuccess {String} nombre_ejemplar Nombre del ejemplar anotado/ratificado
 * @apiSuccess {String} tipo_doc_cuidador Tipo de documento del cuidador
 * @apiSuccess {String} num_doc_cuidador Número de documento del cuidador del ejemplar
 * @apiSuccess {String} nombre_cuidador Nombre del cuidador del ejemplar
 * @apiSuccess {String} tipo_doc_jockey  Tipo de documento del jockey
 * @apiSuccess {String} num_doc_jockey Número de documento del jockey
 * @apiSuccess {String} nombre_doc_jockey Nombre del jockey
 * @apiSuccess {String} puesto Puesto en que finalizó el ejemplar en la carrera o 'RV' si se retiró
 * @apiSuccess {String} orden Número con el que va identificado el ejemplar en la carrera
 * @apiSuccess {Integer} partida Número de partidor en la carrera
 * @apiSuccess {Boolean} tiro Define si el ejemplar va de tiro o no
 * @apiSuccess {Boolean} diferencia Describe la distancia con respecto al competidor más cercano
 * @apiSuccess {Boolean} diferencia_acumulada Describe la distancia con respecto al ganador de la carrera
 * @apiSuccess {Boolean} monto_premio Monto ganado por el ejemplar
 * @apiError (Error 404) {json} CarreraNoExiste El <code>id</code> de la carrera no existe en la base de datos.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "CarreraNoExiste"
 *     }
 */

// **********  F I N    R A T I F I C A C I O N E S  **********//

// **********  S A N C I O N E S  **********//
/**
 * @api {GET} /sanciones/profesionales/:tipo_doc/:num_doc Sanciones de profesionales
 * @apiDescription Retorna una lista de las sanciones de profesionales
 * según el tipo y número de documento, en caso de no existir sanciones, se retorna un objeto JSON vacío.
 * @apiName GetSancionesProfesionales
 * @apiGroup Sanciones
 * @apiParam  {String} tipo_doc Tipo de documento del profesional  ['C.I', 'D.U', 'L.C', 'L.E', 'MAQ', 'PAS']
 * @apiParam  {String} num_doc Número de documento del profesional
 * @apiParamExample {String} /sanciones/profesionales/D.U/95501825
 * { "id": 1, "fecha_desde": "2015-11-13","fecha_hasta": "2015-11-21", "tipo_doc": "D.U", "num_doc": "95501825",
 * "descripcion": "POR RECLAMAR INJUSTIFICADAMENTE." },
 * { "id": 2, "fecha_desde": "2016-09-20","fecha_hasta": "2016-09-30", "tipo_doc": "D.U", "num_doc": "95501825",
 * "descripcion": "POR PERDER SU LINEA A LA ALTURA DE LOS 300 MTS. FINALES." }
 * @apiSuccess {Object} Sanciones Objeto JSON con los campos  'id', 'fecha_desde', 'fecha_hasta', 'descripcion'
 * @apiSuccess {String} id Id de la sanción
 * @apiSuccess {Date} fecha_desde Fecha de inicio de la sanción
 * @apiSuccess {Date} fecha_hasta Fecha fin de la sanción
 * @apiSuccess {String} tipo_doc Tipo de documento del profesional, ejemplar o caballeriza  ['C.I', 'D.U', 'L.C', 'L.E', 'MAQ', 'PAS']
 * @apiSuccess {String} num_doc Número de documento del profesional, ejemplar o caballeriza
 * @apiSuccess {String} descripcion Texto descriptivo de la sanción
 */
//TODO: agregar el campo de caballerizas

/**
 * @api {GET} /sanciones/caballerizas/:tipo_doc/:num_doc Sanciones de caballerizas
 * @apiDescription Retorna una lista de las sanciones de caballeriza
 * según el tipo y número de documento, en caso de no existir sanciones, se retorna un objeto JSON vacío.
 * @apiName GetSancionesCaballerizas
 * @apiGroup Sanciones
 * @apiParam  {String} tipo_doc Tipo de documento del caballeriza  ['C.I', 'D.U', 'L.C', 'L.E', 'MAQ', 'PAS']
 * @apiParam  {String} num_doc Número de documento del caballeriza
 * @apiParamExample {String} /sanciones/caballerizas/D.U/95501825
 * { "id": 1, "fecha_desde": "2015-11-13","fecha_hasta": "2015-11-21", "tipo_doc": "D.U", "num_doc": "95501825",
 * "descripcion": "POR RECLAMAR INJUSTIFICADAMENTE." },
 * { "id": 2, "fecha_desde": "2016-09-20","fecha_hasta": "2016-09-30", "tipo_doc": "D.U", "num_doc": "95501825",
 * "descripcion": "POR PERDER SU LINEA A LA ALTURA DE LOS 300 MTS. FINALES." }
 * @apiSuccess {Object} Sanciones Objeto JSON con los campos  'id', 'fecha_desde', 'fecha_hasta', 'descripcion'
 * @apiSuccess {String} id Id de la sanción
 * @apiSuccess {Date} fecha_desde Fecha de inicio de la sanción
 * @apiSuccess {Date} fecha_hasta Fecha fin de la sanción
 * @apiSuccess {String} tipo_doc Tipo de documento de la caballeriza  ['C.I', 'D.U', 'L.C', 'L.E', 'MAQ', 'PAS']
 * @apiSuccess {String} num_doc Número de documento de la caballeriza
 * @apiSuccess {String} descripcion Texto descriptivo de la sanción
 */

/**
 * @api {GET} /sanciones/ejemplars/:tomo/:folio Sanciones de ejemplares
 * @apiDescription Retorna una lista de las sanciones de ejemplar
 * según el tipo y número de documento, en caso de no existir sanciones, se retorna un objeto JSON vacío.
 * @apiName GetSancionesCaballos
 * @apiGroup Sanciones
 * @apiParam  {String} tomo Tipo de documento del ejemplar  ['C.I', 'D.U', 'L.C', 'L.E', 'MAQ', 'PAS']
 * @apiParam  {String} folio Número de documento del ejemplar
 * @apiParamExample {String} /sanciones/ejemplars/4598/254
 * { "id": 1, "fecha_desde": "2015-11-13","fecha_hasta": "2015-11-21", "tomo": "4598", "folio": "254",
 * "descripcion": "POR RECLAMAR INJUSTIFICADAMENTE." },
 * { "id": 2, "fecha_desde": "2016-09-20","fecha_hasta": "2016-09-30", "tomo": "4598", "folio": "254",
 * "descripcion": "POR PERDER SU LINEA A LA ALTURA DE LOS 300 MTS. FINALES." }
 * @apiSuccess {Object} Sanciones Objeto JSON con los campos  'id', 'fecha_desde', 'fecha_hasta', 'descripcion'
 * @apiSuccess {String} id Id de la sanción
 * @apiSuccess {Date} fecha_desde Fecha de inicio de la sanción
 * @apiSuccess {Date} fecha_hasta Fecha fin de la sanción
 * @apiSuccess {String} tomo Tomo que identifica al ejemplar
 * @apiSuccess {String} folio Folio que identifica al ejemplar
 * @apiSuccess {String} descripcion Texto descriptivo de la sanción
 */

// ********** F I N   S A N C I O N E S  **********//