
export  const Validation = (name,email,password) => {
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ;
  const isPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/.test(password);

  if(name.length <3 || name.length >20) {
    return 'invalid user name';
  }

  if (!isEmail) {
   // console.log('Invalid email');
    return 'Invalid email';
  }
  
  if (!isPassword) {
    //console.log('Invalid password');
    return 'invalid password or first letter capital and add symbol';
  }

  return null;

}
  



