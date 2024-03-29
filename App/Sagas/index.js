import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import companyAPI from '../Services/CompanyListApi'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { GithubTypes } from '../Redux/GithubRedux'
import { CompanyReduxTypes } from '../Redux/CompanyRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getUserAvatar } from './GithubSagas'
import { getCompanies } from './CompanySagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()
const companyApi = DebugConfig.useFixtures ? FixtureAPI : companyAPI.create();

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    //takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api),

    //takeLatest(CompanyReduxTypes.COMPANY_REDUX_REQUEST, getCompanies, companyApi)
  ])
}
