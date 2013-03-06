#rint.jquery.matchScreen.js

```javascript
$(selector).matchScreen(options)
```

## Basic Use
```html
<!DOCTYPE html>
<html>
<head>
    <script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
    <script src="lib/rint.jquery.matchScreen.js"></script>
    <script>
        $(document).ready(function () {
            $('#wrap').matchScreen({
                width: 1024,
                height: 576,
                minimum: 0.5
            });
        });
    </script>
</head>
<body>
    <div id="wrap">
        <h1>Match Screen Basic</h1>
        <h2>CSS3 Transform</h2>
        <h3>Scale all inside the element.</h3>
    </div>
</body>
</html>
```

## Options

```javascript
$(selector).matchScreen({
    width: number, /* Default is 1280 */
    height: number, /* Defult is 720 */
    minimum: number /* Default is undefined*/
})
```

## output

![ScreenShot](https://raw.github.com/rintiantta/rint.jquery.matchScreen.js/master/github/1.png)
![ScreenShot](https://raw.github.com/rintiantta/rint.jquery.matchScreen.js/master/github/0.png)
![ScreenShot](https://raw.github.com/rintiantta/rint.jquery.matchScreen.js/master/github/2.PNG)