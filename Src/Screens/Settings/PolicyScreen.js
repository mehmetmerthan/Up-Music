import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';

const PolicyScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Privacy Policy</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Information We Collect</Text>
        <Text style={styles.sectionText}>
          We collect certain information when you use our mobile application,
          including but not limited to:
          - Information about your device, including unique device identifiers
          - Log information such as your device's Internet Protocol ("IP") address, browser type, and version
          - Usage data including the time and date of your visit, the time spent on pages, and other statistics
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>How We Use Your Information</Text>
        <Text style={styles.sectionText}>
          We may use the information collected for various purposes, including but not limited to:
          - Providing and maintaining the Service
          - Improving and analyzing the use of our Service
          - Detecting, preventing, and addressing technical issues
          - Providing customer support
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Disclosure of Your Information</Text>
        <Text style={styles.sectionText}>
          We do not sell, trade, or otherwise transfer your personal information to outside parties. However, we may share your information with trusted third parties who assist us in operating our application, conducting our business, or servicing you.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Changes to This Privacy Policy</Text>
        <Text style={styles.sectionText}>
          We may update our Privacy Policy from time to time. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
  },
});

export default PolicyScreen;
