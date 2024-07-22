<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Name</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            padding: 20px;
            background-color: #f0f0f0;
        }

        .container {
            max-width: 800px;
            margin: auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            font-size: 2em;
            text-align: center;
            color: #333;
        }

        h2 {
            font-size: 1.5em;
            color: #333;
        }

        p {
            font-size: 1.1em;
            color: #555;
        }

        ul {
            list-style-type: disc;
            margin-left: 20px;
            color: #555;
        }

        .features {
            background-color: #f9f9f9;
            padding: 10px;
            border-radius: 4px;
            margin-top: 20px;
        }

        .code {
            background-color: #f0f0f0;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
        }

        pre {
            white-space: pre-wrap;
            word-wrap: break-word;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Project Name</h1>

        <div class="features">
            <h2>Description</h2>
            <p>This project is an API for an eCommerce store built using Node.js and TypeScript. It provides APIs for managing products, orders, users, etc.</p>
        </div>

        <div class="features">
            <h2>Features</h2>
            <ul>
                <li>Product management: Add, edit, delete store products.</li>
                <li>Order management: Review and modify order statuses submitted by customers.</li>
                <li>User registration and management: Login, register new users, manage user permissions.</li>
            </ul>
        </div>

        <div class="features">
            <h2>Installation and Usage</h2>
            <ol>
                <li><strong>Prerequisites:</strong> Ensure Node.js and npm are installed on your computer.</li>
                <li><strong>Installation:</strong> After cloning the project, navigate to the project directory in your terminal and run:</li>
            </ol>
            <div class="code">
                <pre>npm install</pre>
            </div>
            <ol start="3">
                <li><strong>Start the server:</strong> Run the following command to start the server:</li>
            </ol>
            <div class="code">
                <pre>npm start</pre>
            </div>
            <p>The server will run on <code>http://localhost:3000</code> (port can be configured in the settings).</p>
        </div>

        <div class="features">
            <h2>Credits</h2>
            <ul>
                <li><a href="https://expressjs.com/" target="_blank">Express.js</a>: For creating and managing servers and APIs.</li>
                <li><a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>: For enhanced code safety and type handling.</li>
                <li>MongoDB (May vary): Database for storing application data.</li>
            </ul>
        </div>
    </div>
</body>

</html>
