import { FC, PropsWithChildren } from 'react'

import './Button.css'

export interface ButtonProps extends PropsWithChildren {
	type: 'button' | 'submit'
	size: 's' | 'm' | 'l'
	variant: 'square' | 'round'
}

const style = {
	s: {
		height: '20px',
		width: '50px',
		fontSize: '12px',
	},
	m: {
		height: '30px',
		width: '100px',
		fontSize: '16px',
	},
	l: {
		height: '40px',
		width: '150px',
		fontSize: '20px',
	},
}

export const Button: FC<ButtonProps> = ({
	children,
	type = 'button',
	size = 'm',
	variant = 'square',
}) => {
	return (
		<button
			className="button"
			style={{
				borderRadius: variant === 'round' ? '100px' : '',
				...style[size],
			}}
			// eslint-disable-next-line react/button-has-type
			type={type}
		>
			{children}
		</button>
	)
}
