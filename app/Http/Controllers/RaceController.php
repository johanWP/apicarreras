<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Race;

class RaceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $races = Race::where('fecha', '>', Carbon::today())
            ->where('fecha', '<', Carbon::tomorrow())
            ->get();
        activity()->log('Look, I logged something');
        return $races;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Race::findOrFail($id);
    }

    public function CarrerasPorFecha($inicio, $fin)
    {
        $data = array();
        if ( (substr_count($inicio, '-') != 2) || (substr_count($fin, '-') != 2) )
        {
            return response()->json([
                'message' => 'FechaEnFormatoIncorrecto',
            ], 400);
        }
        $arrInicio = explode('-',$inicio);
        $arrFin = explode('-',$fin);
        if((!checkdate($arrInicio[1], $arrInicio[2], $arrInicio[0])) || (! checkdate($arrFin[1], $arrFin[2], $arrFin[0])))
        {
            return response()->json([
                'message' => 'FechaInvalida',
            ], 400);
        }

        $carreras = Race::where('fecha', '>', $inicio. '00:00:00')
            ->where('fecha', '<', $fin.' 23:59:59')->get();
//dd($carreras);
        foreach ($carreras as $carrera)
        {
//            dd($carrera->fecha->toDateTimeString());
            $data[] = [
                'id'        =>  $carrera->id,
                'fecha'     =>  $carrera->fecha->toDateTimeString(),
                'numero'    =>  $carrera->numero,
                'nombre'    =>  $carrera->nombre,
                'reunion'   =>  $carrera->reunion,
                'tipo'      =>  $carrera->tipo,
                'pista'     =>  $carrera->pista,
                'estado_pista'     =>  $carrera->estado_pista,
                'distancia' =>  $carrera->distancia,
                'monto_premio'  =>  $carrera->monto_premio,
                'edad_desde'    =>  $carrera->edad_desde,
                'edad_hasta'    =>  $carrera->edad_hasta,
                'sexo'      =>  $carrera->sexo,
                'ganadas_desde'  =>  $carrera->ganadas_desde,
                'ganadas_hasta'  =>  $carrera->ganadas_hasta,
                'kilos'     =>  $carrera->kilos,
                'tiempo'    =>  $carrera->tiempo,
            ];
        }
        return $data;
    }
}
