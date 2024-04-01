'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      e('button',{onClick:() => this.setState({ liked: true })},
        'Like')
    );
  }
}

class List extends React.Component {
  render() {
    const { list } = this.props; // 通过 props 获取 list 数组

    return (
      <ul>
        {list.map(item => ( // 遍历 list 数组，将每个 item 渲染成 <li> 标签
          <li key={item.id}>{item.content}</li>
        ))}
      </ul>
    );
  }
}
function List(props) {
  const list = props.list;
  return (
    <ul>
      {list.map(item => ( // 遍历 list 数组，将每个 item 渲染成 <li> 标签
        <li key={item.id}>{item.content}</li>
      ))}
    </ul>
  );
}
// 在 App 组件中，传递一个 list 数组给子组件 List
class App extends React.Component {
  state = {
    list: [
      { id: 1, content: '第一条数据' },
      { id: 2, content: '第二条数据' },
      { id: 3, content: '第三条数据' },
    ],
  };

  render() {
    return (
      <div>
        <List list={this.state.list} />
      </div>
    );
  }
}



const domContainer = document.querySelector('#container');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);