import { StyleSheet } from 'react-native';
import { vh, vw } from '../../Assets/themes/dimension';
import { COLORS } from '../../Assets/themes/color';

export const styles = StyleSheet.create({
  profileBackground: {
    paddingHorizontal: vw * 5,
  },
  profileContainer: {
    marginVertical: vh * 4,
    flexDirection: 'row',
  },
  left: {
    width: '70%',

    borderColor: 'red',
    gap: vh,
  },
  right: {
    gap: vh,
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
  },
  profileName: {
    color: COLORS.white,
    fontSize: vw * 5.5,
  },
  userImage: {
    width: vw * 30,
    height: vw * 30,
    resizeMode: 'contain',
  },
  profileDetailText: {
    color: COLORS.white,
    fontSize: vw * 3,
    marginLeft: vw * 2,
    textAlign: 'left',
    width: '80%',
  },
  profileText: {
    color: COLORS.white,
    fontSize: vw * 2.5,
    textAlign: 'center',
  },
  profileIcons: {
    width: vw * 5,
    height: vw * 5,
    resizeMode: 'contain',
  },
  iconsTextRow: {
    flexDirection: 'row',
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

    paddingVertical: vh * 1.5,
  },
  approvalBannerContent: {
    flexDirection: 'row',

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
    // marginVertical: vh * 2,

    paddingHorizontal: vw * 3,
    flex: 1,

  },
});
