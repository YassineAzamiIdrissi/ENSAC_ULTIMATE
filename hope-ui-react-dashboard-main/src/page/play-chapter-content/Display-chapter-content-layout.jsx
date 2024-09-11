import React from "react";
import { Outlet } from "react-router-dom";
import DisplayChapterLefSide2 from "../../components/play-chapter-content/display-chapters-leftside2";
import { SidebarProvider } from "../../hook/sidebarContext";
import DisplayChapterLefSide from "../../components/play-chapter-content/display-chapters-leftside";

const ChapterLayout = () => {
  return (
    <SidebarProvider>
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <>
          <DisplayChapterLefSide2 />
        </>
        <div
          style={{
            flexGrow: 1,
            height: "100vh",
            maxWidth: "calc(100wh-350px)",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            paddingTop: "10px",
            paddingRight: "5px",
            // paddingLeft: "80px",
            textAlign: "start",
          }}
        >
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ChapterLayout;

{
  /* <>
<Container sx={{ marginTop: "20px" }}>
  <DisplayChapterLefSide />
  <Grid container spacing={2}>
    <Grid item xs={4} md={3}>
      <Outlet />
    </Grid>
  </Grid>

  <>
</Container></> */
}
