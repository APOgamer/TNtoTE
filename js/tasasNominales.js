export function tasaNominalAEfectiva(tasaNominal, diasTasa, diasCapitalizacion) {
    const tasaDecimal = tasaNominal / 100;
    const tasaPorPeriodo = (tasaDecimal * diasCapitalizacion) / diasTasa;
    const periodos = diasTasa / diasCapitalizacion;
    const tasaEfectiva = Math.pow(1 + tasaPorPeriodo, periodos) - 1;
    
    const procedimiento = `Procedimiento para convertir tasa nominal a efectiva:

1. Convertir tasa nominal a decimal:
   ${tasaNominal}% ÷ 100 = ${tasaDecimal}

2. Calcular tasa por período de capitalización:
   (${tasaDecimal} × ${diasCapitalizacion}) ÷ ${diasTasa} = ${tasaPorPeriodo}

3. Calcular número de períodos:
   ${diasTasa} ÷ ${diasCapitalizacion} = ${periodos}

4. Aplicar fórmula de tasa efectiva:
   TEF = (1 + ${tasaPorPeriodo})^${periodos} - 1
   TEF = ${tasaEfectiva * 100}%`;

    return {
        tasa: tasaEfectiva * 100,
        procedimiento: procedimiento
    };
} 