
let button = document.getElementById('button-submit');

function handleSubmitClick(event) {
  let form = document.createElement("form");
  let hiddenField = document.createElement('input');
  let destination = document.getElementById('destinationUrl').value;
  let token = document.getElementById('token').value;
  let key = 'SAMLResponse';
  let method = 'post';
  let target = '_blank';

  /**
   * Setting form attributes
   */
  
  form.setAttribute('method', method);
  form.setAttribute('action', destination);
  form.setAttribute('target', target)

  /**
   * Setting hidden field attribute
   */
  
  hiddenField.setAttribute('type', 'hidden');
  hiddenField.setAttribute('name', key);
  hiddenField.setAttribute('value', token);

  /**
   * Append hidden input to form
   */

  form.appendChild(hiddenField);

  /**
   * Append form to document
   */
  
  document.body.appendChild(form);

  form.submit();
 
}

button.addEventListener('click', handleSubmitClick)



// let changeColor = document.getElementById('changeColor');

  // chrome.storage.sync.get('color', function(data) {
  //   changeColor.style.backgroundColor = data.color;
  //   changeColor.setAttribute('value', data.color);
  // });

  // changeColor.onclick = function(element) {
  //   let color = element.target.value;
  //   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //     chrome.tabs.executeScript(
  //         tabs[0].id,
  //         {code: 'document.body.style.backgroundColor = "' + color + '";'});
  //   });
  // };

  // function post(path, params, method) {
  //   method = method || "post"; // Set method to post by default if not specified.
  
  //   // The rest of this code assumes you are not using a library.
  //   // It can be made less wordy if you use one.
  //   var form = document.createElement("form");
  //   form.setAttribute("method", method);
  //   form.setAttribute("action", path);
  
  //   for(var key in params) {
  //       if(params.hasOwnProperty(key)) {
  //           var hiddenField = document.createElement("input");
  //           hiddenField.setAttribute("type", "hidden");
  //           hiddenField.setAttribute("name", key);
  //           hiddenField.setAttribute("value", params[key]);
  
  //           form.appendChild(hiddenField);
  //        }
  //   }
  
  //   document.body.appendChild(form);
  //   form.submit();
  // }
  // post('http://localhost:8083/planchoice/sso-login', {'SAMLResponse':''});


  // let formElement = document.getElementById('sso-form');
  // let tokenElement = document.getElementsByName('token');
  // let targetUrlElement = document.getElementsByName('targetUrl');


  // formElement.addEventListener("submit", function(e){
  //   e.preventDefault();
  //   let targetUrl = targetUrlElement[0].value;
  //   let token = tokenElement[0].value;
  //   formSubmitHandler(targetUrl, { 'SAMLResponse': token }, 'post');
  // });

  // function formSubmitHandler(path, params, method) {
  //   method = method || "post"; // Set method to post by default if not specified.
  //   let form = document.createElement("form");
  //   form.setAttribute("method", method);
  //   form.setAttribute("action", path);

  //   for(var key in params) {
  //       if(params.hasOwnProperty(key)) {
  //           var hiddenField = document.createElement("input");
  //           hiddenField.setAttribute("type", "hidden");
  //           hiddenField.setAttribute("name", key);
  //           hiddenField.setAttribute("value", params[key]);

  //           form.appendChild(hiddenField);
  //         }
  //   }
  //   document.body.appendChild(form);
  //   form.submit();
  // }
