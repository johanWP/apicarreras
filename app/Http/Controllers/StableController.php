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
     * Devuelve una lista de las caballerizas registradas, incluyendo sus sanciones
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $caballerizas = Stable::with('sanciones')->get();
        activity()
            ->withProperties(['IP_add' => request()->ip()])
            ->log('Acceso a listado de caballerizas.');

        return $caballerizas;
    }
    
    /**
     * Devuelve el detalle de una caballeriza por su Id, incluyendo sus sanciones
     * @param id
     * @return collection
     */
    public function show($id)
    {

        $caballeriza = Stable::where('id', $id)->with('sanciones')->get();
        if ($caballeriza->count() < 1)
        {
            activity()
                ->withProperties(['IP_add' => request()->ip()])
                ->log('Error: Acceso a detalle de caballeriza con id: ' . $id);
            
            return response()->json([
                'message' => 'CaballerizaNoExiste',
            ], 404);
        } else
        {
            activity()
                ->withProperties(['IP_add' => request()->ip()])
                ->log('Acceso a detalle de caballeriza con id: ' . $id);

            return $caballeriza;
        }
    }

    /**
     * Devuelve un objeto JSON con el resultado de la busqueda por nombre, incluyendo sus sanciones
     * @param String $nombre
     * @return array|\Illuminate\Http\JsonResponse
     */
    public function porNombre($nombre)
    {
        $caballerizas = Stable::where('nombre', 'like', '%' . $nombre . '%')->with('sanciones')->get();

        if ($caballerizas->count() < 1)
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

            return $caballerizas;
        }
    }

}
