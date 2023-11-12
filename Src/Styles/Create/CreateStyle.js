import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    row: {
      flex: 1,
      flexDirection: 'row',
    },
    column: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1, 
      borderColor: '#ccc',
      shadowColor: '#007BFF', 
      shadowOpacity: 0.1,
      shadowRadius: 5,
      shadowOffset: {
        width: 0,
        height: 4,
      },
    },
    icon: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      marginTop: 10, 
      fontSize: 16,
      padding: 10,
    },
  });

export default styles;