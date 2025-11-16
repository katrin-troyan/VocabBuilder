import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
export default function CheckBox({ width = 16, height = 16, fill = "none" }) {
  return (
    <Svg width={16} height={16} fill="none">
      <G clipPath="url(#a)">
        <Path
          fill="#3CBF61"
          d="M8 14.667A6.667 6.667 0 1 1 8 1.334a6.667 6.667 0 0 1 0 13.333Zm-.77-3.677 4.713-4.714L11 5.333 7.23 9.105 5.342 7.219l-.942.942 2.828 2.829Z"
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
