// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora de todos os dias de um ano, faça um programa, na linguagem que desejar, que calcule e retorne:

// - O menor valor de faturamento ocorrido em um dia do ano;
// - O maior valor de faturamento ocorrido em um dia do ano;
// - Número de dias no ano em que o valor de faturamento diário foi superior à média anual.

// a) Considerar o vetor já carregado com as informações de valor de faturamento.

// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média.

// c) Utilize o algoritmo mais veloz que puder definir.

// RESPOSTA:

function faturamento(lista_faturamento_diario) {
    let soma = 0;
    let dias_com_faturamento = 0;
    let maior_faturamento = 0;
    let menor_faturamento = -1;
    let media_de_faturamento = 0;

    lista_faturamento_diario.forEach((faturamento_do_dia) => {
        soma = soma + faturamento_do_dia;

        if (faturamento_do_dia > 0) {
            dias_com_faturamento = dias_com_faturamento + 1;
        }

        if (faturamento_do_dia > maior_faturamento) {
            maior_faturamento = faturamento_do_dia;
        }

        if (faturamento_do_dia != 0) {
            if (menor_faturamento == -1) {
                menor_faturamento = faturamento_do_dia;
            } else if (faturamento_do_dia < menor_faturamento) {
                menor_faturamento = faturamento_do_dia;
            }
        }
    });

    media_de_faturamento = soma / dias_com_faturamento;

    let maior_que_media = lista_faturamento_diario.filter(
        (valor) => valor > media_de_faturamento
    );
    maior_que_media = maior_que_media.length;

    return {
        "Menor faturamento": menor_faturamento,
        "Maior faturamento": maior_faturamento,
        "Superior que media": maior_que_media,
    };
}
