import React from 'react'
import dayjs from 'dayjs'

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
						<svg
							className="previous-arrow"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 64 64"
							aria-labelledby="title"
							aria-describedby="desc"
							role="img"
							xmlnsXlink="http://www.w3.org/1999/xlink"
						>
							<title>Angle Right</title>
							<desc>A line styled icon from Orion Icon Library.</desc>
							<path
								data-name="layer1"
								fill="none"
								stroke="#666666"
								strokeMiterlimit="10"
								strokeWidth="4"
								d="M26 20.006L40 32 26 44.006"
								strokeLinejoin="round"
								strokeLinecap="round"
							></path>
						</svg>
					</button>
					<button className="arrow-button next-button" onClick={handleNextClick}>
						<svg
							className="next-arrow"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 64 64"
							aria-labelledby="title"
							aria-describedby="desc"
							role="img"
							xmlnsXlink="http://www.w3.org/1999/xlink"
						>
							<title>Angle Right</title>
							<desc>A line styled icon from Orion Icon Library.</desc>
							<path
								data-name="layer1"
								fill="none"
								stroke="#666666"
								strokeMiterlimit="10"
								strokeWidth="4"
								d="M26 20.006L40 32 26 44.006"
								strokeLinejoin="round"
								strokeLinecap="round"
							></path>
						</svg>
					</button>
				</div>
				<span className="current-month">{dayjs(currentMonth).format(format)}</span>
			</div>
		)
	}
)
