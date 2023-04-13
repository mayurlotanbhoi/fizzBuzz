let phone = "9000000099";
let sum = 0;
const FizzbuzzFun = (phone) => {
  const arrOfPhone = [...phone];

  for (let i = 0; i < arrOfPhone.length; i++) {
    sum += arrOfPhone[i] - 0;
  }
  for (let i = 1; i <= sum; i++) {
    if (i % 5 == 0 && i % 4 == 0) {
      console.log("FizzBuzz ");
    } else if (i % 4 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};



FizzbuzzFun(phone);
