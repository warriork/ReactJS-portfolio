export const calcMortgage = (rate: number, period: number, price: number, firstPayment: number) => {
  return (
    ((((price - firstPayment) * rate) / 100 / 12) * (1 + rate / 100 / 12) ** (12 * period)) /
    ((1 + rate / 100 / 12) ** (12 * period) - 1)
  )
}
