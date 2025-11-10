import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { Ionicons } from '@expo/vector-icons';


export default function Header() {
  return (
  
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.headerContainer}>
        
       
        <View style={styles.logoContainer}>
        
          <Ionicons name="stats-chart" size={28} color="#007AFF" /> 
          <Text style={styles.logoText}>HealthCast</Text>
        </View>


        <Image
          style={styles.profileImage}
          source={ require ('../assests/images/download(1).jpg')}

        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF', 
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16, 
    paddingVertical: 12,   
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#1A202C', 
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20, 
  }
});