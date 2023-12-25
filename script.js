const form = document.querySelector('form');
const fullName = document.getElementById ("Name")
const email = document.getElementById ("Email")
const mess = document.getElementById ("subject")

    function sendEmail(){
        const bodyMessage = `Your Name: ${fullName.value}<br> Email: ${email.value}<br> Your Message: ${mess.value}`;
    
      
        Email.send({
            SecureToken: "d93866f3-0f5e-4ab3-9de9-39ea5051e287",
            To : 'Originaljokshin@gmail.com',
            From : "Originaljokshin@gmail.com",
            Subject : subject.value,
            Body : bodyMessage
        }).then(
          message => {
            if(message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent succesfully!",
                    icon: "success"
                  });
            }
          }
        );
}

form.addEventListener("submit", (e) =>  {
        e.preventDefault();

        sendEmail();
    });