const user = {
  id: 1,
  name: "John",
  age: 25,
};

function userStorage(user) {
  try {
    const userJSON = JSON.stringify(user);
    localStorage.setItem('user', userJSON);
  } catch (error) {
    console.error(error);
  }
}

userStorage(user)