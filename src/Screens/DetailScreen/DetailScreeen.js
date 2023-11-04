import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import colors from '../../utils/colors';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Star from '../../assets/svgs/Star';
import Bottom from '../../assets/svgs/Bottom';
import Right from '../../assets/svgs/Right';
import Heart from '../../assets/svgs/Heart';
import Back from '../../assets/svgs/Back';

const DetailScreeen = ({navigation}) => {
  const dataArray = [
    {
      id: '1',
      imageSource: require('../../assets/images/wifi.png'),
      text: '1 Heater',
    },
    {
      id: '2',

      imageSource: require('../../assets/images/food.png'),
      text: 'Dinner',
    },
    {
      id: '3',

      imageSource: require('../../assets/images/bath_tub.png'),
      text: '1 Tub',
    },
    {
      id: '4',

      imageSource: require('../../assets/images/Frame.png'),
      text: 'Pool',
    },
  ];

  const renderItem = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        // alignItems: 'center',

        // backgroundColor: 'red',
      }}>
      <View
        style={{
          alignItems: 'center',
          // paddingHorizontal: 12,
          // paddingVertical: 20,
          justifyContent: 'center',
          alignSelf: 'center',
          backgroundColor: '#f1f5fd',
          marginHorizontal: 14,
          height: 74,
          width: 77,
          borderRadius: 16,
        }}>
        <Image source={item.imageSource} style={{height: 32, width: 32}} />
        <Text>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fbfbfd'}}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.topImage}>
            <Image
              source={require('../../assets/images/img.png')}
              style={{height: '100%', width: '100%', borderRadius: 20}}
              resizeMode="cover"
            />
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              activeOpacity={0.7}
              style={{
                backgroundColor: '#fbfbfb',
                paddingHorizontal: 17,
                paddingVertical: 15,
                position: 'absolute',
                top: 12,
                left: 12,
                // bottom: -20,
                // right: 30,
                borderRadius: 8,
              }}>
              <Back />
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: '#fbfbfb',
                padding: 9,
                position: 'absolute',
                bottom: -20,
                right: 30,
                borderRadius: 80,
              }}>
              <Image
                source={require('../../assets/images/Heart.png')}
                style={{height: 26, width: 30}}
              />
            </View>
          </View>
          <View style={styles.titleContailer}>
            <Text style={styles.titleOfPlace}>Coeurdes Alpes</Text>
            <Text style={styles.textShowMap}>Show map</Text>
          </View>
          <View style={styles.reviewContainer}>
            <Star />
            <Text style={{fontSize: 12}}>4.5 (355 Reviews)</Text>
          </View>
          <View style={{marginTop: 16}}>
            <Text style={styles.desText}>
              Aspen is as close as one can get to a storybook alpine town in
              America. The choose-your-own-adventure possibilities—skiing,
              hiking, dining shopping and ....
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 7,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '700',
                  color: colors.secondary,
                }}>
                Read More
              </Text>
              <Bottom />
            </View>
          </View>

          <View style={styles.facilitiesContainer}>
            <Text style={styles.facilitiesText}>Facilities</Text>

            <FlatList
              data={dataArray}
              renderItem={renderItem}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={styles.bottomContainer}>
            <View>
              <Text
                style={{fontSize: 12, fontWeight: '500', color: colors.black}}>
                Price
              </Text>
              <Text style={{fontSize: 24, fontWeight: '700', color: '#2DD7A4'}}>
                $199
              </Text>
            </View>
            <View style={styles.btnBook}>
              <Text style={{fontSize: 16, fontWeight: '700', color: '#ffffff'}}>
                Book Now
              </Text>
              <Right />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreeen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  topImage: {
    height: 340,
    width: 335,
    alignSelf: 'center',
  },
  titleContailer: {
    flexDirection: 'row',
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleOfPlace: {
    fontSize: 24,
    color: colors.black,
    fontWeight: '700',
  },
  textShowMap: {
    fontSize: 14,
    color: colors.secondary,
    fontWeight: '700',
    fontSize: 14,
  },
  reviewContainer: {
    marginTop: 8,
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  desText: {
    fontSize: 14,
  },
  facilitiesText: {
    fontSize: 18,
    marginBottom: 16,
  },
  facilitiesContainer: {
    marginTop: 32,
  },
  btnBook: {
    backgroundColor: '#1770f1',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 56,
    paddingVertical: 16,
    borderRadius: 16,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 28,
    marginBottom: 24,
  },
});
