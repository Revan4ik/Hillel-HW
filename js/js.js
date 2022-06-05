var productForm = document.forms.product;
var nameInput = productForm.name;
var descriptionMsg = productForm.description;
var priceInput = productForm.price;
var unitInput = productForm.measure;
var linkInput = productForm.link;

//проверяем на Caps-lock
function CapsLock(str) {
  return str.replace(/([A-Z]|[А-ЯЁ])[A-ZА-ЯЁ]{1,}/g, function ($1) {
    var resultStr = $1.charAt(0).toUpperCase() + $1.substr(1).toLowerCase();
    return resultStr;
  });
}

nameInput.addEventListener("change", function (e) {
  var name = /^.{1,25}/;
  var result = e.target.value.match(name) || [];
  e.target.value = CapsLock(result[0]);
});

descriptionMsg.addEventListener("change", function (e) {
  var Desc = /^.{1,150}/;
  var resultDesc = e.target.value.match(Desc);
  e.target.value = CapsLock(resultDesc[0]);
});

unitInput.addEventListener("change", function (e) {
  var Measure = /^(шт|кг|л|ед)$/;
  var resultMeasure = e.target.value.match(Measure) || [];
  if (resultMeasure[0]) {
    e.target.value = resultMeasure[0];
  } else {
    unitInput.value = 'error'
  }
});

priceInput.addEventListener("change", function (e) {
  var Price = /\d*(.|,)\d{2}/;
  var resultPrice = e.target.value.match(Price) ;
    e.target.value = resultPrice
        ? resultPrice[0]
        : 'error';
});

function ishttps(string) {
  var res = /(^https:\/\/)/;
  return res.test(string)
}
function isValidUrl(url)
{
  var objRE = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
  return objRE.test(url);
}
linkInput.addEventListener("change", function (e){
    var link = e.target.value
    var testlink = isValidUrl(link)
    if (!testlink){
      e.target.value = 'error'
    } else {
       var addhttps = ishttps(link)
       if (!addhttps){
           e.target.value = 'https://' + link
       }
    }
})