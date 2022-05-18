function validateForm() {
    let x = document.forms["form"]["name"].value;
    let y = document.forms["form"]["email"].value;
    let z = document.forms["form"]["message"].value;
    if (x == "" || y == "" || z == "")  {
      alert("Required field must be filled out");
      return false;
    }
  }


  function validatereservation() {
    let x = document.forms["resform"]["name"].value;
    let y = document.forms["resform"]["email"].value;
    let z = document.forms["resform"]["date"].value;
    if (x == "" || y == "" || z == "")  {
      alert("Required fields must be filled out");
      return false;
    }
  }