// bai 1

let array = [1, 5, 7, 8, 9, 15, 8];

// in ra cac so chan
console.log('in ra cac so chan cua mang');
// cach 1
let evenNum = array.filter((a)=> {
    return a%2 == 0;
})
console.log(evenNum);
// cach 2
let arrEven = new Array();
let evenNum1 = (array) => {
    for (let i = 0; i < array.length; i++) {
       array[i]%2 == 0? arrEven.push(array[i]):arrEven.push()
    }
    console.log(arrEven);
}
evenNum1(array);


//in ra cac so le
console.log('in ra cac so le cua mang');
// cach 1
let oddNum = array.filter((a)=> {
    return a%2 != 0;
})
console.log(oddNum);
// cach 2
let arrOdd = new Array();
let oddNum1 = (array) => {
    for (let i = 0; i < array.length; i++) {
       array[i]%2 != 0? arrOdd.push(array[i]):arrOdd.push()
    }
    console.log(arrOdd);
}
oddNum1(array);

//in ra cac so > 5 
console.log('in ra cac so lon hon 5');
let great5 = array.filter(a => a > 5);
console.log(great5);

//in ra cac so chia het cho 5
console.log('in ra cac so chia het cho 5');
let division5 = array.filter(a => a%5 == 0);
console.log(division5);

//tong cac so chia het cho 5
console.log('tong cac so chia het cho 5');
let sum5 = division5.reduce((a,b) => a + b);
console.log(sum5);

//tinh tich ba so dau cua mang
console.log('tinh tich ba so dau');
let arrMult = new Array();
if(array.length < 3){
    console.log('array khong thoa man');
} else {
    for(let i = 0; i < 3; i++){
        arrMult.push(array[i]);
    }
    let mult = arrMult.reduce((a, b)=> a*b);
    console.log(mult);
}

//tong tich ba so cuoi
console.log('tinh tong ba so cuoi');
let arrSum = new Array();
if(array.length < 3){
    console.log('array khong thoa man');
} else {
    for(let i = array.length - 1; i > array.length - 4; i--){
        arrSum.push(array[i]);
    }
    let sum3 = arrSum.reduce((a, b) => a+b);
    console.log(sum3);
}

// co phan tu 5 hay khong
console.log('tim phan tu 5');
array.filter(a => a===5).length < 1 ? console.log('false') : console.log('true');

// dem phan tu 8 trogn mang 
console.log('dem phan tu 8 trong mang');
console.log(array.filter(a => a===8).length);



//bai 2
console.log('Object');
var obj = {
    firstName: 'Do',
    lastName: 'Hao'
}
console.log(`ho va ten hoc vien : ${obj.firstName +' '+ obj.lastName}`);

let car = {
    hangXe : 'BMW',
    gia : '300000 USD',
    xuatXU : 'Duc'
}
car.mauSac = 'DEN';
car.gia = '25000 USD';

console.log(`thong tin xe : ${car.hangXe +' '+ car.mauSac +' xuat xu o '+ car.xuatXU +' co gia '+ car.gia}`);