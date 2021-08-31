import React from 'react'
import './index.css'

export const Button = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithRef<'button'>>(
	({ children, className, ...props }, ref) => {
		return (
			<button {...props} ref={ref} className="button">
				{children}
			</button>
		)
	}
)
