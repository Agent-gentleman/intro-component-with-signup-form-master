function freeTrail(){
  const firstNameph =document.getElementById("firstName");
  const lastNameph =document.getElementById("lastName");
  const emailAddressph =document.getElementById("emailAddress");
  const passwordsph =document.getElementById("passwords");

  const firstName =document.getElementById("firstName").value;
  const lastName =document.getElementById("lastName").value;
  const emailAddress =document.getElementById("emailAddress").value;
  const passwords =document.getElementById("passwords").value;

  const firstNameError =document.getElementById("firstNameError");
  const lastNameError =document.getElementById("lastNameError");
  const emailAddressError =document.getElementById("emailAddressError");
  const passwordError =document.getElementById("passwordError");

  const exclamationMarkFN=document.getElementById("exclamationMarkFN");
  const exclamationMarkLN=document.getElementById("exclamationMarkLN");
  const exclamationMarkEA=document.getElementById("exclamationMarkEA");
  const exclamationMarkP=document.getElementById("exclamationMarkP");
  if (firstName ===""){
    firstNameError.style.display="block";
    firstNameph.style.borderColor="hsl(0, 100%, 74%)";
    firstNameph.placeholder='';
    exclamationMarkFN.style.display = "block";
  }
  else{
    firstNameError.style.display="none";
    exclamationMarkFN.style.display = "none";
    firstNameph.style.borderColor="rgb(172, 171, 171)";
  }
  if (lastName ===""){
    lastNameError.style.display="block";
    lastNameph.style.borderColor="hsl(0, 100%, 74%)";
    lastNameph.placeholder="";
    exclamationMarkLN.style.display = "block";
  }
  else{
    lastNameError.style.display="none";
    exclamationMarkLN.style.display = "none";
    lastNameph.style.borderColor="rgb(172, 171, 171)";
  }
  if (emailAddress ===""|| !emailAddress.includes("@")){
    emailAddressError.style.display="block";
    emailAddressph.style.borderColor="hsl(0, 100%, 74%)";
    emailAddressph.placeholder="email@example.com";
    
    emailAddressph.classList.add("newClass");

    exclamationMarkEA.style.display = "block";
  }
  else{
    emailAddressError.style.display="none";
    exclamationMarkEA.style.display = "none";
    emailAddressph.style.borderColor="rgb(172, 171, 171)";
  }
  if (passwords ===""){
    passwordError.style.display="block";
    passwordsph.style.borderColor="hsl(0, 100%, 74%)";
    passwordsph.placeholder="";

    exclamationMarkP.style.display = "block";
  }
  else{
    passwordError.style.display="none";
    exclamationMarkP.style.display = "none";
    passwordsph.style.borderColor="rgb(172, 171, 171)";
  }
}