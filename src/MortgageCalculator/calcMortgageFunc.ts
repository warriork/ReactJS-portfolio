export const calcMortgage = (arg: {
  rate: number
  period: number
  price: number
  firstPayment: number
}) => {
  const restToPay = arg.price - arg.firstPayment
  const monthlyRate = arg.rate / 100 / 12
  const monthTotal = arg.period * 12
  const monthlyMortgagePayment =
    (restToPay * monthlyRate * (1 + monthlyRate) ** monthTotal) /
    (1 + monthlyRate) ** (monthTotal - 1)
  return monthlyMortgagePayment
}
