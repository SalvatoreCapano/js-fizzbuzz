const body = document.querySelector('body');

const newContainer = document.createElement("div")
const newUl = document.createElement("ul")

body.append(newContainer);
newContainer.append(newUl);

newContainer.classList.add("container");
newUl.classList.add("myList");

for (let i=1; i<101 ; i++) {

    const newLi = document.createElement("li");
    newLi.classList.add("myListElement");

    if (((i % 3) == 0) && ((i % 5) == 0)) {
        console.log("FizzBuzz");
        newLi.innerHTML = "FizzBuzz";
        newLi.classList.add("myFizzBuzz");
    }
    else if ((i % 3) == 0) {
        console.log("Fizz");
        newLi.innerHTML = "Fizz";
        newLi.classList.add("myFizz");
    }
    else if ((i % 5) == 0){
        console.log("Buzz");
        newLi.innerHTML = "Buzz";
        newLi.classList.add("myBuzz");
    }
    else {
        console.log(i);
        newLi.innerHTML = i;
    }

    newUl.append(newLi);
}