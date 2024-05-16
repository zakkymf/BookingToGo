import {Colors} from '@theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white_100,
  },
  detailOrderContainer: {
    padding: 16,
    marginTop: 4,
    backgroundColor: Colors.white,
  },
  detailOrdertitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  cardDetailOrder: {
    padding: 12,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: Colors.gray,
  },
  cardDetailOrderContent: {
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  detailOrder: {
    marginLeft: 10,
  },
  detailOrderName: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primary,
  },
  detailOrderRoom: {
    fontSize: 12,
    marginTop: 4,
    color: Colors.gray,
  },
  detailOrderBook: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailOrderBookTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  detailOrderBookDate: {
    fontSize: 12,
    color: Colors.gray,
  },
  detailOrdererContainer: {
    flex: 1,
    padding: 16,
    marginTop: 4,
    backgroundColor: Colors.white,
  },
  cardDetailOrdererContainer: {
    padding: 12,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: Colors.gray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
  },
  addionalData: {
    fontSize: 12,
    lineHeight: 16,
    color: Colors.gray,
  },
  editText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primary,
    textDecorationLine: 'underline',
  },
});

export default styles;