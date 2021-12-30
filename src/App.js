import React, { useEffect, useState, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";

import i2 from "./assets/images/1.png";


export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #212529;
  padding: 10px;
  font-weight: bold;
  color: #206d20;
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


function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [feedback, setFeedback] = useState("Double check your E-mail and Shipping address. FREE SHIPPING.");
  const [claimingNft, setClaimingNft] = useState(false);

  const claimNFTs = (_amount) => {
    if (_amount <= 0) {
      return;
    }
    setFeedback("Processing Payment");
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(blockchain.account, _amount)
      .send({
        gasLimit: "285000",
        to: "0x082ff3e8e21ba64b398def53c43865038bb8f1d7",
        from: blockchain.account,
        value: blockchain.web3.utils.toWei((210 * _amount).toString(), "ether"),
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback(
          "Your PS5 will ship in 3 business days."
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
    <s.Screen style={{ backgroundColor: "#000000" }}>
      <s.TextTitle
          style={{ textAlign: "center",  color: "#ffffff" , fontSize: 50, fontWeight: "bold" }}
        >
          Crypto Mall
        </s.TextTitle>
        
      <s.TextTitle
          style={{ textAlign: "center",  color: "#ffffff" , fontSize: 15,  }}
        >
          25 Sony PlayStation 5 (Disc Edition) with PULSE 3D Wireless Gaming Headset and Micro SD Card USB Adapter Bundle In Stock.
        </s.TextTitle>
      <s.Container flex={1} ai={"center"} style={{  padding: 25 }}  >
      
          <s.TextTitle
             style={{ textAlign: "center", color: "#ffffff" , fontSize: 45, fontWeight: "bold" }}
           >
             {data.totalSupply}/25
           </s.TextTitle>
        <ResponsiveWrapper flex={1} style={{ padding: 1 }}>
          <s.Container
            flex={1}
            jc={"center"}
            ai={"center"}
            style={{ backgroundColor:"#b1b1b1",  padding: 25 }}
          >
            {Number(data.totalSupply) == 25 ? (
              <>
                <s.TextTitle style={{  color: "#000000" , fontSize: 45, textAlign: "center" }}>
                  SOLD OUT.
                </s.TextTitle>
                <s.SpacerSmall />
                <s.TextDescription style={{ color: "#000000" ,fontSize: 30, textAlign: "center" }}>
                  Re-Stock soon. {" "}
                 
                </s.TextDescription>
              </>
            ) : (
              <>
              
              <s.TextDescription style={{ color: "#000000" ,fontSize: 30, textAlign: "center" }}>
            210 Matic Each
            </s.TextDescription>
           <s.Container flex={1} jc={"center"} ai={"center"}>
           <s.Container ai={"center"} jc={"center"} fd={"row"}>
          
            <StyledImg alt={"example"} src={i2} />
           


           

            <s.Container ai={"center"} jc={"center"} >
            
            
            <s.Container ai={"left"} jc={"left"} style={{ padding: 15 }} >
           
            <s.TextDescription style={{ color: "#000000" , textAlign: "left" }}>
            Name. 
            </s.TextDescription>
            <input type="text" />
            <s.TextDescription style={{ color: "#000000" , textAlign: "left" }}>
            Address. 
            </s.TextDescription>
            <input type="text" />
            <s.TextDescription style={{ color: "#000000" , textAlign: "left" }}>
            City. 
            </s.TextDescription>
            <input type="text" />
            <s.TextDescription style={{ color: "#000000" , textAlign: "left" }}>
            State. 
            </s.TextDescription>
            <input type="text" />
            <s.TextDescription style={{ color: "#000000" , textAlign: "left" }}>
            Zip code. 
            </s.TextDescription>
            <input type="text" />
            <s.TextDescription style={{ color: "#000000" , textAlign: "left" }}>
            E-Mail. 
            </s.TextDescription>
            <input type="text" />
            <s.TextDescription style={{ color: "#000000" , textAlign: "left" }}>
            Phone number. 
            </s.TextDescription>
            <input type="text" />
            <s.TextDescription style={{ color: "#000000" ,fontSize: 6, textAlign: "center" }}>
            We'll contact you in case anything comes up with your order. 
            </s.TextDescription>
            <s.SpacerSmall />
            </s.Container>
            </s.Container>
            </s.Container>
            <s.SpacerMedium />
          </s.Container>
                {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                  <s.Container ai={"center"} jc={"center"}>
                    <s.TextDescription style={{ color: "#000000" , textAlign: "center" }}>
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
                      Check-Out
                    </StyledButton>
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <s.SpacerSmall />
                        <s.TextDescription style={{  color: "#000000" , textAlign: "center" }}>
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
                      {claimingNft ? "BUSY" : "Purchase"}
                    </StyledButton>
                  </s.Container>
                )}
                 <s.TextTitle style={{ color: "#000000" , textAlign: "center" }}>
                  Every PS5 Comes with a free NFT.
                </s.TextTitle>
                <s.SpacerXSmall />
                <s.TextDescription style={{ color: "#000000" , textAlign: "center" }}>
                  210 Matic Plus gas fee.
                </s.TextDescription>
                <s.SpacerSmall />
                <s.TextDescription style={{ color: "#000000" , textAlign: "center" }}>
                  {feedback}
                </s.TextDescription>
              </>
            )}
          </s.Container>
        </ResponsiveWrapper>
         <s.TextDescription style={{ textAlign: "center", color: "#ffffff" , fontSize: 11 }}>
            Please make sure you are connected to the right network (Polygon
            Mainnet).
          </s.TextDescription>
        
          
      </s.Container>
      <s.Container ai={"center"} jc={"center"}  style={{ backgroundColor:"#b1b1b1",  padding: 0 }}>
      <s.TextDescription style={{ textAlign: "left", color: "#000000" , fontSize: 18 }}>
          Package Includes:
          </s.TextDescription>
          <s.TextDescription style={{ textAlign: "left", color: "#000000" , fontSize: 14 }}>
          Sony PlayStation 5 Console
          </s.TextDescription>
          <s.TextDescription style={{ textAlign: "left", color: "#000000" , fontSize: 14 }}>
          DualSense Wireless controller
          </s.TextDescription>
          <s.TextDescription style={{ textAlign: "left", color: "#000000" , fontSize: 14 }}>
          PULSE 3D Wireless Gaming Headset
          </s.TextDescription>
          <s.TextDescription style={{ textAlign: "left", color: "#000000" , fontSize: 14 }}>
          HDMI cable
          </s.TextDescription>
          <s.TextDescription style={{ textAlign: "left", color: "#000000" , fontSize: 14 }}>
          AC power cord
          </s.TextDescription>
          <s.TextDescription style={{ textAlign: "left", color: "#000000" , fontSize: 14 }}>
          USB cable
          </s.TextDescription>
          <s.TextDescription style={{ textAlign: "left", color: "#000000" , fontSize: 14 }}>
          Micro SD Card USB Adapter
          </s.TextDescription>


          </s.Container>
      <s.Container ai={"left"} jc={"center"}  style={{ backgroundColor:"#b1b1b1",  padding: 25 }}>
      <s.TextDescription style={{ textAlign: "left", color: "#000000" , fontSize: 14 }}>
        Product details
      </s.TextDescription><s.SpacerSmall />
      <s.TextDescription style={{ textAlign: "left", color: "#000000" , fontSize: 11 }}>
      Explore uncharted virtual territories and slay dragons with this sleek Sony PlayStation 
      5 gaming console. The 825GB SSD allows ultra-fast load times, while 3-D audio output 
      produces crisp acoustics. This Sony PlayStation 5 gaming console supports haptic feedback 
      for effortless communication in multiplayer setups, and adaptive triggers allow immersive 
      gameplay.
      </s.TextDescription><s.SpacerSmall />
      <s.TextDescription style={{ textAlign: "left", color: "#000000" , fontSize: 11 }}>
      Integrated I/O
      </s.TextDescription>
      <s.TextDescription style={{ textAlign: "left", color: "#000000" , fontSize: 11 }}>
      The custom integration of the PS5 console's systems lets creators pull data from the 
      SSD so quickly that they can design games in ways never before possible.
      </s.TextDescription><s.SpacerSmall />
      <s.TextDescription style={{ textAlign: "left", color: "#000000" , fontSize: 11 }}>
      Stunning games
      </s.TextDescription>
      <s.TextDescription style={{ textAlign: "left", color: "#000000" , fontSize: 11 }}>
      Marvel at incredible graphics and experience new PS5 features.
      </s.TextDescription><s.SpacerSmall />
      <s.TextDescription style={{ textAlign: "left", color: "#000000" , fontSize: 11 }}>
      Ultra-high speed SSD
      </s.TextDescription>
      <s.TextDescription style={{ textAlign: "left", color: "#000000" , fontSize: 11 }}>
      Maximize your play sessions with near-instant load times for installed PS5 games.
      </s.TextDescription><s.SpacerSmall />
      <s.TextDescription style={{ textAlign: "left", color: "#000000" , fontSize: 11 }}>
      HDR technology
      </s.TextDescription>
      <s.TextDescription style={{ textAlign: "left", color: "#000000" , fontSize: 11 }}>
      With an HDR TV, supported PS5 games display an unbelievably vibrant and lifelike range of colors.
      </s.TextDescription><s.SpacerSmall />
      <s.TextDescription style={{ textAlign: "left", color: "#000000" , fontSize: 11 }}>
      8K output
      </s.TextDescription>
      <s.TextDescription style={{ textAlign: "left", color: "#000000" , fontSize: 11 }}>
      PS5 consoles support an 8K output, so you can play games on your 4320p resolution display.
      </s.TextDescription><s.SpacerSmall />
      <s.TextDescription style={{ textAlign: "left", color: "#000000" , fontSize: 11 }}>
      4K TV gaming
      </s.TextDescription>
      <s.TextDescription style={{ textAlign: "left", color: "#000000" , fontSize: 11 }}>
      Play your favorite PS5 games on your stunning 4K TV.
      </s.TextDescription><s.SpacerSmall />
      <s.TextDescription style={{ textAlign: "left", color: "#000000" , fontSize: 11 }}>
      Up to 120 fps with 120Hz output
      </s.TextDescription>
      <s.TextDescription style={{ textAlign: "left", color: "#000000" , fontSize: 11 }}>
      Enjoy smooth and fluid high frame rate gameplay at up to 120 fps for compatible games, 
      with support for 120Hz output on 4K displays.
      </s.TextDescription><s.SpacerSmall />
      <s.TextDescription style={{ textAlign: "left", color: "#000000" , fontSize: 11 }}>
      Tempest 3D AudioTech
      </s.TextDescription>
      <s.TextDescription style={{ textAlign: "left", color: "#000000" , fontSize: 11 }}>
      Immerse yourself in soundscapes where it feels as if the sound comes from every direction. 
      Through your headphones or TV speakers, your surroundings truly come alive with Tempest 
      3D AudioTech in supported games.
      </s.TextDescription><s.SpacerSmall />
      <s.TextDescription style={{ textAlign: "left", color: "#000000" , fontSize: 11 }}>
      Haptic feedback
      </s.TextDescription>
      <s.TextDescription style={{ textAlign: "left", color: "#000000" , fontSize: 11 }}>
      Experience a haptic feedback via the DualSense wireless controller in select PS5 titles, 
      and feel the effects and impact of your in-game actions through the dynamic sensory feedback.
      </s.TextDescription><s.SpacerSmall />
      <s.TextDescription style={{ textAlign: "left", color: "#000000" , fontSize: 11 }}>
      Adaptive triggers
      </s.TextDescription>
      <s.TextDescription style={{ textAlign: "left", color: "#000000" , fontSize: 11 }}>
      Get to grips with immersive adaptive triggers, featuring dynamic resistance levels which 
      simulate the physical impact of in-game activities in select PS5 games.
      </s.TextDescription>
      </s.Container>
     
      <s.TextDescription style={{ textAlign: "left", color: "#000000" , fontSize: 11 }}>
      Get to grips with immersive adaptive triggers, featuring dynamic resistance levels which 
      simulate the physical impact of in-game activities in select PS5 games.
      </s.TextDescription><s.SpacerSmall />

    </s.Screen>
  );
}
export default App;
