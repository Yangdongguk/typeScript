// Hybird Type
// type Coffee = Bean & Liquid

// Literal Type
type Direction = "north" | "south" | "west" | "east";
const destination: Direction = "north";

type PrimaryColor = "#05141F" | "#FFFFFF";
type SecondaryColor = "#5D7D2B" | "#4C5B35" | "#598000";
type FontSize = 11 | 12 | 13 | 14 | 16 | 20 | 24;

const sectionBg: SecondaryColor = "#598000";

const component: { color: PrimaryColor; fontSize: FontSize }[] = [
  { color: "#05141F", fontSize: 13 },
  { color: "#FFFFFF", fontSize: 14 },
  { color: "#FFFFFF", fontSize: 20 },
];

component.forEach(({ color, fontSize }) => {
  const btn = document.createElement("button");
  btn.style.color = color;
  btn.style.fontSize = fontSize + "px";
});
