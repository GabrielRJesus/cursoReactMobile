import React from 'react'
import {Text} from 'react-native'

//function comum
// export default function(props){
//     return <Text>{props.texto}</Text>
// }

//arrow function
export default props =>
    <Text>{props.texto}</Text>