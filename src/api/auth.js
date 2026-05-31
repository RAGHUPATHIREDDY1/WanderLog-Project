export const loginUser = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        email === "eve.holt@reqres.in" &&
        password.trim() !== ""
      ) {
        resolve({
          token: "wanderlog-demo-token",
        });
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 800);
  });
};

export const registerUser = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password) {
        resolve({
          id: 1,
          token: "wanderlog-demo-token",
        });
      } else {
        reject(new Error("Please fill all fields"));
      }
    }, 800);
  });
};