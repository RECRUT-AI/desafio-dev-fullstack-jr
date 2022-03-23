import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;700&display=swap');

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
        color: #616267;
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
        border: 1px solid #ccc;
        padding: 0.5rem 1rem;
        background: #616267;
        color: white;

        transition: all .3s ease-in-out;

        :hover {
            background: rgba(0, 0, 0, .3);
        }
    }
`;
