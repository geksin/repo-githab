let money = prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
}
let a1 = prompt("Введите обязательную статью расходов на месяц?", ''),
    a2 = prompt("Во сколько обойдется?", ''),

appData.expenses.a1 = a2;

alert(appData.budget / 30); 