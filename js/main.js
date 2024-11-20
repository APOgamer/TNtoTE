import { tasaNominalAEfectiva } from './tasasNominales.js';
import { tasaDescontadaAEfectiva, convertirEntreEfectivas } from './tasasDescontadas.js';

document.addEventListener('DOMContentLoaded', function() {
    // Manejo de tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(`${btn.dataset.tab}-tab`).classList.add('active');
        });
    });

    // Nominal a Efectiva
    document.getElementById('calcular-nominal').addEventListener('click', () => {
        const tasa = parseFloat(document.getElementById('tasa').value);
        const diasTasa = parseInt(document.getElementById('dias-tasa').value);
        const diasCap = parseInt(document.getElementById('dias-cap').value);

        if (!tasa || !diasTasa || !diasCap) {
            alert('Por favor, complete todos los campos');
            return;
        }

        const resultado = tasaNominalAEfectiva(tasa, diasTasa, diasCap);
        document.getElementById('resultado-nominal').textContent = `${resultado.tasa}%`;
        document.getElementById('procedimiento-nominal').textContent = resultado.procedimiento;
    });

    // Descontada a Efectiva
    document.getElementById('calcular-descuento').addEventListener('click', () => {
        const tasa = parseFloat(document.getElementById('tasa-desc').value);
        const dias = parseInt(document.getElementById('dias-desc').value);
        const diasConversion = parseInt(document.getElementById('dias-conversion-desc').value);

        if (!tasa || !dias) {
            alert('Por favor, complete los campos requeridos');
            return;
        }

        let resultado = tasaDescontadaAEfectiva(tasa, dias);
        
        if (diasConversion && diasConversion !== dias) {
            const resultadoConversion = convertirEntreEfectivas(resultado.tasa, resultado.dias, diasConversion);
            document.getElementById('resultado-descuento').textContent = 
                `${resultadoConversion.tasa}% (Efectiva ${diasConversion} días)`;
            document.getElementById('procedimiento-descuento').textContent = 
                resultado.procedimiento + '\n\n' + resultadoConversion.procedimiento;
        } else {
            document.getElementById('resultado-descuento').textContent = 
                `${resultado.tasa}% (Efectiva ${resultado.dias} días)`;
            document.getElementById('procedimiento-descuento').textContent = resultado.procedimiento;
        }
    });

    // Entre Efectivas
    document.getElementById('calcular-efectivas').addEventListener('click', () => {
        const tasaOrigen = parseFloat(document.getElementById('tasa-efectiva-origen').value);
        const diasOrigen = parseInt(document.getElementById('dias-efectiva-origen').value);
        const diasDestino = parseInt(document.getElementById('dias-efectiva-destino').value);

        if (!tasaOrigen || !diasOrigen || !diasDestino) {
            alert('Por favor, complete todos los campos');
            return;
        }

        const resultado = convertirEntreEfectivas(tasaOrigen, diasOrigen, diasDestino);
        document.getElementById('resultado-efectivas').textContent = 
            `${resultado.tasa}% (Efectiva ${diasDestino} días)`;
        document.getElementById('procedimiento-efectivas').textContent = resultado.procedimiento;
    });
}); 