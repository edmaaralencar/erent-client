export function getDaysArray(start: Date, end: Date) {
  let arr, dt
  for (
    arr = [], dt = new Date(start);
    dt <= new Date(end);
    dt.setDate(dt.getDate() + 1)
  ) {
    arr.push(new Date(dt))
  }

  return arr.map(date => {
    date.setHours(0, 0, 0, 0)

    return date.getTime()
  })
}

export function calculateDifferenceBetweenDates(
  check_in: Date,
  checkout: Date
) {
  const t2 = checkout.getTime()
  const t1 = check_in.getTime()

  return (t2 - t1) / (24 * 3600 * 1000)
}
