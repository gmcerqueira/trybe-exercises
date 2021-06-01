import React, { Component } from 'react'
// import { connect } from 'react-redux'

export class InputText extends Component {
  render() {
    const {id, textLabel} = this.props
    return (
      <label htmlFor={id}>
        {textLabel}
        <input id={id} type="text" />
      </label>
    )
  }
}

// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = {
  
// }

// export default connect(mapStateToProps, mapDispatchToProps)(InputText)
