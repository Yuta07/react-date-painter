import React from 'react'
import { extractDayOfWeekList } from '../utils/calendarHelper'

export const CalendarDayOfWeek = React.memo(() => {
	const dayOfWeekList = extractDayOfWeekList()

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
