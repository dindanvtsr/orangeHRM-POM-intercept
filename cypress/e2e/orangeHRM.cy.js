import LoginPage from "../support/pageObjects/loginPage";
import ForgotPassword from "../support/pageObjects/forgotPassword";
import DirectoryPage from "../support/pageObjects/directoryPage";

import loginData from "../fixtures/loginData.json";
import forgotData from "../fixtures/forgotData.json";
import directoryData from "../fixtures/directoryData.json";

describe('Login', () => {
    const loginPage = new LoginPage();
    
    beforeEach(() => {
        loginPage.visit()
    })

    it('TC_001', () => {
        loginPage.fillUsername(loginData.username_TC001)
        loginPage.fillPassword(loginData.password_TC001)
        loginPage.loginSuccessDashboardIntercepts()
        loginPage.submit()
        loginPage.loginSuccessUrl()
        loginPage.waitDashboardData()
    })
    it('TC_002', () => {
        loginPage.fillUsername(loginData.username_TC002)
        loginPage.fillPassword(loginData.password_TC002)
        loginPage.submit()
        loginPage.invalidCredentialsMessage()
    })
    it('TC_003', () => {
        loginPage.fillUsername(loginData.username_TC003)
        loginPage.fillPassword(loginData.password_TC003)
        loginPage.submit()
        loginPage.invalidCredentialsMessage()
    })
    it('TC_004', () => {
        loginPage.emptyUsername()
        loginPage.emptyPassword()
        loginPage.submit()
        loginPage.requiredMessage()
    })
    it('TC_005', () => {
        loginPage.fillUsername(loginData.username_TC005)
        loginPage.fillPassword(loginData.password_TC005)
        loginPage.submit()
        loginPage.invalidCredentialsMessage()
    })
    it('TC_006', () => {
        loginPage.emptyUsername()
        loginPage.fillPassword(loginData.password_TC006)
        loginPage.submit()
        loginPage.requiredMessage()
    })
    it('TC_007', () => {
        loginPage.fillUsername(loginData.username_TC007)
        loginPage.emptyPassword()
        loginPage.submit()
        loginPage.requiredMessage()
    })
    it('TC_008', () => {
        loginPage.fillUsername(loginData.username_TC008)
        loginPage.fillPassword(loginData.password_TC008)
        loginPage.submit()
        loginPage.invalidCredentialsMessage()
    })
    it('TC_009', () => {
        loginPage.fillUsername(loginData.username_TC009)
        loginPage.fillPassword(loginData.password_TC009)
        loginPage.submit()
        loginPage.invalidCredentialsMessage()
    })
})

describe ('Forgot Password', () => {
    const forgotPassword = new ForgotPassword();
    
    beforeEach(() => {
        forgotPassword.visit()
    })

    it('TC_010', () => {
        forgotPassword.clickForgotPassword()
        forgotPassword.fillUsername(forgotData.username_TC010)
        forgotPassword.submit()
        forgotPassword.resetPasswordSuccess()
    })
    it('TC_011', () => {
        forgotPassword.clickForgotPassword()
        forgotPassword.cancel()
    })
    it('TC_012', () => {
        forgotPassword.clickForgotPassword()
        forgotPassword.emptyUsername()
        forgotPassword.submit()
        forgotPassword.requiredMessage()
    })
    it('TC_013', () => {
        forgotPassword.clickForgotPassword()
        forgotPassword.fillUsername(forgotData.username_TC013)
        forgotPassword.submit()
        forgotPassword.invalidCredentialsMessage()
    })
})

describe ('Directory', () => {
    const loginPage = new LoginPage();
    const directoryPage = new DirectoryPage();
    
    beforeEach(() => {
        loginPage.visit()
        loginPage.fillUsername(loginData.username_TC001)
        loginPage.fillPassword(loginData.password_TC001)
        loginPage.loginSuccessDashboardIntercepts()
        loginPage.submit()
        loginPage.loginSuccessUrl()
        loginPage.waitDashboardData()
    })

    it('TC_014', () => {
        directoryPage.directoryIntercepts()
        directoryPage.showdirectory()
        directoryPage.fillName(directoryData.name)
        directoryPage.searchButton()
        directoryPage.waitDirectoryData()
    })

    it('TC_015', () => {
        directoryPage.directoryIntercepts()
        directoryPage.showdirectory()
        directoryPage.fillJob(directoryData.jobTitle)
        directoryPage.searchButton()
        directoryPage.waitDirectoryData()
    })

    it('TC_016', () => {
        directoryPage.directoryIntercepts()
        directoryPage.showdirectory()
        directoryPage.fillLocation(directoryData.location)
        directoryPage.searchButton()
        directoryPage.waitDirectoryData()
    })

    it('TC_017', () => {
        directoryPage.directoryIntercepts()
        directoryPage.showdirectory()
        directoryPage.searchButton()
        directoryPage.requiredMessage()
        directoryPage.waitDirectoryDataError()
    })

    it('TC_018', () => {
        directoryPage.directoryIntercepts()
        directoryPage.showdirectory()
        directoryPage.fillName(directoryData.name)
        directoryPage.fillJob(directoryData.jobTitle)
        directoryPage.fillLocation(directoryData.location)
        directoryPage.resetButton()
        directoryPage.waitDirectoryData()
    })
    it('TC_019', () => {
        directoryPage.directoryIntercepts()
        directoryPage.showdirectory()
        directoryPage.fillName(directoryData.name)
        directoryPage.resetButton()
        directoryPage.waitDirectoryData()
    })
    it('TC_020', () => {
        directoryPage.directoryIntercepts()
        directoryPage.showdirectory()
        directoryPage.fillJob(directoryData.jobTitle)
        directoryPage.resetButton()
        directoryPage.waitDirectoryData()
    })
    it('TC_021', () => {
        directoryPage.directoryIntercepts()
        directoryPage.showdirectory()
        directoryPage.fillLocation(directoryData.location)
        directoryPage.resetButton()
        directoryPage.waitDirectoryData()
    })
})