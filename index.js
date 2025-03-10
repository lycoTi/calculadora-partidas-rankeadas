

function calculaRank(vitorias, derrotas) {
    saldoVitorias = vitorias - derrotas;
    let nivel = '';
    if (saldoVitorias < 10) {
        nivel = 'Ferro';
    } else if (saldoVitorias > 10 && saldoVitorias < 20) {
        nivel = 'Bronze';
    } else if (saldoVitorias > 20 && saldoVitorias < 50) {
        nivel = 'Prata';
    } else if (saldoVitorias > 50 && saldoVitorias < 80) {
        nivel = 'Ouro';
    } else if (saldoVitorias > 80 && saldoVitorias < 90) {
        nivel = 'Diamante';
    } else if (saldoVitorias > 90 && saldoVitorias < 100) {
        nivel = 'Lendário';
    } else if (saldoVitorias >= 100) {
        nivel = 'Imortal';
    }
    return `O Heroi tem saldo de ${saldoVitorias} vitórias, seu rank é ${nivel}`;
}

const rank = calculaRank(10, 5)
console.log(rank);