import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined
} from "@ant-design/icons";

ReactDOM.render();
class Icon extends Component {
  state = {};
  render() {
    return (
      (
        <div className="icons-list">
          <HomeOutlined />
          <SettingFilled />
          <SmileOutlined />
          <SyncOutlined spin />
          <SmileOutlined rotate={180} />
          <LoadingOutlined />
        </div>
      ),
      mountNode
    );
  }
}

export default Icon;
