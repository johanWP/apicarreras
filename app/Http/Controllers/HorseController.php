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

    public function porTomoFolio($tomo, $folio)
    {
        $caballo = Horse::where('tomo', $tomo)->where('folio', $folio)->first();
        if ( ! $caballo)
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

            $data = [
                'id'    =>  $caballo->id,
                'tomo'  =>  $caballo->tomo,
                'folio' =>  $caballo->folio,
                'nombre'=>  $caballo->nombre,
                'fecha_nacimiento'  => $caballo->fecha_nacimiento,
                'fecha_muerte'      => $caballo->fecha_muerte,
                'ganadas_comunes'   => $caballo->ganadas_comunes,
                'ganadas_clasicos'  => $caballo->ganadas_clasicos,
                'ganadas_grupo'     => $caballo->ganadas_grupo,
                'ganadas_internacionales'   => $caballo->ganadas_internacionales,
                'ganadas_series'    => $caballo->ganadas_series
            ];

            return $data;
        }
    }

    public function porNombre($nombre)
    {
        $data = array();
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
                ->performedOn($caballos)
                ->withProperties(['IP_add' => request()->ip()])
                ->log('Acceso a ejemplares con nombre: '. $nombre);

            foreach ($caballos as $caballo)
            {
                $data[] = [
                    'id'    =>  $caballo->id,
                    'tomo'  =>  $caballo->tomo,
                    'folio' =>  $caballo->folio,
                    'nombre'=>  $caballo->nombre,
                    'fecha_nacimiento'  => $caballo->fecha_nacimiento,
                    'fecha_muerte'      => $caballo->fecha_muerte,
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
