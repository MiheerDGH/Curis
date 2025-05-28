// mobile/app/(tabs)/checkin.tsx
import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export default function CheckInScreen() {
  const [mood, setMood] = useState('');
  const [sleepHours, setSleepHours] = useState('');

  const mutation = useMutation({
    mutationFn: (data: any) => axios.post('http://localhost:3001/api/checkin', data),
  });

  const handleSubmit = () => {
    mutation.mutate({ mood, sleepHours });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Daily Check-In</Text>
      <TextInput
        placeholder="Mood (e.g. Happy)"
        value={mood}
        onChangeText={setMood}
        style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
      />
      <TextInput
        placeholder="Sleep Hours"
        value={sleepHours}
        onChangeText={setSleepHours}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}
