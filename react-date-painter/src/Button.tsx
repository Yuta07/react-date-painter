import { ComponentPropsWithRef, forwardRef } from 'react'
import './index.css'

type BaseProps = ComponentPropsWithRef<'button'>

interface ButtonProps extends BaseProps {
	loading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, className, loading, ...props }, ref) => {
	return (
		<button {...props} ref={ref} className="button">
			{children}
		</button>
	)
})
