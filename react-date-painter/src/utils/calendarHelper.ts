import dayjs from 'dayjs'
import updateLocale from 'dayjs/plugin/updateLocale'

dayjs.extend(updateLocale)

export function updateWeekStart(weekStart: 's' | 'm' = 's') {
	const weekDay = weekStart === 's' ? 0 : 1

	dayjs.updateLocale('en', { weekStart: weekDay })
}
