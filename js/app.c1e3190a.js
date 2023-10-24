(function(){"use strict";var e={2361:function(e,t,n){var o=n(9963),i=n(3880),r=n(6252);const a={id:"app"},s={class:"content"};function c(e,t,n,o,i,c){const l=(0,r.up)("Header"),u=(0,r.up)("RouterView"),d=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r.Wm)(l),(0,r._)("div",s,[(0,r.Wm)(u)]),(0,r.Wm)(d)])}var l=n.p+"img/coinhub.e08452a8.png";const u={class:"navbar"},d={class:"container"},p=(0,r._)("a",{class:"navbar-brand",href:"/"},[(0,r._)("span",{class:"coin"},"Coin"),(0,r._)("span",{class:"hub"},"Hub")],-1),h=(0,r._)("img",{class:"logo",src:l,alt:"logo",width:"50",height:"50"},null,-1),m={class:"movingbar-data"},g={class:"navbar-nav"},y={key:0,class:"nav-item"},w={key:1,class:"nav-item"},v={class:"nav-item"},f={class:"nav-item"},b={class:"nav-item"};function k(e,t,n,o,i,a){const s=(0,r.up)("MovingBar"),c=(0,r.up)("LoginButton"),l=(0,r.up)("LogoutButton"),k=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("nav",u,[(0,r._)("div",d,[p,h,(0,r._)("a",m,[(0,r.Wm)(s)]),(0,r._)("ul",g,[o.user?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("li",y,[(0,r.Wm)(c)])),o.user?((0,r.wg)(),(0,r.iD)("li",w,[(0,r.Wm)(l)])):(0,r.kq)("",!0),(0,r._)("li",v,[(0,r.Wm)(k,{to:"/home",class:"nav-link"},{default:(0,r.w5)((()=>[(0,r.Uk)("Beginner")])),_:1})]),(0,r._)("li",f,[(0,r.Wm)(k,{to:"/data",class:"nav-link"},{default:(0,r.w5)((()=>[(0,r.Uk)("Data")])),_:1})]),(0,r._)("li",b,[(0,r.Wm)(k,{to:"/news",class:"nav-link"},{default:(0,r.w5)((()=>[(0,r.Uk)("News")])),_:1})])])])])}const B={class:"tradingview-widget-container"},D=(0,r._)("div",{class:"tradingview-widget-container__widget"},null,-1),_=[D];function C(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("div",B,_)}var T={mounted(){const e=document.createElement("script");e.type="text/javascript",e.src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js",e.async=!0,e.innerHTML=JSON.stringify({symbols:[{proName:"FX_IDC:EURUSD",title:"EUR to USD"},{proName:"BITSTAMP:BTCUSD",title:"Bitcoin"},{proName:"BITSTAMP:ETHUSD",title:"Ethereum"},{description:"Litecoin",proName:"BINANCE:LTCUSD"},{description:"Ripple",proName:"BINANCE:XRPUSD"},{description:"Solana",proName:"COINBASE:SOLUSD"},{description:"Doge",proName:"BINANCE:DOGEUSD"}],showSymbolLogo:!0,colorTheme:"dark",isTransparent:!0,displayMode:"regular",largeChartUrl:window.location.origin+"/data/{tvsymbol}",locale:"en"}),this.$el.appendChild(e)}},x=n(3744);const S=(0,x.Z)(T,[["render",C]]);var I=S;const A={class:"nav-item"};function N(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("li",A,[(0,r._)("a",{class:"nav-link nav-link-button",onClick:t[0]||(t[0]=(...e)=>o.login&&o.login(...e))},"Log in")])])}var $={setup(){const{loginWithPopup:e,user:t}=(0,i.D3)();return{login:async()=>{try{await e()}catch(t){"Popup closed"!==t.message&&console.error(t)}},user:t}}};const E=(0,x.Z)($,[["render",N]]);var P=E,R=n(3577);const z={class:"nav-item-container"},q={class:"nav-item"},W={key:0,class:"nav-link"},M={class:"nav-item"};function U(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("div",z,[(0,r._)("li",q,[o.user?((0,r.wg)(),(0,r.iD)("a",W,"Hello "+(0,R.zw)(o.user.name),1)):(0,r.kq)("",!0)]),(0,r._)("li",M,[(0,r._)("a",{class:"nav-link nav-link-button",onClick:t[0]||(t[0]=(...e)=>o.logout&&o.logout(...e))},"Log out")])])}var O={setup(){const{logout:e,user:t}=(0,i.D3)();return{logout:()=>{e({logoutParams:{returnTo:window.location.origin}})},user:t}}};const H=(0,x.Z)(O,[["render",U]]);var L=H,Z={name:"HeaderComponent",components:{LoginButton:P,MovingBar:I,LogoutButton:L},setup(){const{user:e}=(0,i.D3)();return{user:e}}};const G=(0,x.Z)(Z,[["render",k]]);var Y=G;const j={class:"app-footer"},F=(0,r._)("p",null,"© CoinHub 2023 ",-1),V=[F];function J(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("footer",j,V)}var K={name:"FooterComponent"};const X=(0,x.Z)(K,[["render",J]]);var Q=X,ee={components:{Header:Y,Footer:Q}};const te=(0,x.Z)(ee,[["render",c]]);var ne=te,oe=n(2201);const ie={key:0},re={class:"searchbar-container"},ae={key:1,class:"not-logged-in-message"},se=(0,r._)("h1",null,"You are not logged in",-1),ce=(0,r._)("p",null,"Please log in to view this page and access the full website.",-1),le=[se,ce];function ue(e,t,n,o,i,a){const s=(0,r.up)("SearchBar"),c=(0,r.up)("NewsVue",!0);return o.user?((0,r.wg)(),(0,r.iD)("div",ie,[(0,r._)("div",re,[(0,r.Wm)(s,{onSearch:a.handleSearch},null,8,["onSearch"])]),(0,r.Wm)(c,{news:i.news},null,8,["news"])])):((0,r.wg)(),(0,r.iD)("div",ae,le))}n(7658);const de={class:"news-container"},pe=["onClick"],he=["src"],me=["href"];function ge(e,t,n,o,i,a){const s=(0,r.up)("NextPreviousButtons");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",de,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.news,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{key:t,class:"news-item"},[(0,r._)("div",{class:"ticker-box",onClick:t=>a.goToDataPage(e.tickers[0])},(0,R.zw)(e.tickers.join(", ")),9,pe),(0,r._)("img",{src:e.image_url,alt:"News Image",class:"news-image"},null,8,he),(0,r._)("h2",null,(0,R.zw)(e.title),1),(0,r._)("p",null,(0,R.zw)(e.text),1),(0,r._)("a",{href:e.news_url,target:"_blank"},"Read more",8,me)])))),128))]),(0,r.Wm)(s,{page:this.$route.params.page},null,8,["page"])],64)}function ye(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("button",{onClick:t[0]||(t[0]=(...e)=>a.goToPreviousPage&&a.goToPreviousPage(...e))},"Previous page"),(0,r._)("button",{onClick:t[1]||(t[1]=(...e)=>a.goToNextPage&&a.goToNextPage(...e))},"Next page")],64)}var we={props:["page"],methods:{goToNextPage(){const e=this.$route.path.includes("specific")?`/news/specific/${this.$route.params.cryptoname}`:"/news",t=this.page?parseInt(this.page,10)+1:2,n=this.$route.query.q?`?search=${this.$route.query.q}`:"";this.$router.push(`${e}/${t}${n}`)},goToPreviousPage(){const e=this.$route.path.includes("specific")?`/news/specific/${this.$route.params.cryptoname}`:"/news";let t=this.page?parseInt(this.page,10)-1:1;t<=0&&(t=1);const n=this.$route.query.q?`?search=${this.$route.query.q}`:"";this.$router.push(`${e}/${t}${n}`)}}};const ve=(0,x.Z)(we,[["render",ye]]);var fe=ve,be={methods:{goToDataPage(e){this.$router.push(`/data/${e}USD`)}},components:{NextPreviousButtons:fe},props:["news"]};const ke=(0,x.Z)(be,[["render",ge],["__scopeId","data-v-3c4929b0"]]);var Be=ke,De=n(6154);const _e=De.Z.create({baseURL:"https://cryptonews-api.com"});var Ce={getNews(e,t,n){console.log("cryptoname",t,"searchQuery",n,"page",e);const o=e||1;let i=t?`/api/v1?tickers=${t}&items=9&page=${o}&token=${{NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_API_KEY}`:`/api/v1/category?section=alltickers&items=9&page=${o}&token=${{NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_API_KEY}`;return n&&(i+=`&search=${encodeURIComponent(n)}`),console.log(i),_e.get(i)}};const Te=(0,r._)("button",{type:"submit",class:"search-button"},"Search",-1);function xe(e,t,n,i,a,s){return(0,r.wg)(),(0,r.iD)("form",{onSubmit:t[2]||(t[2]=(0,o.iM)(((...e)=>s.submitSearch&&s.submitSearch(...e)),["prevent"])),class:"search-form"},[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>a.query=e),type:"text",placeholder:"Search for news...",class:"search-input"},null,512),[[o.nr,a.query]]),Te,(0,r._)("button",{type:"submit",onClick:t[1]||(t[1]=e=>a.query=""),class:"reset-button"},"Reset")],32)}var Se={data(){return{query:this.$route.query.q||""}},watch:{$route(e){e.query.q!==this.query&&(this.query=e.query.q)}},methods:{submitSearch(){this.$emit("search",{query:this.query,page:1})}}};const Ie=(0,x.Z)(Se,[["render",xe]]);var Ae=Ie,Ne={setup(){const{user:e}=(0,i.D3)();return{user:e}},data(){return{news:[]}},methods:{handleSearch({query:e,page:t}){this.searchQuery=e;const n=this.$route.path.includes("specific")?`/news/specific/${this.$route.params.cryptoname}`:"/news";this.$router.push(`${n}/${t}?q=${encodeURIComponent(e)}`),this.fetchData(e)},fetchData(e){const t=this.$route.params.cryptoname,n=this.$route.params.page,o=e||this.searchQuery;Ce.getNews(n,t,o).then((e=>{this.news=e.data.data}))}},watch:{$route(){this.fetchData()}},created(){this.fetchData()},components:{NewsVue:Be,SearchBar:Ae}};const $e=(0,x.Z)(Ne,[["render",ue]]);var Ee=$e;const Pe=e=>((0,r.dD)("data-v-575748f0"),e=e(),(0,r.Cn)(),e),Re={key:0},ze={class:"center-container"},qe={class:"redirect-button-position"},We={key:1,class:"not-logged-in-message"},Me=Pe((()=>(0,r._)("h1",null,"You are not logged in",-1))),Ue=Pe((()=>(0,r._)("p",null,"Please log in to view this page and access the full website.",-1))),Oe=[Me,Ue];function He(e,t,n,o,i,a){const s=(0,r.up)("trading-view"),c=(0,r.up)("RedirectButton"),l=(0,r.up)("Analysis");return o.user?((0,r.wg)(),(0,r.iD)("div",Re,[((0,r.wg)(),(0,r.j4)(s,{key:this.$route.fullPath,cryptoname:this.$route.params.cryptoname},null,8,["cryptoname"])),(0,r._)("div",ze,[(0,r._)("div",qe,[(0,r.Wm)(c,{cryptoname:this.$route.params.cryptoname},null,8,["cryptoname"])]),(0,r.Wm)(l,{symbol:`BINANCE:${e.$route.params.cryptoname}`},null,8,["symbol"])])])):((0,r.wg)(),(0,r.iD)("div",We,Oe))}const Le=e=>((0,r.dD)("data-v-ad628ba2"),e=e(),(0,r.Cn)(),e),Ze={class:"tradingview-widget-container",style:{height:"100%",width:"100%"}},Ge=Le((()=>(0,r._)("div",{id:"tradingview_394a0",style:{height:"calc(100% - 32px)",width:"100%"}},null,-1))),Ye=Le((()=>(0,r._)("div",{class:"tradingview-widget-copyright"},null,-1))),je=[Ge,Ye];function Fe(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("div",Ze,je)}var Ve={props:["cryptoname"],mounted(){const e=document.createElement("script");e.src="https://s3.tradingview.com/tv.js",e.async=!0,e.onload=()=>{new window.TradingView.widget({width:980,height:610,symbol:`BINANCE:${this.cryptoname}`,interval:"D",timezone:"Etc/UTC",theme:"dark",style:"1",locale:"en",enable_publishing:!1,allow_symbol_change:!0,details:!0,hotlist:!0,calendar:!0,container_id:"tradingview_394a0"})},document.body.appendChild(e)}};const Je=(0,x.Z)(Ve,[["render",Fe],["__scopeId","data-v-ad628ba2"]]);var Ke=Je;const Xe={class:"tradingview-widget-container",ref:"container"};function Qe(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("div",Xe,null,512)}var et={props:["symbol"],mounted(){const e=document.createElement("script");e.type="text/javascript",e.src="https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js",e.async=!0,e.innerHTML=JSON.stringify({interval:"1m",width:425,isTransparent:!1,height:450,symbol:this.symbol,showIntervalTabs:!0,locale:"en",colorTheme:"dark"}),this.$refs.container.appendChild(e)}};const tt=(0,x.Z)(et,[["render",Qe]]);var nt=tt;function ot(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("button",{onClick:t[0]||(t[0]=(...e)=>a.goToNewsPage&&a.goToNewsPage(...e))},"News regarding this ticker"),(0,r._)("button",{onClick:t[1]||(t[1]=(...e)=>a.swapCurrency&&a.swapCurrency(...e))},"Swap currency")],64)}var it={props:["cryptoname"],methods:{goToNewsPage(){this.cryptoname.includes("USD")?this.$router.push(`/news/specific/${this.cryptoname.replace("USD","")}`):this.$router.push(`/news/specific/${this.cryptoname.replace("EUR","")}`)},swapCurrency(){let e="";e=this.$route.path.includes("USD")?`/data/${this.cryptoname.replace("USD","")}EUR`:`/data/${this.cryptoname.replace("EUR","")}USD`,this.$router.push({path:e})}}};const rt=(0,x.Z)(it,[["render",ot]]);var at=rt,st={setup(){const{user:e}=(0,i.D3)();return{user:e}},components:{TradingView:Ke,Analysis:nt,RedirectButton:at}};const ct=(0,x.Z)(st,[["render",He],["__scopeId","data-v-575748f0"]]);var lt=ct;const ut=e=>((0,r.dD)("data-v-774e7bc4"),e=e(),(0,r.Cn)(),e),dt={key:0},pt={key:1,class:"not-logged-in-message"},ht=ut((()=>(0,r._)("h1",null,"You are not logged in",-1))),mt=ut((()=>(0,r._)("p",null,"Please log in to view this page and access the full website.",-1))),gt=[ht,mt];function yt(e,t,n,o,i,a){const s=(0,r.up)("GeneralData");return o.user?((0,r.wg)(),(0,r.iD)("div",dt,[(0,r.Wm)(s)])):((0,r.wg)(),(0,r.iD)("div",pt,gt))}const wt=e=>((0,r.dD)("data-v-500f300a"),e=e(),(0,r.Cn)(),e),vt={class:"tradingview-widget-container"},ft=wt((()=>(0,r._)("div",{class:"tradingview-widget-container__widget"},null,-1))),bt=wt((()=>(0,r._)("div",{class:"tradingview-widget-copyright"},null,-1))),kt=[ft,bt];function Bt(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("div",vt,kt)}var Dt={methods:{setupClickListeners(){const e=document.querySelectorAll(".tv-data-table__row");e.forEach((e=>{e.addEventListener("click",this.handleRowClick)}))},handleRowClick(e){console.log("clicked");const t=e.currentTarget.getAttribute("data-symbol").split(":")[1];this.$router.push(`/data/${t}`)}},mounted(){const e=document.createElement("script");e.type="text/javascript",e.src="https://s3.tradingview.com/external-embedding/embed-widget-screener.js",e.async=!0,e.innerHTML=JSON.stringify({width:1e3,height:490,defaultColumn:"overview",screener_type:"crypto_mkt",displayCurrency:"USD",colorTheme:"dark",largeChartUrl:window.location.origin+"/data/{tvsymbol}",locale:"en"}),this.$el.appendChild(e)}};const _t=(0,x.Z)(Dt,[["render",Bt],["__scopeId","data-v-500f300a"]]);var Ct=_t,Tt={setup(){const{user:e}=(0,i.D3)();return{user:e}},components:{GeneralData:Ct}};const xt=(0,x.Z)(Tt,[["render",yt],["__scopeId","data-v-774e7bc4"]]);var St=xt;const It={class:"crypto-basics"},At={class:"section"};function Nt(e,t,n,o,i,a){const s=(0,r.up)("GuideComponent"),c=(0,r.up)("QuizzComponent");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",It,[(0,r.Wm)(s,{sections:i.aboutSections},null,8,["sections"])]),(0,r._)("div",At,[(0,r.Wm)(c,{class:"crypto-basics"})])],64)}const $t={class:"guide-content"},Et={class:"header"},Pt={class:"h1-guide"},Rt={class:"p-header"},zt={class:"h2-guide"},qt=["innerHTML"];function Wt(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("div",$t,[(0,r._)("div",Et,[(0,r._)("h1",Pt,(0,R.zw)(n.headerTitle),1),(0,r._)("p",Rt,(0,R.zw)(n.headerDescription),1)]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.sections,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{key:t,class:"section"},[(0,r._)("h2",zt,(0,R.zw)(e.title),1),(0,r._)("p",{class:"p-header justified",innerHTML:e.content},null,8,qt)])))),128))])}var Mt={name:"GuideComponent",props:{headerTitle:{type:String,required:!0},headerDescription:{type:String,required:!0},sections:{type:Array,required:!0}}};const Ut=(0,x.Z)(Mt,[["render",Wt]]);var Ot=Ut;const Ht={class:"quiz-component"},Lt=(0,r._)("h1",{class:"h1-guide"},"Are you ready for the quizz ?",-1),Zt=["onClick"];function Gt(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("div",Ht,[Lt,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.questions,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{key:t,class:"question"},[(0,r._)("p",null,(0,R.zw)(e.text),1),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.options,((e,n)=>((0,r.wg)(),(0,r.iD)("div",{key:n,class:(0,R.C_)(["answer",{selected:a.isSelected(t,e),correct:a.isCorrect(t,e),wrong:a.isWrong(t,e),partial:a.isNotComplete(t,e)}]),onClick:n=>a.toggleSelection(t,e)},(0,R.zw)(e),11,Zt)))),128))])))),128)),(0,r._)("button",{onClick:t[0]||(t[0]=(...e)=>a.submit&&a.submit(...e)),class:"quizz-button"},"Submit")])}var Yt={data(){return{questions:[{text:"What is cryptocurrency?",options:["Digital Money","Physical Money","A type of bank","A country"],answer:["Digital Money"],userAnswer:""},{text:"Which platforms simplify buying and selling cryptocurrencies?",options:["Binance","Coinbase","eBay","BeReal."],answer:["Binance","Coinbase"],userAnswer:""},{text:"What technology is commonly used to secure cryptocurrencies?",options:["Blockchain","HTTPS","SSL","ASSR2"],answer:["Blockchain"],userAnswer:""},{text:"What is the best way to invest ?",options:["All-in","Diversify your wallet","Shitcoins only","Follow the news and invest in the most promising ones"],answer:["Diversify your wallet","Follow the news and invest in the most promising ones"],userAnswer:""}],submitted:!1}},methods:{toggleSelection(e,t){const n=this.questions[e];n.userAnswer=n.userAnswer.includes(t)?n.userAnswer.replace(t,"").trim():n.userAnswer+", "+t},submit(){this.submitted=!0},isSelected(e,t){return this.questions[e].userAnswer.includes(t)},isCorrect(e,t){return this.submitted&&this.questions[e].answer.includes(t)&&this.isSelected(e,t)},isWrong(e,t){return this.submitted&&!this.questions[e].answer.includes(t)&&this.isSelected(e,t)},isNotComplete(e,t){const n=this.questions[e],o=n.answer,i=n.userAnswer.split(",").map((e=>e.trim())),r=o.every((e=>i.includes(e)));return this.submitted&&!r&&i.includes(t)}}};const jt=(0,x.Z)(Yt,[["render",Gt]]);var Ft=jt,Vt={name:"BeginnerGuide",components:{GuideComponent:Ot,QuizzComponent:Ft},data(){return{aboutSections:[{title:"What is Cryptocurrency?",content:"Cryptocurrency is essentially a form of digital money, decentralized and designed for secure online transactions. Envisioned as an alternative to traditional banking, cryptocurrencies present a novel way of handling money. You can imagine this as Money 2.0. They embody the potential to revolutionize financial exchanges by being fast, easy, cost-effective, safe, and universally accessible. Moreover, the underlying technology, blockchain, provides a transparent and immutable ledger, ensuring trust and integrity in transactions and data management."},{title:"Why Invest in Cryptocurrency?",content:"Platforms like <a href='https://www.binance.com/'>Binance</a> or <a href='https://coinbase.com/'>Coinbase</a> have simplified the process of buying and selling cryptocurrencies. Cryptocurrencies allow secure transactions, and you can start with as little or as much investment as you wish. Moreover, holding certain digital currencies can earn you rewards, making cryptocurrency an attractive investment opportunity."},{title:"",content:"<img src='https://images.ctfassets.net/q5ulk4bp65r7/7vxp5PznsPJ8ONdD4v5Nne/2002088b0927404055d0760ba29c41b5/2a_bitcoin-vs-fiat.gif?w=1180' alt='Bitcoin vs Fiat' width='100%' height='100%'>"},{title:"Benefits of Blockchain Technology",content:'\n        <ul>\n            Blockchains are global in nature, facilitating swift and economical cross-border transactions.\n            <li class="li-text">They enhance privacy as cryptocurrency transactions do not necessitate the inclusion of personal details, significantly reducing the risk of identity theft and hacking.</li>\n            <li class="li-text">Exemplifying transparency and fairness; every transaction is publicly recorded on the blockchain, available for anyone to examine. This open ledger system prevents any form of transaction manipulation, unauthorized alteration of monetary supply, or unforeseen changes to the set rules.</li>\n            <li class="li-text">The core software of cryptocurrencies is open-source, welcoming anyone to review and verify the code, further promoting a sense of community trust and collaborative improvement.</li>\n        </ul>\n    '},{title:"",content:"<img src='https://images.ctfassets.net/q5ulk4bp65r7/3FPOf4ixrzn4mcfEiNjPXN/d03c347f7ae58fcec43667f91fccdcf4/2a_crypto-vault.jpg?w=1180&fm=png' alt'Blockchain'  width='100%' height='100%'>"},{title:"What are the different cryptocurrencies?",content:"With over 6,000 cryptocurrencies in the world, we can't list all of them here. The most known ones are the Bitcoin and the Ethereum. But, with that many currencies, it can be hard to decide on which to invest. That's why we created this website, to help you understand the different cryptocurrencies and to help you choose the right one for you. You can follow the news of the different cryptocurrencies, see their price, and even see their price evolution in real time."},{title:"How to Buy Bitcoin and Other Cryptocurrencies",content:"Online exchanges like <a href='https://www.binance.com/'>Binance</a> or <a href='https://coinbase.com/'>Coinbase</a> offer a straightforward way to purchase cryptocurrencies. They provide a range of cryptocurrencies to choose from, and you can buy fractions of a coin to start small. The platform also provides insights to help you make informed choices based on your goals."},{title:"How to Store Cryptocurrency?",content:"Storing cryptocurrency securely is crucial. While there are various online and offline storage options, using a trusted, secure exchange like <a href='https://www.binance.com/'>Binance</a> or <a href='https://coinbase.com/'>Coinbase</a> simplifies the process. It allows you to manage, store, and convert your cryptocurrency conveniently on various devices."},{title:"What Can You Do With Cryptocurrency?",content:"The applications of cryptocurrency are vast and growing. From shopping and donating to exploring new technological realms like decentralized finance (DeFi), the cryptocurrency space is bustling with opportunities for both everyday and innovative uses."},{title:"Where can I find more information?",content:"Find more information on the official <a href='https://www.coinbase.com/learn/crypto-basics/what-is-cryptocurrency'>Coinbase website</a> <br>You can also have some additional documents in our <a href='/ressources'>ressource page.</a>"}]}}};const Jt=(0,x.Z)(Vt,[["render",Nt]]);var Kt=Jt;function Xt(e,t,n,o,i,a){const s=(0,r.up)("GuideComponent");return(0,r.wg)(),(0,r.j4)(s,{class:"crypto-basics",headerTitle:"About Us",headerDescription:"Learn more about our platform and team.",sections:i.aboutSections},null,8,["sections"])}var Qt={components:{GuideComponent:Ot},data(){return{aboutSections:[{title:"Our Mission",content:"Our mission is to provide clear and comprehensive information regarding the vast world of cryptocurrencies, that is always evolving. We aim to become a reliable portal where both novices and experts can find valuable insights, up-to-date news from all websites, and resources to improve their understanding and involvement in the cryptocurrency realm. Through fostering an informed community, we aim to contribute to a more transparent and accessible cryptocurrency ecosystem."},{title:"Our Team",content:"Our team consists of two IT students with backgrounds in finance and technology. With a shared passion for the potential of blockchain technology and cryptocurrencies, we're dedicated to delivering high-quality content, analysis, and tools that empower our audience to navigate the crypto world with confidence."},{title:"Our Values",content:"At the core of our operations are the values of integrity, transparency, and education. Our commitment to these values reflects in the trust and engagement we share with our readers."},{title:"Community Engagement",content:"We highly encourage feedback from our community. You can send your questions, share your experiences to the following email : <a href='mailto:coinhub.vue@gmail.com'> coinhub.vue@gmail.com </a>,to help us improve and expand our product. We encourage active participation, feedback, and collaboration to help us grow and better serve our community."},{title:"Educational Resources",content:"We are committed to providing educational resources that cater to individuals at every level of cryptocurrency understanding. With our Beginner's Guide, our goal is to provide a well-rounded educational platform that serves as a stepping stone for anyone looking to deepen their cryptocurrency knowledge and skills."},{title:"Disclaimer",content:"<h3 class='disclaimer-h3'>Cryptocurrency investments are subject to market risks and potential financial losses. We strongly recommend individuals to conduct their own research and consult with qualified financial advisors before engaging in any investment activities. CoinHub does not endorse or recommend any particular cryptocurrency, and we disclaim any liability for any financial losses incurred as a result of using the information provided on our website. </h3>"}]}}};const en=(0,x.Z)(Qt,[["render",Xt]]);var tn=en;const nn={class:"resources-page"};function on(e,t,n,i,a,s){const c=(0,r.up)("RessourcesComponent");return(0,r.wg)(),(0,r.iD)("div",nn,[(0,r._)("button",{onClick:t[0]||(t[0]=(...e)=>s.prevResource&&s.prevResource(...e)),class:"nextprevious-button"},"Previous"),(0,r.Wm)(o.uT,{name:"slide-fade",mode:"out-in"},{default:(0,r.w5)((()=>[((0,r.wg)(),(0,r.j4)(c,{key:e.currentResourceIndex,ressourceImage:e.resources[e.currentResourceIndex].image,ressourceTitle:e.resources[e.currentResourceIndex].title,ressourceText:e.resources[e.currentResourceIndex].text,ressourceLink:e.resources[e.currentResourceIndex].link},null,8,["ressourceImage","ressourceTitle","ressourceText","ressourceLink"]))])),_:1}),(0,r._)("button",{onClick:t[1]||(t[1]=(...e)=>s.nextResource&&s.nextResource(...e)),class:"nextprevious-button"},"Next")])}const rn={class:"resource-card"},an=["src"],sn={class:"resource-info"},cn={class:"resource-title"},ln={class:"resource-text"},un=["href"];function dn(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("div",rn,[(0,r._)("img",{src:n.ressourceImage,alt:"Resource Image",class:"resource-image"},null,8,an),(0,r._)("div",sn,[(0,r._)("h3",cn,(0,R.zw)(n.ressourceTitle),1),(0,r._)("p",ln,(0,R.zw)(n.ressourceText),1),(0,r._)("a",{href:n.ressourceLink,target:"_blank",class:"resource-link"},"Learn More",8,un)])])}var pn={name:"RessourcesComponent",props:{ressourceImage:{type:String,required:!0},ressourceTitle:{type:String,required:!0},ressourceText:{type:String,required:!0},ressourceLink:{type:String,required:!0}}};const hn=(0,x.Z)(pn,[["render",dn],["__scopeId","data-v-4a66d5ad"]]);var mn=hn,gn=JSON.parse('{"currentResourceIndex":0,"resources":[{"image":"https://hackr.io/blog/media/blockchain-basics-a-non-technical-introduction-in-25-steps-min.png","title":"Blockchain Basics: A Non-Technical Introduction in 25 Steps","text":"By Daniel Drescher","link":"https://www.amazon.com/Blockchain-Basics-Non-Technical-Introduction-Steps/dp/B087YZTMPD/"},{"image":"https://hackr.io/blog/media/the-internet-of-money-a-collection-of-talks-min.png","title":"The Internet of Money: A Collection of Talks","text":"By Andreas M. Antonopoulos ","link":"https://www.amazon.com/Internet-Money-Andreas-M-Antonopoulos/dp/1537000454"},{"image":"https://hackr.io/blog/media/the-little-bitcoin-book-why-bitcoin-matters-for-your-freedom-finances-and-future-min.png","title":"The Little Bitcoin Book: Why Bitcoin Matters for Your Freedom, Finances, and Future","text":"By Bitcoin Collective","link":"https://www.amazon.com/Little-Bitcoin-Book-Matters-Finances-ebook/dp/B07W957N7T"},{"image":"https://hackr.io/blog/media/an-altcoin-trader-s-handbook-min.png","title":"An Altcoin Trader’s Handbook","text":"By Nik Patel","link":"https://www.amazon.com/Altcoin-Traders-Handbook-Nik-Patel-ebook/dp/B07DK8J5XJ"},{"image":"https://hackr.io/blog/media/theblo-1.png","title":"The Blockchain Developer: A Practical Guide for Designing, Implementing, Publishing, Testing, and Securing Distributed Blockchain-based Projects","text":"By Elad Elrom","link":"https://www.amazon.com/Blockchain-Developer-Implementing-Distributed-Blockchain-based-ebook/dp/B07VMD99YH/"},{"image":"https://hackr.io/blog/media/the-everything-guide-to-investing-in-cryptocurrency-min.png","title":"The Everything Guide to Investing in Cryptocurrency","text":"By Ryan Derousseau","link":"https://www.amazon.com/Everything-Guide-Investing-Cryptocurrency-Everything%C2%AE-ebook/dp/B07GNTLHZN"},{"image":"https://hackr.io/blog/media/inventing-bitcoin-the-technology-behind-the-first-truly-scarce-decentralized-money-explained-min.png","title":"Inventing Bitcoin: The Technology Behind the First Truly Scarce Decentralized Money Explained","text":"By Yan Pritzker","link":"https://www.amazon.com/Inventing-Bitcoin-Technology-Decentralized-Explained-ebook/dp/B07MWXRWNB/"},{"image":"https://hackr.io/blog/media/blockchain-bubble-or-revolution-the-future-of-bitcoin-blockchains-and-cryptocurrencies-min.png","title":"Blockchain Bubble or Revolution: The Future of Bitcoin, Blockchains, and Cryptocurrencies","text":"By Neel Mehta ","link":"https://www.amazon.com/Blockchain-Bubble-Revolution-Present-Cryptocurrencies-ebook/dp/B07T13GP1Q/"},{"image":"https://hackr.io/blog/media/bitcoin-billionaires-a-true-story-of-genius-betrayal-and-redemption-min.png","title":"Bitcoin Billionaires: A True Story of Genius, Betrayal, and Redemption","text":"By Ben Mezrich","link":"https://www.amazon.com/Bitcoin-Billionaires-Genius-Betrayal-Redemption-ebook/dp/B07GN8HWZW/"},{"image":"https://hackr.io/blog/media/digital-gold-bitcoin-and-the-inside-story-of-the-misfits-and-millionaires-trying-to-reinvent-money.png","title":"Digital Gold: Bitcoin and the Inside Story of the Misfits and Millionaires Trying to Reinvent Money","text":"By Nathaniel Popper","link":"https://www.amazon.com/Digital-Gold-Bitcoin-Millionaires-Reinvent/dp/006236250X"},{"image":"https://hackr.io/blog/media/crypto-asset-investing-in-the-age-of-autonomy-min.png","title":"Crypto Asset Investing in the Age of Autonomy","text":"By Jake Ryan","link":"https://www.amazon.com/Crypto-Asset-Investing-Age-Autonomy/dp/B08SSR12NP"},{"image":"https://hackr.io/blog/media/mastering-bitcoin-unlocking-digital-cryptocurrencies-min.png","title":"Mastering Bitcoin: Unlocking Digital Cryptocurrencies","text":"By Andreas Antonopoulos","link":"https://www.amazon.com/Mastering-Bitcoin-Unlocking-Digital-Cryptocurrencies/dp/1449374042"},{"image":"https://hackr.io/blog/media/out-of-the-ether-the-amazing-story-of-ethereum-and-the-55-million-heist-that-almost-destroyed-it-all.png","title":"Out of the Ether: The Amazing Story of Ethereum and the $55 Million Heist that Almost Destroyed It All","text":"By Matthew Leising","link":"https://www.amazon.com/Out-Ether-Amazing-Ethereum-Destroyed/dp/1119602939"},{"image":"https://hackr.io/blog/media/the-infinite-machine-min.png","title":"The Infinite Machine","text":"By Camila Russo","link":"https://www.amazon.com/Infinite-Machine-Crypto-Hackers-Building-Internet/dp/B07XJ7WKXL"},{"image":"https://hackr.io/blog/media/cryptoassets-the-innovative-investor-s-guide-to-bitcoin-and-beyond-min.png","title":"Cryptoassets: The Innovative Investor’s Guide to Bitcoin and Beyond","text":"By Chris Burniske","link":"https://www.amazon.com/Cryptoassets-Innovative-Investors-Bitcoin-Beyond/dp/1260026671"},{"image":"https://hackr.io/blog/media/crypto-revolution-your-guide-to-the-future-of-money-min.png","title":"Crypto Revolution: Your Guide to the Future of Money","text":"By Bryce Paul & Aaron Malone","link":"https://www.amazon.com/Crypto-Revolution-GUIDE-FUTURE-MONEY/dp/0983106339"},{"image":"https://hackr.io/blog/media/the-age-of-cryptocurrency-how-bitcoin-and-digital-money-are-challenging-the-global-economic-order.png","title":"The Age of Cryptocurrency: How Bitcoin and Digital Money Are Challenging the Global Economic Order","text":"By Paul Vigna & Michael J. Casey","link":"https://www.amazon.com/Age-Cryptocurrency-Bitcoin-Challenging-Economic-ebook/dp/B00L73JQ18"},{"image":"https://hackr.io/blog/media/cryptocurrency-investing-for-dummies-min.png","title":"Cryptocurrency Investing for Dummies","text":"By Kiana Danial","link":"https://www.amazon.com/Cryptocurrency-Investing-Dummies-Kiana-Danial-ebook/dp/B07PBCJ8X7"},{"image":"https://hackr.io/blog/media/cryptocurrency-mining-investing-and-trading-in-blockchain-min.png","title":"Cryptocurrency: Mining, Investing and Trading in Blockchain","text":"By Abraham K. White","link":"https://www.amazon.com/Cryptocurrency-Investing-Blockchain-including-Auroracoin/dp/1979003262"}]}'),yn={name:"RessourceVue",components:{RessourcesComponent:mn},data(){return{...gn}},methods:{nextResource(){this.currentResourceIndex=(this.currentResourceIndex+1)%this.resources.length},prevResource(){this.currentResourceIndex=(this.currentResourceIndex-1+this.resources.length)%this.resources.length}}};const wn=(0,x.Z)(yn,[["render",on],["__scopeId","data-v-b214044e"]]);var vn=wn;function fn(e,t,n,o,i,a){const s=(0,r.up)("Error404Component");return(0,r.wg)(),(0,r.j4)(s)}const bn={class:"content"},kn=(0,r._)("h1",null,"404 Error: Page Not Found",-1),Bn=(0,r._)("p",null,"Sorry, there is nothing at this route.",-1);function Dn(e,t,n,o,i,a){const s=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",bn,[kn,Bn,(0,r.Wm)(s,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Go to Homepage")])),_:1})])}var _n={name:"Error404Component"};const Cn=(0,x.Z)(_n,[["render",Dn]]);var Tn=Cn,xn={components:{Error404Component:Tn}};const Sn=(0,x.Z)(xn,[["render",fn]]);var In=Sn;const An=[{path:"/data/:cryptoname",name:"Data",component:lt,props:!0},{path:"/news/:page?",name:"News",component:Ee,props:!0},{path:"/news/specific/:cryptoname/:page?",name:"CryptonameNews",component:Ee,props:e=>({cryptoname:e.params.cryptoname,page:1})},{path:"/data",name:"data",component:St},{path:"/home",name:"Home",component:Kt},{path:"/",name:"AboutUs",component:tn},{path:"/ressources",name:"Ressources",component:vn},{path:"/:pathMatch(.*)*",name:"Error",component:In}],Nn=(0,oe.p7)({history:(0,oe.PO)(),routes:An});var $n=Nn;const En=(0,o.ri)(ne);En.use($n),En.use((0,i.B8)({domain:"coinhub-vue.eu.auth0.com",clientId:"QcMDqD7mTn6ple3VN7FoWYEylZV3PQXZ",authorizationParams:{redirect_uri:window.location.origin}})),En.mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,r){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],r=e[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,r<a&&(a=r));if(s){e.splice(u--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,i,r]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,r,a=o[0],s=o[1],c=o[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(c)var u=c(n)}for(t&&t(o);l<a.length;l++)r=a[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},o=self["webpackChunkcoinhub"]=self["webpackChunkcoinhub"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2361)}));o=n.O(o)})();
//# sourceMappingURL=app.c1e3190a.js.map