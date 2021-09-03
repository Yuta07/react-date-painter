import React from 'react'
import dayjs from 'dayjs'
import Arrow from '../assets/arrow.svg'

export interface CalendarHeaderProps {
	format: string
	currentMonth: Date
	handlePreviousClick: () => void
	handleNextClick: () => void
}

export const CalendarHeader = React.memo(
	({ format, currentMonth, handlePreviousClick, handleNextClick }: CalendarHeaderProps) => {
		return (
			<div className="calendar-header">
				<div className="calendar-header-arrow">
					<button className="arrow-button pre-button" onClick={handlePreviousClick}>
						<img src={Arrow} alt="previous-button" className="previous-arrow" />
					</button>
					<button className="arrow-button next-button" onClick={handleNextClick}>
						<img src={Arrow} alt="next-button" className="next-arrow" />
					</button>
				</div>
				<span className="current-month">{dayjs(currentMonth).format(format)}</span>
			</div>
		)
	}
)
