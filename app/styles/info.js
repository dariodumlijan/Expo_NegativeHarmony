// @flow
import { StyleSheet } from 'react-native';
import { isiPhone } from '../utils';
import colors from './colors';

type InfoStyle = {
  wrapper: Object,
  title: Object,
  subTitle: Object,
  contactTitle: Object,
  text: Object,
};

const infoStyle: InfoStyle = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    marginTop: isiPhone ? 0 : 10,
  },
  title: {
    color: colors.black,
    fontFamily: 'NegativeHarmony-Bold',
    textAlign: 'center',
    fontSize: 22,
    marginTop: '10%',
    marginBottom: '5%',
  },
  subTitle: {
    color: colors.black,
    fontFamily: 'NegativeHarmony-Bold',
    textAlign: 'left',
    fontSize: 16,
    marginVertical: 15,
  },
  contactTitle: {
    color: colors.black,
    fontFamily: 'NegativeHarmony-Bold',
    textAlign: 'left',
    fontSize: 14,
    marginVertical: 15,
  },
  text: {
    color: colors.black,
    fontFamily: 'NegativeHarmony',
    textAlign: 'left',
    fontSize: 14,
  },
});

export default infoStyle;
