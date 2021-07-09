// Ejercicio 1
const props = (obj) => {
  for (const property in obj) {
    console.log(`${property})`);
  }
}
// Ejercicio 2
  //En el global context
  console.log(this === window);
  //En una function
  function fnThis() {
    return this;
  }
  fnThis();
  //En un method
  const cat = {
    name: 'Cat',
    hello: function () { // Método perteneciente a objeto "dog"
        return `Hello I'm ${this.name}` //this, hace referencia a "dog"
    }
  }

  cat.hello();
  //En una arrow function
  const fnArrow = () => {
    return this;
  }

  fnArrow(); // [object Window]
// Ejercicio 3
  const reverseStr = (string) => {
    return string.split("").reverse().join("");
  }
  reverseStr("hello");
  

// Ejercicio 4
class Login {
  constructor(admin, password) {
    this.admin = admin;
    this.password = password;
  }
  login() {
    if(this.admin == "admin" && this.password == "passwd") {
      alert("User logged in");
    } else {
      alert("User or passwd incorrect");
    }
  }
}

// Ejercicio 5
document.getElementById("loginSuccess").addEventListener("click", () => {
  let login = new Login("admin", "passwd");
  login.login();
});

document.getElementById("loginFailure").addEventListener("click", () => {
  let loginFail = new Login("josue", "jos");
  loginFail.login();
});

// Ejercicio 6

document.getElementById("loginSuccessAsync").addEventListener("click", async () => {
  try {
    const res = await loginWitUsername("admin", "passwd");
    alert(res);
  } catch(error) {
    alert(error);
  }
});

document.getElementById("loginFailureAsync").addEventListener("click", async () => {
  try {
    const res = await loginWitUsername("josue", "jos");
    alert(res);
  } catch(error) {
    alert(error);
  }
});

let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 500);
    });
};
