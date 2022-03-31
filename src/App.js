import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Album from "./pages/Album";
import "./App.css";
import { Link } from "react-router-dom";
import Player from "./components/AudioPlayer";
import { Layout } from "antd";
import Earth from "./images/walk.gif";
import { SearchOutlined, DownCircleOutlined } from "@ant-design/icons";
import { useMoralis } from "react-moralis";

const { Content, Sider, Footer } = Layout;

const App = () => {
  const [nftAlbum, setNftAlbum] = useState();
  const { authenticate, isAuthenticated, user } = useMoralis();

  if (!isAuthenticated) {
    return (
      <div className="landing">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1> Welcome to my Decentralized Music Box</h1>

        <div className="font">
          <button onClick={authenticate} className="firstbutton">
            {" "}
            👽 Connect to Metamask
          </button>
        </div>
      </div>
    );
  }
  return (
    <>
      <Layout>
        <Layout>
          <Sider width={300} className="sideBar">
            <img src={Earth} alt="Logo" className="logo"></img>
            <p> Username:</p>
            <p> {user.getUsername()}</p>
            <p> ETH Address:</p>
            <div className="ethAddress">
            <p> {user.get("ethAddress")}</p>
            </div>
            <p>Claim your free Airdrop now!😉 ⬇️⬇️⬇️</p>
            <button className="secondbutton"> ✈️✈️✈️</button>

            <div className="searchBar">
              <span> Search </span>
              <SearchOutlined style={{ fontSize: "30px" }} />
            </div>
            <Link to="/">
              <p style={{ color: "#1DB954" }}> Home </p>
            </Link>
            <p> Your Music </p>
            <div className="recentPlayed">
              <p className="recentTitle">RECENTLY PLAYED</p>
              <div className="install">
                <span> Install App </span>
                <DownCircleOutlined style={{ fontSize: "30px" }} />
              </div>
            </div>
          </Sider>
          <Content className="contentWindow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/album"
                element={<Album setNftAlbum={setNftAlbum} />} //which NFTAlbum
              />
            </Routes>
          </Content>
        </Layout>
        <Footer className="footer">
          {nftAlbum && <Player url={nftAlbum} />}
        </Footer>
      </Layout>
    </>
  );
};

export default App;
