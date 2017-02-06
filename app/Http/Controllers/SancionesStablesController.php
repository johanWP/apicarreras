<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Collection;
use App\SancionesStables;

class SancionesStablesController extends Controller
{
    /**
     * Devuelve un listado de todas las sanciones cargadas, incluyendo la caballeriza sancionada
     * @return Collection|static[]
     */
    public function index()
    {
        activity()
            ->withProperties(['IP_add' => request()->ip()])
            ->log('Acceso a listado completo de sanciones de caballerizas.');

        $result = SancionesStables::with('stable')->get();
        return $result;
    }

    /**
     * Devuelve los datos de una sanción específica, incluyendo los datos de la caballeriza sancionada
     * @param Int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function porId(Int $id)
    {
        $result = SancionesStables::where('id', $id)->with('stable')->get();
        
        if($result->count() < 1)
        {
            activity()
                ->withProperties(['IP_add' => request()->ip()])
                ->log('Error: Acceso a sanción de caballeriza por ID: ' . $id);
            return response()->json([
                'message' => 'SancionNoExiste',
            ], 404);

        } else {
            activity()
                ->withProperties(['IP_add' => request()->ip()])
                ->log('Acceso a sanción de caballeriza por Id: ' . $id);

        }
        return $result;
    }

    private function FormatearRegistro(Collection $stables)
    {
        //ToDo: Esto debe seguir el standar de API de GCBA ??
        $result = array();
        foreach($stables as $stable)
        {
            $result[] = [
                "id" => $stable->id,
                "tipo_doc"      => $stable->tipo_doc,
                "num_doc"       => $stable->num_doc,
                "stable_id"     => $stable->stable_id,
                "fecha_desde"   => $stable->fecha_desde,
                "fecha_hasta"   => $stable->fecha_hasta,
                "tipo_sancion"  => $stable->tipo_sancion,
                "codigo_hipodromo" => $stable->codigo_hipodromo,
                "fecha_carrera" => $stable->fecha_carrera,
                "numero_carrera"=> $stable->numero_carrera,
                "texto_sancion" => $stable->texto_sancion 
            ];
        }
    }
}
