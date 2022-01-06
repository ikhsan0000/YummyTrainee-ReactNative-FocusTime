import React, { useState } from 'react';
import { StyleSheet, Text, View, Vibration, Platform } from 'react-native';
import { colors } from '../utils/colors'
import { fontSize, spacing } from '../utils/sizes';
import { Button, ProgressBar, TextInput } from 'react-native-paper';
import Countdown from './Countdown';
import { Timing } from '../features/timer/Timing';
import { useKeepAwake } from 'expo-keep-awake';


const Timer = ({focusSubject, onTimerEnd, cancelFocus}) => {
    useKeepAwake()

    const [isCounterStart, setIsCounterStart] = useState(false)
    const [progress, setProgress] = useState(1)
    const [minutes, setMinutes] = useState(0.1)
    const changeTime = (min) => {
        setMinutes(min)
    }

    const vibrate = () => {
        if(Platform.OS === 'ios') {
            const interval = setInterval(() =>Vibration.vibrate(), 1000)
            setTimeout(() =>clearInterval(interval), 3000)
        }
        else{
            Vibration.vibrate(3000)
        }
    }

    const onEnd = () => {
        vibrate();
        setMinutes(0.1)
        setProgress(1)
        setIsCounterStart(false)
        onTimerEnd()
    }

    return (
        <View>
            <View style={styles.countdown}>
                <Countdown isCounterStart={isCounterStart} currentProgress={(current) => setProgress(current)} minutes={minutes}
                onEnd={onEnd} />
            </View>


            <Text style={styles.title}>Focusing on:</Text>
            <Text style={styles.task}>{focusSubject}</Text>
        
            <View style={styles.progressBarContainer} >
                <Text style={[styles.title,{marginTop: 10, marginBottom: -10}]}>Keep at it !</Text>
                <ProgressBar style={styles.progressBar} color={colors.primary}  progress={progress}/>

            <View style={styles.buttonWrapper}>
                <Timing changeTime={(min) => changeTime(min)}/>
            </View>

            </View>

            <Button
            mode='outlined'
            color='#DDBEBE'
            style={styles.focusButton}
            icon={isCounterStart ? "pause" : "play"}
            onPress={() => {
                if(isCounterStart)
                {
                        setIsCounterStart(false)
                }
                else
                {       
                        setIsCounterStart(true)
                }
            }}
            >{isCounterStart ? "Pause" : "Start"}</Button>

            <Button
            mode='contained'
            color='#DDBEBE'
            style={styles.focusButton}
            onPress={cancelFocus}
            >Loser Button</Button>

        </View>
    );
};

export default Timer;

const styles = StyleSheet.create({
    title: {
        fontSize: fontSize.md,
        color: colors.light,
        textAlign: 'center',
    },
    task: {
        fontSize: fontSize.lg,
        color: colors.light,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    focusButton: {
        marginTop: spacing.sm,
        marginBottom: spacing.md,
        marginLeft: spacing.xl,
        marginRight: spacing.xl,
        borderColor: colors.light
    },
    progressBar: {
        marginVertical: spacing.lg,
        height: 10
    },
    progressBarContainer: {
        marginVertical: spacing.lg
    },
    buttonWrapper: {
        flexDirection: 'row',
        marginHorizontal: spacing.lg,
        justifyContent: 'space-evenly'
        
    },
    minuteButton: {
        paddingHorizontal: spacing.sm-2,
        borderRadius: 60,
        borderColor: colors.light

    }
})
