import React from 'react'
import { extractDayOfWeekList } from '../utils/calendarHelper'

export const CalendarDayOfWeek = React.memo(() => {
	const dayOfWeekList = extractDayOfWeekList()

	return (
		<div className="calendar-day-week" data-testid="day-week">
			{dayOfWeekList.map((day, i) => {
				return (
					<span key={day} className="day-week-txt" data-testid={`day-week-${i}`}>
						{day}
					</span>
				)
			})}
		</div>
	)
})
