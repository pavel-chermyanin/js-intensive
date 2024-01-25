// Подключение Lodash
const _ = require('lodash');

// Оригинальный объект
const originalObject = {
  key: 'value',
  nested: { innerKey: 'innerValue' },
};

// Копия с использованием Spread Operator
const copiedObjectSpread = { ...originalObject };

// Копия с использованием Object.assign()
const copiedObjectAssign = Object.assign({}, originalObject);

// Копия с использованием JSON.parse() и JSON.stringify()
const copiedObjectJSON = JSON.parse(JSON.stringify(originalObject));

// Копия с использованием Lodash
const copiedObjectLodash = _.cloneDeep(originalObject);