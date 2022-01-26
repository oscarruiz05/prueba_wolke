$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

let tipo = null;
let tipo_contrato = null;
let empleado = null;
let contrato = null;

function Empleados(){
    tipo = 'Empleados';
    $.ajax({
        url: '/empleados',
        type: 'post',
        success: function(data){
            tipo = 'Empleados';
            let content = `
                <div class="row">
                <div class="col-md-6">
                    <h2>Empleados</h2>
                </div>
                <div class="col-md-6 text-right">
                    <button class="btn btn-primary" onclick="abrirModal(tipo, false)">Nuevo</button>
                </div>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Telefono</th>
                            <th>Tipo Contrato</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>`;

                    for (const item of data) {
                        content += `
                            <tr>
                                <td>${item.nombre}</td>
                                <td>${item.apellido}</td>
                                <td>${item.telefono}</td>
                                <td>${item.tipo_contrato.nombre}</td>
                                <td>
                                    <span class="badge badge-${item.estado == 'Activo' ? 'success' : 'danger'}">${item.estado}</span>
                                </td>
                                <td class="text-center">
                                    <button class="btn btn-sm btn-primary" onclick="verEmpleado(${item.id})">Editar</button>
                                    <button class="btn btn-sm btn-danger" onclick="eliminarEmpleado(${item.id})">Eliminar</button>
                                </td>
                            </tr>
                        `;
                    }
                    content += `
                    </tbody>
                </table>
            `;
            $('.divTabla').html(content)
        }, error(error){
            console.log(error);
        }
    });
}

function verEmpleado(id){
    $.ajax({
        url: '/empleados/show/'+id,
        type: 'post',
        async: false,
        success: function(data){
            empleado = data;
            abrirModal('Empleados', true)
        }, error(error){
            console.log(error);
        }
    });
}

function eliminarEmpleado(id){
    let res = confirm('Desea elimiar este empleado?');
    if(res == true){
        window.location.href = '/empleados/delete/'+id;
    }
    return
}

/* TIPO DE CONTRATO */
function TipoContrato(btn){
    tipo = 'Contrato';
    $.ajax({
        url: '/tipo-contrato',
        type: 'post',
        success: function(data){
            let content = `
                <div class="row">
                <div class="col-md-6">
                    <h2>Empleados</h2>
                </div>
                <div class="col-md-6 text-right">
                    <button class="btn btn-primary" onclick="abrirModal(tipo, false)">Nuevo</button>
                </div>
                </div>
                <table class="table text-center">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>`;

                    for (const item of data) {
                        content += `
                            <tr>
                                <td>${item.nombre}</td>
                                <td>
                                    <span class="badge badge-${item.estado == 'Activo' ? 'success' : 'danger'}">${item.estado}</span>
                                </td>
                                <td class="text-center">
                                    <button class="btn btn-sm btn-primary" onclick="verContrato(${item.id})">Editar</button>
                                    <button class="btn btn-sm btn-danger" onclick="eliminarContrato(${item.id})">Eliminar</button>
                                </td>
                            </tr>
                        `;
                    }
                    content += `
                    </tbody>
                </table>
            `;
            $('.divTabla').html(content)
        }, error(error){
            console.log(error);
        }
    });
}

function verContrato(id){
    $.ajax({
        url: '/tipo-contrato/show/'+id,
        type: 'post',
        async: false,
        success: function(data){
            contrato = data;
            abrirModal('Contrato', true)
        }, error(error){
            console.log(error);
        }
    });
}

function eliminarContrato(id){
    let res = confirm('Desea elimiar este tipo de contrato?');
    if(res == true){
        window.location.href = '/tipo-contrato/delete/'+id;
    }
    return
}


