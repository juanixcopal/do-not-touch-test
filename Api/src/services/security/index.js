import { securityData } from '../../data/index.js'

import makeLoginAction from './login.action.js'

const loginAction = makeLoginAction({ securityData })

const securityServices = {
    login: loginAction
}

export default securityServices
