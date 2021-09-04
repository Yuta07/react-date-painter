import dayjs from 'dayjs'
import updateLocale from 'dayjs/plugin/updateLocale'

dayjs.extend(updateLocale)

export function updateWeekStart(weekStart: 's' | 'm' = 's'): void {
	const weekDay = weekStart === 's' ? 0 : 1

	dayjs.updateLocale('en', { weekStart: weekDay })
}

export function extractDayOfWeekList(weekStart: 's' | 'm'): string[] {
	if (weekStart === 's') {
		return ['日', '月', '火', '水', '木', '金', '土']
	} else {
		return ['月', '火', '水', '木', '金', '土', '日']
	}
}
