import { ScrollView, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { ScreenContainer } from "@/components/screen-container";
import { Card, IconButton, palette, PrimaryButton, ProgressRing, SectionTitle } from "@/components/trennix-ui";
import { todayWorkout } from "@/lib/trennix/data";

export default function HomeScreen() {
  return (
    <ScreenContainer containerClassName="bg-background" className="px-5 pt-3">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <View style={styles.topbar}><View><Text style={styles.greeting}>Fala, Marcos <Text style={styles.wave}>✦</Text></Text><Text style={styles.sub}>Foco hoje, resultado sempre.</Text></View><IconButton name="notifications-none" /></View>
        <SectionTitle eyebrow="Segunda-feira · 26 de maio" title="Treino do dia" />
        <Card style={styles.hero}>
          <View style={styles.heroGlow} /><View style={styles.badge}><Text style={styles.badgeText}>FORÇA</Text></View>
          <Text style={styles.heroTitle}>{todayWorkout.title}</Text><Text style={styles.heroSub}>{todayWorkout.subtitle}</Text>
          <View style={styles.meta}><View style={styles.metaItem}><MaterialIcons name="fitness-center" size={17} color={palette.lime} /><Text style={styles.metaText}>{todayWorkout.exerciseCount} exercícios</Text></View><View style={styles.metaItem}><MaterialIcons name="schedule" size={17} color={palette.lime} /><Text style={styles.metaText}>{todayWorkout.duration}</Text></View></View>
          <PrimaryButton label="Começar treino" icon="play-arrow" onPress={() => router.push("/workout")}/>
        </Card>
        <View style={styles.sectionSpace} /><SectionTitle title="Seu progresso" action="Ver histórico" />
        <Card style={styles.progressCard}><View><Text style={styles.progressLabel}>TREINOS ESTA SEMANA</Text><Text style={styles.progressNumber}>4<Text style={styles.progressMuted}>/5</Text></Text><View style={styles.progressBar}><View style={styles.progressFill} /></View></View><ProgressRing value={80} /></Card>
        <View style={styles.sectionSpace} /><SectionTitle title="Próximo treino" />
        <Card style={styles.nextCard}><View><Text style={styles.nextDay}>QUARTA-FEIRA</Text><Text style={styles.nextTitle}>Costas e Bíceps</Text><Text style={styles.nextMeta}>7 exercícios · 48 min</Text></View><IconButton name="chevron-right" onPress={() => router.push("/schedule")} /></Card>
        <View style={styles.tip}><MaterialIcons name="lightbulb-outline" size={19} color={palette.orange} /><Text style={styles.tipText}>Consistência vence intensidade. Faça o básico bem feito hoje.</Text></View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({ content: { paddingBottom: 28 }, topbar: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }, greeting: { color: palette.text, fontSize: 23, fontWeight: "900", letterSpacing: -0.5 }, wave: { color: palette.lime }, sub: { color: palette.muted, marginTop: 5, fontSize: 13 }, hero: { minHeight: 246, justifyContent: "flex-end", overflow: "hidden", padding: 18 }, heroGlow: { position: "absolute", top: -50, right: -20, width: 190, height: 190, borderRadius: 95, backgroundColor: "#203922", opacity: 0.8 }, badge: { alignSelf: "flex-start", backgroundColor: palette.lime, borderRadius: 7, paddingHorizontal: 8, paddingVertical: 5, marginBottom: 12 }, badgeText: { color: palette.bg, fontSize: 10, fontWeight: "900", letterSpacing: 1 }, heroTitle: { color: palette.text, fontSize: 27, fontWeight: "900", letterSpacing: -0.8 }, heroSub: { color: palette.muted, marginTop: 4, fontSize: 13 }, meta: { flexDirection: "row", gap: 18, marginVertical: 16 }, metaItem: { flexDirection: "row", alignItems: "center", gap: 6 }, metaText: { color: palette.text, fontSize: 12, fontWeight: "700" }, sectionSpace: { height: 26 }, progressCard: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, progressLabel: { color: palette.muted, fontSize: 10, letterSpacing: 1, fontWeight: "800" }, progressNumber: { color: palette.text, fontSize: 31, fontWeight: "900", marginVertical: 6 }, progressMuted: { color: palette.muted, fontSize: 21 }, progressBar: { width: 145, height: 6, backgroundColor: palette.elevated, borderRadius: 6, overflow: "hidden" }, progressFill: { width: "80%", height: "100%", backgroundColor: palette.lime, borderRadius: 6 }, nextCard: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, nextDay: { color: palette.lime, fontSize: 10, fontWeight: "900", letterSpacing: 1 }, nextTitle: { color: palette.text, fontSize: 17, fontWeight: "800", marginTop: 6 }, nextMeta: { color: palette.muted, fontSize: 12, marginTop: 4 }, tip: { flexDirection: "row", gap: 9, alignItems: "center", marginTop: 22, paddingHorizontal: 4 }, tipText: { color: palette.muted, fontSize: 12, flex: 1, lineHeight: 17 }, });
