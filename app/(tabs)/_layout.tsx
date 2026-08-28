import { Tabs } from "expo-router";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColors } from "@/hooks/use-colors";

export default function TabLayout() {
  const colors = useColors("dark");
  const insets = useSafeAreaInsets();
  const bottom = Platform.OS === "web" ? 10 : Math.max(insets.bottom, 8);
  return <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: colors.primary, tabBarInactiveTintColor: colors.muted, tabBarButton: HapticTab, tabBarStyle: { backgroundColor: colors.background, borderTopColor: colors.border, height: 58 + bottom, paddingTop: 7, paddingBottom: bottom }, tabBarLabelStyle: { fontSize: 10, fontWeight: "700" } }}>
    <Tabs.Screen name="index" options={{ title: "Início", tabBarIcon: ({ color }) => <IconSymbol name="house.fill" size={23} color={color} /> }} />
    <Tabs.Screen name="library" options={{ title: "Biblioteca", tabBarIcon: ({ color }) => <IconSymbol name="book.fill" size={23} color={color} /> }} />
    <Tabs.Screen name="agenda" options={{ title: "Agenda", tabBarIcon: ({ color }) => <IconSymbol name="calendar" size={23} color={color} /> }} />
    <Tabs.Screen name="coach" options={{ title: "Chat IA", tabBarIcon: ({ color }) => <IconSymbol name="message.fill" size={23} color={color} /> }} />
    <Tabs.Screen name="settings" options={{ title: "Configurações", tabBarIcon: ({ color }) => <IconSymbol name="gearshape.fill" size={23} color={color} /> }} />
    <Tabs.Screen name="history" options={{ href: null }} />
  </Tabs>;
}
