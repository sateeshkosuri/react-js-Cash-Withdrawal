import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  onAmountBalance = value => {
    this.setState(each => ({balance: each.balance - value}))
    const text = 'The quick brown fox'
    console.log(text.slice(0, 3))
    console.log(text.slice(2, 3))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="cash-withdrawal-container">
        <div className="card-container">
          <div className="card-line">
            <h1 className="title">S</h1>
            <p className="para">Sarah Williams</p>
          </div>
          <div className="your-balance-container">
            <p className="your-balance">Your Balance</p>
            <div className="amount-container">
              <p className="amount">{balance}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-amount">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <div className="list-container">
            <ul>
              {denominationsList.map(each => (
                <DenominationItem
                  amount={each}
                  key={each.id}
                  onChange={this.onAmountBalance}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
