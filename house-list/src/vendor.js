import Vue from 'vue'
import MintUI, { Lazyload } from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'

Vue.use(MintUI)

Vue.use(Lazyload, {
  error: require('./assets/images/room-default.jpg'),
  loading: require('./assets/images/room-default.jpg'),
  attempt: 1
})

import './assets/css/main.css'