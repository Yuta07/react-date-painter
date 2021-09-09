import React from 'react'
import dayjs from 'dayjs'
import { cleanup, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { DatePainter } from '../src/index'
import { extractDayOfWeekList } from '../src/utils/calendarHelper'

const now = dayjs().year(2021).month(8)

afterEach(cleanup)

describe('ReactDatePainter', () => {
	test('test calendar month format', () => {
		const currentMonth = now.format('MMMM YYYY')

		const screen = render(<DatePainter selectedDates={[]} />)
		const element = screen.getByTestId('current-month')

		expect(element).toHaveTextContent(currentMonth)

		fireEvent.click(screen.getByTestId('previous-button'))
		const previousMonth = now.subtract(1, 'month').format('MMMM YYYY')
		expect(screen.getByTestId('current-month')).toHaveTextContent(previousMonth)

		fireEvent.click(screen.getByTestId('next-button'))
		expect(screen.getByTestId('current-month')).toHaveTextContent(currentMonth)

		fireEvent.click(screen.getByTestId('next-button'))
		const nextMonth = now.add(1, 'month').format('MMMM YYYY')
		expect(screen.getByTestId('current-month')).toHaveTextContent(nextMonth)
	})

	test('test custom calendar month format', () => {
		const currentMonth = now.format('YYYY/MM')

		const screen = render(<DatePainter selectedDates={[]} format="YYYY/MM" />)
		const element = screen.getByTestId('current-month')

		expect(element).toHaveTextContent(currentMonth)
	})

	test('test day of week display', () => {
		const expectedDayOfWeek = ['日', '月', '火', '水', '木', '金', '土']

		const element = extractDayOfWeekList()
		expect(element).toEqual(expect.arrayContaining(expectedDayOfWeek))

		const screen = render(<DatePainter selectedDates={[]} />)
		expect(screen.getByTestId('day-week-0')).toHaveTextContent('日')
		expect(screen.getByTestId('day-week-3')).toHaveTextContent('水')
		expect(screen.getByTestId('day-week-6')).toHaveTextContent('土')
	})
})
