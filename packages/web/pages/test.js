import React from 'react';
import { connect } from 'react-redux';

import TestComponent from '../src/testComponent'

import { ComponentSecond } from '@monorepo/common'

class Test extends React.Component {

    static getInitialProps({ store }) { }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div>
                    <div onClick={() => { this.props.change() }}>from redux=> {this.props.status}</div>
                </div>
                <TestComponent />
                <ComponentSecond />
            </>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.status
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('dispatch çalıştı')
    return {
        change: () => dispatch({ type: 'SET_STATUS', payload: 'TEST' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);



