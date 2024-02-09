function registerUser() 
{
  
  const username = "harsh_2005";
  const email = "harshc250@gmail.com";
  const password = "12345678";

  
  const userData = 
  {
      username: username,
      email: email,
      password: password
  };
  localStorage.setItem('userData', JSON.stringify(userData)); 

  console.log(`User registered: ${username}, ${email}`);
}

function loginUser() 
{
  
  const username = "harsh_2005";
  const password = "12345678";

  
  const storedUserData = JSON.parse(localStorage.getItem('userData'));

  if (storedUserData && storedUserData.username === username && storedUserData.password === password) {
      console.log(`User logged in: ${username}`);
  } 
  
  else 
  {
      console.log("Invalid username or password");
  }
}


  