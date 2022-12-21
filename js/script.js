const body = document.querySelector('body');
const newUl = document.createElement("ul")

body.append(newUl);

for (let i=1; i<101 ; i++) {

    const newLi = document.createElement("li");

    if (((i % 3) == 0) && ((i % 5) == 0)) {
        console.log("FizzBuzz");
        newLi.innerHTML = "FizzBuzz";
    }
    else if ((i % 3) == 0) {
        console.log("Fizz");
        newLi.innerHTML = "Fizz";
    }
    else if ((i % 5) == 0){
        console.log("Buzz");
        newLi.innerHTML = "Buzz";
    }
    else {
        console.log(i);
        newLi.innerHTML = i;
    }

    newUl.append(newLi);
}