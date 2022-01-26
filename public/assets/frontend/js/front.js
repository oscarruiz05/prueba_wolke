let condicion = false;
let arreglo = [
    [
        'invalido',
        'invalido',
        'invalido',
        'invalido',
        'invalido',
        'invalido',
        'invalido',
        'invalido',
    ],
    [
        'invalido',
        'invalido',
        'invalido',
        'invalido',
        'invalido',
        'invalido',
        'invalido',
        'invalido',
    ],
    [
        'invalido',
        'invalido',
        'invalido',
        'invalido',
        'invalido',
        'invalido',
        'invalido',
        'invalido',
    ],
    [
        'invalido',
        'invalido',
        'invalido',
        'invalido',
        'invalido',
        'invalido',
        'invalido',
        'invalido',
    ],
    [
        'invalido',
        'invalido',
        'invalido',
        'invalido',
        'invalido',
        'invalido',
        'invalido',
        'invalido',
    ],
    [
        'invalido',
        'invalido',
        'invalido',
        'invalido',
        'invalido',
        'valido',
        'invalido',
        'valido',
    ],
    [
        'invalido',
        'invalido',
        'invalido',
        'invalido',
        'valido',
        'invalido',
        'invalido',
        'invalido',
    ],
    [
        'invalido',
        'invalido',
        'invalido',
        'invalido',
        'invalido',
        'invalido',
        'caballo',
        'invalido',
    ],
];

function moverCaballo(fila,columna) {
    arreglo = [
        [
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
        ],
        [
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
        ],
        [
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
        ],
        [
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
        ],
        [
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
        ],
        [
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
        ],
        [
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
        ],
        [
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
            'invalido',
        ],
    ];
    if (arreglo[fila] && arreglo[fila][columna]) {
        arreglo[fila][columna] = 'caballo';
    }
    if (arreglo[fila-2] && arreglo[fila-2][columna-1]) {
        arreglo[fila-2][columna-1] = 'valido';
    }
    if (arreglo[fila-2] && arreglo[fila-2][columna+1]) {
        arreglo[fila-2][columna+1] = 'valido';
    }
    if (arreglo[fila+2] && arreglo[fila+2][columna-1]) {
        arreglo[fila+2][columna-1] = 'valido';
    }
    if (arreglo[fila+2] && arreglo[fila+2][columna+1]) {
        arreglo[fila+2][columna+1] = 'valido';
    }
    if (arreglo[fila-1] && arreglo[fila-1][columna+2]) {
        arreglo[fila-1][columna+2] = 'valido';
    }
    if (arreglo[fila+1] && arreglo[fila+1][columna+2]) {
        arreglo[fila+1][columna+2] = 'valido';
    }
    if (arreglo[fila-1] && arreglo[fila-1][columna-2]) {
        arreglo[fila-1][columna-2] = 'valido';
    }
    if (arreglo[fila+1] && arreglo[fila+1][columna-2]) {
        arreglo[fila+1][columna-2] = 'valido';
    }
    toggleCaballo()
}

function toggleCaballo() {
    if (condicion) {
        toggleMovimientos(!condicion);
    } else {
        toggleMovimientos()
    }
}

function toggleMovimientos(opcional = true) {
    let html = '';
    condicion = !condicion;
    arreglo.forEach((element, fila) => {
        html += '<div class="fila">'
        element.forEach((value, columna) => {
            if (opcional) {
                switch (value) {
                    case 'caballo':
                        html += '<div class="columna cursor" onclick="toggleCaballo()"><img src="/assets/img/caballo.png" alt=""></div>'
                        break;
                    case 'valido':
                        html += `<div class="columna active cursor" onclick="moverCaballo(${fila},${columna})"></div>`
                        break;
                    default:
                        html += '<div class="columna"></div>'
                        break;
                }
            } else {
                switch (value) {
                    case 'caballo':
                        html += '<div class="columna cursor" onclick="toggleCaballo()"><img src="/assets/img/caballo.png" alt=""></div>'
                        break;
                    default:
                        html += '<div class="columna"></div>'
                        break;
                }
            }
        });
        html += '</div>'
    });
    document.getElementById('respuesta').innerHTML = html;
}
