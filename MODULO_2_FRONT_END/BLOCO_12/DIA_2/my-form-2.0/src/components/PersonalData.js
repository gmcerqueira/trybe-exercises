import React, { Component } from 'react'
import { InputText } from './InputText.js'
// import { connect } from 'react-redux'

export class PersonalData extends Component {
  render() {
    const { inputsText } = this.props;
    return (
      <div>
        {inputsText.map(({ id, textLabel })=> <InputText id={id} textLabel={textLabel} />)}

      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = {
  
// }

// export default connect(mapStateToProps, mapDispatchToProps)(PersonalData)
