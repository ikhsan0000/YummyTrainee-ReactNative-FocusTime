import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button, TextInput } from 'react-native-paper';
import Countdown from './src/components/Countdown';
import Timer from './src/components/Timer';
import Focus from './src/features/focus/Focus';
import FocusHistory from './src/features/focus/FocusHistory';
import { colors } from './src/utils/colors';
import { spacing } from './src/utils/sizes';


export default function App() {
  const STATUS = {
    COMPLETE : 1,
    CANCELLED : 2,
  }

  const [focusSubject, setFocusSubject] = useState(null)
  const [focusHistory, setFocusHistory] = useState([])
  
  const addFocusSubject = (subject, status) => {
    setFocusHistory([ ...focusHistory,
      { subject, status }
    ])
  }
  
  const onClear = () => {
    setFocusHistory([])
  }


  return (
    <View style={styles.container}>
      {focusSubject ? ( //focus subject is not null
        <View>
    
          <Timer 
          focusSubject={focusSubject} 
          onTimerEnd={() => {
            addFocusSubject(focusSubject, STATUS.COMPLETE);
            setFocusSubject(null)
          }}
          cancelFocus={() => {
            addFocusSubject(focusSubject, STATUS.CANCELLED);
            setFocusSubject(null)
          }}
          />
          
        </View>
        ) : (   //if null, display input
        <>
          <Focus addSubject={setFocusSubject} />       
          <FocusHistory focusHistory={focusHistory} onClear={onClear} />
        </>          
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
  },
  inputGroup: {
    marginTop: spacing.xl,
    paddingTop: spacing.xxxl,
  }
});
