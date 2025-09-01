import { StyleSheet } from 'react-native';
import { vh, vw } from '../../Assets/themes/dimension';
import { COLORS } from '../../Assets/themes/color';

export const styles = StyleSheet.create({
  profileBackground: {
    // flex: 1,
    height: vh * 28,
    paddingHorizontal: vw * 5,
  },
  profileContainer: {
    // flex: 1,
    // height: vh * 25,
    // borderWidth: 2,
    // marginHorizontal: vw * 4,
    marginVertical: vh * 4,
    flexDirection: 'row',
    // width: '90%',
    // borderWidth: 2,
  },
  left: {
    width: '70%',

    gap: vh,
  },
  right: {
    gap: vh,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 2,
  },
  profileName: {
    color: COLORS.white,
    fontSize: vw * 5,
  },
  userImage: {
    width: vw * 30,
    height: vw * 30,
    resizeMode: 'contain',
  },
  profileDetailText: {
    color: COLORS.white,
    fontSize: vw * 3,
  },
  profileText: {
    color: COLORS.white,
    fontSize: vw * 3.4,
    textAlign: 'center',
  },
  profileIcons: {
    width: vw * 5,
    height: vw * 5,
    resizeMode: 'contain',
  },
  iconsTextRow: {
    // borderWidth: 2,
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',
    gap: vw * 2,
  },

  bannerIcon: {
    width: vw * 5,
    height: vw * 5,
    resizeMode: 'contain',
  },
  bannerText: {
    color: COLORS.white,
    fontSize: vw * 3.3,
  },
  approvalBanner: {
    backgroundColor: COLORS.orange,
    borderRadius: vw * 12,
    justifyContent: 'center',
    width: '80%',
    borderRadius: vw * 6,
    // borderWidth: 2,
    paddingVertical: vh * 1.5,
    // paddingHorizontal: vw * 4,
  },
  approvalBannerContent: {
    flexDirection: 'row',
    // borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    gap: vw * 1.8,
  },
  approvalNumber: {
    backgroundColor: COLORS.white,
    borderRadius: vw * 10,
    paddingHorizontal: vw * 1.8,
  },
  cardsContainer: {
    // marginHorizontal: vw * 2,
    marginVertical: vh * 2,
    paddingHorizontal: vw * 3,
    // borderWidth: 2,
  },
});
