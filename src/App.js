import React, { useEffect, useState, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import i1 from "./assets/images/1.gif";
import i2 from "./assets/images/1.png";
import i3 from "./assets/images/rudebros1.png";
import i4 from "./assets/images/rudebros2.png";
import i5 from "./assets/images/rudebros3.png";
import i6 from "./assets/images/rudebros4.png";
import i7 from "./assets/images/rudebros5.png";
import i8 from "./assets/images/rudebros6.png";
import i9 from "./assets/images/rudebros7.png";
import i10 from "./assets/images/rudebros8.png";
import i11 from "./assets/images/json.PNG";
import i12 from "./assets/images/tickets.PNG";
import i13 from "./assets/images/this.png";
import i14 from "./assets/images/twitter.png";
import i15 from "./assets/images/opensea.png";

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #212529;
  padding: 10px;
  font-weight: bold;
  color: #f24f0a;
  width: 100px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, .1);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, .1);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, .1);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  @media (min-width: 767px) {
    width: 350px;
    height: 350px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg2 = styled.img`
  width: 70px;
  height: 70px;
  @media (min-width: 767px) {
    width: 90px;
    height: 90px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
  cursor: pointer;
`;
export const StyledImg3 = styled.img`
  width: 365px;
  height: 187px;
  @media (min-width: 767px) {
    width: 365px;
    height: 187px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
 
`;
export const StyledImg4 = styled.img`
  width: 180px;
  height: 345px;
  @media (min-width: 767px) {
    width: 180px;
    height: 345px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
  
`;
function openone() {
  window.open("https://nftcalendar.io/");
}
function opentwo() {
  window.open("https://twitter.com/RudeBrosNFT");
}
function openthree() {
  window.open("https://opensea.io/collection/raffle-rudebros");
}
function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [feedback, setFeedback] = useState("Do not worry you can trade in 15 Raffle NFTs for a RudeBros NFT when the raffle is over.");
  const [claimingNft, setClaimingNft] = useState(false);

  const claimNFTs = (_amount) => {
    if (_amount <= 0) {
      return;
    }
    setFeedback("Minting your RudeBros Ticket...");
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(blockchain.account, _amount)
      .send({
        gasLimit: "285000",
        to: "0x7dd9043e8141d22b26be269c6b8abff9a6b84020",
        from: blockchain.account,
        value: blockchain.web3.utils.toWei((10 * _amount).toString(), "ether"),
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback(
          "You now own a RudeBros Ticket. Good luck!!!"
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };
  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  useEffect(() => {
    getData();
  }, [blockchain.account]);
  return (
    <s.Screen style={{ backgroundColor: "#183040" }}>
      <s.TextTitle
          style={{ textAlign: "center",  color: "#f24f0a" , fontSize: 50, fontWeight: "bold" }}
        >
          RudeBros
        </s.TextTitle>
        <s.Container flex={1} jc={"center"} ai={"center"}fd={"row"}style={{ padding: 0 }}>
                  <StyledImg2 src= {i14}  ai={"center"}  alt="my image1" onClick={opentwo} />
                  <s.SpacerLarge /><s.SpacerLarge />
                  <StyledImg2 src= {i13}  ai={"center"}  alt="my image" onClick={openone} />
                  <s.SpacerLarge /><s.SpacerLarge />
                  <StyledImg2 src= {i15}  ai={"center"}  alt="my image2" onClick={openthree} />
      </s.Container>
      <s.TextTitle
          style={{ textAlign: "center",  color: "#f24f0a" , fontSize: 15,  }}
        >
          As seen on.
        </s.TextTitle>
      <s.Container flex={1} ai={"center"} style={{ padding: 25 }}>
      <s.TextDescription style={{ textAlign: "center", color: "#f24f0a" , fontSize: 15 }}>
        Rude Bros Raffle has 1,000 Tickets. 5 Tickets have a winning trait 
        hidden in them. If you mint one of these NFT's with the Winning trait you 
        will win 1,000 Matic. Matic will be paid out to the address's that hold
        these 5 Tickets. 
          </s.TextDescription>
          <s.TextTitle
             style={{ textAlign: "center", color: "#f24f0a" , fontSize: 45, fontWeight: "bold" }}
           >
             {data.totalSupply}/1,000
           </s.TextTitle>
        <ResponsiveWrapper flex={1} style={{ padding: 25 }}>
          <s.Container
            flex={1}
            jc={"center"}
            ai={"center"}
            style={{ backgroundColor: "#1f4b69",  padding: 25 }}
          >
            {Number(data.totalSupply) == 1000 ? (
              <>
                <s.TextTitle style={{  color: "#f24f0a" , fontSize: 45, textAlign: "center" }}>
                  The Raffle Tickets are sold.
                </s.TextTitle>
                <s.SpacerSmall />
                <s.TextDescription style={{ color: "#f24f0a" ,fontSize: 30, textAlign: "center" }}>
                  The Raffle is over, winners will be paid out automaticly. {" "}
                  <a
                    target={"_blank"}
                    href={"https://opensea.io/collection/raffle-rudebros"}
                  >
                    Opensea.io
                  </a>
                </s.TextDescription>
              </>
            ) : (
              <>
              <s.SpacerSmall />
           <s.Container flex={1} jc={"center"} ai={"center"}>
            <StyledImg alt={"example"} src={i2} />
            <s.SpacerMedium />
          </s.Container>
                {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                  <s.Container ai={"center"} jc={"center"}>
                    <s.TextDescription style={{ color: "#f24f0a" , textAlign: "center" }}>
                      Connect to the Polygon network
                    </s.TextDescription>
                    <s.SpacerSmall />
                    <StyledButton
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}
                    >
                      CONNECT
                    </StyledButton>
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <s.SpacerSmall />
                        <s.TextDescription style={{  color: "#f24f0a" , textAlign: "center" }}>
                          {blockchain.errorMsg}
                        </s.TextDescription >
                      </>
                    ) : null}
                  </s.Container>
                ) : (
                  <s.Container ai={"center"} jc={"center"} fd={"row"}>
                    <StyledButton
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        claimNFTs(1);
                        getData();
                      }}
                    >
                      {claimingNft ? "BUSY" : "BUY 1 Ticket"}
                    </StyledButton>
                  </s.Container>
                )}
                 <s.TextTitle style={{ color: "#f24f0a" , textAlign: "center" }}>
                  1 RudeBros Ticket costs 10 MATIC.
                </s.TextTitle>
                <s.SpacerXSmall />
                <s.TextDescription style={{ color: "#f24f0a" , textAlign: "center" }}>
                  Plus gas fee.
                </s.TextDescription>
                <s.SpacerSmall />
                <s.TextDescription style={{ color: "#f24f0a" , textAlign: "center" }}>
                  {feedback}
                </s.TextDescription>
              </>
            )}
          </s.Container>
        </ResponsiveWrapper>
         <s.TextDescription style={{ textAlign: "center", color: "#f24f0a" , fontSize: 11 }}>
            Please make sure you are connected to the right network (Polygon
            Mainnet).
          </s.TextDescription>
        <s.SpacerSmall />
        <s.TextDescription style={{ textAlign: "center", color: "#f24f0a" , fontSize: 24 }}>
            RudeBros Raffle has 1000 NFT's with 5 different traits. 5 NFT
            hold a "winning" Trait. 
          </s.TextDescription>
          <StyledImg4 alt={"example"} src={i12} />
          <StyledImg3 alt={"example"} src={i11} />
          <s.SpacerLarge /> <s.SpacerLarge /> <s.SpacerLarge />
         <s.TextDescription style={{ color: "#f24f0a"  , fontSize: 45, textAlign: "center" }}>
                  RudeBros Gallery
                </s.TextDescription> 
        <StyledImg alt={"example"} src={i1} />
        <s.SpacerSmall />
        <s.Container ai={"center"} jc={"center"} fd={"row"}>
        <StyledImg alt={"example"} src={i3} />
        <s.SpacerSmall />
        <StyledImg alt={"example"} src={i4} />
        <s.SpacerSmall />
        <StyledImg alt={"example"} src={i5} />
        <s.SpacerSmall />
        <StyledImg alt={"example"} src={i6} />
        </s.Container>
        <s.Container ai={"center"} jc={"center"} fd={"colom"}>
        <s.SpacerSmall />
        <StyledImg alt={"example"} src={i7} />
        <s.SpacerSmall />
        <StyledImg alt={"example"} src={i8} />
        <s.SpacerSmall />
        <StyledImg alt={"example"} src={i9} />
        <s.SpacerSmall />
        <StyledImg alt={"example"} src={i10} />
        <s.SpacerSmall />
        </s.Container>
        <s.TextDescription style={{ color: "#f24f0a"  , fontSize: 28, textAlign: "center" }}>
                  Rudebros Tickets are not the RudeBros Collection. The RudeBros
                  Gallery Shows Art from the RudeBros Collection. We will be launching the RudeBros collection 
                  once the game has reached phase one. More on the game will be released at a later date.
                </s.TextDescription>
      </s.Container>
    </s.Screen>
  );
}
export default App;
