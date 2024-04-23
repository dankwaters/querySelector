# $elector
VanillaJS styled into jQuery syntax.  
A basic CSS selector.  


## Deployment
Include the file in the < head > of your html.
```bash
<script src="selector.js"></script>
```


## Usage/Examples
1. Elements must be wrapped.
```javascript
<script>
const $body = $('body')[0];

const $div = $(
  `<div class="foo">
    <p>hi</p><p>bi</p>
  </div>`
);

$body.append($div);
</script>
```  

2. Literally VanillaJs
* $('.hello') => document.getElementsByClassName('hello')
* $('#hello') => document.getElementById('hello')
* $('hello') => document.getElementsByTagName('hello')  

3. Everything else gets thrown into [querySelectorAll (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
