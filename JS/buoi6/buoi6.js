let array = [1, 5, 7, 8, 9, 15]
// bai 1.1
console.log('in ra cac so chan trong mang');
console.log(array.filter( a => a%2==0));

//bai 1.2
console.log('in ra cac so le trong mang');
console.log(array.filter( a => a%2!=0));

//bai 1.3
console.log('in ra cac so lon hon hoac bang 5');
console.log(array.filter( a => a>=5));

//bai 1.4
console.log('in ra cac so chia het cho 5');
console.log(array.filter( a => a%5==0 ));

//bai 1.5
console.log('tim cac so len hon 5 va nha hai')
console.log(array.filter( a => a > 5).map( b => b*2))

//bai 1.6
console.log('dung slice de copy mang phaan tu 3 de phan tu cuoi');
console.log(array.slice(3, array.length));

//bai 1.7
console.log('dung splice de xoa phan tu');
console.log(array.splice( 1, 2));

//bai 1.8
console.log('them mot phan tu vao mang');
array.push(1)
console.log(array)

//*dung vong lap for cho gia trij mang tang len hai lan
console.log('dung vong lap for cho gia trij mang tang len hai lan')
let arr = new Array();
for ( let i of array) {
    arr.push(i*2);
}
console.log(arr);

// bai 2
let arr2 = [1, 8, 5, 2, 7, 6, 9, 2, 6];
console.log('dùng .sort để sắp xếp mảng tăng dần và giảm dần');
let reduct = arr2.sort((a, b) => {
    return b - a; 
});
let ascend = arr2.sort((a, b) => {
    return b - a; 
});
console.log('giam da : ' , reduct);
console.log('tang dan : ' , ascend);

// bai 3
let arrPerson = [
    {
    name: 'Trung',
    class: 'Nodemy01',
    dateJoin: '05-02-2020',
    age: 20
    }, 
    {
    name: 'Phong',
    class: 'Nodemy01',
    dateJoin: '06-01-2020',
    age: 19
    }, 
    {
    name: 'Nam',
    class: 'Nodemy02',
    dateJoin: '25-01-2020',
    age: 20
    }]

// bai 3.1
console.log('sap xep object theo tuoi tang dan');
console.log(arrPerson.sort((a, b) => {
    return a.age - b.age
}));

// bai 3.2
console.log('sap xep theo ngay tham gia cua hc vien');
console.log(arrPerson.sort((a, b) => {
    return Number(a.dateJoin.slice(0, 2)) - Number(b.dateJoin.slice(0, 2))
}))
// bai 3.2
console.log('vao truoc thang 2');
console.log(arrPerson.filter((a) => {
    return Number(a.dateJoin.slice(3, 5) < 2)
}))
// bai 3.3
console.log('viet hoa ten hoc vien')
let nameUpperCase = arrPerson
.map(a => {
    return a.name.toUpperCase();
})
console.log(nameUpperCase)
console.log(arrPerson.filter((a) => a.name = a.name.toUpperCase()))

//bai 4

console.log('idol doan');
let doan = {
    name: 'Doan',
    age: 22,
    salary: 1000
}
console.log(doan)
console.log('Trung clone khong tuong');
var trung = {
    name: 'Trung',
    age: doan.age,
    salary: doan.salary+1000,
    clone: true
}
console.log(trung);

//bai 5
let greeting = '  welcome to Nodemy, Nodemy is stand for Nodejs Academy         ';
// 5.0
console.log('dem bao nhieu ki tu');
console.log(greeting.length);
//5.1
console.log('tim nodemy nam o vi tri nao');
console.log(greeting.indexOf('Nodemy'));
//5.2
console.log('kiem tra xem co bat dau vi tri 2 khong');
console.log(greeting.startsWith('welcome'));
//5.3
console.log('lay chu Academy');
console.log(greeting.substring());
//5.4
console.log('tach tu');
console.log(greeting.split(' '));
//5.5
console.log('xoa dau cach ngoai ria');
console.log(greeting.trim().split(' '));
//5.6
console.log('kiem tra Nodemy co trong cau lenh hay ko');
console.log(greeting.includes('Nodemy'));
//5.7
console.log('chuyen Nodemy thanh NODEMY');
console.log(greeting.replace('Nodemy', 'NODEMY'));
//5.8
console.log('in hoa chu cai');
console.log(greeting.toUpperCase());
//5.9
console.log('lay 1 ki thu o vi tri thu 4');
console.log(greeting.charAt(4))

// bai 6
let phucBirthday = '26-11-1992';
let cuongBirth = '27-11-1994';

