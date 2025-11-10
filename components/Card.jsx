import React from 'react';
import {View, Text, Image,StyleSheet,SafeAreaView, ScrollView,TouchableOpacity,TextInput,} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Ionicons, FontAwesome5,MaterialCommunityIcons, Feather,} from '@expo/vector-icons';




const PlaylistItem = ({ iconName, iconBgColor, iconColor, title, episodes }) => (
  <TouchableOpacity style={styles.playlistItem}>
    <View style={[styles.playlistIconContainer, { backgroundColor: iconBgColor }]}>
      <MaterialCommunityIcons name={iconName} size={24} color={iconColor} />
    </View>
    <View style={styles.playlistInfo}>
      <Text style={styles.playlistTitle}>{title}</Text>
      <Text style={styles.playlistEpisodes}>{episodes} episodes</Text>
    </View>
    <Feather name="chevron-right" size={24} color="#A0A0A0" />
  </TouchableOpacity>
);


const HomeScreenBody = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollViewContent}
      showsVerticalScrollIndicator={false}
    >
      
      <Text style={styles.title}>
        Understand medical conditions with doctor-approved audio
      </Text>

      
      <TouchableOpacity style={styles.browseButton}>
        <Text style={styles.browseButtonText}>Browse Library</Text>
      </TouchableOpacity>


      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#8E8E93" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for symptom or condition..."
            placeholderTextColor="#8E8E93"
          />
        </View>
        <View style={styles.tagsContainer}>
          <View style={styles.tag}>
            <View style={[styles.tagDot, { backgroundColor: '#F0C10F' }]} />
            <Text style={styles.tagText}>Astma</Text>
          </View>
          <View style={styles.tag}>
            <View style={[styles.tagDot, { backgroundColor: '#28B446' }]} />
            <Text style={styles.tagText}>Chest pain</Text>
          </View>
          <View style={styles.tag}>
            <View style={[styles.tagDot, { backgroundColor: '#E01E37' }]} />
            <Text style={styles.tagText}>Heart diseases</Text>
          </View>
        </View>
      </View>

    
      <Text style={styles.sectionTitle}>Browse by category</Text>
      <View style={styles.categoryContainer}>
        <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#E0F3F4' }]}>
          <FontAwesome5 name="lungs" size={30} color="#27A7AF" />
          <Text style={styles.categoryText}>Body</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#FCEAEA' }]}>
          <FontAwesome5 name="heartbeat" size={30} color="#E01E37" />
          <Text style={styles.categoryText}>Symptoms</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#EBE5F5' }]}>
          <FontAwesome5 name="pills" size={30} color="#6C40B8" />
          <Text style={styles.categoryText}>Treatment</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.playlistHeader}>
        <Text style={styles.sectionTitle}>Doctor-curated playlists</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      
      <PlaylistItem
        iconName="brain"
        iconBgColor="#E6E0FF"
        iconColor="#5A31D6"
        title="Chronic Pain"
        episodes="8"
      />
      <PlaylistItem
        iconName="leaf"
        iconBgColor="#DFF2E5"
        iconColor="#1A843C"
        title="Mindfulness for Sleep"
        episodes="8"
      />
      <PlaylistItem
        iconName="heart-pulse"
        iconBgColor="#FCEAEA"
        iconColor="#E01E37"
        title="Health Heart Basics"
        episodes="12"
      />
    </ScrollView>
  );
};


export default function Card () {
  return (
    <View style={styles.appContainer}>
      
      <HomeScreenBody />
      
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  safeArea: {
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollViewContent: {
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1C1C1E',
    marginBottom: 16,
    lineHeight: 36,
  },
  browseButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 24,
  },
  browseButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
   
    elevation: 3,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    borderRadius: 10,
    padding: 12,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
    fontSize: 16,
    color: '#1C1C1E',
  },
  tagsContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  tagDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  tagText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1C1C1E',
    marginBottom: 12,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  categoryCard: {
    flex: 1, 
    height: 100,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4, 
  },
  categoryText: {
    marginTop: 8,
    fontWeight: '600',
    color: '#1C1C1E',
  },
  playlistHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeAllText: {
    color: '#007AFF',
    fontSize: 15,
    fontWeight: '600',
  },
  
 
  playlistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingVertical: 8,
  },
  playlistIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  playlistInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  playlistTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
  },
  playlistEpisodes: {
    fontSize: 14,
    color: '#8E8E93',
    marginTop: 2,
  },
}});