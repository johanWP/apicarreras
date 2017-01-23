<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Professional;

class ProfessionalController extends Controller
{
    /**
     * Listado de todos los profesionales
     * @param Professional $professional
     * @return array
     */
    public function index(Professional $professional)
    {
        $professionals = $this->FormatearRegistro(Professional::all());
        activity()
            ->withProperties(['IP_add' => request()->ip()])
            ->log('Acceso a listado de profesionales');

        return $professionals;
    }


    /**
     * @param Professional $professional
     * @return array
     */
    public function show(Professional $professional)
    {
        $data = $this->FormatearRegistro($professional);
        return $data;

    }

    /**
     * Devuelve los detalles de la consulta por numero y tipo de documento
     * @param String $tipo_doc
     * @param String $num_doc
     * @return array|\Illuminate\Http\JsonResponse
     */
    public function porDoc($tipo_doc, $num_doc)
    {
        $data = array();
        $profesionales = Professional::where('tipo_doc', $tipo_doc)->
            where('num_doc', $num_doc)->get();

        if ( $profesionales->count() < 1 )
        {
            activity()
                ->withProperties(['IP_add' => request()->ip()])
                ->log('Error: Acceso a profesionales por doc (no Existe): '. $tipo_doc . '-' . $num_doc);
            return response()->json([
                'message' => 'ProfesionalNoExiste',
            ], 404);

        } else
        {
            activity()
                ->withProperties(['IP_add' => request()->ip()])
                ->log('Acceso a ejemplares por doc: '. $tipo_doc . '-' . $num_doc);

            $data = $this->FormatearRegistro($profesionales);
            return $data;
        }
    }

    /**
     * Devuelve un arreglo con los datos de profesionales coincidentes con el parámetro de búsqueda
     * @param String $nombre
     * @return array|\Illuminate\Http\JsonResponse
     */
    public function porNombre($nombre)
    {
        $data = array();
        $profesionales = Professional::where('nombre', 'like', '%' . $nombre . '%')->get();

        if ( $profesionales->count() < 1 )
        {
            activity()
                ->withProperties(['IP_add' => request()->ip()])
                ->log('Error: Acceso a profesionales por nombre (no Existe): '. $nombre);
            return response()->json([
                'message' => 'ProfesionalNoExiste',
            ], 404);

        } else
        {
            activity()
                ->withProperties(['IP_add' => request()->ip()])
                ->log('Acceso a ejemplares con nombre: '. $nombre);

            $data = $this->FormatearRegistro($profesionales);
            return $data;
        }
    }


    /**
     * Toma la colection y devuelve unicamente los campos que estan explicitamente indicados
     * @param Collection $professional
     * @return array
     */
    private function FormatearRegistro($professional)
    {
        $data = array();
        foreach ($professional as $prof)
        {
            ($prof->propietario == 'X') ? $propietario = 1 : $propietario = 0;
            ($prof->cuidador == 'X') ? $cuidador = 1 : $cuidador = 0;
            ($prof->jockey == 'X') ? $jockey = 1 : $jockey = 0;
            ($prof->cuidador_jockey == 'X') ? $cuidador_jockey = 1 : $cuidador_jockey = 0;
            ($prof->capataz == 'X') ? $capataz = 1 : $capataz = 0;
            ($prof->peon == 'X') ? $peon = 1 : $peon = 0;
            ($prof->sereno == 'X') ? $sereno = 1 : $sereno = 0;

            $data[] = [
                'id'        => $prof->id,
                'tipo_doc'  => $prof->tipo_doc,
                'num_doc'   => $prof->num_doc,
                'nombre'    => $prof->nombre,
                'email'     => $prof->email,
                'categoria' => $prof->categoria,
                'patente1'  => $prof->patente1,
                'patente2'  => $prof->patente2,
                'propietario' => $propietario,
                'cuidador'  => $cuidador,
                'jockey'    => $jockey,
                'cuidador_jockey' => $cuidador_jockey,
                'capataz'   => $capataz,
                'peon'      => $peon,
                'sereno'    => $sereno
            ];

        }

        return $data;
    }
}
