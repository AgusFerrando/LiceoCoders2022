function print(){
    document.write('*');
}

for (let i = 1; i < 6; i++) {
    for (let j=1; j<=i; j++){
        print();
    }
    document.write('<br />');
}

document.write('<br />');


for (let i=1; i<6; i++){
  for (let j=5; j>=i; j--){
    print();
    }
    document.write('<br />');
}

document.write('<br />');

for (let i=1; i<6; i++){
    for (let j=1; j<6; j++){
      print();
      }
      document.write('<br />');
  }

  document.write('<br />');


  function piramide(x){
      for (let i = 1; i <= x; i++) {
          for (let j=1; j<=i; j++){
              print();
          }
          document.write('<br />');
      }
  }
  
  piramide(4);
  
  document.write('<br />');
  
  function piramideInvertida(x){
      for (let i=1; i<=x; i++){
          for (let j=x; j>=i; j--){
            print();
            }
            document.write('<br />');
        }
  }
  
  piramideInvertida(4);
  
  
  
  function piramideConsola(x){
      for (let i = 1; i <= x; i++) {
          for (let j=1; j<=i; j++){
          console.log('*');
          }
          console.log("\n");
      }
  }
  
  piramideConsola(4);