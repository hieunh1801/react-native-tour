import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface Card {
  title: string;
  body: string;
}

const Card: React.FC<Card> = props => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardHeaderText}>{props.title}</Text>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardBodyText}>{props.body}</Text>
      </View>
    </View>
  );
};
export const Ra001 = () => {
  const cardList: Card[] = [
    {
      body: 'Card 1 body',
      title: 'Card 1 title',
    },
    {
      body: 'Card 2 body',
      title: 'Card 2 title',
    },
    {
      body: 'Card 3 body',
      title: 'Card 3 title',
    },
  ];
  const rotate = useSharedValue(1);
  const rotateAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotate.value}deg`}],
    };
  });

  useEffect(() => {
    new Array(5000).fill(0).map(() => {
      console.log('rotate', rotate);
    });
  }, [rotate]);

  return (
    <View style={styles.container}>
      <View>
        {cardList.map(card => {
          return (
            <Animated.View key={card.title} style={rotateAnimatedStyles}>
              <Card key={card.title} title={card.title} body={card.body} />
            </Animated.View>
          );
        })}
      </View>

      <Button
        title="Toggle"
        onPress={() => {
          rotate.value = withTiming(Math.random() * 360, {
            duration: 1000,
          });
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 60,
  },
  card: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    margin: 10,
    padding: 20,
    borderRadius: 10,
  },
  cardHeader: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardHeaderText: {
    fontSize: 20,
  },
  cardBody: {
    padding: 10,
  },
  cardBodyText: {
    fontSize: 16,
  },
});
