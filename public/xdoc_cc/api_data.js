define({ "api": [
  {
    "type": "POST",
    "url": "/anotaciones/",
    "title": "Guardar una Anotación",
    "description": "<p>Recibe los campos necesarios para realizar una anotación, devuelve un error HTTP 400 en caso de no cumplir con los requerimientos.</p>",
    "name": "PostAnotaciones",
    "group": "Anotaciones",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "idCarrera",
            "description": "<p>Id de la carrera donde se va a realizar la anotación</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipo_doc_caballeriza",
            "description": "<p>Tipo de Documento de la caballeriza ['C.I', 'D.U', 'L.C', 'L.E', 'MAQ', 'PAS']</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "num_doc_caballeriza",
            "description": "<p>Número de documento de la caballeriza</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fecha_carrera",
            "description": "<p>Fecha y Hora programada para la carrera</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "kg_programa",
            "description": "<p>Kilogramos de programa</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "kg_reales",
            "description": "<p>Kilogramos reales</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cod_hip",
            "description": "<p>Código del hipódromo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre_premio",
            "description": "<p>Nombre del Premio</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tomo",
            "description": "<p>Número de tomo del ejemplar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "folio",
            "description": "<p>Número de folio del ejemplar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre_ejemplar",
            "description": "<p>Nombre del ejemplar anotado/ratificado</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipo_doc_cuidador",
            "description": "<p>Tipo de documento del cuidador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "num_doc_cuidador",
            "description": "<p>Nombre del cuidador del ejemplar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipo_doc_jockey",
            "description": "<p>Tipo de documento del jockey</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "num_doc_jockey",
            "description": "<p>Nombre del jockey</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipo_doc_capataz",
            "description": "<p>Tipo de documento del capataz</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "num_doc_capataz",
            "description": "<p>Nombre del capataz</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipo_doc_peon",
            "description": "<p>Tipo de documento del peon</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "num_doc_peon",
            "description": "<p>Nombre del peon</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipo_doc_sereno",
            "description": "<p>Tipo de documento del sereno</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "num_doc_sereno",
            "description": "<p>Nombre del sereno</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "tiro",
            "description": "<p>Define si el ejemplar va de tiro o no</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "/anotaciones/",
          "content": " { \"id\": 20, \"tipo_doc_caballeriza\": \"C.I\", \"num_doc_caballeriza\": \"8549655\", \"fecha_carrera\": \"2019-12-31\",\n\"kg_programa\": 57.0, \"kg_reales\": 56.9, \"cod_hip\": \"HIPSI\", \"nombre_premio\": \"RASPAIL I\",\n\"tomo\": \"1169\", \"folio\": \"115\", \"nombre_ejemplar\": \"GALICIA GOLD\",\n\"tipo_doc_cuidador\": \"D.U\", \"num_doc_cuidador\": \"8291211\", \"tipo_doc_jockey\": \"C.I\", \"num_doc_jockey\": \"38180140\",\n\"tipo_doc_capataz\": \"D.U\", \"num_doc_capataz\": \"14915854\", \"tipo_doc_peon\": \"D.U\", \"num_doc_peon\": \"8320828\",\n\"tipo_doc_sereno\": \"D.U\", \"num_doc_sereno\": \"94626747\", \"tiro\": 1},",
          "type": "String"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "json",
            "optional": false,
            "field": "CarreraNoExiste",
            "description": "<p>El <code>id</code> de la carrera no existe en la base de datos.</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "json",
            "optional": false,
            "field": "DatosIncorrectos",
            "description": "<p>Los datos no están completos o tienen el formato incorrecto.</p>"
          },
          {
            "group": "Error 400",
            "type": "json",
            "optional": false,
            "field": "RegistroDuplicado",
            "description": "<p>El ejemplar ya se encuentra registrado para esa carrera.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CarreraNoExiste\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Bad Request\n{\n  \"error\": \"DatosIncorrectos\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"RegistroDuplicado\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Bad Request\n{\n  \"error\": \"DatosIncorrectos\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"mensaje\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/doc_cc/apidoc.js",
    "groupTitle": "Anotaciones"
  },
  {
    "type": "GET",
    "url": "/caballerizas/:id",
    "title": "Detalle de caballeriza",
    "description": "<p>Retorna el detalle de una caballeriza identificada por el campo Id, si no existe la caballeriza se retorna un error HTTP 404.</p>",
    "name": "GetCaballerizas",
    "group": "Caballerizas",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la caballeriza</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "/caballerizas/14318",
          "content": "{ \"id\": 14318, \"tipo_doc\": \"D.U\", \"num_doc\": \"10958925\", \"nombre\": \"11LATO (V*T*)\" }",
          "type": "Integer"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la Caballeriza</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tipo_doc",
            "description": "<p>Tipo de documento ['D.U', 'MAQ', 'C.I']</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "num_doc",
            "description": "<p>Número de documento</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre de la caballeriza</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "json",
            "optional": false,
            "field": "CaballerizaNoExiste",
            "description": "<p>El <code>id</code> de la caballeriza no existe en la base de datos.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CaballerizaNoExiste\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/doc_cc/apidoc.js",
    "groupTitle": "Caballerizas"
  },
  {
    "type": "GET",
    "url": "/caballerizas/",
    "title": "Listar Caballerizas",
    "description": "<p>Retorna una lista de las caballerizas registradas en el sistema, ordenadas alfabéticamente, si no existen caballerizas se retorna un objeto JSON vacío.</p>",
    "name": "GetCaballerizasListar",
    "group": "Caballerizas",
    "parameter": {
      "examples": [
        {
          "title": "/caballerizas/",
          "content": "{ \"id\": 14318, \"tipo_doc\": \"D.U\", \"num_doc\": \"10958925\", \"nombre\": \"11LATO (V*T*)\" },\n{ \"id\": 22036, \"tipo_doc\": \"MAQ\", \"num_doc\": \"2139\", \"nombre\": \"AGUSTIN ROCA\" },\n{ \"id\": 22036, \"tipo_doc\": \"MAQ\", \"num_doc\": \"58467\", \"nombre\": \"ESPERANZA (SFE)\" }",
          "type": "Null"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la Caballeriza</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tipo_doc",
            "description": "<p>Tipo de documento ['D.U', 'MAQ']</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "num_doc",
            "description": "<p>Número de documento</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre de la caballeriza</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/doc_cc/apidoc.js",
    "groupTitle": "Caballerizas"
  },
  {
    "type": "GET",
    "url": "/carreras/porID/:idCarrera",
    "title": "Consulta por Id",
    "description": "<p>Retorna el detalle de una carerra específica, en caso de no existir el id de la carrera, se retorna un error HTTP 404.</p>",
    "name": "GetCarreras",
    "group": "Carreras",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "idCarrera",
            "description": "<p>Id que identifica a la carrera.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la Carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "fecha",
            "description": "<p>Fecha y hora de la carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "numero",
            "description": "<p>Número de la carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre de la carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reunion",
            "description": "<p>Número de reunión a la que pertenece la carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tipo",
            "description": "<p>Tipo de carrera ['M', 'MJ', 'MA', 'C', 'MP', 'H', 'C2', 'C3', 'E']</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pista",
            "description": "<p>Estado de la pista  ['CDI', 'RCN', 'RCO', 'PCO', 'PRE', 'CRE', 'CCO']</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "distancia",
            "description": "<p>Distancia de la carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "monto_premio",
            "description": "<p>Monto en pesos del premio</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "edad_desde",
            "description": "<p>Edad minima en años de los ejemplares que participan en la carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "edad_hasta",
            "description": "<p>Edad máxima en años de los ejemplares que participan en la carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sexo",
            "description": "<p>Sexo de los ejemplares que participan en la carrera  ['H', 'M', 'T']</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "ganadas_desde",
            "description": "<p>Cantidad minima de carreras ganadas por el ejemplar para participar en la carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "ganadas_hasta",
            "description": "<p>Cantidad máxima de carreras ganadas por el ejemplar para participar en la carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "kilos",
            "description": "<p>Kilos especificados en el programa</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tiempo",
            "description": "<p>Tiempo registrado para el ganador de la carrera</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "/carreras/16",
          "content": "HTTP/1.1 200 OK\n{\n   \"id\": 16,\n   \"fecha\": \"2016-09-07 14:00:00\",\n   \"numero\": \"1\",\n   \"nombre\": \"GATITA RYE 2014(ALT)\",\n   \"reunion\": \"83\",\n   \"tipo\": \"MA\",\n   \"pista\": \"RCN\",\n   \"estado_pista\": \"P\",\n   \"distancia\": 1100,\n   \"monto_premio\": \"16632.00\",\n   \"edad_desde\": 4,\n   \"edad_hasta\": 5,\n   \"sexo\": \"T\",\n   \"ganadas_desde\": 1,\n   \"ganadas_hasta\": 1,\n   \"kilos\": \"57.00\",\n   \"tiempo\": \"105371\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "json",
            "optional": false,
            "field": "CarreraNoExiste",
            "description": "<p>El <code>id</code> de la carrera no existe en la base de datos.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"CarreraNoExiste\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/doc_cc/apidoc.js",
    "groupTitle": "Carreras"
  },
  {
    "type": "GET",
    "url": "/carreras/",
    "title": "Listar Carreras habilitadas",
    "description": "<p>Retorna un arreglo de objetos JSON de las carreras programadas que pueden recibir anotaciones de ejemplares, en caso de no existir carreras programadas, se retorna un objeto JSON vacío.</p>",
    "name": "GetCarrerasListar",
    "group": "Carreras",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la Carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "fecha",
            "description": "<p>Fecha y hora de la carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "numero",
            "description": "<p>Número de la carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre de la carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reunion",
            "description": "<p>Número de reunión a la que pertenece la carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tipo",
            "description": "<p>Tipo de carrera ['M', 'MJ', 'MA', 'C', 'MP', 'H', 'C2', 'C3', 'E']</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pista",
            "description": "<p>Estado de la pista  ['CDI', 'RCN', 'RCO', 'PCO', 'PRE', 'CRE', 'CCO']</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "distancia",
            "description": "<p>Distancia de la carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "monto_premio",
            "description": "<p>Monto en pesos del premio</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "edad_desde",
            "description": "<p>Edad minima en años de los ejemplares que participan en la carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "edad_hasta",
            "description": "<p>Edad máxima en años de los ejemplares que participan en la carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sexo",
            "description": "<p>Sexo de los ejemplares que participan en la carrera  ['H', 'M', 'T']</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "ganadas_desde",
            "description": "<p>Cantidad minima de carreras ganadas por el ejemplar para participar en la carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "ganadas_hasta",
            "description": "<p>Cantidad máxima de carreras ganadas por el ejemplar para participar en la carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "kilos",
            "description": "<p>Kilos especificados en el programa</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tiempo",
            "description": "<p>Tiempo registrado para el ganador de la carrera</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "/carreras/",
          "content": "HTTP/1.1 200 OK\n[\n    {\n      \"id\": 16,\n      \"fecha\": \"2016-09-07 14:00:00\",\n      \"numero\": \"1\",\n      \"nombre\": \"GATITA RYE 2014(ALT)\",\n      \"reunion\": \"83\",\n      \"tipo\": \"MA\",\n      \"pista\": \"RCN\",\n      \"estado_pista\": \"P\",\n      \"distancia\": 1100,\n      \"monto_premio\": \"16632.00\",\n      \"edad_desde\": 4,\n      \"edad_hasta\": 5,\n      \"sexo\": \"T\",\n      \"ganadas_desde\": 1,\n      \"ganadas_hasta\": 1,\n      \"kilos\": \"57.00\",\n      \"tiempo\": \"105371\"\n    },\n    {\n      \"id\": 17,\n      \"fecha\": \"2016-09-08 14:25:00\",\n      \"numero\": \"2\",\n      \"nombre\": \"SULTAN BID (ALT)\",\n      \"reunion\": \"83\",\n      \"tipo\": \"MA\",\n      \"pista\": \"RCN\",\n      \"estado_pista\": \"P\",\n      \"distancia\": 1100,\n      \"monto_premio\": \"15120.00\",\n      \"edad_desde\": 4,\n      \"edad_hasta\": 4,\n      \"sexo\": \"H\",\n      \"ganadas_desde\": 0,\n      \"ganadas_hasta\": 0,\n      \"kilos\": \"57.00\",\n      \"tiempo\": \"106611\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/doc_cc/apidoc.js",
    "groupTitle": "Carreras"
  },
  {
    "type": "GET",
    "url": "/carreras/porFecha/:fecha_inicio/:fecha_fin",
    "title": "Consulta por fecha",
    "description": "<p>Retorna un arreglo de objetos JSON con detalle de las carreras entre dos fechas, ambas inclusive, en caso de no existir carreras, se retorna un objeto JSON vacío.</p>",
    "name": "GetCarrerasPorFecha",
    "group": "Carreras",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fecha_inicio",
            "description": "<p>Fecha de inicio de la consulta en formato YYYY-mm-dd, inclusive.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fecha_fin",
            "description": "<p>Fecha de fin de la consulta en formato YYYY-mm-dd, inclusive.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la Carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "fecha",
            "description": "<p>Fecha y hora de la carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "numero",
            "description": "<p>Número de la carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre de la carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reunion",
            "description": "<p>Número de reunión a la que pertenece la carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tipo",
            "description": "<p>Tipo de carrera ['M', 'MJ', 'MA', 'C', 'MP', 'H', 'C2', 'C3', 'E']</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pista",
            "description": "<p>Estado de la pista  ['CDI', 'RCN', 'RCO', 'PCO', 'PRE', 'CRE', 'CCO']</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "distancia",
            "description": "<p>Distancia de la carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "monto_premio",
            "description": "<p>Monto en pesos del premio</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "edad_desde",
            "description": "<p>Edad minima en años de los ejemplares que participan en la carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "edad_hasta",
            "description": "<p>Edad máxima en años de los ejemplares que participan en la carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sexo",
            "description": "<p>Sexo de los ejemplares que participan en la carrera  ['H', 'M', 'T']</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "ganadas_desde",
            "description": "<p>Cantidad minima de carreras ganadas por el ejemplar para participar en la carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "ganadas_hasta",
            "description": "<p>Cantidad máxima de carreras ganadas por el ejemplar para participar en la carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "kilos",
            "description": "<p>Kilos especificados en el programa</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tiempo",
            "description": "<p>Tiempo registrado para el ganador de la carrera</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "/carreras/2016-09-07/2016-09-08",
          "content": "HTTP/1.1 200 OK \n[\n{\n  \"id\": 16,\n  \"fecha\": \"2016-09-07 14:00:00\",\n  \"numero\": \"1\",\n  \"nombre\": \"GATITA RYE 2014(ALT)\",\n  \"reunion\": \"83\",\n  \"tipo\": \"MA\",\n  \"pista\": \"RCN\",\n  \"estado_pista\": \"P\",\n  \"distancia\": 1100,\n  \"monto_premio\": \"16632.00\",\n  \"edad_desde\": 4,\n  \"edad_hasta\": 5,\n  \"sexo\": \"T\",\n  \"ganadas_desde\": 1,\n  \"ganadas_hasta\": 1,\n  \"kilos\": \"57.00\",\n  \"tiempo\": \"105371\"\n},\n{\n  \"id\": 17,\n  \"fecha\": \"2016-09-08 14:25:00\",\n  \"numero\": \"2\",\n  \"nombre\": \"SULTAN BID (ALT)\",\n  \"reunion\": \"83\",\n  \"tipo\": \"MA\",\n  \"pista\": \"RCN\",\n  \"estado_pista\": \"P\",\n  \"distancia\": 1100,\n  \"monto_premio\": \"15120.00\",\n  \"edad_desde\": 4,\n  \"edad_hasta\": 4,\n  \"sexo\": \"H\",\n  \"ganadas_desde\": 0,\n  \"ganadas_hasta\": 0,\n  \"kilos\": \"57.00\",\n  \"tiempo\": \"106611\"\n}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "json",
            "optional": false,
            "field": "FechaEnFormatoIncorrecto",
            "description": "<p>Alguno de los parámetros <code>fecha_inicio</code> o <code>fecha_fin</code> no sigue el formato YYYY-mm-dd.</p>"
          },
          {
            "group": "Error 404",
            "type": "json",
            "optional": false,
            "field": "FechaInvalida",
            "description": "<p>Alguno de los parámetros <code>fecha_inicio</code> o <code>fecha_fin</code> no sigue el formato YYYY-MM-DD.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"FechaEnFormatoIncorrecto\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"FechaInvalida\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/doc_cc/apidoc.js",
    "groupTitle": "Carreras"
  },
  {
    "type": "GET",
    "url": "/ejemplares/PorNombre/:nombre",
    "title": "Consulta por nombre",
    "description": "<p>Retorna el un arreglo de objetos con el detalle de los ejemplares que tienen un nombre coincidente con el parámetro enviado, si no existe ninguno se devuelve un error HTTP 404.</p>",
    "name": "GetEjemplarPorNombre",
    "group": "Ejemplares",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "/ejemplares/PorNombre/negr",
            "description": "<p>nombre Nombre o parte del nombre del ejemplar</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id del ejemplar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tomo",
            "description": "<p>Tomo que identifica al ejemplar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "folio",
            "description": "<p>Folio que identifica al ejemplar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del ejemplar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sexo",
            "description": "<p>Nombre del ejemplar (H, M)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "fecha_nacimiento",
            "description": "<p>Fecha de nacimiento del ejemplar</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "fecha_muerte",
            "description": "<p>Fecha de muerte del ejemplar</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "ganadas_comunes",
            "description": "<p>Cantidad de carreras comunes ganadas</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "ganadas_clasicos",
            "description": "<p>Cantidad de clásicos ganadas</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "ganadas_grupo",
            "description": "<p>Cantidad de carreras de grupo ganadas</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "ganadas_internacionales",
            "description": "<p>Cantidad de carreras internacionales ganadas</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "ganadas_series",
            "description": "<p>Cantidad de carreras de series ganadas</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "/ejemplares/PorNombre/negr",
          "content": "   HTTP/1.1 200 OK\n[\n    {\n      \"id\": 10029,\n      \"tomo\": \"1041\",\n      \"folio\": \"369\",\n      \"nombre\": \"NEGRA ALEGRE\",\n      \"sexo\": \"H\",\n      \"fecha_nacimiento\": \"1995-11-19\",\n      \"fecha_muerte\": \"N/A\",\n      \"ganadas_comunes\": 0,\n      \"ganadas_clasicos\": 0,\n      \"ganadas_grupo\": null,\n      \"ganadas_internacionales\": 0,\n      \"ganadas_series\": 0\n    },\n    {\n      \"id\": 57586,\n      \"tomo\": \"803\",\n      \"folio\": \"80\",\n      \"nombre\": \"NEGRA ALTIVA\",\n      \"sexo\": \"H\",\n      \"fecha_nacimiento\": \"1986-10-17\",\n      \"fecha_muerte\": \"N/A\",\n      \"ganadas_comunes\": 0,\n      \"ganadas_clasicos\": 0,\n      \"ganadas_grupo\": null,\n      \"ganadas_internacionales\": 0,\n      \"ganadas_series\": 0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "json",
            "optional": false,
            "field": "EjemplarNoExiste",
            "description": "<p>No hay ejemplares con ese nombre en la base de datos.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"EjemplarNoExiste\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/doc_cc/apidoc.js",
    "groupTitle": "Ejemplares"
  },
  {
    "type": "GET",
    "url": "/ejemplares/porTomoFolio/:tomo/:folio",
    "title": "Consulta por Tomo y Folio",
    "description": "<p>Retorna el detalle de un ejemplar identificado por tomo y folio, si no existe el ejemplar se retorna un error HTTP 404.</p>",
    "name": "GetEjemplarPorTomo",
    "group": "Ejemplares",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tomo",
            "description": "<p>Tomo que identifica al ejemplar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "folio",
            "description": "<p>Folio que identifica al ejemplar</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id del ejemplar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tomo",
            "description": "<p>Tomo que identifica al ejemplar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "folio",
            "description": "<p>Folio que identifica al ejemplar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del ejemplar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sexo",
            "description": "<p>Sexo del ejemplar (H, M)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "fecha_nacimiento",
            "description": "<p>Fecha de nacimiento del ejemplar</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "fecha_muerte",
            "description": "<p>Fecha de muerte del ejemplar</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "ganadas_comunes",
            "description": "<p>Cantidad de carreras comunes ganadas</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "ganadas_clasicos",
            "description": "<p>Cantidad de clásicos ganadas</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "ganadas_grupo",
            "description": "<p>Cantidad de carreras de grupo ganadas</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "ganadas_internacionales",
            "description": "<p>Cantidad de carreras internacionales ganadas</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "ganadas_series",
            "description": "<p>Cantidad de carreras de series ganadas</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n  \"id\": 10029,\n  \"tomo\": \"1041\",\n  \"folio\": \"369\",\n  \"nombre\": \"NEGRA ALEGRE\",\n  \"sexo\": \"H\",\n  \"fecha_nacimiento\": \"1995-11-19\",\n  \"fecha_muerte\": \"N/A\",\n  \"ganadas_comunes\": 0,\n  \"ganadas_clasicos\": 0,\n  \"ganadas_grupo\": null,\n  \"ganadas_internacionales\": 0,\n  \"ganadas_series\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "json",
            "optional": false,
            "field": "EjemplarNoExiste",
            "description": "<p>La combinación de <code>tomo</code> y <code>folio</code> del ejemplar no existe en la base de datos.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"EjemplarNoExiste\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/doc_cc/apidoc.js",
    "groupTitle": "Ejemplares"
  },
  {
    "type": "GET",
    "url": "/profesionales/:tipo_documento/:numero_documento",
    "title": "Listar detalles de un profesional",
    "description": "<p>Retorna el detalle de un profesional (Propietario, Cuidador, Jockey, Peon o Sereno), en caso de no existir, se retorna el código HTTP 404.</p>",
    "name": "GetProfesional",
    "group": "Profesionales",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipo_documento",
            "description": "<p>Tipo de Documento ['C.I', 'D.U', 'L.C', 'L.E', 'MAQ', 'PAS']</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "numero_documento",
            "description": "<p>Número de documento del profesional</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "/profesionales/C.I/2935631",
          "content": "{ \"id\": \"20\", \"tipo_doc\": \"D.U\", \"num_doc\": \"7021548\", \"nombre\": \"PEÑALVA MARCELO R.\", \"email\": \"mail@mail.com\",\n\"propietario\": 0, \"cuidador\": 1, \"jockey\": 0, \"cuidador_jockey\": 0, \"capataz\": 0, \"peon\": 0,\n\"sereno\": 0, \"categoria\": \"4\", \"patente1\": \"R4\", \"patente2\": \"CDU\" }",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id del profesional</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tipo_doc",
            "description": "<p>Tipo de Documento ['C.I', 'D.U', 'L.C', 'L.E', 'MAQ', 'PAS']</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "num_doc",
            "description": "<p>Número de Documento</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del profesional</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico del profesional</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "propietario",
            "description": "<p>Define si el profesional es un propietario o no.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "cuidador",
            "description": "<p>Define si el profesional es un cuidador o no.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "jockey",
            "description": "<p>Define si el profesional es un jockey o no.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "cuidador_jockey",
            "description": "<p>Define si el profesional es cuidador y jockey o no.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "capataz",
            "description": "<p>Define si el profesional es un capataz o no.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "peon",
            "description": "<p>Define si el profesional es un peon o no.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "sereno",
            "description": "<p>Define si el profesional es un sereno o no.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Categoria del profesional ['2', '3', '4', 'A', 'E', 'J', 'P', 'X']</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patente1",
            "description": "<p>Tipo de patente que posee el profesional ['LP', 'CTE', 'AR', 'AZL', 'RS',\t'RFL', 'CBA', 'M*',\t'BV', 'VM', 'CCA', 'CDU', 'SR', 'VT*', 'SFE', 'GGY', 'VGY', 'SJN', 'MAD', 'TUC', 'R4', 'MDP'', 'CHI', 'PS', 'BCH, 'TDL', 'PNA', 'GCH', 'CR', 'SI', 'MZA', 'AZ', 'RDJ', 'SP', 'SFO', 'PDL', 'ST', 'VME', 'PER', 'VIC', 'NEU', 'GB', 'SDE', 'SL', 'USA', 'LPT', 'MRS', 'NQN', 'R*', 'STA', '408',\t'DOL', 'RN', 'VDM']</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patente2",
            "description": "<p>Tipo de patente que posee el profesional ['CAD', 'ÑÑÑ', 'AR', 'RS', 'CBA', 'LP', 'CDU', 'SFE', 'SJN', 'CDA', 'PER', 'SI', 'BV', 'AZL', 'TUC', 'VT*',\t'GCH',\t'SR',\t'M*',\t'LPT',\t'PAN',\t'MZA',\t'CHI', 'VM', 'RDJ',\t'USA', 'PS', 'TDL', 'CCA', 'VGY', 'GGY', 'PNA', 'SFO', 'R4', 'SL', 'VME', 'RFL', '338', 'R*', 'DOL', 'SP', 'VDM', 'PDL', 'MDP', 'NQN', 'MRS' ]</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "json",
            "optional": false,
            "field": "UsuarioNoExiste",
            "description": "<p>la combinación de <code>tipo_documento</code> y <code>num_documento</code> no existe en la base de datos.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UsuarioNoExiste\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/doc_cc/apidoc.js",
    "groupTitle": "Profesionales"
  },
  {
    "type": "GET",
    "url": "/ratificaciones/porCarrera/:idCarrera",
    "title": "Listar Ratificaciones por carrera",
    "description": "<p>Retorna el listado de ejemplares ratificados en una carrera particular, en caso de no existir la carrera, se retorna el código HTTP 404.</p>",
    "name": "GetRatificaciones",
    "group": "Ratificaciones",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "idCarrera",
            "description": "<p>Id de la carrera a consultar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "/anotaciones/293",
          "content": " { \"id\": 20, \"tipo_doc_caballeriza\": \"C.I\", \"num_doc_caballeriza\": \"8549655\", \"fecha_carrera\": \"2019-12-31\",\n\"carrera_id\": 45, \"kg_programa\": 57.0, \"kg_reales\": 56.9, \"cod_hip\": \"HIPSI\", \"nombre_premio\": \"RASPAIL I\",\n\"tomo\": \"1169\", \"folio\": \"115\", \"nombre_ejemplar\": \"GALICIA GOLD\",\n\"tipo_doc_cuidador\": \"D.U\", \"num_doc_cuidador\": \"8291211\", \"tipo_doc_jockey\": \"C.I\", \"num_doc_jockey\": \"38180140\",\n\"tipo_doc_capataz\": \"D.U\", \"num_doc_capataz\": \"14915854\", \"tipo_doc_peon\": \"D.U\", \"num_doc_peon\": \"8320828\",\n\"tipo_doc_sereno\": \"D.U\", \"num_doc_sereno\": \"94626747\", \"puesto\": 0, \"orden\": \"\", \"partida\": \"\", \"tiro\": 1},\n{ \"id\": 21, \"tipo_doc_caballeriza\": \"C.I\", \"num_doc_caballeriza\": \"8549655\", \"fecha_carrera\": \"2019-12-31\",\n\"carrera_id\": 45, \"kg_programa\": 57.0, \"kg_reales\": 56.7, \"cod_hip\": \"HIPSI\", \"nombre_premio\": \"RASPAIL I\",\n\"tomo\": \"1161\", \"folio\": \"311\", \"nombre_ejemplar\": \"MALVADO SERIAL\",\n\"tipo_doc_cuidador\": \"D.U\", \"num_doc_cuidador\": \"8291211\", \"tipo_doc_jockey\": \"C.I\", \"num_doc_jockey\": \"388391789\",\n\"tipo_doc_capataz\": \"D.U\", \"num_doc_capataz\": \"14915854\", \"tipo_doc_peon\": \"D.U\", \"num_doc_peon\": \"8320828\",\n\"tipo_doc_sereno\": \"D.U\", \"num_doc_sereno\": \"94626747\", \"puesto\": 0, \"orden\": \"\", \"partida\": \"\", \"tiro\": 1},",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la anotación</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tipo_doc_caballeriza",
            "description": "<p>Tipo de Documento de la caballeriza ['C.I', 'D.U', 'L.C', 'L.E', 'MAQ', 'PAS']</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "num_doc_caballeriza",
            "description": "<p>Número de documento de la caballeriza</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "fecha_carrera",
            "description": "<p>Fecha y Hora programada para la carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "carrera_id",
            "description": "<p>Id de la carrera de la anotación</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "kg_programa",
            "description": "<p>Kilogramos de programa</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "kg_reales",
            "description": "<p>Kilogramos reales</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cod_hip",
            "description": "<p>Código del hipódromo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre_premio",
            "description": "<p>Nombre del Premio</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tomo",
            "description": "<p>Número de tomo del ejemplar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "folio",
            "description": "<p>Número de folio del ejemplar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre_ejemplar",
            "description": "<p>Nombre del ejemplar anotado/ratificado</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tipo_doc_cuidador",
            "description": "<p>Tipo de documento del cuidador</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "num_doc_cuidador",
            "description": "<p>Número de documento del cuidador del ejemplar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre_cuidador",
            "description": "<p>Nombre del cuidador del ejemplar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tipo_doc_jockey",
            "description": "<p>Tipo de documento del jockey</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "num_doc_jockey",
            "description": "<p>Número de documento del jockey</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre_doc_jockey",
            "description": "<p>Nombre del jockey</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "puesto",
            "description": "<p>Puesto en que finalizó el ejemplar en la carrera o 'RV' si se retiró</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orden",
            "description": "<p>Número con el que va identificado el ejemplar en la carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "partida",
            "description": "<p>Número de partidor en la carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "tiro",
            "description": "<p>Define si el ejemplar va de tiro o no</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "diferencia",
            "description": "<p>Describe la distancia con respecto al competidor más cercano</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "diferencia_acumulada",
            "description": "<p>Describe la distancia con respecto al ganador de la carrera</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "monto_premio",
            "description": "<p>Monto ganado por el ejemplar</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "json",
            "optional": false,
            "field": "CarreraNoExiste",
            "description": "<p>El <code>id</code> de la carrera no existe en la base de datos.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CarreraNoExiste\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/doc_cc/apidoc.js",
    "groupTitle": "Ratificaciones"
  },
  {
    "type": "GET",
    "url": "/sanciones/caballerizas/:tipo_doc/:num_doc",
    "title": "Sanciones de caballerizas",
    "description": "<p>Retorna una lista de las sanciones de caballeriza según el tipo y número de documento, en caso de no existir sanciones, se retorna un objeto JSON vacío.</p>",
    "name": "GetSancionesCaballerizas",
    "group": "Sanciones",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipo_doc",
            "description": "<p>Tipo de documento del caballeriza  ['C.I', 'D.U', 'L.C', 'L.E', 'MAQ', 'PAS']</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "num_doc",
            "description": "<p>Número de documento del caballeriza</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "/sanciones/caballerizas/D.U/95501825",
          "content": "{ \"id\": 1, \"fecha_desde\": \"2015-11-13\",\"fecha_hasta\": \"2015-11-21\", \"tipo_doc\": \"D.U\", \"num_doc\": \"95501825\",\n\"descripcion\": \"POR RECLAMAR INJUSTIFICADAMENTE.\" },\n{ \"id\": 2, \"fecha_desde\": \"2016-09-20\",\"fecha_hasta\": \"2016-09-30\", \"tipo_doc\": \"D.U\", \"num_doc\": \"95501825\",\n\"descripcion\": \"POR PERDER SU LINEA A LA ALTURA DE LOS 300 MTS. FINALES.\" }",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Sanciones",
            "description": "<p>Objeto JSON con los campos  'id', 'fecha_desde', 'fecha_hasta', 'descripcion'</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la sanción</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "fecha_desde",
            "description": "<p>Fecha de inicio de la sanción</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "fecha_hasta",
            "description": "<p>Fecha fin de la sanción</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tipo_doc",
            "description": "<p>Tipo de documento de la caballeriza  ['C.I', 'D.U', 'L.C', 'L.E', 'MAQ', 'PAS']</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "num_doc",
            "description": "<p>Número de documento de la caballeriza</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Texto descriptivo de la sanción</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/doc_cc/apidoc.js",
    "groupTitle": "Sanciones"
  },
  {
    "type": "GET",
    "url": "/sanciones/ejemplars/:tomo/:folio",
    "title": "Sanciones de ejemplares",
    "description": "<p>Retorna una lista de las sanciones de ejemplar según el tipo y número de documento, en caso de no existir sanciones, se retorna un objeto JSON vacío.</p>",
    "name": "GetSancionesCaballos",
    "group": "Sanciones",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tomo",
            "description": "<p>Tipo de documento del ejemplar  ['C.I', 'D.U', 'L.C', 'L.E', 'MAQ', 'PAS']</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "folio",
            "description": "<p>Número de documento del ejemplar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "/sanciones/ejemplars/4598/254",
          "content": "{ \"id\": 1, \"fecha_desde\": \"2015-11-13\",\"fecha_hasta\": \"2015-11-21\", \"tomo\": \"4598\", \"folio\": \"254\",\n\"descripcion\": \"POR RECLAMAR INJUSTIFICADAMENTE.\" },\n{ \"id\": 2, \"fecha_desde\": \"2016-09-20\",\"fecha_hasta\": \"2016-09-30\", \"tomo\": \"4598\", \"folio\": \"254\",\n\"descripcion\": \"POR PERDER SU LINEA A LA ALTURA DE LOS 300 MTS. FINALES.\" }",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Sanciones",
            "description": "<p>Objeto JSON con los campos  'id', 'fecha_desde', 'fecha_hasta', 'descripcion'</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la sanción</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "fecha_desde",
            "description": "<p>Fecha de inicio de la sanción</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "fecha_hasta",
            "description": "<p>Fecha fin de la sanción</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tomo",
            "description": "<p>Tomo que identifica al ejemplar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "folio",
            "description": "<p>Folio que identifica al ejemplar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Texto descriptivo de la sanción</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/doc_cc/apidoc.js",
    "groupTitle": "Sanciones"
  },
  {
    "type": "GET",
    "url": "/sanciones/profesionales/:tipo_doc/:num_doc",
    "title": "Sanciones de profesionales",
    "description": "<p>Retorna una lista de las sanciones de profesionales según el tipo y número de documento, en caso de no existir sanciones, se retorna un objeto JSON vacío.</p>",
    "name": "GetSancionesProfesionales",
    "group": "Sanciones",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipo_doc",
            "description": "<p>Tipo de documento del profesional  ['C.I', 'D.U', 'L.C', 'L.E', 'MAQ', 'PAS']</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "num_doc",
            "description": "<p>Número de documento del profesional</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "/sanciones/profesionales/D.U/95501825",
          "content": "{ \"id\": 1, \"fecha_desde\": \"2015-11-13\",\"fecha_hasta\": \"2015-11-21\", \"tipo_doc\": \"D.U\", \"num_doc\": \"95501825\",\n\"descripcion\": \"POR RECLAMAR INJUSTIFICADAMENTE.\" },\n{ \"id\": 2, \"fecha_desde\": \"2016-09-20\",\"fecha_hasta\": \"2016-09-30\", \"tipo_doc\": \"D.U\", \"num_doc\": \"95501825\",\n\"descripcion\": \"POR PERDER SU LINEA A LA ALTURA DE LOS 300 MTS. FINALES.\" }",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Sanciones",
            "description": "<p>Objeto JSON con los campos  'id', 'fecha_desde', 'fecha_hasta', 'descripcion'</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la sanción</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "fecha_desde",
            "description": "<p>Fecha de inicio de la sanción</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "fecha_hasta",
            "description": "<p>Fecha fin de la sanción</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tipo_doc",
            "description": "<p>Tipo de documento del profesional, ejemplar o caballeriza  ['C.I', 'D.U', 'L.C', 'L.E', 'MAQ', 'PAS']</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "num_doc",
            "description": "<p>Número de documento del profesional, ejemplar o caballeriza</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Texto descriptivo de la sanción</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/doc_cc/apidoc.js",
    "groupTitle": "Sanciones"
  }
] });
