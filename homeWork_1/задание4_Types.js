// Создание строки
const strLiteralSingle = 'Hello, World!';  // С использованием одинарных кавычек
const strLiteralDouble = "Hello, World!";  // С использованием двойных кавычек
const strLiteralBacktick = `Hello, World! ${strLiteralDouble}`;  // интерполяция
const strObject = new String('Hello, World!');  // С использованием конструктора String

// Создание числа
const numLiteral = 42;  // С использованием литерала числа
const numObject = new Number(42);  // С использованием конструктора Number

// Создание булевого значения
const boolTrue = true;  // С использованием литерала true
const boolFalse = false;  // С использованием литерала false
const boolObject = new Boolean(true);  // С использованием конструктора Boolean

// Создание значения null
const nullValue = null;  // Присваивание значения null

// Создание значения undefined
let undefinedValue;  // Присваивание значения undefined
const undefinedValueLiteral = undefined;  // С использованием литерала undefined (не рекомендуется)

// Создание символа
const symbol1 = Symbol('description');  // Создание уникального символа
const symbol2 = Symbol('description');  // Создание еще одного уникального символа

// Создание значения BigInt
const bigIntLiteral = 123456789012345678901234567890n;  // С использованием литерала BigInt
const bigIntObject = BigInt('1234567890123456789012')