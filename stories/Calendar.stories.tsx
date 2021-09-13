import React, { useCallback, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import './calendar.css'

import { DatePainter, DatePainterPicker } from '../react-date-painter/src'

export default {
	title: 'DatePainter',
	component: DatePainter,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof DatePainter>

const CalendarTemplate: ComponentStory<typeof DatePainter> = (args) => <DatePainter {...args} />

const SelectedCalendarTemplate: ComponentStory<typeof DatePainter> = (args) => {
	const [selectedDates, setSelectedDates] = useState(args.selectedDates)

	return (
		<DatePainter
			selectedDates={selectedDates}
			uniqueHoliday={args.uniqueHoliday}
			handleSelectDates={useCallback((dates: Date[]) => {
				setSelectedDates(dates)
			}, [])}
		/>
	)
}

const DatePickerTemplate: ComponentStory<typeof DatePainter> = (args) => {
	const [state, setState] = useState(false)
	const [selectedDates, setSelectedDates] = useState(args.selectedDates)

	const handleClick = () => {
		setState((prev) => !prev)
	}

	const handleSelectDates = useCallback((dates: Date[]) => {
		setSelectedDates(dates)
	}, [])

	return (
		<>
			<div id="picker-base-point">
				<button type="button" onClick={handleClick}>
					Click！！
				</button>
			</div>
			{state && (
				<>
					<div className="overlay" onClick={handleClick} />
					<DatePainterPicker targetId="picker-base-point">
						<DatePainter
							selectedDates={selectedDates}
							uniqueHoliday={args.uniqueHoliday}
							handleSelectDates={handleSelectDates}
						/>
					</DatePainterPicker>
				</>
			)}
		</>
	)
}

export const OnlyCalendar = CalendarTemplate.bind({})
OnlyCalendar.args = {
	selectedDates: [],
}

export const JaDayOfWeekCalendar = CalendarTemplate.bind({})
JaDayOfWeekCalendar.args = {
	selectedDates: [],
	dayOfWeekFormat: 'ja',
}

export const NoSelectedCalendar = CalendarTemplate.bind({})
NoSelectedCalendar.args = {
	selectedDates: [],
	uniqueHoliday: ['2021-09-20', '2021-09-23', '2021-11-03', '2021-11-23'],
}

export const SelectedCalendar = SelectedCalendarTemplate.bind({})
SelectedCalendar.args = {
	selectedDates: [],
	uniqueHoliday: ['2021-09-20', '2021-09-23', '2021-11-03', '2021-11-23'],
}

export const DatePicker = DatePickerTemplate.bind({})
DatePicker.args = {
	selectedDates: [],
	uniqueHoliday: ['2021-09-20', '2021-09-23', '2021-11-03', '2021-11-23'],
}
