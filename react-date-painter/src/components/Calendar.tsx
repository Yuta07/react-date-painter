import React, { forwardRef, useCallback, useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { CalendarBody } from './CalendarBody'
import { CalendarHeader } from './CalendarHeader'
import { updateWeekStart } from '../utils/calendarHelper'

import './index.css'

const now = dayjs().toDate()

export interface ReactDatePainter {
	format?: string
	weekStart?: 's' | 'm'
	selectedDates: Date[]
	uniqueHoliday?: Date[]
	handleDateClick?: (date?: string) => void
}

export const Calendar = forwardRef<HTMLDivElement, ReactDatePainter>(
	({ format = 'MMMM YYYY', weekStart = 's', selectedDates, uniqueHoliday, handleDateClick }, ref) => {
		const [currentMonth, setCurrentMonth] = useState<Date>(now)

		useEffect(() => {
			updateWeekStart(weekStart)
		}, [])

		const handlePreviousClick = useCallback(() => {
			const value = dayjs(currentMonth).subtract(1, 'month').toDate()
			setCurrentMonth(value)
		}, [currentMonth])

		const handleNextClick = useCallback(() => {
			const value = dayjs(currentMonth).add(1, 'month').toDate()
			setCurrentMonth(value)
		}, [currentMonth])

		const handleDatePainter = useCallback(() => {
			handleDateClick && handleDateClick('')
		}, [handleDateClick])

		return (
			<div className="calendar-root" ref={ref}>
				<CalendarHeader
					format={format}
					currentMonth={currentMonth}
					handlePreviousClick={handlePreviousClick}
					handleNextClick={handleNextClick}
				/>
				<CalendarBody
					currentMonth={currentMonth}
					selectedDates={selectedDates}
					uniqueHoliday={uniqueHoliday}
					handleDatePainter={handleDatePainter}
				/>
			</div>
		)
	}
)
