export const validInput = (name,email,password) => {

    const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPassword = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(password);
   
    if(name.length < 3 || name.length >20)  {
        return "invalid user name"
    }

    if(!email){
       return "invalid email"
    }

    if(!password){
       return "invalid password"
    }

    return null;
}