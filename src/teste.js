function addCustomers(trybeBankCustomers, customers) {
  for (const customer of customers) {
    if (typeof customer === 'string') {
      trybeBankCustomers.push(customer);
      console.log('push:', trybeBankCustomers);
    } else {
      return 'Todos os valores precisam ser strings.';
    }
  }
}

const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];
const teste = addCustomers(trybeBankCustomers, ['Ligia', 'Jorge', 2]);
console.log('teste', teste);
console.log('customers', trybeBankCustomers);
