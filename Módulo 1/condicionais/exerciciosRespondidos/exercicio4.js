/* Um lojista de roupas está oferecendo descontos especiais para a compra de camisas em grandes quantidades. Ele tem um preço base de R$ 200 por camisa e oferece um desconto de 10% para compras de 4 camisas ou mais. Escreva um programa em JavaScript que calcule o preço final da compra com base no número de camisas compradas. Se a quantidade de camisas for maior que 4, aplique o desconto; caso contrário, exiba o preço total sem desconto. */

const camisa = 200
const desconto = 0.1
const quantidade = 4

const CamisaQuantidade = camisa * quantidade

if (quantidade > 4) {
  console.log(`Preço final ${CamisaQuantidade - CamisaQuantidade * desconto}`)
} else {
  console.log(CamisaQuantidade)
}
