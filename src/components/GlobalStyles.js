import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Domine:wght@400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Domine:wght@400;600;700&family=Lato:wght@300;400;700&display=swap');

*{
    /* font-family: 'Domine', serif; */
    font-family: 'Lato', sans-serif;
}

h1 h2{
    font-family: 'Domine', serif;
}

a {
    color: black;
    :hover{
        text-decoration:none;
        color: #1d1c1c;
    }
}

.centerChild {
	display: flex;
	justify-content: center;
	align-items: center;
}

`

export default GlobalStyles;