import React from 'react'
import dayjs from 'dayjs'
import { cleanup, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { DatePainter } from '../src/index'
import { extractDayOfWeekList } from '../src/utils/calendarHelper'

afterEach(cleanup)

describe('ReactDatePainter', () => {
	const now = dayjs()

	describe('calendar header test', () => {
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
	})

	describe('calendar week of day test', () => {
		test('test en day of week display', () => {
			const expectedDayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

			const element = extractDayOfWeekList('en')
			expect(element).toEqual(expect.arrayContaining(expectedDayOfWeek))

			const screen = render(<DatePainter selectedDates={[]} dayOfWeekFormat="en" />)
			expect(screen.getByTestId('day-week-0')).toHaveTextContent('Sun')
			expect(screen.getByTestId('day-week-3')).toHaveTextContent('Wed')
			expect(screen.getByTestId('day-week-6')).toHaveTextContent('Sat')
		})

		test('test ja day of week display', () => {
			const expectedDayOfWeek = ['日', '月', '火', '水', '木', '金', '土']

			const element = extractDayOfWeekList('ja')
			expect(element).toEqual(expect.arrayContaining(expectedDayOfWeek))

			const screen = render(<DatePainter selectedDates={[]} dayOfWeekFormat="ja" />)
			expect(screen.getByTestId('day-week-0')).toHaveTextContent('日')
			expect(screen.getByTestId('day-week-3')).toHaveTextContent('水')
			expect(screen.getByTestId('day-week-6')).toHaveTextContent('土')
		})
	})

	describe('calendar body current date test', () => {
		const day = now.format('M/D')

		test('test body today', () => {
			const screen = render(<DatePainter selectedDates={[]} />)
			const element = screen.getByTestId(`date-txt-${day}`)
			expect(element).toHaveClass('today')
		})

		test('test disable click event', () => {
			const screen = render(<DatePainter selectedDates={[]} />)
			const element = screen.getByTestId(`date-button-${day}`)
			fireEvent.click(element)

			const txtElement = screen.getByTestId(`date-txt-${day}`)
			expect(txtElement).toHaveStyle('background: rba(0, 151, 230);')
		})
	})

	describe('calendar holiday test', () => {
		test('test style like holiday', () => {
			const screen = render(<DatePainter selectedDates={[]} uniqueHoliday={['2021-09-23', '2021-08-09']} />)

			const holidayTargetFirst = dayjs().year(2021).month(8).date(23)
			const diffFirst = now.diff(holidayTargetFirst, 'month')

			for (let i = 0; i < Math.abs(diffFirst); i++) {
				fireEvent.click(screen.getByTestId('previous-button'))
			}

			expect(screen.getByTestId('date-txt-9/23')).toHaveClass('holiday')

			const holidayTargetSecond = dayjs().year(2021).month(7).date(9)
			const diffSecond = holidayTargetFirst.diff(holidayTargetSecond, 'month')

			for (let i = 0; i < diffSecond; i++) {
				fireEvent.click(screen.getByTestId('previous-button'))
			}

			expect(screen.getByTestId('date-txt-8/9')).toHaveClass('holiday')
		})
	})

	describe('selectedDate style test', () => {
		test('test selectedDate like selected', () => {
			const screen = render(<DatePainter selectedDates={[now.toDate()]} />)
			const element = screen.getByTestId(`date-txt-${now.format('M/D')}`)

			expect(element.classList.contains('selected')).toBe(true)
		})
	})
})
