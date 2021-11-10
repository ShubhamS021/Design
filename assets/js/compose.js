$(function(){
  'use strict'

  var quillm = new Quill('#mailEditor', {
    modules: {
      toolbar: {
        container: '#mailToolbar',
        handlers: {
          'pholder': function(value) {
            if(value) {
              const cursorPosition = this.quill.getSelection().index;
              this.quill.insertText(cursorPosition, value);
              this.quill.setSelection(cursorPosition + value.length);
            }
          }
        }
      }
    },
    placeholder: 'Write some message...',
    theme: 'snow'
  });

  // We need to manually supply the HTML content of our custom dropdown list
  const pHolderItems = Array.prototype.slice.call(document.querySelectorAll('.ql-pholder .ql-picker-item'));
  pHolderItems.forEach(item => item.textContent = item.dataset.label);

  document.querySelector('.ql-pholder .ql-picker-label').innerHTML
     = 'Insert placeholder' + document.querySelector('.ql-pholder .ql-picker-label').innerHTML;
})
