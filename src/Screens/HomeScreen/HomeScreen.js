import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TextInput,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Location from '../../assets/svgs/Location';
import Bottom from '../../assets/svgs/Bottom';
import Search from '../../assets/svgs/Search';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from '../../utils/colors';
import Star from '../../assets/svgs/Star';

const HomeScreen = ({navigation}) => {
  const btnDetail = () => {
    navigation.navigate('DetailStack', {
      screen: 'Detail',
    });
  };

  const locations = [
    {
      name: 'Location',
      image: require('../../assets/images/img2.png'),
      placeName: 'Alley Palace',
      starNumber: 4.1,
      place: require('../../assets/images/place.png'),
    },
    {
      name: 'Hotels',
      image: require('../../assets/images/img2.png'),
      placeName: 'Alley Palace',
      starNumber: 4.5,
      place: require('../../assets/images/place.png'),
    },
    {
      name: 'Food',
      image: require('../../assets/images/img2.png'),
      placeName: 'Alley Palace',
      starNumber: 4.5,
      place: require('../../assets/images/place.png'),
    },
    {
      name: 'Adventure',
      image: require('../../assets/images/img2.png'),
      placeName: 'Alley Palace',
      starNumber: 4.5,
      place: require('../../assets/images/place.png'),
    },
    {
      name: 'Active',
      image: require('../../assets/images/img2.png'),
      placeName: 'Alley Palace',
      starNumber: 4.5,
      place: require('../../assets/images/place.png'),
    },
  ];
  const [cityLocation, setCityLocation] = useState(locations);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemPress = index => {
    console.log(index);
    setSelectedItem(index);
  };
  return (
    <View style={{}}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 25,
            paddingHorizontal: 20,
          }}>
          <View>
            <Text style={{fontSize: 18}}>Explore</Text>
            <Text style={{fontSize: 27, fontWeight: '500', color: '#000'}}>
              Aspen
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Location />
            <Text style={{fontSize: 18, color: '#000', paddingLeft: 4}}>
              Aspen, USA
            </Text>
            <TouchableOpacity style={{paddingLeft: 3}}>
              <Bottom />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.searchContainer}>
          <View style={{paddingLeft: 25}}>
            <Search />
          </View>
          <TextInput
            placeholder="Find things to do"
            style={{paddingLeft: 15, fontSize: 17}}
          />
        </View>
        <FlatList
          horizontal
          data={locations}
          showsHorizontalScrollIndicator={false}
          renderItem={(item, index) => {
            return (
              <TouchableOpacity
                onPress={() => handleItemPress(index)}
                style={[
                  styles.itemContainer,
                  selectedItem === index && styles.selectedItem,
                ]}>
                <Text
                  style={{
                    color: '#0858D0',
                    paddingHorizontal: 12,
                    fontSize: 14,
                    fontWeight: '700',
                  }}>
                  {item?.item?.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <Text style={{fontSize: 22, fontWeight: '600', color: '#000'}}>
            Popular
          </Text>
          <Text style={{color: '#0858D0', fontWeight: '500'}}>See All</Text>
        </View>
        <FlatList
          horizontal
          data={locations}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={styles.imageContainer}
              activeOpacity={0.7}
              onPress={() => btnDetail()}>
              <ImageBackground
                source={item.image}
                style={styles.imageBackground}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    marginBottom: 10,
                  }}>
                  <View style={styles.placeTitle}>
                    <Text
                      style={[
                        styles.overlayText,
                        {textAlign: 'left', paddingLeft: 10},
                      ]}>
                      {item.placeName}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={styles.placrReating}>
                      <Image source={item.starImage} style={{}} />
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Star />
                        <Text style={styles.overlayText}>
                          {item.starNumber}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.placeLike}>
                      <Image
                        source={require('../../assets/images/Heart.png')}
                        style={{width: '50%', height: '50%'}}
                      />
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
        <View style={{paddingHorizontal: 20, marginTop: 24}}>
          <Text style={{fontSize: 22, fontWeight: '600', color: '#000'}}>
            Recommended
          </Text>
        </View>
        <FlatList
          horizontal
          data={locations}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <View
              style={[
                styles.imageContainer,
                {
                  backgroundColor: '#fbfbfb',
                  paddingTop: 3,
                  borderRadius: 16,
                  // paddingHorizontal: 20,
                },
              ]}>
              <View>
                <Image
                  source={item.place}
                  style={{
                    width: 180,
                    height: 110,
                    resizeMode: 'cover',
                    borderRadius: 12,
                  }}
                />
                <View style={styles.bottomRounded}>
                  <Text style={styles.bottomText}>4N/5D</Text>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 20,
                    fontWeight: '600',
                    marginTop: 2,
                  }}>
                  Explore Aspen
                </Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#F3F8FE',
    // marginLeft: 2,
    borderRadius: 10,
    marginStart: 20,
    padding: 8,
    marginVertical: 32,
  },
  selectedItem: {
    backgroundColor: '#F3F8FE',
  },
  itemText: {
    color: '#0858D0',
  },
  imageContainer: {
    marginLeft: 5,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  imageBackground: {
    width: 180,
    height: 230,
  },
  overlayText: {
    color: 'white',
    padding: 5,
    borderRadius: 5,
    textAlign: 'center',
  },
  placeTitle: {
    justifyContent: 'flex-end',
    width: '55%',
    borderRadius: 20,
    marginLeft: 10,
    backgroundColor: '#4D5652',
  },
  placrReating: {
    width: '30%',
    borderRadius: 50,
    flexDirection: 'row',
    backgroundColor: '#4D5652',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 10,
    paddingLeft: 5,
  },
  placeLike: {
    backgroundColor: '#fff',
    width: '20%',
    height: 35,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
    borderRadius: 100,
  },
  bottomRounded: {
    backgroundColor: '#3A544F',
    // width: '30%',
    position: 'absolute',
    bottom: -10,
    borderWidth: 2,
    borderColor: '#fbfbfb',
    right: 10,
    borderRadius: 50,
  },
  bottomText: {
    color: '#ffff',
    fontSize: 14,
    fontWeight: '600',
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  searchContainer: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#F3F8FE',
    borderRadius: 25,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 3,
    marginTop: 24,
    alignSelf: 'center',
  },
});
