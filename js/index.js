
let button = document.getElementById('button-submit');
let radioButtonDev = document.getElementsByName('environment')[1];
let radioButtonLocal = document.getElementsByName('environment')[0];
let destinationUrlInput = document.getElementById('destinationUrl');
let radioButtonCustomURL = document.getElementsByName('environment')[2];


/**
 * Event handler for radio buttons
 * @param {*} event 
 */
function handleRadioChange(event) {
  if(radioButtonLocal.checked) {
    destinationUrlInput.value = radioButtonLocal.value;
  } else {
    destinationUrlInput.value = radioButtonDev.value;
  }
}

/**
 * Event handler for submit button
 * @param {*} event 
 */
function handleSubmitClick(event) {
  let form = document.createElement("form");
  let hiddenField = document.createElement('input');
  let destination = destinationUrlInput.value;
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

button.addEventListener('click', handleSubmitClick);
radioButtonDev.addEventListener('change', handleRadioChange);
radioButtonLocal.addEventListener('change', handleRadioChange);
radioButtonCustomURL.addEventListener('change', handleRadioChange);