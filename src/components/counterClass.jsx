import React, {Component} from 'react'
import { connect } from 'react-redux';

class CounterClass extends Component {

    render() {
        return (
            <div>
                {this.props.count.value}
                <button onClick={() => this.props.increment()}>+</button>
                <button onClick={() => this.props.decrement()}>-</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    count: state.count,
    state,
});
const mapDispatchToProps = dispatch => {
    return{
        increment: () => dispatch({type: 'INCREMENT',
            payload: {
                userId:1,
            }
        }),
        decrement: () => dispatch({type: 'DECREMENT',
            payload: {
                userId:2,
            }
        }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);