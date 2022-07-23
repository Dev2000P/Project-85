import React,{Component} from "react"
import {Text,View} from "react-native"

export default class DashBoard extends Component{
    render(){
        return(
            <View
            style={{
                flex:1,
                alignItems:"center",
                justifyConent:"center",
            }}>
                <Text>This is the Dashboard</Text>
            </View>
        )
    }
}