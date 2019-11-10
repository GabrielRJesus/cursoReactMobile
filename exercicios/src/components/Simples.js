import React from 'react'
import {Text} from 'react-native'
import Padrao from '../estilos/Padrao'

//function comum
// export default function(props){
//     return <Text>{props.texto}</Text>
// }

//arrow function
export default props =>
    <Text style={[Padrao.ex]}>{props.texto}</Text>