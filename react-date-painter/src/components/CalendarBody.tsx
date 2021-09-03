import React from 'react'
import dayjs from 'dayjs'

const today = dayjs()

export interface CalendarBody {
	currentMonth: Date
	selectedDates: Date[]
	uniqueHoliday?: Date[]
	handleDatePainter: (date?: string) => void
}

export const CalendarBody = ({ currentMonth, selectedDates, uniqueHoliday, handleDatePainter }: CalendarBody) => {
	return (
		<div>
			<p>body</p>
		</div>
	)
}
