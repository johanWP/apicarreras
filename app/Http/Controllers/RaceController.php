<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Race;
use Spatie\Activitylog;

class RaceController extends Controller
{

    /**
     * Devuelve un listado de las carreras ratificadas y que ya se corrieron.
     *
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = array();
        $carreras = Race::all();

        activity()
            ->withProperties(['IP_add' => request()->ip()])
            ->log('Acceso a Index de carreras');
        $data = $this->FormatearRegistros($carreras);
        return $data;
    }

    /**
     * Devuelve el detalle de una carrera por ID.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function porId($id)
    {
        $carrera = Race::find($id);
        if ( ! $carrera)
        {
            activity()
                ->withProperties(['IP_add' => request()->ip()])
                ->log('Error: Acceso a carrera inexistente: '. $id);
            return response()->json([
                'message' => 'CarreraNoExiste',
            ], 404);
        } else
        {
            activity()
                ->performedOn($carrera)
                ->withProperties(['IP_add' => request()->ip()])
                ->log('Acceso a la carrera: '. $carrera->nombre);

            $data = [
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
                'ganadas_desde' =>  $carrera->ganadas_desde,
                'ganadas_hasta' =>  $carrera->ganadas_hasta,
                'kilos'     =>  $carrera->kilos,
                'tiempo'    =>  $carrera->tiempo
                ];
            return $data;
        }
    }

    /**
     * Devuelve un arreglo con las carreras pasadas o futuras de acuerdo a un rango de fechas
     * o un error 400 si las fechas tienen formato incorrecto
     * @param Date $inicio en formato YYYY-MM-DD
     * @param Date $fin en formato YYYY-MM-DD
     * @return array|\Illuminate\Http\JsonResponse
     */
    public function porFecha($inicio, $fin)
    {
        $data = array();
        if ( (substr_count($inicio, '-') != 2) || (substr_count($fin, '-') != 2) )
        {
            activity()
                ->withProperties(['IP_add' => request()->ip()])
                ->log('Error: Acceso a carrera con formato de fecha incorrecto. Inicio: '. $inicio . ', Fin: '. $fin);

            return response()->json([
                'message' => 'FechaEnFormatoIncorrecto',
            ], 400);
        }
        $arrInicio = explode('-',$inicio);
        $arrFin = explode('-',$fin);
        if((!checkdate($arrInicio[1], $arrInicio[2], $arrInicio[0])) || (! checkdate($arrFin[1], $arrFin[2], $arrFin[0])))
        {
            activity()
                ->withProperties(['IP_add' => request()->ip()])
                ->log('Error: Acceso a carrera con fecha no válida. Inicio: '. $inicio . ', Fin: '. $fin);
            return response()->json([
                'message' => 'FechaInvalida',
            ], 400);
        }

        $carreras = Race::where('fecha', '>', $inicio. '00:00:00')
            ->where('fecha', '<', $fin.' 23:59:59')->get();

        activity()
            ->withProperties(['IP_add' => request()->ip()])
            ->log('Acceso a las carreras entre: '. $inicio . ' y '. $fin);
        $data = $this->FormatearRegistros($carreras);
        return $data;
    }

    /**
     * Arma un arreglo con los campos acordados para la respuesta JSON
     * @param Collection $carreras
     * @return array
     */
    private function FormatearRegistros($carreras)
    {
        $data = array();
        foreach ($carreras as $carrera)
        {
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
                'ganadas_desde' =>  $carrera->ganadas_desde,
                'ganadas_hasta' =>  $carrera->ganadas_hasta,
                'kilos'     =>  $carrera->kilos,
                'tiempo'    =>  $carrera->tiempo,
            ];
        }
        return $data;
    }
}
