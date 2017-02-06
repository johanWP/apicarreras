<?php

namespace App\Http\Controllers;

use App\SancionesProfessionals;

class SancionesProfessionalsController extends Controller
{
    /**
     * Devuelve un listado de todos las sanciones, incluyendo el profesional sancionado
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        activity()
            ->withProperties(['IP_add' => request()->ip()])
            ->log('Acceso a listado completo de sanciones de ejemplares.');

        $result = SancionesProfessionals::with('horse')->get();
        return $result;
    }

    /**
     * Devuelve los datos de una sanción específica, incluyendo los datos del profesional sancionado
     * @param Int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function porId(Int $id)
    {
        $result = SancionesProfessionals::where('id', $id)->with('horse')->get();

        if($result->count() < 1)
        {
            activity()
                ->withProperties(['IP_add' => request()->ip()])
                ->log('Error: Acceso a sanción de profesional por ID: ' . $id);
            return response()->json([
                'message' => 'SancionNoExiste',
            ], 404);

        } else {
            activity()
                ->withProperties(['IP_add' => request()->ip()])
                ->log('Acceso a sanción de profesional por ID: ' . $id);

        }
        return $result;
    }
}
