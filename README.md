# $elector
VanillaJS styled into jQuery syntax.  
A basic CSS selector.  


## Deployment
Include the file in the < head > of your html.
```bash
<script src="selector.js"></script>
```


## Usage/Examples
Elements must be wrapped.
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
