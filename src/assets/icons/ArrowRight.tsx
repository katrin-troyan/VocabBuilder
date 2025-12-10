import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
export default function ArrowRight({ width = 15, height = 9, fill = "none" }) {
  return (
    <Svg width={20} height={20} fill="none">
      <Path
        stroke="#85AA9F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.332 10h13.333m0 0-3.333-3.333M16.665 10l-3.333 3.333"
      />
    </Svg>
  );
}
