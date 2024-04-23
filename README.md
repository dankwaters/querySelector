# $elector
VanillaJs styled into jQuery $yntax.


## Deployment
Include the file in the <head> of your html.
```bash
<script src="selector.js"></script>
```


## Usage/Examples
1. Elements must be wrapped.
```javascript
<script>
const $body = $('body')[0];

const $one = $(
  `<div class="one">
    <p>hi</p><p>bi</p>
  </div>`
);

const $two = $(
  `<div class="two">
    <p>hi</p><p>bi</p>
  </div>
  <div></div>`
);

$body.append($one); //this works
$body.append($two); //this doesn't work
</script>
```

2. Literally VanillaJs
* $('.hello') => document.getElementsByClassName('hello')
* $('#hello') => document.getElementById('hello')
* $('hello') => document.getElementsByTagName('hello')

3. Everything else gets thrown into querySelectorAll
* [MDN querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
