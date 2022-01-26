<?php

namespace App\Http\Controllers;

use App\Models\Empleado;
use App\Models\TipoContrato;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(){
        return view('welcome');
    }

    /* front */
    public function front(){
        return view('frontend.front');
    }

    public function empleados(){
        $empleados = Empleado::with('tipo_contrato')->get();
        return $empleados;
    }

    public function empleadoStore(Request $request){
        $empleado = Empleado::create($request->all());
        $empleado->save();
        return redirect('/');
    }

    public function empleadoShow($id){
        $empleado = Empleado::find($id);
       return $empleado;
    }

    public function empleadoUpdate($id, Request $request){
        $empleado = Empleado::find($id);
        $empleado->update($request->all());
        $empleado->save();
        return redirect('/');
    }

    public function empleadoDelete($id){
        $empleado = Empleado::find($id);
        if($empleado->delete()){
            return redirect('/');
        }
    }

    /* TIPOS DE CONTRATO */
    public function tipoContrato(){
        $tipoContrato = TipoContrato::all();
        return $tipoContrato;
    }
    public function tipoContratoStore(Request $request){
        $empleado = TipoContrato::create($request->all());
        $empleado->save();
        return redirect('/');
    }

    public function tipoContratoShow($id){
        $empleado = TipoContrato::find($id);
       return $empleado;
    }

    public function tipoContratoUpdate($id, Request $request){
        $empleado = TipoContrato::find($id);
        $empleado->update($request->all());
        $empleado->save();
        return redirect('/');
    }

    public function tipoContratoDelete($id){
        $empleado = TipoContrato::find($id);
        if($empleado->delete()){
            return redirect('/');
        }
    }
}
