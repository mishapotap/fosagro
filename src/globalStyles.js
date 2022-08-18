import { createGlobalStyle } from "styled-components"
import "./assets/fonts/index.css"

const GlobalStyle = createGlobalStyle`
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-family: "FocoBold";

	&:focus {
		outline: none;
	}
}

/* TODO удалить это! для проверки как на моб */
#root {
	overflow: hidden;
}

/* *::before,
*::after {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
} */

body {
	padding: 0;
	margin: 0;
	box-sizing: border-box;

	&.lock {
		overflow: hidden;
	}
}
button {
	border: 0;
	transition: 0.3s;
	cursor: pointer;
	background: transparent;
}
a {
	text-decoration: none;
}
`

export default GlobalStyle
