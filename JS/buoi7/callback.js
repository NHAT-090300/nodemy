// ===================== LIB ====================

const numberPersonCovid19 = (day, callback) => {
    //...... setTimeOut
    data = [
      {
        day: 1,
        number: 100,
      },
      {
        day: 2,
        number: 300,
      },
    ];
  
    let number = data.filter((value) => value.day === day);
    callback(number);
  };
  
  // ==========My Code===========
  let xulydulieu = (data) => {
    console.log(data[0].number);
  };
  numberPersonCovid19(2, xulydulieu);
  
  // callback
  // promise
  // async await