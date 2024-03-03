"use strict";(self.webpackChunkcookbooknitro=self.webpackChunkcookbooknitro||[]).push([[5924],{4248:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var n=r(4848),o=r(8453);const i={},s="Module 6: Understanding Forwarders and How They Work?",a={id:"Module6",title:"Module 6: Understanding Forwarders and How They Work?",description:"Welcome to Module 6 Of Router Nitro CookBook. In this module, we'll be understanding what are forwarders, how do they work, and how Router Protocol has been implementing it. Let's Begin...",source:"@site/docs/Module6.md",sourceDirName:".",slug:"/Module6",permalink:"/nitrocourse/docs/Module6",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Module6.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Module 5: What are Some Prerequisites for Learning Router Nitro?",permalink:"/nitrocourse/docs/Module5"},next:{title:"Module 7: Explaining the CodeBase of Router Nitro - Part 1",permalink:"/nitrocourse/docs/Module7"}},d={},h=[{value:"What are Forwarders?",id:"what-are-forwarders",level:3},{value:"How does Router Nitro implement the Forwarders?",id:"how-does-router-nitro-implement-the-forwarders",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"module-6-understanding-forwarders-and-how-they-work",children:(0,n.jsx)(t.code,{children:"Module 6: Understanding Forwarders and How They Work?"})}),"\n",(0,n.jsx)(t.p,{children:"Welcome to Module 6 Of Router Nitro CookBook. In this module, we'll be understanding what are forwarders, how do they work, and how Router Protocol has been implementing it. Let's Begin..."}),"\n",(0,n.jsx)(t.h3,{id:"what-are-forwarders",children:"What are Forwarders?"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/router-resources/Router-Nitro-CookBook/assets/124175970/b8e783e5-d5dd-41b7-a1c9-94157fc3b04d",alt:"forwarders"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Picture a scenario where you need to transfer funds from Bank A to Bank B. In this process, Router Nitro acts as an intermediary, collecting the money from Bank A, and then its partners, referred to as forwarders, personally convey the funds to Bank B. Following the transfer, Router Nitro undertakes a crucial verification step to ensure that the amount you originally deposited in Bank A matches the amount that arrives at Bank B. If the verification is successful, Router Nitro\u2019s partners retrieve the funds they initially transferred to your Bank B, effectively completing the transaction."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Router Nitro has three flows with which it enables this swapping -"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Forwarder Flow:"})," It uses a trustless optimistic approach to handle cross-chain asset transfers and has an entity called the forwarder that provides the users with their desired assets on the destination chain."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Burn and Mint flow:"})," For certain tokens, the bridge has mint/burn rights, which allows the bridge to burn the tokens on one chain and mint them on another."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"USDC circle flow:"})," This flow uses Circle\u2019s CCTP infra to provide cross-chain transfers of USDC. The flow works for USDC transfers on chains where CCTP is live."]}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Now, we will be covering the Forwarder flow, and before we do that, here are some terms and their explanations for you to understand the flow in a better way"}),"\n"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Orchestrators:"})," It ensures that all the validators and relayers are playing in sync and that the information being passed between them is accurate and legitimate."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Middleware contract:"})," It is a contract which is deployed on the Router chain, which enables custom business logic directly in the bridging layer."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"IBC:"})," Inter-Blockchain Communication Protocol is an open-source protocol to handle authentication and transport of data between blockchains (within the Cosmos ecosystem."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Gateway contracts:"})," Gateway contracts serve as the interface for the application contracts on any chain to interact with contracts on other chains."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"how-does-router-nitro-implement-the-forwarders",children:"How does Router Nitro implement the Forwarders?"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"In the forwarder flow, first of all, a user invokes the Nitro contract to transfer funds from Chain A (source) to Chain B (destination). The source chain Nitro contract will validate the request, deduct funds from the user\u2019s account, increment event nonce and emit a FundsDeposited event. Whenever a FundsDeposited event is emitted from a Nitro contract, Orchestrators listen to this event and submit the event to the Router chain along with their attestation. Parallely, the forwarders also listen to the FundsDeposited event."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"After 2/3+1 validation, the Router chain will invoke the middleware Nitro contract with the event info, and after this, the middleware contract will persist with the request! While the event was being processed on the Router chain (attestation, validator, submission on the middleware contract), in parallel, the forwarder also listens to the FundsDeposited event and invokes the Nitro contract on the destination chain."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Upon receiving the transaction, the Nitro contract on the destination chain will (a) transfer the defined amount from the forwarder address to the receiver address, (b) create a hash of the fields included in the request and persist it in the status map (to skip the replays), and \xa9 emit a FundsPaid event confirming the execution.Orchestrators on the Router chain listen to the FundsPaid event from the destination chain Nitro contract and submit it to the Router chain with their attestation. Upon receiving the FundsPaid event, the middleware contract verifies that the message generated from the request data is the same as the message hash from the executed event, marks the request as Completed and persists the forwarder address and amount."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"So, just like that, Router Nitro bridges your assets from Chain A to Chain B efficiently, securely, and with minimal cost using the reverse verification flow!"}),"\n",(0,n.jsx)(t.h1,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(t.p,{children:"In conclusion, Module 6 of Router Nitro CookBook provided an in-depth understanding of forwarders and how they function within the Router Protocol ecosystem. By leveraging forwarders, Router Nitro facilitates cross-chain asset transfers efficiently and securely. The module outlined three key flows utilized by Router Nitro, namely the Forwarder Flow, Burn and Mint Flow, and the USDC Circle Flow, each catering to specific token transfer scenarios."}),"\n",(0,n.jsx)(t.p,{children:"Moreover, the module introduced essential terms such as Orchestrators, Middleware contracts, IBC, and Gateway contracts to better comprehend the intricacies of the Forwarder Flow. It elucidated the step-by-step process involved in transferring funds from one chain to another, highlighting the crucial roles played by Orchestrators and forwarders in ensuring transaction validity and execution."}),"\n",(0,n.jsx)(t.p,{children:"Through a detailed examination of the forwarder flow implementation, Module 6 illustrated how Router Nitro bridges assets seamlessly across different chains while maintaining security and minimizing costs. By employing a reverse verification flow, Router Nitro completes asset transfers with accuracy and reliability, thus offering users a robust solution for interoperability in the blockchain space."}),"\n",(0,n.jsx)(t.h1,{id:"share-your-learnings",children:"Share Your Learnings!"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/router-resources/Router-Nitro-CookBook/assets/124175970/23258532-0dfa-407e-b695-2ed2eb39d1bc",alt:"img"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.em,{children:["Share your learnings on Twitter. Click ",(0,n.jsx)(t.a,{href:"https://clicktotweet.com/D0eUV",children:"here"})]})}),"\n",(0,n.jsx)(t.h1,{id:"-next--module-7-explaining-the-codebase-of-router-nitro---part-1-",children:(0,n.jsx)(t.a,{href:"/nitrocourse/docs/Module7",children:" Next : Module 7: Explaining the CodeBase of Router Nitro - Part 1 "})})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var n=r(6540);const o={},i=n.createContext(o);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);