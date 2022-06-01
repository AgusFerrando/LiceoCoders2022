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