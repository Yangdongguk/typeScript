// optional
// substract 함수 (a,b)

// const substract = (a: number, b?: number): number => {
//   if (typeof b === undefined) {
//     return 0;
//   } else {
//     return a - b;
//   }
// };

// optional: ? undefined 일수도 있음
type Food = {
  name: string;
  price: number;
  kcal?: number;
};

const lunch: Food = {
  name: "팬캐익",
  price: 0,
  kcal: 1300,
};

//keyof

type Course = {
  name: string;
  classroom: "A" | "B" | "C";
};

type A = keyof Course; // === 'name' and 'classroom'
const test1: A = "name";
