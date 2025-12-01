import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
export default function EditPen({
  width = 16,
  height = 16,
  fill = "none",
  stroke = "none",
}) {
  return (
    <Svg width={16} height={16} fill="none">
      <Path
        stroke="#85AA9F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.3}
        d="M11.334 2a1.885 1.885 0 1 1 2.667 2.667l-9 9-3.667 1 1-3.667 9-9Z"
      />
    </Svg>
  );
}
