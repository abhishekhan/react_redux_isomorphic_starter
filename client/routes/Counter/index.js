import { connect } from 'react-redux'
import { increment, decrement } from './actions'
const Counter = (props) => (
  <div>
  Counter: {props.count}
  <button onClick={props.increment}>+</button>
  <button onClick={props.decrement}>-</button>
  </div>
)
const mapStateToProps = state => ({
  count: state.count,
})

const mapDispatchToProps = dispatch =>(
  {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
