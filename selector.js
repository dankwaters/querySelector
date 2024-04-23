/* https://github.com/dankwaters/selector */

function getHTMLByParse (html){
  let parseHTML = function(html){
    let parser = new DOMParser();
    let d = parser.parseFromString(html, "text/html");
    return d.childNodes[0].childNodes[1].firstChild;
  }
  let renderList = function(html, cb) {
    let list = []; let item = '';
    let count = {'openTag':0, 'closeTag':0}
    let arr = html.split('<').slice(1);
    arr.forEach((e)=>{
      item += '<' + e;
      e[0]!=='/' ? count.openTag++ : count.closeTag++;
      if (count.closeTag === count.openTag) {
        list.push(item);
        item = '';
      }
    });
    list.forEach((item)=>{ cb(item) });
  }

  let getInner = html.slice(1, -1);
  let start = getInner.indexOf('<') + 1;
  let end = getInner.lastIndexOf('>') + 1;

  if (start > end)  { return parseHTML(html); }

  if (start < end)  {
    let outerHtml = html.slice(0, start) + html.slice(end+1);
    let innerHtml = html.slice(start, end+1);
    let $wrapper = parseHTML(outerHtml);

    renderList(innerHtml, function(item){
      $wrapper.append(getHTMLByParse(item));
    })
    return $wrapper;
  }
}

window.$ = function (select){
  let key = select[0]

  if (key === '<') { return getHTMLByParse(select); }

  let search = select.slice(1);
  let useQuerySelector = false;
  [',', '.', ' ', '>', ':', '='].forEach((e)=>{
    if (search.includes(e)) { useQuerySelector = true; }
  })

  if (!useQuerySelector) {
    if (key === '#') { return document.getElementById(search); }
    if (key === '.') { return document.getElementsByClassName(search); }
    return document.getElementsByTagName(select);
  } else {
    return document.querySelectorAll(select)
  }
}
