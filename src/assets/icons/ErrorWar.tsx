import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
export default function ErrorWar({ width = 16, height = 16, fill = "none" }) {
  return (
    <Svg width={16} height={16} fill="none">
      <G clipPath="url(#a)">
        <Path
          fill="#D80027"
          d="M8 14.667A6.667 6.667 0 1 1 8 1.334a6.667 6.667 0 0 1 0 13.333ZM7.333 10v1.333h1.334V10H7.333Zm0-5.333v4h1.334v-4H7.333Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h16v16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
