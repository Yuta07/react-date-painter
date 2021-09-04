import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import './calendar.css'

import { DatePainter, DatePainterPicker } from '../react-date-painter/src/components'

export default {
	title: 'DatePainter',
	component: DatePainter,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof DatePainter>

const CalendarTemplate: ComponentStory<typeof DatePainter> = (args) => <DatePainter {...args} />

const DatePickerTemplate: ComponentStory<typeof DatePainter> = (args) => {
	const [state, setState] = useState(false)
	const [selectedDates, setSelectedDates] = useState(args.selectedDates)

	const handleClick = () => {
		setState((prev) => !prev)
	}

	console.log(selectedDates)

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
						<DatePainter {...args} />
					</DatePainterPicker>
				</>
			)}
		</>
	)
}

export const Calendar = CalendarTemplate.bind({})
Calendar.args = {
	selectedDates: [],
	uniqueHoliday: ['2021-09-20', '2021-09-23', '2021-11-03', '2021-11-23'],
}

export const DatePicker = DatePickerTemplate.bind({})
DatePicker.args = {
	selectedDates: [],
	uniqueHoliday: ['2021-09-20', '2021-09-23', '2021-11-03', '2021-11-23'],
}
