import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import { fontSize, spacing } from '../../utils/sizes';
import { colors } from '../../utils/colors';


const FocusHistory = ({ focusHistory, onClear }) => {
    const clearHisory = () => {
        onClear()
    }

    const historyItems = ({item, index}) => {
        return(
            <Text style={{color:colors.light}}>
                {item.subject} is {item.status == 1 ? 'Completed' : 'Cancelled'}
            </Text>
        )
    }
    
    return (
        <>
            <SafeAreaView style={{flex: 1}}>
                {!!focusHistory.length && (
                    <>
                        <Text style={{textAlign: 'center', color: colors.light}}>Things we've focused on:</Text>
                        <FlatList
                        style={{ flex: 1}}
                        contentContainerStyle={{flex: 1, alignItems: 'center'}}
                        data={focusHistory}
                        renderItem={historyItems}
                        keyExtractor={(item, index) => index.toString()}
                        />

                <View style={styles.buttonContainer}>
                    <Button
                        mode='contained'
                        color='#DDBEBE'
                        style={styles.deleteHistoryButton}
                        onPress={() => { clearHisory() }}
                        >Clear History
                    </Button>
                </View>
                    </>
                )
                }
                
                
                
            </SafeAreaView>

            
        

        </>
    );
  };
  
  export default FocusHistory;
  
  const styles = StyleSheet.create({
    deleteHistoryButton:{
    },
    buttonContainer: {
        alignItems: 'center',
        padding: spacing.md,
    }
  });
  