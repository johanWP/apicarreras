<?php

namespace App\Http\Controllers;

use App\Note;
use App\Race;
use Illuminate\Http\Request;

use App\Http\Requests;

class NoteController extends Controller
{
    public function ratificaciones($idCarrera)
    {
        $carrera = Race::find($idCarrera);
        if ( ! $carrera)
        {
            return response()->json([
                'message' => 'CarreraNoExiste',
            ], 404);
        } else
        {
            $anotaciones = Note::where('race_id', $idCarrera)->get();// dd($anotaciones->get());
            return $this->BuscarRegistros($anotaciones);
        }
    }


    private function BuscarRegistros($anotaciones)
    {
        $data = array();
        foreach ($anotaciones as $anotacion)
        {
            $data[] = [
                'id'          => $anotacion->id,
                'fecha_carrera'          => $anotacion->fecha,
                'tipo_doc_caballeriza'  => $anotacion->tipo_doc_caballeriza,
                'num_doc_caballeriza'   => $anotacion->num_doc_caballeriza,
                'nombre_caballeriza'   => $anotacion->nombre_caballeriza,
                'carrera_id'            => $anotacion->race_id,
                'kg_programa'           => $anotacion->kg_programa,
                'kg_reales'             => $anotacion->kg_reales,
                'cod_hip'               => 'HIPSI',
                'nombre_premio'         => $anotacion->nombre_premio,
                'tomo'                  => $anotacion->tomo,
                'folio'                 => $anotacion->folio,
                'nombre_ejemplar'       => $anotacion->nombre,
                'tipo_doc_cuidador'     => $anotacion->tipo_doc_cuidador,
                'num_doc_cuidador'      => $anotacion->num_doc_cuidador,
                'tipo_doc_jockey'       => $anotacion->tipo_doc_jockey,
                'num_doc_jockey'        => $anotacion->num_doc_jockey,
                'puesto'                => $anotacion->puesto,
                'orden'                 => $anotacion->orden,
                'diferencia'            => trim($anotacion->diferencia),
                'diferencia_acumulada'  => $anotacion->diferencia_acumulada,
                'monto_premio'          => $anotacion->monto_premio
            ];
        }
        return  $data;
    }
}
