import AppMain from '@AppMain'
import Core from 'node-corejs'

Core.ClusterCore.init(AppMain)
Core.ClusterCore.start()
