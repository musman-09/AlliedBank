export const endpoints = {
  auth: {
    login: 'Account/Login',
    logout: 'Account/Logout',
    resendOtp: 'Account/ResendOTP',
    verifyOtp: 'Account/OTPVerify',
  },
  employee: {
    details: 'EmployeeDetail/GetEmployeeDetailsByEIN',
  },
  attendace: {
    history: 'AttendanceHistory/GetAttendanceHistoryByEIN',
  },
  loan: {
    history: 'LoanHistory/GetLoanHistoryByEIN',
  },
  payslips: {
    generatePaySlip: 'PaySlip/GetPaySlipofEmployee',
  },
  leaves: {
    requestDetails: 'LeaveManagement/GetLeaveRequestListByEIN',
    allCountries: 'LeaveManagement/GetAllCountries',
    types: 'LeaveManagement/GetAllLeaveTypes',
    reason: 'LeaveManagement/GetLeaveReasons',
    getPendingLeaves: 'LeaveManagement/GetPendingLeaveRequestListByEIN',
    getPendingLeaveDetails: 'LeaveManagement/GetPendingLeaveRequestDetails',
    createLeave: data =>
      `LeaveManagement/CreateLeaveRequest?EIN=${data?.ein}&LeaveTypeId=${data?.leaveTypeId}&Country=${data?.countryId}&StartDate=${data?.startDate}&EndDate=${data?.endDate}&ReasonId=${data?.reasonId}`,
  },
  claims: {
    medicalClaims: 'ClaimsHistory/GetMedicalClaimsByEIN',
    travelClaims: 'ClaimsHistory/GetTravelClaimsByEIN',
    getPendingClaims: 'ClaimsHistory/GetPendingClaimsByEIN',
  },
  general: {
    getLinks: 'UsefulLinks/GetLinks',
    rateApplication: 'UserRatings/RateApplication',
    getCurrentSplash: 'Theme/GetCurrentSplash',
  },
  documents: {
    generateAppraisalLetter: 'Documents/GenerateAppraisalLetter',
    generateTaxCertifcate: 'Documents/GenerateTaxCertificate',
    generateTaxWorkSheet: 'Documents/GenerateTaxWorksheet',
  },
  approval: {
    pendingApproval: 'PendingApprovals/GetPendingApprovalList',
    pendingApprovalDetail: 'PendingApprovals/GetPendingApprovalDetails',
    processRequest: 'PendingApprovals/ProcessPendingApproval',
  },
};
export default endpoints;
