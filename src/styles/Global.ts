import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap');
    
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

	body {
		min-height: 100vh;
		width:100vw;
        font-family: 'Roboto', sans-serif;
	}
`;
