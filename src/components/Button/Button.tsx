import React from 'react'

type ButtonProps = {
	onClick: () => void
	children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
	<button onClick={onClick} className="px-4 py-2 bg-blue-600 text-white">
		{children}
	</button>
)

export default Button
