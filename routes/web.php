<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', [HomeController::class, 'index'])->name('welcome');
Route::get('/frontend', [HomeController::class, 'front'])->name('front');

/* EMPLEADOS */
Route::post('/empleados', [HomeController::class, 'empleados']);
Route::post('/empleados/store', [HomeController::class, 'empleadoStore']);
Route::post('/empleados/show/{id}', [HomeController::class, 'empleadoShow']);
Route::post('/empleados/update/{id}', [HomeController::class, 'empleadoUpdate']);
Route::get('/empleados/delete/{id}', [HomeController::class, 'empleadoDelete']);

/* TIPO CONTRATO */
Route::post('/tipo-contrato', [HomeController::class, 'tipoContrato']);
Route::post('/tipo-contrato/store', [HomeController::class, 'tipoContratoStore']);
Route::post('/tipo-contrato/show/{id}', [HomeController::class, 'tipoContratoShow']);
Route::post('/tipo-contrato/update/{id}', [HomeController::class, 'tipoContratoUpdate']);
Route::get('/tipo-contrato/delete/{id}', [HomeController::class, 'tipoContratoDelete']);
