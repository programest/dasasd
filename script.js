var radioButtons = document.querySelectorAll('.radio-group .radio');
var select = document.getElementById('select')
var titleText = document.getElementById('titleText')
radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('click', function() {
        var parentContainer = this.parentElement.parentElement;
        // Remove 'selected' class from all radio buttons within the same parent container
        var allRadioButtons = parentContainer.querySelectorAll('.radio');
        allRadioButtons.forEach(function(button) {
            button.classList.remove('active');
        });
        
        // Add 'selected' class to the clicked radio button
        this.classList.add('active');
        var dataValueTab = this.getAttribute('data-value-tab');
        {dataValueTab === 'Cleaning' ? select.classList.add('activeInput') :  select.classList.remove('activeInput') }
        titleText.innerHTML = (dataValueTab === 'IT') ? 'Заявка в IT-отдел' : 'Заявка в Отдел уборки';
    });
});

var tabs = document.querySelectorAll('.radio-group .radio');
        



const setActive = (el, active) => {
    const formField = el.parentNode.parentNode
    if (active) {
      formField.classList.add('form-field--is-active')
    } else {
      formField.classList.remove('form-field--is-active')
      el.value === '' ? 
        formField.classList.remove('form-field--is-filled') : 
        formField.classList.add('form-field--is-filled')
    }
  }
  
  [].forEach.call(
    document.querySelectorAll('.form-field__input, .form-field__textarea'),
    (el) => {
      el.onblur = () => {
        setActive(el, false)
      }
      el.onfocus = () => {
        setActive(el, true)
      }
    }
  )
  


 
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
    var message = document.getElementById('message')
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }else{
            event.preventDefault()
            event.stopPropagation()
            message.classList.remove('disabledMessage')
        }
  
        form.classList.add('was-validated')
      }, false)
    })

    //Otel Validation 
    //Все элементы с артрибутом data-otel-input будут работать с этой маской 

    var otelInputs = document.querySelectorAll("input[data-otel-input]");
    
    for (var otelInput of otelInputs) {
        otelInput.addEventListener('input', function() {
        var inputValue = otelInput.value;

        // Удаляем все символы, кроме цифр
        var sanitizedValue = inputValue.replace(/[^0-9]/g, '');

        // Добавляем символ "№" в начале строки
        sanitizedValue = '№' + sanitizedValue;

        // Обновляем значение поля ввода
        otelInput.value = sanitizedValue;
    });
    }
    //Phone Validation 
    //Все элементы с артрибутом data-tel-input будут работать с этой маской 

   
        var phoneInputs = document.querySelectorAll("input[data-tel-input]");
    
        var getInputNumbersValue = function (input) {
            return input.value.replace(/\D/g, "");
        };
        var onPhonePaste = function (e) {
            var input = e.target, inputNumbersValue = getInputNumbersValue(input);
            var pasted = e.clipboardData || window.clipboardData;
            if (pasted) {
                var pastedText = pasted.getData("Text");
                if (/\D/g.test(pastedText)) {
                    input.value = inputNumbersValue;
                    return;
                }
            }
        };
        var onPhoneInput = function (e) {
    
            var input = e.target, inputNumbersValue = getInputNumbersValue(input), selectionStart = input.selectionStart, formattedInputValue = "";
    
            if (input.value.length != selectionStart) {
                if (e.data && /\D/g.test(e.data)) input.value = inputNumbersValue;
    
                return;
            } else {
    
            }
            if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
                if ("9" == inputNumbersValue[0]) inputNumbersValue = "7" + inputNumbersValue;
                var firstSymbols = "8" == inputNumbersValue[0] ? "8" : "+7";
                formattedInputValue = input.value = firstSymbols + " ";
                if (inputNumbersValue.length > 1) formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
                if (inputNumbersValue.length >= 5) formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
                if (inputNumbersValue.length >= 8) formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
                if (inputNumbersValue.length >= 10) formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
            } else formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
            input.value = formattedInputValue;
        };
        var onPhoneKeyDown = function (e) {
            var inputValue = e.target.value.replace(/\D/g, "");
            if (8 == e.keyCode && 1 == inputValue.length) e.target.value = "";
    
        };
        for (var phoneInput of phoneInputs) {
            phoneInput.addEventListener("keydown", onPhoneKeyDown);
            phoneInput.addEventListener("input", onPhoneInput, false);
            phoneInput.addEventListener("paste", onPhonePaste, false);
        }
    
    

           
      
        