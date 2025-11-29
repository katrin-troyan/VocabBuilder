import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
export default function Plus({ width = 20, height = 20, fill = "none" }) {
  return (
    <Svg width={20} height={20} fill="none">
      <Path
        stroke="#85AA9F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 4.167v11.666M4.168 10h11.667"
      />
    </Svg>
  );
}
