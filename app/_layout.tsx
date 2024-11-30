import React from 'react';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{
          title: 'Farm-Buddy Control',
        }}
      />
    </Stack>
  );
}