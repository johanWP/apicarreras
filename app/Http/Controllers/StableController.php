<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Stable;
use Illuminate\Support\Collection;

class StableController extends Controller
{
    /**
     * StableController constructor.
     * Aplica el middleware aapp/Http/Middleware/ApiCarreras.php
     */
    public function __construct()
    {
        //$this->middleware('apiCarreras');
    }
    /**
     * Devuelve una lista de las caballerizas registradas
     * 
     */
    public function index()
    {
        $result = New Collection();
        $caballerizas = Stable::all();
        foreach ($caballerizas as $caballeriza)
        {
            $result[] = [
                'id'        =>  $caballeriza->id,
                'tipo_doc'  =>  $caballeriza->tipo_doc,
                'num_doc'   =>  $caballeriza->num_doc,
                'nombre'    =>  $caballeriza->nombre,
            ];
        }
        return $result;
    }
    
    /**
     * Devuelve el detalle de una caballeriza por su Id
     * @param id
     * @return collection
     */
    public function show($id)
    {

        $caballeriza = Stable::find($id);
        if ( ! $caballeriza)
        {
            return response()->json([
                'message' => 'CaballerizaNoExiste',
            ], 404);
        } else
        {
            return  $result = [
                'id'        =>  $caballeriza->id,
                'tipo_doc'  =>  $caballeriza->tipo_doc,
                'num_doc'   =>  $caballeriza->num_doc,
                'nombre'    =>  $caballeriza->nombre,
            ];
        }
    }

    /**
     * Devuelve un objeto JSON con el resultado de la busqueda por nombre
     * @param String $nombre
     * @return array|\Illuminate\Http\JsonResponse
     */
    public function porNombre($nombre)
    {
        $data = array();
        $caballerizas = Stable::where('nombre', 'like', '%' . $nombre . '%')->get();

        if ( $caballerizas->count() < 1 )
        {
            activity()
                ->withProperties(['IP_add' => request()->ip()])
                ->log('Error: Acceso a caballeriza por nombre: '. $nombre);
            return response()->json([
                'message' => 'EjemplarNoExiste',
            ], 404);

        } else
        {
            activity()
                ->withProperties(['IP_add' => request()->ip()])
                ->log('Acceso a ejemplares con nombre: '. $nombre);

            foreach ($caballerizas as $caballeriza)
            {

                $data[] = [
                    'id'    =>  $caballeriza->id,
                    'tipo_doc'  =>  $caballeriza->tipo_doc,
                    'num_doc' =>  $caballeriza->num_doc,
                    'nombre'=>  $caballeriza->nombre,
                ];
            }
            return $data;
        }
    }

}
