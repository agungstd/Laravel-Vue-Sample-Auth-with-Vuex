<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Vue-Router</title>
  </head>
  <body>
    <div id="app"></div>
    <script>
      // Fallback to prevent 404 errors when reloading on nested routes
      if (!window.history.state && !location.hash) {
        window.history.replaceState({}, '', '/');
      }
    </script>
    <script src="{{ mix('js/app.js') }}"></script>
  </body>
</html>