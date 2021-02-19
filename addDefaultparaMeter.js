function adding(num1, num2 = 3){  // NOTE num2 = 3 means, the default value of number2 is 3
//NOTE if, we don't provide the value of number2 by mistake. (= 3) it will set the the value of num2 in 3.
    return num1 + num2;
}
const result = adding(9, ); // NOTE look carefully, we are not setting the value of num2, but the result will be
console.log(result);        // NOTE 12, because we set the value of num2 as 3. by using num2 = 3 (default para meter).