/* GENERALES */
function abrirModal(tipo, edit){
    $('#myModal').modal('show');
    let content = '';
    if(tipo == 'Empleados'){
        contratos()
        if(edit == true){
            content += `
            <div class="modal-dialog">
                <div class="modal-content">
                    <form action="/empleados/update/${empleado.id}" method="POST">
                        <!-- Modal body -->
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="">Nombre</label>
                                <input type="text" class="form-control" name="nombre" id="nombre" value="${empleado.nombre}" required>
                            </div>
                            <div class="form-group">
                                <label for="">Apellido</label>
                                <input type="text" class="form-control" name="apellido" id="apellido" value="${empleado.apellido}" required>
                            </div>
                            <div class="form-group">
                                <label for="">Telefono</label>
                                <input type="text" class="form-control" name="telefono" id="telefono" value="${empleado.telefono}" required>
                            </div>
                            <div class="form-group">
                                <label for="">Tipo Contrato</label>
                                <select class="form-control" name="tipo_contrato_id" id="tipo_contrato" required>
                                    <option value="" selected disabled>Seleccione</option>`;
                                    for (const item of tipo_contrato) {
                                        content += `
                                            <option value="${item.id}" ${item.id == empleado.tipo_contrato_id ? 'selected' : ''}>${item.nombre}</option>
                                        `;
                                    }
                                content += `
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="">Estado</label>
                                <select class="form-control" name="estado" id="estado" required>
                                    <option value="Activo" ${empleado.estado == 'Activo' ? 'selected' : ''}>Activo</option>
                                    <option value="Inactivo" ${empleado.estado == 'Inactivo' ? 'selected' : ''}>Inactivo</option>
                                </select>
                            </div>
                        </div>

                        <!-- Modal footer -->
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-success">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
            `;

        }else{
            content += `
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form action="/empleados/store" method="POST" id="crearEmpleado">
                            <!-- Modal body -->
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="">Nombre</label>
                                    <input type="text" class="form-control" name="nombre" id="nombre" required>
                                </div>
                                <div class="form-group">
                                    <label for="">Apellido</label>
                                    <input type="text" class="form-control" name="apellido" id="apellido" required>
                                </div>
                                <div class="form-group">
                                    <label for="">Telefono</label>
                                    <input type="text" class="form-control" name="telefono" id="telefono" required>
                                </div>
                                <div class="form-group">
                                    <label for="">Tipo Contrato</label>
                                    <select class="form-control" name="tipo_contrato_id" id="tipo_contrato" required>
                                        <option value="" selected disabled>Seleccione</option>`;
                                        for (const item of tipo_contrato) {
                                            content += `
                                                <option value="${item.id}">${item.nombre}</option>
                                            `;
                                        }
                                    content += `
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="">Estado</label>
                                    <select class="form-control" name="estado" id="estado" required>
                                        <option value="Activo">Activo</option>
                                        <option value="Inactivo">Inactivo</option>
                                    </select>
                                </div>
                            </div>

                            <!-- Modal footer -->
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-success">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            `;
        }
    }else{
        if(edit == true){
            content += `
            <div class="modal-dialog">
                <div class="modal-content">
                    <form action="/tipo-contrato/update/${contrato.id}" method="POST">
                        <!-- Modal body -->
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="">Nombre</label>
                                <input type="text" class="form-control" name="nombre" id="nombre" value="${contrato.nombre}" required>
                            </div>
                            <div class="form-group">
                                <label for="">Estado</label>
                                <select class="form-control" name="estado" id="estado" required>
                                    <option value="Activo" ${contrato.estado == 'Activo' ? 'selected' : ''}>Activo</option>
                                    <option value="Inactivo" ${contrato.estado == 'Inactivo' ? 'selected' : ''}>Inactivo</option>
                                </select>
                            </div>
                        </div>
                        <!-- Modal footer -->
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-success">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
            `;

        }else{
            content += `
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form action="/tipo-contrato/store" method="POST">
                            <!-- Modal body -->
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="">Nombre</label>
                                    <input type="text" class="form-control" name="nombre" id="nombre" required>
                                </div>
                                <div class="form-group">
                                    <label for="">Estado</label>
                                    <select class="form-control" name="estado" id="estado" required>
                                        <option value="Activo">Activo</option>
                                        <option value="Inactivo">Inactivo</option>
                                    </select>
                                </div>
                            </div>
                            <!-- Modal footer -->
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-success">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            `;
        }
    }
    $('#myModal').html(content)
}

function contratos(){
    $.ajax({
        url: '/tipo-contrato',
        type: 'post',
        async: false,
        success: function(data){
            tipo_contrato =  data;
        }, error(error){
            console.log(error);
        }
    });
}
