import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import { fontSize, spacing } from '../utils/sizes';
import { colors } from '../utils/colors';


const minToMil = (min) => {
    return min * 1000 * 60
}

const formatTime = (time) => time < 10 ? `0${time}` : time

const Countdown = ({minutes, isCounterStart = false, currentProgress, onEnd}) => {
    
    const [milliseconds, setMilliseconds] = useState(minToMil(minutes))
    
    const interval = React.useRef(null)
    const minute = Math.floor(milliseconds / 1000 / 60) % 60
    const seconds = Math.floor(milliseconds / 1000 ) % 60

    const countDown = () => {
        setMilliseconds( (time) => {
            if(time === 0){
                clearInterval(interval.current);
                onEnd()
                return time
            }

            const timeLeft = time - 1000
            currentProgress(timeLeft / minToMil(minutes))
            return timeLeft
        })
    }

    useEffect(() => {
        setMilliseconds(minToMil(minutes))
    },[minutes])

    useEffect( () => {
        if(isCounterStart)
        {
            interval.current = setInterval(countDown, 1000)
            return () => clearInterval(interval.current)
        }
    }, [isCounterStart]) 

    return (
        <View>
            <Text style={styles.text}>
                {formatTime(minute)} : {formatTime(seconds)}
            </Text>
        </View>
    );
};

export default Countdown;

const styles = StyleSheet.create({
    text:{
        color: colors.dark,
        fontSize: fontSize.xxxl+10,
        borderRadius: 10,
        fontWeight: 'bold',
        padding: spacing.sm,
        backgroundColor: colors.primary,
        marginLeft: spacing.xl,
        marginRight: spacing.xl,
        marginBottom: spacing.md,
        textAlign: 'center',
    }
})
