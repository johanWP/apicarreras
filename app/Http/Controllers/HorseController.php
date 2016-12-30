<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Horse;

class HorseController extends Controller
{
    /**
     * HorseController constructor.
     * Aplica el middleware app/Http/Middleware/ApiCarreras.php
     */
    public function __construct()
    {
        //$this->middleware('apiCarreras');
    }

    /**
     * Devuelve el detalle del ejemplar
     * @param Integer $tomo Identificación del ejemplar
     * @param Integer $folio Identificación del ejemplar
     * @return array|\Illuminate\Http\JsonResponse Arreglo con datos del ejemplar o Error 404 si no existe
     */
    public function porTomoFolio($tomo, $folio)
    {
        $caballo = Horse::where('tomo', $tomo)->where('folio', $folio)->first();
        if (! $caballo)
        {
            activity()
                ->withProperties(['IP_add' => request()->ip()])
                ->log('Error: Acceso a ejemplar por tomo: '. $tomo .' y folio: '. $folio);

            return response()->json([
                'message' => 'EjemplarNoExiste',
            ], 404);
        } else
        {
            activity()
                ->performedOn($caballo)
                ->withProperties(['IP_add' => request()->ip()])
                ->log('Acceso a ejemplar por tomo'. $tomo .' y folio: '. $folio . ', Nombre: '. $caballo->nombre);
            $fecha_nacimiento = ($caballo->fecha_nacimiento==null) ? 'N/A' : $caballo->fecha_nacimiento->toDateString();
            $fecha_muerte = ($caballo->fecha_muerte==null) ? 'N/A' : $caballo->fecha_muerte->toDateString();
            $data = [
                'id'    =>  $caballo->id,
                'tomo'  =>  $caballo->tomo,
                'folio' =>  $caballo->folio,
                'nombre'=>  $caballo->nombre,
                'sexo'  =>  $caballo->sexo,
                'fecha_nacimiento'  => $fecha_nacimiento,
                'fecha_muerte'      => $fecha_muerte,
                'ganadas_comunes'   => $caballo->ganadas_comunes,
                'ganadas_clasicos'  => $caballo->ganadas_clasicos,
                'ganadas_grupo'     => $caballo->ganadas_grupo,
                'ganadas_internacionales'   => $caballo->ganadas_internacionales,
                'ganadas_series'    => $caballo->ganadas_series
            ];

//            return $caballo->fecha_nacimiento->toDateString();
            return $data;
        }
    }

    /**
     * Devuelve un arreglo con los ejemplares cuyo nombre coincida con el término de búsqueda
     * @param String $nombre Nombre o parte del nombre del ejemplar
     * @return array|\Illuminate\Http\JsonResponse
     */
    public function porNombre($nombre)
    {
        $data = array(); $fecha_nacimiento = ''; $fecha_muerte = '';
        $caballos = Horse::where('nombre', 'like', '%' . $nombre . '%')->get();

        if ( $caballos->count() < 1 )
        {
            activity()
                ->withProperties(['IP_add' => request()->ip()])
                ->log('Error: Acceso a ejemplar por nombre: '. $nombre);
            return response()->json([
                'message' => 'EjemplarNoExiste',
            ], 404);

        } else
        {
            activity()
                ->withProperties(['IP_add' => request()->ip()])
                ->log('Acceso a ejemplares con nombre: '. $nombre);

            foreach ($caballos as $caballo)
            {
                $fecha_nacimiento = ($caballo->fecha_nacimiento==null) ? 'N/A' : $caballo->fecha_nacimiento->toDateString();
                $fecha_muerte = ($caballo->fecha_muerte==null) ? 'N/A' : $caballo->fecha_muerte->toDateString();

                $data[] = [
                    'id'    =>  $caballo->id,
                    'tomo'  =>  $caballo->tomo,
                    'folio' =>  $caballo->folio,
                    'nombre'=>  $caballo->nombre,
                    'sexo'=>  $caballo->sexo,
                    'fecha_nacimiento'  => $fecha_nacimiento,
                    'fecha_muerte'      => $fecha_muerte,
                    'ganadas_comunes'   => $caballo->ganadas_comunes,
                    'ganadas_clasicos'  => $caballo->ganadas_clasicos,
                    'ganadas_grupo'     => $caballo->ganadas_grupo,
                    'ganadas_internacionales'   => $caballo->ganadas_internacionales,
                    'ganadas_series'    => $caballo->ganadas_series
                ];
            }
            return $data;
        }
    }
}
