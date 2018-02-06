/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put } from 'redux-saga/effects'
import CompanyActions from '../Redux/CompanyRedux'
// import { CompanySelectors } from '../Redux/CompanyRedux'

export function * getCompanies (companyApi, action) {
  alert('company sagas getCompanies');
  const { data } = action
  // get current data from Store
  // const currentData = yield select(CompanySelectors.getData)
  // make the call to the api
  const response = yield call(companyApi.getCompanies, data)

  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(CompanyActions.companySuccess(response.data))
  } else {
    yield put(CompanyActions.companyFailure())
  }
}
