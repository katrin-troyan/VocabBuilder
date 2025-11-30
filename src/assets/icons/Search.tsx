import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
export default function Search({ width = 20, height = 20, fill = "none" }) {
  return (
    <Svg width={20} height={20} fill="none">
      <Path
        stroke="#121417"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.167 15.833a6.667 6.667 0 1 0 0-13.333 6.667 6.667 0 0 0 0 13.333ZM17.5 17.5l-3.625-3.625"
      />
    </Svg>
  );
}
