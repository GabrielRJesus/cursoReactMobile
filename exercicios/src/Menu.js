import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './components/Simples'
import Parimpar from './components/Parimpar'
import {Inverter, MegaSena} from './components/Multi'

export default createDrawerNavigator({
    MegaSena:{
        screen: () => <MegaSena numeros={6}/>,
        navigationOptions: { title: 'Mega Sena'}
    },
    Inverter:{
        screen: () => <Inverter texto='React Nativo!' />
    },
    Parimpar:{
        screen: () => <Parimpar numero={30} />,
        navigationOptions: { title: 'Par & Impar'}
    },
    Simples:{
        screen: () => <Simples texto='Flexivel!!!'/>
    }
}, { drawerWidth: 300})