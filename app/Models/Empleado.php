<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Empleado extends Model
{
    use HasFactory;
    protected $table = 'empleados';
    protected $fillable = [
        'nombre', 'apellido', 'telefono', 'tipo_contrato_id', 'estado'
    ];

    public function tipo_contrato(){
        return $this->belongsTo(TipoContrato::class);
    }
}
