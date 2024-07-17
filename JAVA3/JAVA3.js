const person ={
    balance:10000
};
const withdraw=(person, amount) => {
    if (amount < person.balance){
        person.balance -= amount;
        console.log(`Terheqja u krye me sukses. Gjendja aktuale eshte ${person.balance}.`);
    }
    else{
       console.log(`Terheqja nuk mund te kryhet.`);
    }
};
withdraw(person, 500);
withdraw(person, 20000);