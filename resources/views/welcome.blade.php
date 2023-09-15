<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>BF-DOCS</title>
        <link rel="shortcut icon" href="assets/images/favicon.ico">

        @viteReactRefresh
        @vite('resources/js/app.js')
    </head>
    <body data-bs-spy="scroll" data-bs-target="#navbar-example">
        <div id="app"></div>
    </body>
</html>
