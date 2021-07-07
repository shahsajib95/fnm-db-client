const name = document.getElementById("cf-name").value;
const email = document.getElementById("cf-email").value;
const success = document.getElementById("text-success");
const danger = document.getElementById("text-danger");

function submit() {
  const name = document.getElementById("cf-name").value;
  const email = document.getElementById("cf-email").value;
  const success = document.getElementById("text-success");
  const danger = document.getElementById("text-danger");

  if (!name && !email) {
    danger.style.display = "block";
    success.style.display = "";
  }
  if (name && email) {
    const data = valid(email);

    if (!data) {
        danger.style.display = "block";
    } else {
      danger.style.display = "";
     //Post
      fetch('https://fnm-db.herokuapp.com/submit',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
      },
        body: JSON.stringify({name: name, email: email})
      }).then(res=> res.json())
      .then(data=> {
        if(data.success){
          success.style.display = "block";
          document.getElementById("cf-name").value = "";
          document.getElementById("cf-email").value = "";
        }
      })
     //End
    }
  }
}
function valid(email) {
  const test =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  return test;
}
