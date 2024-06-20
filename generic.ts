//gerneric.ts -> generalize[일반화하다]

type G<T, K> = {
  first: T;
  second: K;
};

type HamburgerSet<A, B, C> = {
  main: A;
  side: B;
  drink: C;
};

const test: G<string, number> = {
  first: "문자넣어야하고",
  second: 123,
};

// type HamburgerSet<> = {main,side,drink}

type H<M, S, D> = {
  main: M;
  side: S;
  drink: D;
};

type Morning = "머핀";
type NotMorning = "참깨빵";
type Rice = "라이스";

type Hamburger<T> = {
  bread: T;
  content: "불고기" | "쉬림프" | "치킨" | "토마토에그";
};
type Side = "감튀" | "코우슬로" | "맥너겟" | "소프트아이스크림";
type Coffee = "드립커피" | "아메리카노" | "디카페인" | "라떼";
type Beverage = "콜라" | "스프라이트" | "제로" | "환타";

const MacMorning: HamburgerSet<
  Hamburger<Rice | Morning>,
  Side,
  Coffee | Beverage
> = {
  main: {
    bread: "라이스",
    content: "토마토에그",
  },
  side: "감튀",
  drink: "콜라",
};

// const a = fetch('https').then((v) => v.json())

type Success<T> = {
  result: "success";
  value: T;
};
type Failure = {
  result: "fail";
  value: "error";
};

type Response_<T> = Success<T> | Failure;

const getResponse = (a: Response_<string[]>) => {
  if (a.result === "success") {
    a.value.forEach((v) => console.log(v));
  } else {
    console.log(a.value);
  }
};
getResponse({ result: "fail", value: "error" });

