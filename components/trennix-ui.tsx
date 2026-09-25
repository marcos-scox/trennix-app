import { PropsWithChildren } from "react";
import { Pressable, StyleProp, StyleSheet, Text, TextInput, TextInputProps, View, ViewStyle } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const palette = {
  bg: "#F4F7FB",
  surface: "#FFFFFF",
  elevated: "#EAF0F8",
  lime: "#2457FF",
  green: "#16A085",
  text: "#14213D",
  muted: "#68758C",
  border: "#DCE4F0",
  orange: "#D99118",
  red: "#D94F70",
  violet: "#7C5CFC",
  navy: "#102A56",
};

export function Card({ children, style }: PropsWithChildren<{ style?: StyleProp<ViewStyle> }>) {
  return <View style={[styles.card, style]}>{children}</View>;
}

export function SectionTitle({ eyebrow, title, action }: { eyebrow?: string; title: string; action?: string }) {
  return (
    <View style={styles.sectionHeader}>
      <View>
        {eyebrow ? <Text style={styles.eyebrow}>{eyebrow.toUpperCase()}</Text> : null}
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      {action ? <Text style={styles.link}>{action}</Text> : null}
    </View>
  );
}

export function IconButton({ name, onPress, size = 21 }: { name: keyof typeof MaterialIcons.glyphMap; onPress?: () => void; size?: number }) {
  return <Pressable onPress={onPress} style={({ pressed }) => [styles.iconButton, pressed && styles.pressed]}><MaterialIcons name={name} color={palette.text} size={size} /></Pressable>;
}

export function PrimaryButton({ label, onPress, icon }: { label: string; onPress?: () => void; icon?: keyof typeof MaterialIcons.glyphMap }) {
  return <Pressable onPress={onPress} style={({ pressed }) => [styles.primaryButton, pressed && styles.primaryPressed]}>{icon ? <MaterialIcons name={icon} size={20} color="#FFFFFF" /> : null}<Text style={styles.primaryText}>{label}</Text></Pressable>;
}

export function SearchBox(props: TextInputProps) {
  return <View style={styles.searchBox}><MaterialIcons name="search" size={20} color={palette.muted} /><TextInput {...props} placeholderTextColor={palette.muted} style={styles.searchInput} /></View>;
}

export function ProgressRing({ value }: { value: number }) {
  return <View style={styles.ring}><View style={styles.ringInner}><Text style={styles.ringValue}>{value}%</Text></View></View>;
}

export const styles = StyleSheet.create({
  card: { backgroundColor: palette.surface, borderRadius: 20, borderWidth: 1, borderColor: palette.border, padding: 16, shadowColor: "#18315E", shadowOpacity: 0.06, shadowRadius: 16, shadowOffset: { width: 0, height: 8 }, elevation: 2 },
  sectionHeader: { flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 12 },
  eyebrow: { color: palette.lime, fontSize: 11, fontWeight: "800", letterSpacing: 1.2, marginBottom: 3 },
  sectionTitle: { color: palette.text, fontSize: 21, fontWeight: "800", letterSpacing: -0.4 },
  link: { color: palette.lime, fontSize: 12, fontWeight: "700" },
  iconButton: { width: 42, height: 42, borderRadius: 21, alignItems: "center", justifyContent: "center", backgroundColor: palette.surface, borderWidth: 1, borderColor: palette.border },
  pressed: { opacity: 0.65 },
  primaryButton: { minHeight: 52, borderRadius: 16, backgroundColor: palette.lime, alignItems: "center", justifyContent: "center", flexDirection: "row", gap: 8, paddingHorizontal: 18, shadowColor: palette.lime, shadowOpacity: 0.22, shadowRadius: 10, shadowOffset: { width: 0, height: 5 }, elevation: 3 },
  primaryPressed: { transform: [{ scale: 0.98 }], opacity: 0.86 },
  primaryText: { color: "#FFFFFF", fontSize: 15, fontWeight: "900" },
  searchBox: { flexDirection: "row", alignItems: "center", gap: 9, height: 48, borderRadius: 15, paddingHorizontal: 14, backgroundColor: palette.surface, borderWidth: 1, borderColor: palette.border },
  searchInput: { flex: 1, color: palette.text, fontSize: 14 },
  ring: { width: 72, height: 72, borderRadius: 36, borderWidth: 7, borderColor: palette.lime, alignItems: "center", justifyContent: "center" },
  ringInner: { alignItems: "center", justifyContent: "center" },
  ringValue: { color: palette.text, fontSize: 16, fontWeight: "900" },
});
