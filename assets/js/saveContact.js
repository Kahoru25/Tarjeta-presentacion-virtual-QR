function openContactForm() {
    // Crea un formulario de contacto
    var form = document.createElement("form");
    form.setAttribute("action", "saveContact");
    form.setAttribute("method", "post");
  
    // Agrega campos al formulario
    var nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "name");
    nameInput.value = "Prueba";
    form.appendChild(nameInput);
  
    var phoneInput = document.createElement("input");
    phoneInput.setAttribute("type", "text");
    phoneInput.setAttribute("name", "phone");
    phoneInput.value = "3217867112";
    form.appendChild(phoneInput);
  
    var emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("name", "email");
    emailInput.value = "jeys@gmail.com";
    form.appendChild(emailInput);
  
    // Abre la ventana emergente
    var popup = window.open("", "Guardar contacto", "width=500,height=300");
    popup.document.body.appendChild(form);
  }
  
  function saveContact() {
    // Obtiene los datos del formulario
    var name = document.querySelector("input[name='name']").value;
    var phone = document.querySelector("input[name='phone']").value;
    var email = document.querySelector("input[name='email']").value;
  
    // Crea el contacto
    var contact = new Contact({
      name: name,
      phone: phone,
      email: email
    });
  
    // Agrega el contacto a la libreta de direcciones
    navigator.contacts.create({
      contact: contact
    }, function(contact) {
      if (contact.status === "done") {
        // El contacto se guardó correctamente
        alert("Contacto guardado correctamente");
      } else {
        // Ocurrió un error al guardar el contacto
        alert("Error al guardar el contacto");
      }
    }, function(error) {
      // Ocurrió un error al guardar el contacto
      alert("Error al guardar el contacto");
    });
  }

