(this.webpackJsonpfrontend_base_dapp=this.webpackJsonpfrontend_base_dapp||[]).push([[0],{217:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')},243:function(e,t){},266:function(e,t){},268:function(e,t){},345:function(e,t){},347:function(e,t){},380:function(e,t){},385:function(e,t){},387:function(e,t){},394:function(e,t){},407:function(e,t){},430:function(e,t){},439:function(e,t){},441:function(e,t){},511:function(e,t,n){},512:function(e,t,n){},513:function(e,t,n){"use strict";n.r(t);var a,i,s,o,r,l,c,p,u,d,y,f,b,m=n(2),x=n(83),j=n.n(x),h=n(117),g=n(16),O=n(56),w=n(18),S=n.n(w),T=n(67),v=n(66),A=n.n(v),C=n(216),k=n.n(C),M=n(217),z=n(68),E=n(218),_=n(15),I={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(_.a)(Object(_.a)({},I),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(_.a)(Object(_.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(_.a)(Object(_.a)({},I),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(_.a)(Object(_.a)({},e),{},{account:t.payload.account});default:return e}},D={loading:!1,name:"",totalSupply:0,cost:0,error:!1,errorMsg:""},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(_.a)(Object(_.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(_.a)(Object(_.a)({},e),{},{loading:!1,name:t.payload.name,totalSupply:t.payload.totalSupply,cost:t.payload.cost,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(_.a)(Object(_.a)({},D),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},N=Object(z.b)({blockchain:P,data:U}),F=[E.a],B=Object(z.c)(z.a.apply(void 0,F)),H=Object(z.d)(N,B),R=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},K=function(e){return function(){var e=Object(T.a)(S.a.mark((function e(t){var n,a,i;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,H.getState().blockchain.smartContract.methods.name().call();case 4:return n=e.sent,e.next=7,H.getState().blockchain.smartContract.methods.totalSupply().call();case 7:return a=e.sent,e.next=10,H.getState().blockchain.smartContract.methods.cost().call();case 10:i=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{name:n,totalSupply:a,cost:i}}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),t(R("Could not load data from contract."));case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}()},L=function(e){return{type:"CONNECTION_FAILED",payload:e}},W=function(e){return function(){var t=Object(T.a)(S.a.mark((function t(n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(K());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},G=n(17),q=G.a.div(a||(a=Object(g.a)(["\n  background-color: var(--dark-grey);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),Q=G.a.div(i||(i=Object(g.a)(["\n  height: 8px;\n  width: 8px;\n"]))),V=G.a.div(s||(s=Object(g.a)(["\n  height: 16px;\n  width: 16px;\n"]))),J=G.a.div(o||(o=Object(g.a)(["\n  height: 24px;\n  width: 24px;\n"]))),Y=(G.a.div(r||(r=Object(g.a)(["\n  height: 32px;\n  width: 32px;\n"]))),G.a.div(l||(l=Object(g.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"}))),Z=G.a.p(c||(c=Object(g.a)(["\n  color: var(--white);\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),X=(G.a.p(p||(p=Object(g.a)(["\n  color: var(--white);\n  font-size: 14px;\n  line-height: 1.6;\n"]))),G.a.p(u||(u=Object(g.a)(["\n  color: var(--white);\n  font-size: 12px;\n  line-height: 1.6;\n"])))),$=(G.a.div(d||(d=Object(g.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n.p+"static/media/1.8235c943.png"),ee=n(1),te=G.a.button(y||(y=Object(g.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: #212529;\n  padding: 10px;\n  font-weight: bold;\n  color: #206d20;\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, .1);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, .1);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, .1);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),ne=G.a.div(f||(f=Object(g.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),ae=G.a.img(b||(b=Object(g.a)(["\n  width: 200px;\n  height: 200px;\n  @media (min-width: 767px) {\n    width: 350px;\n    height: 350px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"])));var ie=function(){var e=Object(O.b)(),t=Object(O.c)((function(e){return e.blockchain})),n=Object(O.c)((function(e){return e.data})),a=Object(m.useState)("Double check your E-mail and Shipping address. FREE SHIPPING."),i=Object(h.a)(a,2),s=i[0],o=i[1],r=Object(m.useState)(!1),l=Object(h.a)(r,2),c=l[0],p=l[1],u=function(){""!==t.account&&null!==t.smartContract&&e(K(t.account))};return Object(m.useEffect)((function(){u()}),[t.account]),Object(ee.jsxs)(q,{style:{backgroundColor:"#000000"},children:[Object(ee.jsx)(Z,{style:{textAlign:"center",color:"#ffffff",fontSize:50,fontWeight:"bold"},children:"Crypto Mall"}),Object(ee.jsx)(Z,{style:{textAlign:"center",color:"#ffffff",fontSize:15},children:"25 Sony PlayStation 5 (Disc Edition) with PULSE 3D Wireless Gaming Headset and Micro SD Card USB Adapter Bundle In Stock."}),Object(ee.jsxs)(Y,{flex:1,ai:"center",style:{padding:25},children:[Object(ee.jsxs)(Z,{style:{textAlign:"center",color:"#ffffff",fontSize:45,fontWeight:"bold"},children:[n.totalSupply,"/25"]}),Object(ee.jsx)(ne,{flex:1,style:{padding:1},children:Object(ee.jsx)(Y,{flex:1,jc:"center",ai:"center",style:{backgroundColor:"#b1b1b1",padding:25},children:25==Number(n.totalSupply)?Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)(Z,{style:{color:"#000000",fontSize:45,textAlign:"center"},children:"SOLD OUT."}),Object(ee.jsx)(V,{}),Object(ee.jsxs)(X,{style:{color:"#000000",fontSize:30,textAlign:"center"},children:["Re-Stock soon. "," "]})]}):Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)(X,{style:{color:"#000000",fontSize:30,textAlign:"center"},children:"210 Matic Each"}),Object(ee.jsxs)(Y,{flex:1,jc:"center",ai:"center",children:[Object(ee.jsxs)(Y,{ai:"center",jc:"center",fd:"row",children:[Object(ee.jsx)(ae,{alt:"example",src:$}),Object(ee.jsx)(Y,{ai:"center",jc:"center",children:Object(ee.jsxs)(Y,{ai:"left",jc:"left",style:{padding:15},children:[Object(ee.jsx)(X,{style:{color:"#000000",textAlign:"left"},children:"Name."}),Object(ee.jsx)("input",{type:"text"}),Object(ee.jsx)(X,{style:{color:"#000000",textAlign:"left"},children:"Address."}),Object(ee.jsx)("input",{type:"text"}),Object(ee.jsx)(X,{style:{color:"#000000",textAlign:"left"},children:"City."}),Object(ee.jsx)("input",{type:"text"}),Object(ee.jsx)(X,{style:{color:"#000000",textAlign:"left"},children:"State."}),Object(ee.jsx)("input",{type:"text"}),Object(ee.jsx)(X,{style:{color:"#000000",textAlign:"left"},children:"Zip code."}),Object(ee.jsx)("input",{type:"text"}),Object(ee.jsx)(X,{style:{color:"#000000",textAlign:"left"},children:"E-Mail."}),Object(ee.jsx)("input",{type:"text"}),Object(ee.jsx)(X,{style:{color:"#000000",textAlign:"left"},children:"Phone number."}),Object(ee.jsx)("input",{type:"text"}),Object(ee.jsx)(X,{style:{color:"#000000",fontSize:6,textAlign:"center"},children:"We'll contact you in case anything comes up with your order."}),Object(ee.jsx)(V,{})]})})]}),Object(ee.jsx)(J,{})]}),""===t.account||null===t.smartContract?Object(ee.jsxs)(Y,{ai:"center",jc:"center",children:[Object(ee.jsx)(X,{style:{color:"#000000",textAlign:"center"},children:"Connect to the Polygon network"}),Object(ee.jsx)(V,{}),Object(ee.jsx)(te,{onClick:function(t){t.preventDefault(),e(function(){var e=Object(T.a)(S.a.mark((function e(t){var n,a,i,s,o;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t({type:"CONNECTION_REQUEST"}),n=window,!(a=n.ethereum)||!a.isMetaMask){e.next=21;break}return A.a.setProvider(a),i=new k.a(a),e.prev=6,e.next=9,a.request({method:"eth_requestAccounts"});case 9:return s=e.sent,e.next=12,a.request({method:"net_version"});case 12:137==e.sent?(o=new A.a(M,"0x082ff3e8e21ba64b398def53c43865038bb8f1d7"),t({type:"CONNECTION_SUCCESS",payload:{account:s[0],smartContract:o,web3:i}}),a.on("accountsChanged",(function(e){t(W(e[0]))})),a.on("chainChanged",(function(){window.location.reload()}))):t(L("Change network to Polygon.")),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(6),t(L("Something went wrong."));case 19:e.next=22;break;case 21:t(L("Install Metamask."));case 22:case"end":return e.stop()}}),e,null,[[6,16]])})));return function(t){return e.apply(this,arguments)}}()),u()},children:"Check-Out"}),""!==t.errorMsg?Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)(V,{}),Object(ee.jsx)(X,{style:{color:"#000000",textAlign:"center"},children:t.errorMsg})]}):null]}):Object(ee.jsx)(Y,{ai:"center",jc:"center",fd:"row",children:Object(ee.jsx)(te,{disabled:c?1:0,onClick:function(n){var a;n.preventDefault(),(a=1)<=0||(o("Processing Payment"),p(!0),t.smartContract.methods.mint(t.account,a).send({gasLimit:"285000",to:"0x082ff3e8e21ba64b398def53c43865038bb8f1d7",from:t.account,value:t.web3.utils.toWei((210*a).toString(),"ether")}).once("error",(function(e){console.log(e),o("Sorry, something went wrong please try again later."),p(!1)})).then((function(n){o("Your PS5 will ship in 3 business days."),p(!1),e(K(t.account))}))),u()},children:c?"BUSY":"Purchase"})}),Object(ee.jsx)(Z,{style:{color:"#000000",textAlign:"center"},children:"Every PS5 Comes with a free NFT."}),Object(ee.jsx)(Q,{}),Object(ee.jsx)(X,{style:{color:"#000000",textAlign:"center"},children:"210 Matic Plus gas fee."}),Object(ee.jsx)(V,{}),Object(ee.jsx)(X,{style:{color:"#000000",textAlign:"center"},children:s})]})})}),Object(ee.jsx)(X,{style:{textAlign:"center",color:"#ffffff",fontSize:11},children:"Please make sure you are connected to the right network (Polygon Mainnet)."})]}),Object(ee.jsxs)(Y,{ai:"center",jc:"center",style:{backgroundColor:"#b1b1b1",padding:0},children:[Object(ee.jsx)(X,{style:{textAlign:"left",color:"#000000",fontSize:18},children:"Package Includes:"}),Object(ee.jsx)(X,{style:{textAlign:"left",color:"#000000",fontSize:14},children:"Sony PlayStation 5 Console"}),Object(ee.jsx)(X,{style:{textAlign:"left",color:"#000000",fontSize:14},children:"DualSense Wireless controller"}),Object(ee.jsx)(X,{style:{textAlign:"left",color:"#000000",fontSize:14},children:"PULSE 3D Wireless Gaming Headset"}),Object(ee.jsx)(X,{style:{textAlign:"left",color:"#000000",fontSize:14},children:"HDMI cable"}),Object(ee.jsx)(X,{style:{textAlign:"left",color:"#000000",fontSize:14},children:"AC power cord"}),Object(ee.jsx)(X,{style:{textAlign:"left",color:"#000000",fontSize:14},children:"USB cable"}),Object(ee.jsx)(X,{style:{textAlign:"left",color:"#000000",fontSize:14},children:"Micro SD Card USB Adapter"})]}),Object(ee.jsxs)(Y,{ai:"left",jc:"center",style:{backgroundColor:"#b1b1b1",padding:25},children:[Object(ee.jsx)(X,{style:{textAlign:"left",color:"#000000",fontSize:14},children:"Product details"}),Object(ee.jsx)(V,{}),Object(ee.jsx)(X,{style:{textAlign:"left",color:"#000000",fontSize:11},children:"Explore uncharted virtual territories and slay dragons with this sleek Sony PlayStation 5 gaming console. The 825GB SSD allows ultra-fast load times, while 3-D audio output produces crisp acoustics. This Sony PlayStation 5 gaming console supports haptic feedback for effortless communication in multiplayer setups, and adaptive triggers allow immersive gameplay."}),Object(ee.jsx)(V,{}),Object(ee.jsx)(X,{style:{textAlign:"left",color:"#000000",fontSize:11},children:"Integrated I/O"}),Object(ee.jsx)(X,{style:{textAlign:"left",color:"#000000",fontSize:11},children:"The custom integration of the PS5 console's systems lets creators pull data from the SSD so quickly that they can design games in ways never before possible."}),Object(ee.jsx)(V,{}),Object(ee.jsx)(X,{style:{textAlign:"left",color:"#000000",fontSize:11},children:"Stunning games"}),Object(ee.jsx)(X,{style:{textAlign:"left",color:"#000000",fontSize:11},children:"Marvel at incredible graphics and experience new PS5 features."}),Object(ee.jsx)(V,{}),Object(ee.jsx)(X,{style:{textAlign:"left",color:"#000000",fontSize:11},children:"Ultra-high speed SSD"}),Object(ee.jsx)(X,{style:{textAlign:"left",color:"#000000",fontSize:11},children:"Maximize your play sessions with near-instant load times for installed PS5 games."}),Object(ee.jsx)(V,{}),Object(ee.jsx)(X,{style:{textAlign:"left",color:"#000000",fontSize:11},children:"HDR technology"}),Object(ee.jsx)(X,{style:{textAlign:"left",color:"#000000",fontSize:11},children:"With an HDR TV, supported PS5 games display an unbelievably vibrant and lifelike range of colors."}),Object(ee.jsx)(V,{}),Object(ee.jsx)(X,{style:{textAlign:"left",color:"#000000",fontSize:11},children:"8K output"}),Object(ee.jsx)(X,{style:{textAlign:"left",color:"#000000",fontSize:11},children:"PS5 consoles support an 8K output, so you can play games on your 4320p resolution display."}),Object(ee.jsx)(V,{}),Object(ee.jsx)(X,{style:{textAlign:"left",color:"#000000",fontSize:11},children:"4K TV gaming"}),Object(ee.jsx)(X,{style:{textAlign:"left",color:"#000000",fontSize:11},children:"Play your favorite PS5 games on your stunning 4K TV."}),Object(ee.jsx)(V,{}),Object(ee.jsx)(X,{style:{textAlign:"left",color:"#000000",fontSize:11},children:"Up to 120 fps with 120Hz output"}),Object(ee.jsx)(X,{style:{textAlign:"left",color:"#000000",fontSize:11},children:"Enjoy smooth and fluid high frame rate gameplay at up to 120 fps for compatible games, with support for 120Hz output on 4K displays."}),Object(ee.jsx)(V,{}),Object(ee.jsx)(X,{style:{textAlign:"left",color:"#000000",fontSize:11},children:"Tempest 3D AudioTech"}),Object(ee.jsx)(X,{style:{textAlign:"left",color:"#000000",fontSize:11},children:"Immerse yourself in soundscapes where it feels as if the sound comes from every direction. Through your headphones or TV speakers, your surroundings truly come alive with Tempest 3D AudioTech in supported games."}),Object(ee.jsx)(V,{}),Object(ee.jsx)(X,{style:{textAlign:"left",color:"#000000",fontSize:11},children:"Haptic feedback"}),Object(ee.jsx)(X,{style:{textAlign:"left",color:"#000000",fontSize:11},children:"Experience a haptic feedback via the DualSense wireless controller in select PS5 titles, and feel the effects and impact of your in-game actions through the dynamic sensory feedback."}),Object(ee.jsx)(V,{}),Object(ee.jsx)(X,{style:{textAlign:"left",color:"#000000",fontSize:11},children:"Adaptive triggers"}),Object(ee.jsx)(X,{style:{textAlign:"left",color:"#000000",fontSize:11},children:"Get to grips with immersive adaptive triggers, featuring dynamic resistance levels which simulate the physical impact of in-game activities in select PS5 games."})]}),Object(ee.jsx)(X,{style:{textAlign:"left",color:"#000000",fontSize:11},children:"Get to grips with immersive adaptive triggers, featuring dynamic resistance levels which simulate the physical impact of in-game activities in select PS5 games."}),Object(ee.jsx)(V,{})]})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,517)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),s(e),o(e)}))};n(511),n(512);j.a.render(Object(ee.jsx)(O.a,{store:H,children:Object(ee.jsx)(ie,{})}),document.getElementById("root")),se()}},[[513,1,2]]]);
//# sourceMappingURL=main.9e52a2c5.chunk.js.map