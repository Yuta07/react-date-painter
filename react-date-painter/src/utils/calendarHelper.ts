export function extractDayOfWeekList(env: 'en' | 'ja'): string[] {
	if (env === 'en') {
		return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
	} else {
		return ['日', '月', '火', '水', '木', '金', '土']
	}
}
