//간단한 계산기
const calcultor = {
  a1: function(a, b){
    console.log( a + b);
  },
  a2: function(a, b){
    console.log( a - b);
  },
  a3: function(a, b){
    console.log( a / b);
  },
  a4: function(a, b){
    console.log( a * b);
  },
  a5: function(a, b){
    console.log( a ** b);
  }
};

calcultor.a1(100, 10)
calcultor.a2(100, 10)
calcultor.a3(100, 10)
calcultor.a4(100, 10)
calcultor.a5(100, 10)

//간단한 통합 계산기
function allCalcultor (a, b){
  console.log( a + b);
  console.log( a - b);
  console.log( a / b);
  console.log( a * b);
  console.log( a ** b);
};

allCalcultor (100, 10);