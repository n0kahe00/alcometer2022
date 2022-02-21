import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    marginTop: 30,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
  },
  footer: {
    marginTop: 20,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
    alignItems: 'center'
    
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    paddingBottom: 20,
    paddingTop: 20,
  },
  input: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    padding: 5,
  },
  button: {
    marginBottom: 30,
    paddingBottom: 30,
    paddingTop: 10
  },
  box : {
    marginLeft: 10,
    marginRight: 10
  }
});