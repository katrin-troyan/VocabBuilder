import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";

interface Props {
  progress: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
  showLabel?: boolean;
  label?: string | number;
}

export default function ProgressBar({
  progress,
  size = 24,
  strokeWidth = 3,
  color = "#2BD627",
  backgroundColor = "#D4F8D3",
  showLabel = false,
  label,
}: Props) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <View
      style={{
        width: size,
        height: size,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Svg width={size} height={size}>
        <Circle
          stroke={backgroundColor}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />

        <Circle
          stroke={color}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </Svg>

      {showLabel && (
        <Text style={[styles.label, { fontSize: size * 0.38 }]}>
          {label ?? `${Math.round(progress)}%`}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    position: "absolute",
    fontFamily: "FixelDisplayMedium",
    fontSize: 16,
    lineHeight: 24,
    color: "#121417",
  },
});
