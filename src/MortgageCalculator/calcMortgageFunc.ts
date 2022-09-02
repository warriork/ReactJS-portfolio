export const calcMortgage = (rate: number, period: number, price: number, firstPayment: number) => {
  const restToPay = price - firstPayment
  const monthlyRate = rate / 100 / 12
  const monthTotal = period * 12
  return (
    (restToPay * monthlyRate * (1 + monthlyRate) ** monthTotal) /
    (1 + monthlyRate) ** (monthTotal - 1)
  )
}
