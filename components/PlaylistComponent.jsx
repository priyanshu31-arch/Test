import React from 'react';
import {View,Text,StyleSheet, ScrollView,TouchableOpacity,TextInput,} from 'react-native';

import {Ionicons, Feather,MaterialCommunityIcons, FontAwesome5,} from '@expo/vector-icons';


const SectionHeader = ({ title }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <TouchableOpacity>
      <Text style={styles.seeAllText}>See all</Text>
    </TouchableOpacity>
  </View>
);

const MyPlaylistsCard = ({ title, episodes, updated, iconName, iconColor, bgColor }) => (
  <TouchableOpacity style={[styles.myPlaylistCard, { backgroundColor: bgColor }]}>
    
    <View style={styles.cardIconContainer}>
      <FontAwesome5 name={iconName} size={24} color={iconColor} />
    </View>

    <View>
      <Text style={styles.myPlaylistTitle} numberOfLines={2}>{title}</Text>
      <Text style={styles.myPlaylistSubText}>{episodes} Episodes</Text>
      <Text style={styles.myPlaylistSubText}>Updated: {updated}</Text>
    </View>
  </TouchableOpacity>
);


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


export default function PlaylistsComponent() {
  return (
    <ScrollView 
      style={styles.container} 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
     
      <Text style={styles.pageTitle}>Playlists</Text>
      <Text style={styles.pageSubtitle}>
        Personalized audio-care plans, curated by you
      </Text>


      <View style={styles.searchBarContainer}>
        <Ionicons name="search" size={20} color="#8E8E93" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for name, symptom or condition..."
          placeholderTextColor="#8E8E93"
        />
      </View>


      <SectionHeader title="My Playlists (10)" />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        <MyPlaylistsCard
          title="My Hypertension Daily Plan"
          episodes="6"
          updated="03.06.2025"
          iconName="heart"
          iconColor="#F39C12" 
          bgColor="#FFF8E6" 
        />
        <MyPlaylistsCard
          title="My Post-Surgery Recovery"
          episodes="3"
          updated="03.06.2025"
          iconName="check"
          iconColor="#3498DB" 
          bgColor="#EBF5FB" 
        />

      </ScrollView>

      
      <TouchableOpacity style={styles.createButton}>
        <Feather name="plus-circle" size={20} color="#007AFF" />
        <Text style={styles.createButtonText}>Create new custom playlist</Text>
      </TouchableOpacity>
      
    
      <SectionHeader title="Doctor-Curated Playlists (12)" />
      
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA', 
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40, 
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  pageSubtitle: {
    fontSize: 16,
    color: '#6A6A6E',
    marginBottom: 20,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#EFEFEF', 
    marginBottom: 24,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
    fontSize: 16,
    color: '#1C1C1E',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1C1C1E',
  },
  seeAllText: {
    color: '#007AFF',
    fontSize: 15,
    fontWeight: '600',
  },
  horizontalScroll: {
    marginBottom: 16,
  },
  myPlaylistCard: {
    width: 160,
    height: 170,
    borderRadius: 16,
    padding: 16,
    marginRight: 12,
    justifyContent: 'space-between', 
  },
  cardIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  myPlaylistTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  myPlaylistSubText: {
    fontSize: 13,
    color: '#6A6A6E',
    marginBottom: 2,
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    marginBottom: 24,
  },
  createButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  
  
  playlistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 5,
    elevation: 1,
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
});