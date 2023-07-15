import { Layout } from "antd";
import {

  SidebarPanel,

} from "./style";
import SongPlayerContainer from "../SongPlayerContainer";
import SongContainer from "../SongContainer";
import { useSelector } from "react-redux";
const { Sider } = Layout;
const SideBar = (props: any) => {
  const {
    favSongs
  } = useSelector((state: { song: any }) => state.song); 
  return (
    <SidebarPanel >
      <Layout >
        <Sider
          style={{
            minWidth: "100%",
            maxWidth: "100%",
            height: "100%",
            position: "fixed",
          overflow: "auto",
          }}>
         <SongPlayerContainer />
        <div style={{marginTop:"12px"}}>
        <h2>Favourite Songs</h2>
        <SongContainer songs={favSongs}/>
        </div>
        </Sider>
      </Layout>
    </SidebarPanel>
  );
};
export default SideBar;
