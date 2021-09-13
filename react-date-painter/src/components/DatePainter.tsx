import { forwardRef, useCallback, useEffect, useReducer, useState } from 'react'
import dayjs from 'dayjs'

// calendar components
import { CalendarBody } from './CalendarBody'
import { CalendarDayOfWeek } from './CalendarDayOfWeek'
import { CalendarHeader } from './CalendarHeader'

// base style
import './index.css'

const now = dayjs().toDate()

type PainterState = {
	selectedDates: Date[]
}

const SELECTED_DATE = 'SELECTED_DATE'
const REMOVE_DATE = 'REMOVE_DATE'

type SelectedDate = {
	type: typeof SELECTED_DATE
	payload: Date
}

type RemoveDate = {
	type: typeof REMOVE_DATE
	payload: Date
}

type ActionType = SelectedDate | RemoveDate

function painterReducer(state: PainterState, action: ActionType): PainterState {
	switch (action.type) {
		case 'SELECTED_DATE':
			return {
				...state,
				selectedDates: [...state.selectedDates, action.payload],
			}
		case 'REMOVE_DATE':
			return {
				...state,
				selectedDates: state.selectedDates.filter((date) => {
					return dayjs(date).format('YYYY-MM-DD') !== dayjs(action.payload).format('YYYY-MM-DD')
				}),
			}
	}
}

export interface ReactDatePainter {
	format?: string
	selectedDates: Date[]
	uniqueHoliday?: string[]
	dayOfWeekFormat?: 'en' | 'ja'
	handleSelectDates?: (dates: Date[]) => void
}

export const DatePainter = forwardRef<HTMLDivElement, ReactDatePainter>(
	({ format = 'MMMM YYYY', selectedDates, uniqueHoliday = [], dayOfWeekFormat = 'en', handleSelectDates }, ref) => {
		const [currentMonth, setCurrentMonth] = useState<Date>(now)

		const [state, dispatch] = useReducer(painterReducer, { selectedDates: selectedDates })

		useEffect(() => {
			handleSelectDates && handleSelectDates(state.selectedDates)
		}, [state.selectedDates, handleSelectDates])

		const handlePreviousClick = useCallback(() => {
			const value = dayjs(currentMonth).subtract(1, 'month').toDate()
			setCurrentMonth(value)
		}, [currentMonth])

		const handleNextClick = useCallback(() => {
			const value = dayjs(currentMonth).add(1, 'month').toDate()
			setCurrentMonth(value)
		}, [currentMonth])

		const handleSelectDatePainter = useCallback(
			(date: Date) => {
				handleSelectDates && dispatch({ type: 'SELECTED_DATE', payload: date })
			},
			[dispatch]
		)

		const handleRemoveDatePainter = useCallback(
			(date: Date) => {
				handleSelectDates && dispatch({ type: 'REMOVE_DATE', payload: date })
			},
			[dispatch]
		)

		return (
			<div className="date-painter-root" ref={ref}>
				<CalendarHeader
					format={format}
					currentMonth={currentMonth}
					handlePreviousClick={handlePreviousClick}
					handleNextClick={handleNextClick}
				/>
				<CalendarDayOfWeek dayOfWeekFormat={dayOfWeekFormat} />
				<CalendarBody
					currentMonth={currentMonth}
					selectedDates={state.selectedDates}
					uniqueHoliday={uniqueHoliday}
					handleSelectDatePainter={handleSelectDatePainter}
					handleRemoveDatePainter={handleRemoveDatePainter}
				/>
			</div>
		)
	}
)
