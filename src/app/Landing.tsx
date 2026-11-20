
import React from 'react';
import {View, Text, StyleSheet, Pressable,StatusBar,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function Landing() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content"  />

      
      <View style={styles.illustration}>

        <View style={styles.pinkCircle} />
        <View style={styles.purpleCircle} />

        
        <View style={styles.cardOne}>
          <Text style={styles.cardTitle}>Sunday reset</Text>
          <Text style={styles.cardDescription}>
            Face mask, long bath, journal, early night.
          </Text>
          <Text style={[styles.tag, styles.orangeTag]}>
            Self-care
          </Text>
        </View>

        
        <View style={styles.cardTwo}>
          <Text style={styles.cardTitle}>Groceries</Text>
          <Text style={styles.cardDescription}>
            Oat milk, strawberries, honey, sparkling water.
          </Text>
          <Text style={[styles.tag, styles.greenTag]}>
            To-do
          </Text>
        </View>

        
        <View style={styles.cardThree}>
          <Text style={styles.cardDescription}>
            Pink and lavender palette for the new landing page.
          </Text>
          <Text style={[styles.tag, styles.purpleTag]}>
            Ideas
          </Text>
        </View>

        
        <View style={styles.flower}>
          {[0, 1, 2, 3, 4].map((item) => (
            <View
              key={item}
              style={[
                styles.petal,
                { transform: [{ rotate: `${item * 72}deg` }, { translateY: -17 }] },
              ]}
            />
          ))}
          <View style={styles.flowerCenter} />
        </View>

      </View>

    
      <View style={styles.content}>
        <Text style={styles.heading}>Petal Notes</Text>

        <Text style={styles.subtitle}>
          A cute little place for your thoughts,
          plans and pretty ideas.
        </Text>

        <Text style={styles.description}>
          Sort notes into colourful categories and always
          see when you wrote them.
        </Text>
      </View>

    
      <View style={styles.bottom}>
        <View style={styles.dots}>
          <View style={styles.activeDot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <Pressable
          style={styles.button}
          onPress={() => router.replace('/Login')}
        >
          <Text style={styles.buttonText}>Get started</Text>
        </Pressable>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF4F7',
    paddingHorizontal: 28,
  },

  illustration: {
    height: 400,
    position: 'relative',
  },

  pinkCircle: {
    position: 'absolute',
    width: 290,
    height: 290,
    borderRadius: 150,
    backgroundColor: '#FCE1ED',
    top: -30,
    left: -80,
  },

  purpleCircle: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 120,
    backgroundColor: '#F0E5FA',
    top: 125,
    right: -80,
  },

  cardOne: {
    position: 'absolute',
    top: 85,
    left: 5,
    width: 190,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 23,
    transform: [{ rotate: '-7deg' }],
    elevation: 5,
    shadowColor: '#D98BAA',
    shadowOpacity: 0.15,
    shadowRadius: 12,
  },

  cardTwo: {
    position: 'absolute',
    top: 190,
    right: 0,
    width: 190,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 23,
    transform: [{ rotate: '6deg' }],
    elevation: 5,
    shadowColor: '#D98BAA',
    shadowOpacity: 0.15,
    shadowRadius: 12,
  },

  cardThree: {
    position: 'absolute',
    top: 290,
    left: 30,
    width: 180,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 23,
    transform: [{ rotate: '-4deg' }],
    elevation: 5,
    shadowColor: '#D98BAA',
    shadowOpacity: 0.15,
    shadowRadius: 12,
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#513447',
    marginBottom: 5,
  },

  cardDescription: {
    fontSize: 13,
    lineHeight: 20,
    color: '#735968',
  },

  tag: {
    alignSelf: 'flex-start',
    marginTop: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 15,
    fontSize: 11,
    fontWeight: '600',
  },

  orangeTag: {
    backgroundColor: '#FFE3CF',
    color: '#A64E1E',
  },

  greenTag: {
    backgroundColor: '#D6F3E9',
    color: '#24775D',
  },

  purpleTag: {
    backgroundColor: '#E9DFFF',
    color: '#7046C5',
  },

  flower: {
    position: 'absolute',
    top: 80,
    right: 5,
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },

  petal: {
    position: 'absolute',
    width: 23,
    height: 23,
    borderRadius: 15,
    backgroundColor: '#FFE0ED',
    borderWidth: 2,
    borderColor: '#D92E72',
  },

  flowerCenter: {
    width: 20,
    height: 20,
    borderRadius: 12,
    backgroundColor: '#FFF0A8',
    borderWidth: 2,
    borderColor: '#D92E72',
    zIndex: 2,
  },

  content: {
    marginTop: 5,
  },

  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#D52E72',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 18,
    lineHeight: 28,
    color: '#58384B',
  },

  description: {
    fontSize: 14,
    lineHeight: 23,
    color: '#967080',
    marginTop: 8,
  },

  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 35,
  },

  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginBottom: 15,
  },

  activeDot: {
    width: 25,
    height: 8,
    borderRadius: 10,
    backgroundColor: '#D52E72',
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 10,
    backgroundColor: '#F5D2E0',
  },

  button: {
    backgroundColor: '#D52E72',
    paddingVertical: 18,
    borderRadius: 35,
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#D52E72',
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
