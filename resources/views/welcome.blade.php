<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>BF-DOCS</title>
        <link rel="shortcut icon" href="assets/images/favicon.ico">
        <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
        rel="stylesheet"
      />
        @viteReactRefresh
        @vite('resources/js/app.js')
    </head>
    <body data-bs-spy="scroll" data-bs-target="#navbar-example">
        <div id="app"></div>
    </body>
</html>
