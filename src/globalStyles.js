import { createGlobalStyle } from "styled-components"

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
	/* outline: 0; */
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
