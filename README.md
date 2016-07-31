# delayLoadImage

## What is delayLoadImage?

delayLoadImage is a library for lazy loading images without using jQuery!

## Download

### Bower

`$ bower install delayLoadImage`

## Usage

### JavaScript

Include delayLoadImage.js in your head tags or right before your body closing tag.

```html
<script src="./src/js/delayLoadImage.js"></script>
```

### CSS

Include delayLoadImage.css style in your head tags.

```html
<link rel="stylesheet" type="text/css" href="./src/css/delayLoadImage.css">
```

### HTML

Use a specific class for your img and add the img path in the data-src attribute.

```html
<img src="" data-src="./img/1.jpg" class="delayLoadImage">
```

### Fire the Library

Run DELAYLOADIMAGE.init() function after include delayLoadImage.js.

```html
<script>
    DELAYLOADIMAGE.init();
</script>
```

### Custom the Library

Example

```html
<script>
    DELAYLOADIMAGE.init(function() {
        console.log('success');
    }, function() {
        console.log('error');
    });
</script>
```

