<?php

namespace App\Http\Controllers;

use App\SancionesHorses;

class SancionesHorsesController extends Controller
{
    /**
     * Devuelve un listado de todos las sanciones, incluyendo el ejemplar sancionado
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        activity()
            ->withProperties(['IP_add' => request()->ip()])
            ->log('Acceso a listado completo de sanciones de ejemplares.');

        $result = SancionesHorses::with('horse')->get();
        return $result;
    }

    /**
     * Devuelve los datos de una sanción específica, incluyendo los datos del ejemplar sancionado
     * @param Int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function porId(Int $id)
    {
        $result = SancionesHorses::where('id', $id)->with('horse')->get();

        if($result->count() < 1)
        {
            activity()
                ->withProperties(['IP_add' => request()->ip()])
                ->log('Error: Acceso a sanción de ejemplar por ID: ' . $id);
            return response()->json([
                'message' => 'SancionNoExiste',
            ], 404);

        } else {
            activity()
                ->withProperties(['IP_add' => request()->ip()])
                ->log('Acceso a sanción de ejemplar por ID: ' . $id);

        }
        return $result;
    }
}
