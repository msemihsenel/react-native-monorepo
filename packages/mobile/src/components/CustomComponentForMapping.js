// import React from 'react';
// import { TouchableOpacity } from 'react-native';
// import { styled } from '@ui-kitten/components';

// //import { connect } from 'react-redux'

// @styled('CustomComponentForMapping')
// class CustomComponentForMapping extends React.Component {
//     render() {
//         const { eva, style, ...restProps } = this.props;

//         return (
//             <TouchableOpacity onPress={() => { this.props.change() }} style={[eva.style, style]} {...restProps} />
//         );
//     }
// }

// // const mapStateToProps = (state) => {
// //     return {
// //         status: state.status
// //     }
// // }

// // const mapDispatchToProps = (dispatch) => {
// //     console.log('dispatch çalıştı')
// //     return {
// //         change: () => dispatch({ type: 'SET_STATUS', payload: 'custom' })
// //     }
// // }

// // export default connect(mapStateToProps, mapDispatchToProps)(CustomComponentForMapping)
// export default CustomComponentForMapping