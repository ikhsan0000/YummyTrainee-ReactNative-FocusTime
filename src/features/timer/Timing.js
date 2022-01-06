import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import { fontSize, spacing } from '../../utils/sizes';
import { colors } from '../../utils/colors';

export const Timing = ({ changeTime }) => {
    return(
        <>
         <Button 
                mode='outlined'
                color='#DDBEBE'
                style={styles.timingButton}
                compact={true}
                onPress={() => changeTime(5)}
                >+5 min
        </Button>

         <Button 
                mode='outlined'
                color='#DDBEBE'
                style={styles.timingButton}
                compact={true}
                onPress={() => changeTime(10)}
                >+10 min
        </Button>

         <Button 
                mode='outlined'
                color='#DDBEBE'
                style={styles.timingButton}
                compact={true}
                onPress={() => changeTime(30)}
                >+30 min
        </Button>
        </>
    )
}

const styles = StyleSheet.create({
    timingButton: {
        paddingHorizontal: spacing.sm-2,
        borderRadius: 60,
        borderColor: colors.light

    }
})