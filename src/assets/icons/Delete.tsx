import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
export default function Delete({ width = 16, height = 16, fill = "none" }) {
  return (
    <Svg width={16} height={16} fill="none">
      <Path
        stroke="#85AA9F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={0.94}
        strokeWidth={1.3}
        d="M2 4h12M12.667 4v9.333a1.333 1.333 0 0 1-1.333 1.334H4.667a1.333 1.333 0 0 1-1.333-1.334V4m2 0V2.667a1.333 1.333 0 0 1 1.333-1.334h2.667a1.333 1.333 0 0 1 1.333 1.334V4M6.666 7.333v4M9.334 7.333v4"
      />
    </Svg>
  );
}
