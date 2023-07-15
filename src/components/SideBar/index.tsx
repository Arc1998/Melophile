import { Layout } from "antd";
import React from "react";
import {

  SidebarPanel,

} from "./style";
import SongPlayerContainer from "../SongPlayerContainer";


const { Sider } = Layout;
const SideBar = (props: any) => {

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
        </Sider>
      </Layout>
    </SidebarPanel>
  );
};
export default SideBar;
