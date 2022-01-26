@extends('layouts.app')
@section('myJs')
    <script src="{{asset('assets/js/main.js')}}"></script>
@endsection
@section('content')
    <style>
        .container{
            color: #fff !important;
        }
        table{
            color: #fff !important;
        }
    </style>
    <div class="container">
        <section class="section">
            <div class="contenedor my-5 py-5 px-5 bg-dark rounded">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <button class="btn btn-primary" onclick="Empleados(this)">Empleados</button>
                        <button class="btn btn-primary" onclick="TipoContrato(this)">Tipos de contrato</button>
                    </div>
                </div>
                <div class="divTabla">
                </div>
            </div>
            <div class="modal" id="myModal">
            </div>
        </section>
    </div>
@endsection
