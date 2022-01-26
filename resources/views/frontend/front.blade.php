@extends('layouts.app')
@section('myJs')
    <script src="{{asset('assets/frontend/js/front.js')}}"></script>
@endsection
@section('content')
    <style>
        * {
            user-select: none;
        }
        .columna{
            display: inline-block;
            width: 5rem;
            height: 5rem;
            background-color: white;
            margin: 0;
            padding: 0;
            border: 1px solid #000;
        }
        .active {
            background-color: aqua;
        }
        .fila{
            display: flex;
        }
        .cursor{
            cursor: pointer;
        }
        img {
            width: 100%;
        }
    </style>
    <section class="section my-5 py-5">
        <div class="container">
            <div class="col-12 text-center">
                <div id="respuesta">
                    <div class="fila">
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                    </div>
                    <div class="fila">
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                    </div>
                    <div class="fila">
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                    </div>
                    <div class="fila">
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                    </div>
                    <div class="fila">
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                    </div>
                    <div class="fila">
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                    </div>
                    <div class="fila">
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                    </div>
                    <div class="fila">
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna"></div>
                        <div class="columna cursor" onclick="toggleMovimientos()"><img src="{{asset('assets/img/caballo.png')}}" alt=""></div>
                        <div class="columna"></div>
                    </div>

                </div>
            </div>
        </div>
    </section>
@endsection
