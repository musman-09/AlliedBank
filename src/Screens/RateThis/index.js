import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Header from '../../Components/Header';
import TopView from '../../Components/TopView';
import CurvedView from '../../Components/CurvedView';
import RobotoBold from '../../Components/RobotoBold';
import { styles } from './style';
import RobotoSemiBold from '../../Components/RobotoSemiBold';
import RobotoRegular from '../../Components/RobotoRegular';
import { icons } from '../../Assets';

const RateThis = () => {
  const [rating, setRating] = useState(1);

  const onPressStar = id => {
    setRating(id);
  };

  const stars = [1, 2, 3, 4, 5];

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <TopView name={'Rate This App'} />

      <CurvedView>
        <View style={styles.container}>
          <View style={styles.heading}>
            <RobotoRegular
              style={styles.headingText}
              name={'How was your experience?'}
            />
          </View>

          <Image
            style={styles.smileIcon}
            source={
              rating === 1
                ? icons.veryBadEmoji
                : rating === 2
                ? icons.badEmoji
                : rating === 3
                ? icons.okayEmoji
                : rating === 4
                ? icons.greatEmoji
                : rating === 5
                ? icons.smileEmojiGreen
                : null
            }
          />

          <RobotoRegular
            style={styles.smileText}
            name={
              rating === 1
                ? 'Very Bad'
                : rating === 2
                ? 'bad'
                : rating === 3
                ? 'Okay'
                : rating === 4
                ? 'Great'
                : rating === 5
                ? 'Excellent'
                : null
            }
          />

          <View style={styles.stars}>
            {stars.map(id => (
              <TouchableOpacity key={id} onPress={() => onPressStar(id)}>
                <Image
                  style={styles.starIcon}
                  source={
                    id <= rating ? icons.filledStars : icons.unfilledStars
                  }
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </CurvedView>
    </View>
  );
};

export default RateThis;
