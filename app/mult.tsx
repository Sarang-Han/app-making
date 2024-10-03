import { useState } from 'react';
import { Text, View, Button } from 'react-native';

const textStyle = { fontSize: 30, backgroundColor: 'lightgray', padding: 10, margin: 5 };
const signStyle = { fontSize: 30, padding: 10, margin: 5 };

export default function Mult() {
    const [A, setA] = useState(0);
    const [B, setB] = useState(0);

    const result = A * B;

    return (
        <View>
            <View style={{ flexDirection: 'row', padding: 20 }}>
                <Text style={textStyle}>{A}</Text>
                <Text style={signStyle}>X</Text>
                <Text style={textStyle}>{B}</Text>
                <Text style={signStyle}>=</Text>
                <Text style={textStyle}>{result}</Text>
            </View>
            <View style={{ flexDirection: 'row', padding: 20}}>
                <Button title="+" onPress={() => setA(A + 1)} />
                <View style={{ width: 90 }} />
                <Button title="+" onPress={() => setB(B + 1)} />
            </View>
            <View style={{ flexDirection: 'row', padding: 20}}>
                <Button title="-" onPress={() => setA(A - 1)} />
                <View style={{ width: 90 }} />
                <Button title="-" onPress={() => setB(B - 1)} />
            </View>
        </View>
    );
}