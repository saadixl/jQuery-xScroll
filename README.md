# xScroll
A jQuery plugin for enabling  x-axis scrolling using arrow keys and custom classes

## How to use xScroll

#### Include jQuery

```
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.js"></script>
```


#### Include ```xscroll.js``` after jQuery
```
 <script type="text/javascript" src="xscroll.js"></script>
```


#### Call ```xScroll()``` with proper scrollable selector. Then pass the scroll distance in pixel and pass the delay in milliseconds.

Structure:
```$(selector).xScroll(distance, delay);```

Example:
```
<script type="text/javascript">
  $(document).ready(function() {
    $(".wrap").xScroll(300, 500);
  });
</script>
```

If you want to scroll left or right using buttons/icons; then for scrolling left add ```navscroll__left``` and for scrolling right add ```navscroll__right``` class to any element.
