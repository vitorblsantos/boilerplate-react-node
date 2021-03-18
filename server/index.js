import 'dotenv/config'

import Server from './app'

Server.listen(process.env.PORT || 5000)
