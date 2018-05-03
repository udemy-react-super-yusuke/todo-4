import React from "react";

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    // input の内容のための state
    this.state = { title: "" };
  }

  render() {
    // form の内容を作り込む
    return (
      <div>
        <h2>AddTodo</h2>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.title} onChange={this.handleChange} />
          <input type="submit" value="Add to todo list" />
        </form>
      </div>
    );
  }

  // input の内容を変更した場合に発動するメソッド
  handleChange = event => {
    // value を取得する
    const title = event.target.value;
    this.setState({ title: title });
  };

  // submit した場合に発動するメソッド
  handleSubmit = event => {
    // ページ遷移を止める
    event.preventDefault();
    alert(this.state.title);
    this.setState({ title: "" });
  };
}
