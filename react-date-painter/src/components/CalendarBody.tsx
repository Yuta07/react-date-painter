import React from 'react'
import dayjs from 'dayjs'

const today = dayjs()

export interface CalendarBody {
	currentMonth: Date
	selectedDates: Date[]
	uniqueHoliday?: string[]
	handleDatePainter: (date?: string) => void
}

export const CalendarBody = ({ currentMonth, selectedDates, uniqueHoliday, handleDatePainter }: CalendarBody) => {
	return (
		<div className="calendar-body">
			<p>body</p>
		</div>
	)
}
