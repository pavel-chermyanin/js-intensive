// 1. Литеральная нотация
const objLiteral = {};

// 2. Конструктор объекта
const objConstructor = new Object();

// 3. Создание объекта через функцию-конструктор
function MyObject() {
  this.property1 = 'value1';
  this.property2 = 'value2';
}

const objConstructorFunc = new MyObject();

// 4. Использование метода Object.create()
const objCreate = Object.create(null);

// 5. С использованием литерала класса (ES6+)
class MyClass {
  constructor() {
    this.property1 = 'value1';
    this.property2 = 'value2';
  }
}

const objClass = new MyClass();

// 6. С использованием объектного литерала вместе с выражением
const key = 'property';
const objExpression = {
  [key + '1']: 'value1',
  [key + '2']: 'value2',
};