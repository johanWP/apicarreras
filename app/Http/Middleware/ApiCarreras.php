<?php

namespace App\Http\Middleware;

use Closure;

class ApiCarreras
{
    /**
     * Verifica que dentro del request se haya enviado un parámetro token que contiene
     * Año.Mes.Dia multiplicado por el modificador y encriptado con md5. Ejemplo:
     * $token = md5(20160926*22.01)
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $modificador = 22.01;
        $hashed = (string) ((date("Y").date("m").date("d"))*$modificador); //dd($hashed);
        if($request->token == md5($hashed))
        {
            return $next($request);
        } else
        {
            return response()->json([
                'message' => 'NoAutorizado',
            ], 401);
        }
    }
}
