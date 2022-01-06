import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import React from 'react';
import { fontSize, spacing } from '../../utils/sizes';
import { colors } from '../../utils/colors';

const Focus = ({ addSubject }) => {
  
  const [subject, setSubject] = useState('');
  
  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>What would you like to focus on?</Text>
          
          <TextInput 
          mode='outlined'
          placeholder='Reading Nietzsche'
          activeOutlineColor='#C89595'
          selectionColor='#DDBEBE'
          onChangeText={text => setSubject(text)}
          />

          <Button
          mode='contained'
          color='#DDBEBE'
          style={styles.focusButton}
          onPress={() => {
            if(subject !== '')
            {
              addSubject(subject)
            }
          }}
          >Focus!</Button>
        
        </View>
      </View>
  );
};

export default Focus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    paddingTop: spacing.lg
  },
  titleContainer: {
    flex: 1,
    padding: spacing.sm,
    justifyContent: 'center',
  },
  title: {
    color: colors.light,
    fontSize: fontSize.xl,
    marginBottom: spacing.sm
  },
  focusButton: {
    marginTop: spacing.md
  }
});
