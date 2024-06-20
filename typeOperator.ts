// Union 연산자[합집합]
const a1: string | number = 123;
const a2: Element | null = document.querySelector(".box");
const a3: () => number = () => 1;

// 마라탕: {재료들: string[재료를 얼마나 넣었냐], 가격:string or number}
const malaSoup: { ingredients: string[]; price: number | string } = {
  ingredients: ["숙주", "새우", "푸주"],
  price: 7500,
};

// Intersection 연산자 [교집합]
const pizza: { size: string } & { toppings: string[] } & { eat: () => void } = {
  size: "L",
  toppings: ["페퍼로니", "피망", "치즈", "올리브"],
  eat: () => {
    console.log("피자느끼함");
  },
};
