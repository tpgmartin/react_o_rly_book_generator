import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { generateForm } from '../actions'

class GeneratorForm extends Component {
  render() {

    return (
      <div>
        <form>
          <label>Title</label>
          <input id="title" name="title" placeholder="required"></input>
          <label>Top Text</label>
          <input id="top_text" name="top_text" placeholder="required"></input>
          <label>Author</label>
          <input id="author" name="author" placeholder="required"></input>
          <label>Animal Code</label>
          <input id="image_code" name="image_code" placeholder="1-40 (listed below, defaults to random)"></input>
          <label>Colour Code</label>
          <input id="theme" name="theme" placeholder="1-17 (listed below, defaults to random)"></input>
          <label>Guide Text</label>
          <input id="guide_text" name="guide_text" placeholder="such as 'The Definitive Guide'"></input>
          <label>Guide Text Placement</label>
          <select id="guide_text_placement" name="guide_text_placement">
            <option value="bottom_right" defaultValue>Bottom Right</option>
            <option value="bottom_left">Bottom Left</option>
            <option value="top_right">Top Right</option>
            <option value="top_left">Top Left</option>
          </select>
          <button>Generate O RLY</button>
        </form>
      </div>

    )

  }
}

GeneratorForm.propTypes = {
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  { generateForm }
)(GeneratorForm)
