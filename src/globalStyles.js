import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-family: "FocoBold";
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
}
button {
	/* outline: 0; */
}
a {
	text-decoration: none;
}
`

export default GlobalStyle
