import dayjs from 'dayjs'

export function createCurrentMonthCalendar(currentMonth: Date) {
	const currentMonthStart = dayjs(currentMonth).startOf('month')
	const currentMonthEnd = dayjs(currentMonth).endOf('month')

	const diff = dayjs(currentMonthEnd).diff(currentMonthStart, 'day') + 1

	const previousMonthRest = dayjs(currentMonthStart).day()
	const previousMonthRestArray = [...Array(previousMonthRest)].map((_, i) => {
		return dayjs(currentMonthStart)
			.subtract(i + 1, 'day')
			.toDate()
	})
	previousMonthRestArray.reverse()

	const currentMonthDateArray: Date[] = [...Array(diff)].map((_, i) => {
		return dayjs(currentMonthStart).add(i, 'day').toDate()
	})

	const nextMonthRest = 6 - dayjs(currentMonthEnd).day()
	const nextMonthRestArray = [...Array(nextMonthRest)].map((_, i) => {
		return dayjs(currentMonthEnd)
			.add(i + 1, 'day')
			.toDate()
	})

	const calendarArray = previousMonthRestArray.concat(currentMonthDateArray).concat(nextMonthRestArray)
	const restArrayIndex = calendarArray
		.map((_, i) => {
			if (i < previousMonthRest || i >= calendarArray.length - nextMonthRest) return i
		})
		.filter((element) => {
			return element !== undefined
		})

	return { calendarArray, restArrayIndex }
}
