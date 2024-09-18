import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from '../dist'
import '../src/styles/globals.css'

const App = () => (
	<div>
		<Button onClick={() => alert('Clicked!')}>Click Me</Button>
	</div>
)

ReactDOM.render(<App />, document.getElementById('root'))
