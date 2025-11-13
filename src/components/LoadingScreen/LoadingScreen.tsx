import React, { useEffect, useState, useRef } from 'react';
import { Animated, Easing, View, StyleSheet } from 'react-native';
import { Box, Text, Icon } from '@components';

type LoadingScreenProps = {
  readonly status?: 'loading' | 'success' | 'error';
  readonly message?: string;
  readonly onAnimationComplete?: () => void;
};

export function LoadingScreen({
  status = 'loading',
  message,
  onAnimationComplete,
}: LoadingScreenProps) {
  const [dots, setDots] = useState(1);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (status === 'loading') {
      // Animação de pontos progressivos (1, 2, 3)
      const interval = setInterval(() => {
        setDots(prev => {
          if (prev >= 3) {
            return 1;
          }
          return prev + 1;
        });
      }, 500);

      // Animação de pulso do círculo
      const pulseAnimation = Animated.loop(
        Animated.sequence([
          Animated.timing(scaleAnim, {
            toValue: 1.1,
            duration: 800,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 800,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ]),
      );

      pulseAnimation.start();

      return () => {
        clearInterval(interval);
        pulseAnimation.stop();
      };
    } else if (status === 'success' || status === 'error') {
      // Animação de entrada para sucesso/erro
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 0.8,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 300,
          easing: Easing.elastic(1.5),
          useNativeDriver: true,
        }),
      ]).start();

      if (onAnimationComplete) {
        setTimeout(() => {
          onAnimationComplete();
        }, 2000);
      }
    }
  }, [status, scaleAnim, onAnimationComplete]);

  const renderContent = () => {
    if (status === 'loading') {
      return (
        <View style={styles.dotsContainer}>
          {[1, 2, 3].map(dotNumber => (
            <View
              key={dotNumber}
              style={[
                styles.dot,
                dotNumber <= dots ? styles.dotFilled : styles.dotEmpty,
              ]}
            />
          ))}
        </View>
      );
    }

    if (status === 'success') {
      return <Icon name="progressSuccess" color="white" size={60} />;
    }

    if (status === 'error') {
      return <Icon name="progressCancel" color="white" size={60} />;
    }

    return null;
  };

  return (
    <Box
      flex={1}
      backgroundColor="greenPrimary"
      alignItems="center"
      justifyContent="center"
    >
      <Animated.View
        style={{
          transform: [{ scale: scaleAnim }],
          opacity: opacityAnim,
        }}
      >
        {renderContent()}
      </Animated.View>

      {message && (
        <Box marginTop="s32" paddingHorizontal="s40">
          <Text preset="headingMedium" color="white" textAlign="center">
            {message}
          </Text>
        </Box>
      )}
    </Box>
  );
}

const styles = StyleSheet.create({
  circleContainer: {
    width: 120,
    height: 120,
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#F0F2F3',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  dotFilled: {
    backgroundColor: '#F0F2F3',
  },
  dotEmpty: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#F0F2F3',
  },
  iconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
});
