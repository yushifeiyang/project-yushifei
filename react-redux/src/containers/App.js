import React from 'react'
import {connect} from 'react-redux'
import {addNameCreater,addAgeCreater,addNameAsync} from '../redux/actions'
import AddName from '../components/AddName'
export default connect(
    state => ({
        lastname:state.addName,
        lastage:state.addAge
    }),
    {addNameCreater,addAgeCreater,addNameAsync}
)(AddName)