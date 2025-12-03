import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
export default function Next({ width = 16, height = 16, fill = "none" }) {
  return (
    <Svg width={16} height={16} fill="none">
      <Path fill="#121417" d="M6.94 4 6 4.94 9.053 8 6 11.06l.94.94 4-4-4-4Z" />
    </Svg>
  );
}
