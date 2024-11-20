document.addEventListener('DOMContentLoaded', function() {
    // Manejo de tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover clase active de todos los botones y contenidos
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Agregar clase active al botón clickeado y su contenido
            btn.classList.add('active');
            document.getElementById(`${btn.dataset.tab}-tab`).classList.add('active');
        });
    });

    // Función para calcular la tasa efectiva
    function calcularTasaEfectiva(tasaNominal, diasTasa, diasCapitalizacion) {
        // Convertir tasa nominal a decimal
        const tasaDecimal = tasaNominal / 100;
        
        // Calcular la tasa por período de capitalización
        const tasaPorPeriodo = (tasaDecimal * diasCapitalizacion) / diasTasa;
        
        // Calcular número de períodos en el año
        const periodos = diasTasa / diasCapitalizacion;
        
        // Calcular tasa efectiva
        const tasaEfectiva = Math.pow(1 + tasaPorPeriodo, periodos) - 1;
        
        return tasaEfectiva * 100; // Convertir a porcentaje
    }

    // Manejo del botón calcular
    document.getElementById('calcular').addEventListener('click', () => {
        const tasa = parseFloat(document.getElementById('tasa').value);
        const diasTasa = parseInt(document.getElementById('dias-tasa').value);
        const diasCap = parseInt(document.getElementById('dias-cap').value);

        if (!tasa || !diasTasa || !diasCap) {
            alert('Por favor, complete todos los campos');
            return;
        }

        if (diasTasa <= 0 || diasCap <= 0) {
            alert('Los días deben ser mayores a 0');
            return;
        }

        const resultado = calcularTasaEfectiva(tasa, diasTasa, diasCap);
        document.getElementById('resultado-valor').textContent = `${resultado}%`;
    });
}); 