function change_position(num1, num2, result_array) {
    num1=num1+num2;
    num2=num1-num2;
    num1=num1-num2;
    result_array.push(num1);
    result_array.push(num2);
    return result_array;
}
let input_array =[];
let number1=parseInt(prompt('Nhap vao so thu 1'));
let number2=parseInt(prompt('Nhap vao so thu 2'));
change_position(number1,number2,input_array);
alert('Sau khi doi cho, so thu 1 la '+input_array[0]+', So thu 2 la '+input_array[1]);





