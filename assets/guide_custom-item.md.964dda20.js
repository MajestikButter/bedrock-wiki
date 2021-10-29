import{r as e,o as n,c as t,b as s,w as a,d as l}from"./404.md.2950f8cd.js";const o='{"title":"Create a custom Item","description":"","frontmatter":{"title":"Create a custom Item","nav_order":5,"prefix":"5."},"headers":[{"level":2,"title":"Behavior code","slug":"behavior-code"},{"level":2,"title":"Resource code","slug":"resource-code"},{"level":2,"title":"Item texture and its shortname","slug":"item-texture-and-its-shortname"},{"level":3,"title":"Texture","slug":"texture"},{"level":3,"title":"Shortnames","slug":"shortnames"},{"level":2,"title":"Final steps","slug":"final-steps"},{"level":2,"title":"Done!","slug":"done"},{"level":2,"title":"What you have learned","slug":"what-you-have-learned"},{"level":2,"title":"Your progress so far:","slug":"your-progress-so-far"}],"relativePath":"guide/custom-item.md","lastUpdated":1635517334164}',r={},i=s("p",null,"This section will walk you through the creation of a simple custom item, the ectoplasm, for our custom entity, the Ghost, to drop.",-1),u=s("br",null,null,-1),c=s("img",{src:"/assets/images/guide/custom_item/ectoplasm_view.png",width:"150"},null,-1),p=s("br",null,null,-1),d=s("br",null,null,-1),m=s("p",null,"Like blocks and entities, items consist of a BP file (that defines how the item would function/behave) and an RP file (that describes how the item would look)",-1),h=s("h2",{id:"behavior-code"},[s("a",{class:"header-anchor",href:"#behavior-code","aria-hidden":"true"},"#"),l(" Behavior code")],-1),b=s("p",null,[l("Let's start by defining the item's behaviors in the BP. Create a folder called "),s("code",null,"items"),l(" in your BP directory, then create a file called "),s("code",null,"ectoplasm.json"),l(" inside.")],-1),k=l("BP/items/ectoplasm.json"),f=s("div",{class:"language-json line-numbers-mode"},[s("pre",null,[s("code",null,[s("span",{class:"token punctuation"},"{"),l("\n\t"),s("span",{class:"token property"},'"format_version"'),s("span",{class:"token operator"},":"),l(),s("span",{class:"token string"},'"1.10"'),s("span",{class:"token punctuation"},","),l("\n\t"),s("span",{class:"token property"},'"minecraft:item"'),s("span",{class:"token operator"},":"),l(),s("span",{class:"token punctuation"},"{"),l("\n\t\t"),s("span",{class:"token property"},'"description"'),s("span",{class:"token operator"},":"),l(),s("span",{class:"token punctuation"},"{"),l("\n\t\t\t"),s("span",{class:"token property"},'"identifier"'),s("span",{class:"token operator"},":"),l(),s("span",{class:"token string"},'"wiki:ectoplasm"'),l("\n\t\t"),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),l("\n\t\t"),s("span",{class:"token property"},'"components"'),s("span",{class:"token operator"},":"),l(),s("span",{class:"token punctuation"},"{"),l("\n\t\t\t"),s("span",{class:"token property"},'"minecraft:max_stack_size"'),s("span",{class:"token operator"},":"),l(),s("span",{class:"token number"},"16"),l("\n\t\t"),s("span",{class:"token punctuation"},"}"),l("\n\t"),s("span",{class:"token punctuation"},"}"),l("\n"),s("span",{class:"token punctuation"},"}"),l("\n")])]),s("div",{class:"line-numbers-wrapper"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br")])],-1),g=s("p",null,"Let's break up the code first:",-1),w=s("ul",null,[s("li",null,[s("code",null,'"format_version"'),l(" defines what format the file uses. We’ll be using 1.10 because that's the current most recent version for items.")]),s("li",null,[s("code",null,'"minecraft:item"'),l(" contains all of the item's server-side data: "),s("ul",null,[s("li",null,[s("code",null,'"identifier"'),l(" in "),s("code",null,'"description"'),l(" is a name unique to this item. It should contain no upper-case letters, and "),s("code",null,"_"),l(" should be used instead of spaces. An identifier consists of two parts: a "),s("em",null,"namespace"),l(" (before the "),s("code",null,":"),l(") and the "),s("em",null,"id"),l(" (after the "),s("code",null,":"),l("). The "),s("em",null,"namespace"),l(" should be the same in all files of the same add-on. Usually, either the author's initials or an abbreviation of the pack name is used as one. In our case, "),s("code",null,"wiki"),l(" is a short enough word to be used as well. The "),s("em",null,"id"),l(" is the item's own name. All vanilla items use "),s("code",null,"minecraft"),l(" as their namespace, but one CANNOT use that or "),s("code",null,"minecon"),l(" as the namespace in an add-on. The most usual way to encounter an identifier is using the "),s("code",null,"/give"),l(" command in-game: for example, to acquire our Ectoplasm, you'd have to type "),s("code",null,"/give @s wiki:ectoplasm"),l(".")]),s("li",null,[s("code",null,'"components"'),l(" is where all the data about the item's behavior is stored. There are a lot of different components for items, blocks, and entities each, but since Ectoplasm is very simple, we only need one, which is: "),s("ul",null,[s("li",null,[l('"'),s("code",null,"minecraft:max_stack_size"),l('" takes an integer ('),s("code",null,"16"),l(" in this case) for its value, but some other components might take JSON objects ("),s("code",null,"{}"),l("). You can experiment by setting the max stack size value anywhere between 1 and 64. For example, a Diamond Sword would have it as 1, an Ender Pearl as 16.")])])])])])],-1),y=s("p",null,[l("For more information on components, you can always refer to the documentation on "),s("a",{href:"https://bedrock.dev/r/Item",target:"_blank",rel:"noopener noreferrer"},"bedrock.dev/r/Item"),l(".")],-1),v=s("p",null,"If you were to open a world with the add-on now, the item would already be in-game, but it would be invisible since we haven't defined how it should look yet: let's do it now.",-1),x=s("h2",{id:"resource-code"},[s("a",{class:"header-anchor",href:"#resource-code","aria-hidden":"true"},"#"),l(" Resource code")],-1),_=s("p",null,[l("Now let's create a folder called "),s("code",null,"items"),l(" and a file called "),s("code",null,"ectoplasm.json"),l(" in your RP repository, exactly like we did for "),s("code",null,"BP"),l(".")],-1),P=s("p",null,"However, this time the code is slightly different:",-1),R=l("RP/items/ectoplasm.json"),j=s("div",{class:"language-json line-numbers-mode"},[s("pre",null,[s("code",null,[s("span",{class:"token punctuation"},"{"),l("\n\t"),s("span",{class:"token property"},'"format_version"'),s("span",{class:"token operator"},":"),l(),s("span",{class:"token string"},'"1.10"'),s("span",{class:"token punctuation"},","),l("\n\t"),s("span",{class:"token property"},'"minecraft:item"'),s("span",{class:"token operator"},":"),l(),s("span",{class:"token punctuation"},"{"),l("\n\t\t"),s("span",{class:"token property"},'"description"'),s("span",{class:"token operator"},":"),l(),s("span",{class:"token punctuation"},"{"),l("\n\t\t\t"),s("span",{class:"token property"},'"identifier"'),s("span",{class:"token operator"},":"),l(),s("span",{class:"token string"},'"wiki:ectoplasm"'),s("span",{class:"token punctuation"},","),l("\n\t\t\t"),s("span",{class:"token property"},'"category"'),s("span",{class:"token operator"},":"),l(),s("span",{class:"token string"},'"Items"'),l("\n\t\t"),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),l("\n\t\t"),s("span",{class:"token property"},'"components"'),s("span",{class:"token operator"},":"),l(),s("span",{class:"token punctuation"},"{"),l("\n\t\t\t"),s("span",{class:"token property"},'"minecraft:icon"'),s("span",{class:"token operator"},":"),l(),s("span",{class:"token string"},'"wiki.ectoplasm"'),l("\n\t\t"),s("span",{class:"token punctuation"},"}"),l("\n\t"),s("span",{class:"token punctuation"},"}"),l("\n"),s("span",{class:"token punctuation"},"}"),l("\n")])]),s("div",{class:"line-numbers-wrapper"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br")])],-1),I=s("p",null,[l("As you can see, we used the same identifier ("),s("code",null,"namespace:id"),l("), since we are referencing the same item.")],-1),T=s("ul",null,[s("li",null,[s("code",null,'"category"'),l(" in "),s("code",null,'"description"'),l(" defines in which tab of the creative inventory the item would show up. There are four tabs to choose from: "),s("code",null,'"Nature"'),l(", "),s("code",null,'"Equipment"'),l(", "),s("code",null,'"Construction"'),l(" and "),s("code",null,'"Items"'),l(".")]),s("li",null,[l("The only RP component we need right now is "),s("code",null,'"minecraft:icon"'),l(", which, of course, references the item's texture; we'll get to that in just a moment. (There are a few other item RP components we'll look into in the future, like "),s("code",null,'"minecraft:use_animation"'),l(", which defines the animation that would play when the item is used, like "),s("code",null,'"eat"'),l(" for food items.) The component's value "),s("code",null,'"wiki.ectoplasm"'),l(" is the item texture's "),s("em",null,"shortname"),l(", which brings us to our next section.")])],-1),S=s("h2",{id:"item-texture-and-its-shortname"},[s("a",{class:"header-anchor",href:"#item-texture-and-its-shortname","aria-hidden":"true"},"#"),l(" Item texture and its shortname")],-1),B=s("h3",{id:"texture"},[s("a",{class:"header-anchor",href:"#texture","aria-hidden":"true"},"#"),l(" Texture")],-1),C=s("p",null,[l("Navigate to "),s("code",null,"RP/textures/items/"),l(", creating subdirectories as needed: this is where your item textures will be stored. It's best to name your texture image files with the items' "),s("em",null,"id"),l(", which is why the texture of Ectoplasm is called "),s("code",null,"ectoplasm.png"),l(".")],-1),E=s("p",null,[s("code",null,"RP/textures/items/ectoplasm.png")],-1),N=s("p",null,[s("img",{src:"https://raw.githubusercontent.com/Bedrock-OSS/wiki-addon/86b0380310d3d5748a43a4be1f93d4c59668e4bf/guide/guide_RP/textures/items/ectoplasm.png",alt:"ectoplasm.png"})],-1),A=l("Download texture here"),W=s("h3",{id:"shortnames"},[s("a",{class:"header-anchor",href:"#shortnames","aria-hidden":"true"},"#"),l(" Shortnames")],-1),F=s("p",null,[l("Finally, we need to tell the game that an exact texture file belongs to a specific custom item. In Ectoplasm's RP file, we already defined its icon as "),s("code",null,'"wiki.ectoplasm"'),l(". Now we have to establish a connection between this "),s("em",null,"shortname"),l(" and the texture file "),s("code",null,"ectoplasm.png"),l(" This is done through the "),s("code",null,"item_texture.json"),l(" file, located in "),s("code",null,"RP/textures/"),l(". Its base code is this:")],-1),G=l("RP/textures/item_texture.json"),O=s("div",{class:"language-json line-numbers-mode"},[s("pre",null,[s("code",null,[s("span",{class:"token punctuation"},"{"),l("\n\t"),s("span",{class:"token property"},'"resource_pack_name"'),s("span",{class:"token operator"},":"),l(),s("span",{class:"token string"},'"Ghostly Guide"'),s("span",{class:"token punctuation"},","),l("\n\t"),s("span",{class:"token property"},'"texture_name"'),s("span",{class:"token operator"},":"),l(),s("span",{class:"token string"},'"atlas.items"'),s("span",{class:"token punctuation"},","),l("\n\t"),s("span",{class:"token property"},'"texture_data"'),s("span",{class:"token operator"},":"),l(),s("span",{class:"token punctuation"},"{"),s("span",{class:"token punctuation"},"}"),l("\n"),s("span",{class:"token punctuation"},"}"),l("\n")])]),s("div",{class:"line-numbers-wrapper"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br")])],-1),Y=s("ul",null,[s("li",null,[s("code",null,'"resource_pack_name"'),l(" is quite self-explanatory: it's the RP name string;")]),s("li",null,[s("code",null,'"texture_data"'),l(" is an object where each item shortname is defined - for Ectoplasm, we need to put this code snippet inside of it:")])],-1),q=l("RP/textures/item_texture.json/texture_data"),D=s("div",{class:"language-json line-numbers-mode"},[s("pre",null,[s("code",null,[s("span",{class:"token property"},'"wiki.ectoplasm"'),s("span",{class:"token operator"},":"),l(),s("span",{class:"token punctuation"},"{"),l("\n    "),s("span",{class:"token property"},'"textures"'),s("span",{class:"token operator"},":"),l(),s("span",{class:"token string"},'"textures/items/ectoplasm"'),l("\n"),s("span",{class:"token punctuation"},"}"),l("\n")])]),s("div",{class:"line-numbers-wrapper"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br")])],-1),H=s("p",null,[l("This snippet tells the game that by typing "),s("code",null,'"wiki.ectoplasm"'),l(" in our add-on, you mean the "),s("em",null,"texture"),l(" located in "),s("code",null,"textures/items/"),l(" and called "),s("code",null,"ectoplasm"),l(". You do not need the "),s("code",null,".png"),l(" extension here.")],-1),U=s("p",null,[l("After you add the snippet in, "),s("code",null,"item_texture.json"),l(" should look like this:")],-1),z=l("RP/textures/item_texture.json"),L=s("div",{class:"language-json line-numbers-mode"},[s("pre",null,[s("code",null,[s("span",{class:"token punctuation"},"{"),l("\n\t"),s("span",{class:"token property"},'"resource_pack_name"'),s("span",{class:"token operator"},":"),l(),s("span",{class:"token string"},'"Ghostly Guide"'),s("span",{class:"token punctuation"},","),l("\n\t"),s("span",{class:"token property"},'"texture_name"'),s("span",{class:"token operator"},":"),l(),s("span",{class:"token string"},'"atlas.items"'),s("span",{class:"token punctuation"},","),l("\n\t"),s("span",{class:"token property"},'"texture_data"'),s("span",{class:"token operator"},":"),l(),s("span",{class:"token punctuation"},"{"),l("\n\t\t"),s("span",{class:"token property"},'"wiki.ectoplasm"'),s("span",{class:"token operator"},":"),l(),s("span",{class:"token punctuation"},"{"),l("\n\t\t\t"),s("span",{class:"token property"},'"textures"'),s("span",{class:"token operator"},":"),l(),s("span",{class:"token string"},'"textures/items/ectoplasm"'),l("\n\t\t"),s("span",{class:"token punctuation"},"}"),l("\n\t"),s("span",{class:"token punctuation"},"}"),l("\n"),s("span",{class:"token punctuation"},"}"),l("\n")])]),s("div",{class:"line-numbers-wrapper"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br")])],-1),J=s("h2",{id:"final-steps"},[s("a",{class:"header-anchor",href:"#final-steps","aria-hidden":"true"},"#"),l(" Final steps")],-1),K=s("p",null,[l("The last thing to do is to give your item a name to show up in the toolbar. You should already have the text file "),s("code",null,"RP/texts/en_US.lang"),l(". Add this line to it:")],-1),M=l("RP/texts/en_US.lang"),Q=s("div",{class:"language-"},[s("pre",null,[s("code",null,"item.wiki:ectoplasm.name=Ectoplasm\n")]),s("div",{class:"line-numbers-wrapper"},[s("span",{class:"line-number"},"1"),s("br")])],-1),V=s("h2",{id:"done"},[s("a",{class:"header-anchor",href:"#done","aria-hidden":"true"},"#"),l(" Done!")],-1),X=s("p",null,[l("Now your first custom item, Ectoplasm, is complete! If everything has been done correctly, the item should now be obtainable through the "),s("code",null,"/give"),l(" command in-game, as well as appearing in your creative inventory. If you're having some trouble, check the "),s("a",{href:"/items/troubleshooting-items.html"},"Troubleshooting page"),l(". If that doesn't help, compare your results with the "),s("a",{href:"https://github.com/Bedrock-OSS/wiki-addon/tree/main/guide",target:"_blank",rel:"noopener noreferrer"},"example files"),l(".")],-1),Z=s("h2",{id:"what-you-have-learned"},[s("a",{class:"header-anchor",href:"#what-you-have-learned","aria-hidden":"true"},"#"),l(" What you have learned")],-1),$=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("ul",null,[s("li",null,"How to format the behavior and resource files for an item"),s("li",null,"What components are and how to use them"),s("li",null,"How to set an items texture")])],-1),ee=s("h2",{id:"your-progress-so-far"},[s("a",{class:"header-anchor",href:"#your-progress-so-far","aria-hidden":"true"},"#"),l(" Your progress so far:")],-1),ne=s("p",null,[s("strong",null,"What you've done:")],-1),te=s("ul",null,[s("li",null,"[x] Setup your pack;"),s("li",null,"[x] Create a custom item;")],-1),se=s("p",null,[s("strong",null,"What are you to do next:")],-1),ae=s("ul",null,[s("li",null,"[ ] Create a custom entity;"),s("li",null,"[ ] Create the entity's loot, spawn rules, and a custom recipe;")],-1);r.render=function(l,o,r,le,oe,re){const ie=e("CodeHeader"),ue=e("BButton");return n(),t("div",null,[i,u,c,p,d,m,h,b,s(ie,null,{default:a((()=>[k])),_:1}),f,g,w,y,v,x,_,P,s(ie,null,{default:a((()=>[R])),_:1}),j,I,T,S,B,C,E,N,s(ue,{link:"https://raw.githubusercontent.com/Bedrock-OSS/wiki-addon/86b0380310d3d5748a43a4be1f93d4c59668e4bf/guide/guide_RP/textures/items/ectoplasm.png"},{default:a((()=>[A])),_:1}),W,F,s(ie,null,{default:a((()=>[G])),_:1}),O,Y,s(ie,null,{default:a((()=>[q])),_:1}),D,H,U,s(ie,null,{default:a((()=>[z])),_:1}),L,J,K,s(ie,null,{default:a((()=>[M])),_:1}),Q,V,X,Z,$,ee,ne,te,se,ae])};export default r;export{o as __pageData};