import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;700&family=Playfair+Display:ital@1&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        height: 100%;
    }

    body {
        font: 16px 'Inter', sans-serif;
        color: #555;
        background: #eee;
    }

    button {
        cursor: pointer;
        
    }

    .main-btn-container {
        text-align: center;
        padding-bottom: 2rem;
    }

    .btn-main {
        
        border-radius: 10px;
        border: none;
        padding: 0.5rem 1rem;
        background: #616267;
        color: white;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);
        transition: all .3s ease-in-out;

        :hover {

            box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
        }
    }
`;
