import "./App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import AppHeader from "./components/common/Header";

const { Header } = Layout;
function App() {
  return (
      <Layout className="mainLayout">
        <Header>
          <AppHeader />
        </Header>
      </Layout>
  );
}

export default App;
