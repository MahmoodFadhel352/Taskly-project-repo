const React = require('react')
const NavBar= require('./NavBar')
function Layout(props){
 return(
    <html>
        <head>
            <title>Taskly App</title>
            <link rel="stylesheet" href="/css/style.css" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body>
            <NavBar/>
            <div className="container">
                {props.children}
            </div>
            <footer className="text-center mt-4 mb-2">
                Mahmood Kadhem 2025 &#169;
            </footer>
        </body>
    </html>
 )
}

module.exports = Layout