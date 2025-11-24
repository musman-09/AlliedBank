import { StyleSheet } from 'react-native';
import { vw, vh } from '../../Assets/themes/dimension';
import { COLORS } from '../../Assets/themes/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  leaveCard: {
    backgroundColor: COLORS.white,
    borderRadius: vw * 3,
    paddingBottom: vh * 2.5,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },

    marginTop: vh * 2,
  },

  leaveCardHeader: {
    flexDirection: 'row',
  },

  fromDateBox: {
    backgroundColor: COLORS.blueTabs,

    justifyContent: 'center',
    paddingLeft: vw * 3,
    paddingVertical: vh,
    // width : "40%",
    flex: 1,
  },
  toDateBox: {
    backgroundColor: COLORS.blueTabs,

    justifyContent: 'center',
    paddingLeft: vw * 3,
    paddingVertical: vh,
    // width : "35%",
    flex: 1,
  },
  daysCountBox: {
    backgroundColor: COLORS.orange,
    justifyContent: 'center',
    paddingLeft: vw * 3,
    paddingVertical: vh,
    alignItems: 'center',
    // width : "25%",
    flex: 1,
  },

  dateLabel: {
    color: COLORS.white,
    fontSize: vw * 3,
    opacity: 0.8,
  },
  dateValue: {
    color: COLORS.white,
    fontSize: vw * 3,
  },

  statsRow: {
    flexDirection: 'row',
  },

  balanceBox: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: vh * 1.5,
    backgroundColor: '#eef0ff',
  },
  pendingBox: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: vh * 1.5,
    backgroundColor: '#ffe9d9',
  },
  approvedBox: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: vh * 1.5,
    backgroundColor: '#e4f9e8',
  },

  statsNumber: {
    fontSize: vw * 4,
    fontWeight: '700',
    color: COLORS.black,
  },
  statsLabel: {
    fontSize: vw * 3,
    color: COLORS.gray,
    marginTop: vh * 0.2,
  },

  leaveMetaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: vw * 4,
    paddingVertical: vh * 2,
    borderBottomWidth: 0.6,
    borderColor: '#e6e6e6',
  },

  leaveTypeSection: {},
  requestedDateSection: { alignItems: 'flex-end' },

  leaveTypeValue: {
    marginTop: vh * 0.3,
    color: COLORS.orange,
    fontWeight: 'bold',
    fontSize: vw * 3.7,
  },
  requestedDateValue: {
    marginTop: vh * 0.3,
    color: COLORS.orange,
    fontWeight: 'bold',
    fontSize: vw * 3.7,
  },

  reasonContainer: {
    paddingHorizontal: vw * 4,
    paddingTop: vh * 2,
  },

  reasonLabel: {
    fontSize: vw * 3.5,
    fontWeight: 'bold',
    marginBottom: vh * 0.5,
  },

  reasonText: {
    fontSize: vw * 3.4,
    color: COLORS.darkGray,
    lineHeight: 20,
  },

  remarksDropdown: {
    marginHorizontal: vw * 3,
    marginTop: vh * 2,
    backgroundColor: COLORS.white,
    padding: vh * 2,
    borderRadius: vw * 2,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },

  remarksHeader: {
    fontSize: vw * 3.8,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  apprvalContainer: {
    backgroundColor: COLORS.seaGreen,
    paddingVertical: vh * 2,
    paddingHorizontal: vw * 3,
    marginTop: vh * 3,
  },
  approvalHeading: {
    color: COLORS.textBlue,
    fontSize: vw * 4,
  },
  approvalText: {
    color: COLORS.textBlue,
  },
  levelText: {
    fontSize: vw * 2.8,
  },
  level1Container: {
    flex: 1,
  },
  level2Container: {
    flex: 1,
  },
  level3Container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: vw * 4,
    marginTop: vh * 2,
  },
  approveButton: {
    flex: 1,

    backgroundColor: 'blue',
    borderRadius: vw * 12,
  },
  rejectButton: {
    flex: 1,
    borderRadius: vw * 12,
  },
});
