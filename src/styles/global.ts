export default `
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-size: 16px;
    overflow-y: auto;
  }

  html {
    font-size: 100%;
  }

  body, #root {
    min-height: 100vh;
  }

  ul, ol, h1, h2, h3, h4, h5, h6, p {
    padding: 0;
    margin: 0;
  }

  ul li, ol li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .hidden, .hide {
    display: none;
  }


  body.fixed {
    overflow: hidden;
  }
`;
