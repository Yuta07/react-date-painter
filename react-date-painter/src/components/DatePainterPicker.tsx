import { FC, ReactNode, ReactPortal, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

interface DatePainterPicker {
	children: ReactNode
	targetId?: string
}

export const DatePainterPicker: FC<DatePainterPicker> = ({ children, targetId }): ReactPortal => {
	const container = useRef(document.createElement('div')).current as HTMLDivElement
	container.classList.add('date-painter-picker-root')

	const pickerRef = useRef() as React.MutableRefObject<HTMLDivElement>

	useEffect(() => {
		const modal = pickerRef.current

		let target: HTMLElement
		if (targetId) {
			target = document.getElementById(targetId) as HTMLElement
		} else {
			target = document.body as HTMLElement
		}

		if (modal) {
			target.appendChild(container)
		}

		return () => {
			if (modal) {
				target.removeChild(container)
			}
		}
	}, [])

	const el = (
		<div className="date-painter-picker" ref={pickerRef}>
			{children}
		</div>
	)

	return createPortal(el, container)
}
