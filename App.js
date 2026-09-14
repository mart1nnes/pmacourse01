import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Projekt PMA</Text>
        <View style={styles.statusDot} />
      </View>

      <View style={styles.content}>
        <Text style={styles.eyebrow}>ANDROID DEVICE</Text>
        <Text style={styles.title}>bud pozdraven</Text>
        <Text style={styles.subtitle}>
          ez rozhranie
        </Text>

        <View style={styles.panel}>
          <View style={styles.panelIcon}>
            <Text style={styles.panelIconText}>✓</Text>
          </View>
          <View style={styles.panelCopy}>
            <Text style={styles.panelTitle}>system taha</Text>
            <Text style={styles.panelSubtitle}>Všetko funguje faajne</Text>
          </View>
        </View>

        <Pressable style={styles.button} android_ripple={{ color: '#ffffff30' }}>
          <Text style={styles.buttonText}>ic dalej</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  appBar: {
    height: 72,
    paddingTop: 40,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#080808',
    borderBottomWidth: 1,
    borderBottomColor: '#242424',
  },
  appBarTitle: {
    color: '#f5f5f5',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 2,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#8ab4f8',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 64,
  },
  eyebrow: {
    color: '#8ab4f8',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginBottom: 12,
  },
  title: {
    color: '#ffffff',
    fontSize: 34,
    fontWeight: '700',
    marginBottom: 12,
  },
  subtitle: {
    color: '#a7a7a7',
    fontSize: 16,
    lineHeight: 24,
    maxWidth: 320,
  },
  panel: {
    marginTop: 40,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161616',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#292929',
  },
  panelIcon: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 21,
    backgroundColor: '#263b59',
  },
  panelIconText: {
    color: '#8ab4f8',
    fontSize: 22,
    fontWeight: '700',
  },
  panelCopy: {
    marginLeft: 14,
  },
  panelTitle: {
    color: '#f5f5f5',
    fontSize: 16,
    fontWeight: '600',
  },
  panelSubtitle: {
    color: '#909090',
    fontSize: 13,
    marginTop: 4,
  },
  button: {
    minHeight: 48,
    marginTop: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8ab4f8',
    borderRadius: 4,
  },
  buttonText: {
    color: '#07111f',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
});
