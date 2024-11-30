// App.tsx
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { 
  Provider as PaperProvider,
  Button, 
  Card, 
  Text,
  Switch,
  RadioButton,
  IconButton,
  Surface
} from 'react-native-paper';

export default function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [tempAlert, setTempAlert] = useState(false);
  const [autoLED, setAutoLED] = useState(false);
  const [waterAmount, setWaterAmount] = useState('50');

  return (
    <PaperProvider>
      <LinearGradient
        colors={['#e8f5e9', '#c8e6c9']}
        style={styles.container}
      >
        <ScrollView>
          {/* BLE 연결 상태 */}
          <Surface style={styles.headerCard}>
            <Text style={styles.headerText}>Connect BLE Device</Text>
            <Button
              mode={isConnected ? "contained" : "outlined"}
              onPress={() => setIsConnected(!isConnected)}
              icon="bluetooth"
              style={styles.connectButton}
              buttonColor={isConnected ? "#4CAF50" : "#ffffff"}
            >
              {isConnected ? "연결됨" : "연결하기"}
            </Button>
          </Surface>

          {/* 센서 데이터 카드 */}
          <Card style={styles.dataCard}>
            <Card.Title title="현재 환경 데이터" />
            <Card.Content>
              <View style={styles.dataRow}>
                <IconButton icon="thermometer" size={30} />
                <Text style={styles.dataText}>온도: 23°C</Text>
              </View>
              <View style={styles.dataRow}>
                <IconButton icon="white-balance-sunny" size={30} />
                <Text style={styles.dataText}>조도: 65</Text>
              </View>
            </Card.Content>
          </Card>

          {/* 제어 패널 */}
          <Card style={styles.controlCard}>
            <Card.Title title="제어 패널" />
            <Card.Content>
              <View style={styles.controlRow}>
                <Text>온도 알림</Text>
                <Switch value={tempAlert} onValueChange={setTempAlert} />
              </View>
              <View style={styles.controlRow}>
                <Text>자동 LED 제어</Text>
                <Switch value={autoLED} onValueChange={setAutoLED} />
              </View>
              
              <Text style={styles.sectionTitle}>물 공급량 설정</Text>
              <RadioButton.Group value={waterAmount} onValueChange={setWaterAmount}>
                <View style={styles.radioRow}>
                  <RadioButton.Item label="50ml" value="50" />
                  <RadioButton.Item label="100ml" value="100" />
                </View>
              </RadioButton.Group>
              
              <Button 
                mode="contained" 
                onPress={() => {}}
                style={styles.waterButton}
                icon="water"
              >
                물주기
              </Button>
            </Card.Content>
          </Card>
        </ScrollView>
      </LinearGradient>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerCard: {
    padding: 16,
    marginBottom: 16,
    borderRadius: 12,
    elevation: 4,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  connectButton: {
    marginTop: 8,
  },
  dataCard: {
    marginBottom: 16,
    borderRadius: 12,
  },
  controlCard: {
    borderRadius: 12,
  },
  dataRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  dataText: {
    fontSize: 18,
  },
  controlRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  radioRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  waterButton: {
    marginTop: 8,
    backgroundColor: '#2196F3',
  },
});