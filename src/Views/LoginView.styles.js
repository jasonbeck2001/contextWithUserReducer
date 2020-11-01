import {StyleSheet} from 'react-native';
import Colors from '../GlobalDefinitions/colors';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: Colors.gray,
    height: 40,
    padding: 5,
  },
  warning: {
    color: Colors.red,
  },
});

export default styles;
