import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
export default function First({ width = 16, height = 16, fill = "none" }) {
  return (
    <Svg width={16} height={16} fill="none">
      <Path
        fill="#121417"
        d="m11.726 12 .94-.94L9.613 8l3.053-3.06-.94-.94-4 4 4 4Z"
      />
      <Path
        fill="#121417"
        d="m7.333 12 .94-.94L5.22 8l3.053-3.06-.94-.94-4 4 4 4Z"
      />
    </Svg>
  );
}
