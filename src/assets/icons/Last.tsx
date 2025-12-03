import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
export default function Last({ width = 16, height = 16, fill = "none" }) {
  return (
    <Svg width={16} height={16} fill="none">
      <Path
        fill="#85AA9F"
        d="m4.274 4-.94.94L6.387 8l-3.053 3.06.94.94 4-4-4-4Z"
      />
      <Path
        fill="#85AA9F"
        d="m8.667 4-.94.94L10.78 8l-3.053 3.06.94.94 4-4-4-4Z"
      />
    </Svg>
  );
}
