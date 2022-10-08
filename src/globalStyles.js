import { createGlobalStyle } from "styled-components"
import "./assets/fonts/index.css"

const GlobalStyle = createGlobalStyle`
/*Обнуление стилей*/
*{
	padding: 0;
	margin: 0;
	border: 0;
}
*,*:before,*:after{
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}
:focus,:active{outline: none;}
a:focus,a:active{outline: none;}

nav,footer,header,aside{display: block;}

html,body{
	height: 100%;
	width: 100%;
	font-family: "FocoBold", sans-serif;
	font-size: 100%;
	line-height: 1;
	font-size: 14px;
	-ms-text-size-adjust: 100%;
	-moz-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
}
input,button,textarea{font-family:inherit;}

input::-ms-clear{display: none;}
button{cursor: pointer;background: transparent;}
button::-moz-focus-inner {padding:0;border:0;}
a, a:visited{text-decoration: none;}
a:hover{text-decoration: none;}
ul li{list-style: none;}
img{vertical-align: top;max-width:100%;}

h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: 400;}

/* Отключен вертикальный скролл при просмотре видео */
.lock {
	overflow: hidden;
}
/* TODO удалить это! для проверки как на моб */
#root {
	overflow-x: hidden;
}

a {
	display: block;
}

.anim-paused {
	animation-play-state: paused !important;

	* {
		animation-play-state: paused !important;
	}
}
`

export default GlobalStyle
