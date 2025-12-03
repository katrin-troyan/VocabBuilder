import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
export default function Prev({ width = 16, height = 16, fill = "none" }) {
  return (
    <Svg width={16} height={16} fill="none">
      <Path
        fill="#121417"
        d="m10.06 12 .94-.94L7.947 8 11 4.94 10.06 4l-4 4 4 4Z"
      />
    </Svg>
  );
}
