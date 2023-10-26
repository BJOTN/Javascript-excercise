const user = {
  id: 1,
  name: "John",
  age: 25,
};

function userStorage(user) {
  try {
    const userJSON = JSON.stringify(user);
    const userObj = localStorage.setItem('user', userJSON);
    return userObj
  } catch (error) {
    console.error(error);
  }
}

userStorage(user)

function getUserStorage(){
  try {
    const userJson = localStorage.getItem('user');
    const userObj = JSON.parse(userJson);
    return userObj
  } catch (error) {
    console.log(error)
  }
}
userStorage(userStorage())