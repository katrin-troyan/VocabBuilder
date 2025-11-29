import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
export default function Arrrow({ width = 15, height = 9, fill = "none" }) {
  return (
    <Svg width={15} height={9} fill="none">
      <Path
        stroke="#85AA9F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M.75 4.083h13.333m0 0L10.75.75m3.333 3.333L10.75 7.417"
      />
    </Svg>
  );
}
