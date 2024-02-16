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
      borderWidth: 1, 
      borderColor: '#ccc',
      // shadowColor: '#007BFF', 
      // shadowOpacity: 0.1,
      // shadowRadius: 5,
      // shadowOffset: {
      //   width: 0,
      //   height: 4,
      // },
    },
    icon: {
      alignSelf: 'center',
      width: 100,
      height: 100,
      marginTop: 40,
      marginRight: 45,
    },
    decsriptionText: {
      //marginTop: 40,
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '300',
      padding: 5,
    },
  });

export default styles;