const deepEqual = (obj1, obj2) => {
    // Проверка на равенство null и тип данных
    if (obj1 === obj2) {
      return true;
    }
  
    // Проверка на тип данных
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
      return false;
    }
  
    // Получаем ключи объектов
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    // Проверка на количество свойств
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    // Рекурсивная проверка свойств
    for (let key of keys1) {
      if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
  
    return true;
  };
  
  const obj1 = { here: { is: "on", other: "3" }, object: "Y" };
  const obj2 = { here: { is: "on", other: "2" }, object: "Y" };
  
  console.log(deepEqual(obj1, obj2));