import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Countdown from './src/components/Countdown';
import Timer from './src/components/Timer';
import Focus from './src/features/focus/Focus';
import { colors } from './src/utils/colors';
import { spacing } from './src/utils/sizes';

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null)
  return (
    <View style={styles.container}>
      {focusSubject ? ( //focus subject is not null
        <View>
    
          <Timer focusSubject={focusSubject} />
          
          <Button
          mode='contained'
          color='#DDBEBE'
          style={styles.focusButton}
          onPress={() => setFocusSubject(null)}
          >Loser Button</Button>
        
        </View>
        ) : (
        <Focus addSubject={setFocusSubject} />      //if null, display input
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    alignContent: 'center',
    justifyContent: 'center',
  },
  focusButton: {
    marginLeft: spacing.xl,
    marginRight: spacing.xl
  }
});
