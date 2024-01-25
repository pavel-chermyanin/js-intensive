// 1. С использованием функции-конструктора
function makeCounterConstructor() {
  let value = 0;
  return {
    increment: function () {
      value++;
    },
    getValue: function () {
      return value;
    },
  };
}

const counterConstructor = makeCounterConstructor();

// 2. С использованием класса
class CounterClass {
  constructor() {
    this.value = 0;
  }

  increment() {
    this.value++;
  }

  getValue() {
    return this.value;
  }
}

const counterClass = new CounterClass();

// 3. С использованием объектного литерала
const makeCounterLiteral = () => {
  let value = 0;
  return {
    increment: function () {
      value++;
    },
    getValue: function () {
      return value;
    },
  };
};

const counterLiteral = makeCounterLiteral();

// 4. С использованием замыкания
const makeCounterClosure = () => {
  let value = 0;
  return {
    increment: function () {
      value++;
    },
    getValue: function () {
      return value;
    },
  };
};

const counterClosure = makeCounterClosure();

// 5. С использованием ES6-конструкции с замыканием
const makeCounterES6 = () => {
  let value = 0;
  return {
    increment: () => {
      value++;
    },
    getValue: () => {
      return value;
    },
  };
};

const counterES6 = makeCounterES6();
