export function tasaDescontadaAEfectiva(tasaDescontada, dias) {
    const tasaDecimal = tasaDescontada / 100;
    const tasaEfectiva = (tasaDecimal / (1 - tasaDecimal));
    
    const procedimiento = `Procedimiento para convertir tasa descontada a efectiva:

1. Convertir tasa descontada a decimal:
   ${tasaDescontada}% ÷ 100 = ${tasaDecimal}

2. Aplicar fórmula de conversión:
   i = d / (1 - d)
   i = ${tasaDecimal} ÷ (1 - ${tasaDecimal})
   i = ${tasaEfectiva * 100}%

Donde:
d = tasa descontada en decimal
i = tasa efectiva resultante`;

    return {
        tasa: tasaEfectiva * 100,
        dias: dias,
        procedimiento: procedimiento
    };
}

export function convertirEntreEfectivas(tasaEfectivaOrigen, diasOrigen, diasDestino) {
    const tasaDecimal = tasaEfectivaOrigen / 100;
    const tasaEfectiva = (Math.pow(1 + tasaDecimal, diasDestino / diasOrigen) - 1) * 100;
    
    const procedimiento = `Procedimiento para convertir entre tasas efectivas:

1. Convertir tasa efectiva origen a decimal:
   ${tasaEfectivaOrigen}% ÷ 100 = ${tasaDecimal}

2. Aplicar fórmula de conversión:
   i₂ = (1 + ${tasaDecimal})^(${diasDestino}/${diasOrigen}) - 1
   i₂ = ${tasaEfectiva}%

Donde:
i₁ = tasa efectiva origen
i₂ = tasa efectiva destino
n₁ = días origen (${diasOrigen})
n₂ = días destino (${diasDestino})`;

    return {
        tasa: tasaEfectiva,
        procedimiento: procedimiento
    };
} 