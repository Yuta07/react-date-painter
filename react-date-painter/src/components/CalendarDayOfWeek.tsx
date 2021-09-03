import React from 'react'
import { extractDayOfWeekList } from '../utils/calendarHelper'

interface CalendarDayWeekProps {
	weekStart: 's' | 'm'
}

export const CalendarDayOfWeek = React.memo(({ weekStart }: CalendarDayWeekProps) => {
	const dayOfWeekList = extractDayOfWeekList(weekStart)

	return (
		<div className="calendar-day-week">
			{dayOfWeekList.map((day) => {
				return (
					<span key={day} className="day-week-txt">
						{day}
					</span>
				)
			})}
		</div>
	)
})
