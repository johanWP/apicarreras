/**
 * @api {GET} /carreras/porFecha/:fecha_inicio/:fecha_fin Listar Carreras por fecha
 * @apiDescription Retorna el listado de carreras entre dos fechas, ambas inclusive,
 * en caso de no existir carreras, se retorna un objeto JSON vacío.
 * @apiName GetCarrerasPorFecha
 * @apiGroup Carreras
 * @apiParam  {Date} fecha_inicio Fecha de inicio de la consulta en formato YYYY-MM-DD, inclusive.
 * @apiParam  {Date} fecha_fin Fecha de fin de la consulta en formato YYYY-MM-DD, inclusive.
 * @apiParamExample {Date} /carreras/porFecha/2016-09-13/2016-09-14
 * {"id":1,"fecha_carrera":"2016-09-02 14:00:00","tipo_doc_caballeriza":"MAQ","num_doc_caballeriza":"55502",
 * "nombre_caballeriza":"BOCA PAILA (AZL)","carrera_id":1,"kg_programa":"57.00","kg_reales":"57.00","cod_hip":"HIPSI",
 * "nombre_premio":"QUE FELICIDAD 2007","tomo":"1157","folio":"513","nombre_ejemplar":"VUTAN","tipo_doc_cuidador":"D.U",
 * "num_doc_cuidador":"94626774","tipo_doc_jockey":"D.U","num_doc_jockey":"32591406","puesto":"01","orden":"11",
 * "diferencia":"","diferencia_acumulada":"1\/2pzo","monto_premio":"29484.00"}
 * @apiSuccess {Object} Carreras Objeto JSON con los campos  'fecha', 'numero', 'nombre', 'reunion',
 'tipo', 'pista', 'distancia', 'monto_premio', 'edad_desde', 'edad_hasta', 'sexo',
 'ganadas_desde', 'ganadas_hasta', 'kilos', 'tiempo'
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
 * @apiError (Error 400) {json} FechaEnFormatoIncorrecto Alguno de los parámetros <code>fecha_inicio</code> o <code>fecha_fin</code>
 * no siguen el formato YYYY-MM-DD.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "FechaEnFormatoIncorrecto"
 *     }
 * @apiError (Error 400) {json} FechaInvalida Alguno de los parámetros <code>fecha_inicio</code> o <code>fecha_fin</code>
 * no siguen el formato YYYY-MM-DD.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "FechaInvalida"
 *     }
 */

/**
 * @api {GET} /ratificaciones/porCarrera/:idCarrera Listar Ratificaciones por carrera
 * @apiDescription Retorna el listado de ejemplares ratificados en una carrera particular,
 * en caso de no existir la carrera, se retorna el código HTTP 404.
 * @apiName GetRatificaciones
 * @apiGroup Ratificaciones
 * @apiParam {Integer} idCarrera Id de la carrera a consultar
 * @apiParamExample {String} /anotaciones/293
 *  {"id":1,"fecha_carrera":"2016-09-02 14:00:00","tipo_doc_caballeriza":"MAQ","num_doc_caballeriza":"55502",
 *  "nombre_caballeriza":"BOCA PAILA (AZL)","carrera_id":1,"kg_programa":"57.00","kg_reales":"57.00","cod_hip":"HIPSI",
 *  "nombre_premio":"QUE FELICIDAD 2007","tomo":"1157","folio":"513","nombre_ejemplar":"VUTAN",
 *  "tipo_doc_cuidador":"D.U","num_doc_cuidador":"94626774","tipo_doc_jockey":"D.U","num_doc_jockey":"32591406",
 *  "puesto":"01","orden":"11","diferencia":"","diferencia_acumulada":"1\/2pzo","monto_premio":"29484.00"},
 *  {"id":2,"fecha_carrera":"2016-09-02 14:00:00","tipo_doc_caballeriza":"MAQ","num_doc_caballeriza":"55160",
 *  "nombre_caballeriza":"PUEY (LP)","carrera_id":1,"kg_programa":"57.00","kg_reales":"57.00","cod_hip":"HIPSI",
 *  "nombre_premio":"QUE FELICIDAD 2007","tomo":"1156","folio":"930","nombre_ejemplar":"SONG FOR SALE",
 *  "tipo_doc_cuidador":"D.U","num_doc_cuidador":"34373863","tipo_doc_jockey":"D.U","num_doc_jockey":"36360906",
 *  "puesto":"02","orden":"07","diferencia":"1\/2pzo","diferencia_acumulada":"1\/2pzo","monto_premio":"10319.00"}
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
