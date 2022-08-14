import { useState } from 'react'
import { css } from '@emotion/react'

import '@@/App.css'
import { ReactComponent as ReactLogo } from '@@/assets/react.svg'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" rel="noreferrer" target="_blank">
					<img alt="Vite logo" className="logo" src="/vite.svg" />
				</a>
				<a href="https://reactjs.org" rel="noreferrer" target="_blank">
					<ReactLogo className="logo react" height="144" width="144" />
				</a>
			</div>
			<h1
				css={css`
					text-decoration: underline;
				`}
			>
				Vite + React
			</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	)
}

export default App
