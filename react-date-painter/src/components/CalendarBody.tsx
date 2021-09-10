import React from 'react'
import dayjs from 'dayjs'
import { createCurrentMonthCalendar } from '../utils/createCurrentMonthCalendar'

const today = dayjs().startOf('day').toDate()

export interface CalendarBody {
	currentMonth: Date
	selectedDates: Date[]
	uniqueHoliday: string[]
	handleSelectDatePainter: (date: Date) => void
	handleRemoveDatePainter: (date: Date) => void
}

export const CalendarBody = React.memo(
	({ currentMonth, selectedDates, uniqueHoliday, handleSelectDatePainter, handleRemoveDatePainter }: CalendarBody) => {
		const { calendarArray, restArrayIndex } = createCurrentMonthCalendar(currentMonth)

		const formatSelectedDates = selectedDates.map((date) => {
			return dayjs(date).format('YYYY-MM-DD')
		})

		return (
			<div className="calendar-body">
				{calendarArray.map((date, i) => {
					const day = dayjs(date).format('D')
					const testIdDay = dayjs(date).format('M/D')

					const diffMonthClassName = restArrayIndex.indexOf(i) !== -1 ? 'diff-month' : ''
					const saturdayClassName = restArrayIndex.indexOf(i) === -1 && (i === 6 || (i + 1) % 7 === 0) ? 'saturday' : ''
					const sundayClassName = restArrayIndex.indexOf(i) === -1 && (i === 0 || i % 7 === 0) ? 'sunday' : ''
					const todayClassName = dayjs(date).isSame(today) ? 'today' : ''
					const holidayClassName = uniqueHoliday.indexOf(dayjs(date).format('YYYY-MM-DD')) !== -1 ? 'holiday' : ''
					const selected = formatSelectedDates.indexOf(dayjs(date).format('YYYY-MM-DD')) !== -1

					return (
						<p key={date.toString()} className="date-rect-pack">
							<button
								className="date-button"
								data-testid={`date-button-${testIdDay}`}
								onClick={() => (selected ? handleRemoveDatePainter(date) : handleSelectDatePainter(date))}
							>
								<span
									className={`date-txt ${diffMonthClassName} ${saturdayClassName} ${sundayClassName} ${todayClassName} ${holidayClassName} ${
										selected && 'selected'
									}`}
									data-testid={`date-txt-${testIdDay}`}
								>
									{day}
								</span>
							</button>
						</p>
					)
				})}
			</div>
		)
	}
)
