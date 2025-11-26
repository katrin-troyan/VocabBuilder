import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
export default function Logout({ width = 16, height = 16, fill = "none" }) {
  return (
    <Svg width={16} height={16} fill="none">
      <Path
        stroke="#85AA9F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 11.333c0 .62 0 .93-.068 1.185a2 2 0 0 1-1.414 1.414C6.263 14 5.953 14 5.333 14H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 12.398 2 11.932 2 11V5c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 2 4.068 2 5 2h.333c.62 0 .93 0 1.185.068a2 2 0 0 1 1.414 1.414C8 3.737 8 4.047 8 4.667M10.667 11.333 14 8m0 0-3.333-3.333M14 8H6"
      />
    </Svg>
  );
}
