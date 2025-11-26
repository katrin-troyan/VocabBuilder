import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
export default function Avatar({ width = 16, height = 16, fill = "none" }) {
  return (
    <Svg width={16} height={16} fill="none">
      <Path
        fill="#FCFCFC"
        fillOpacity={0.7}
        d="M8 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 16s8 0 8-2c0-2.4-3.9-5-8-5s-8 2.6-8 5c0 2 8 2 8 2Z"
      />
    </Svg>
  );
}
