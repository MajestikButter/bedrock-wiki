import{_ as l,r as t,c as p,a as e,w as i,b as s,d as n,e as o,o as c}from"./404.md.84e64bbf.js";const E='{"title":"Remove Entity Shadows","description":"","frontmatter":{"title":"Remove Entity Shadows","tags":["intermediate"]},"headers":[{"level":2,"title":"Small Collision Box","slug":"small-collision-box"},{"level":2,"title":"Teleport underground","slug":"teleport-underground"},{"level":2,"title":"Using runtime identifier","slug":"using-runtime-identifier"},{"level":2,"title":"Using Materials","slug":"using-materials"}],"relativePath":"visuals/remove-shadows.md","lastUpdated":1641693313188}',u={},d=s("p",null,"There are quite a few ways to remove shadows from entities, and nearly all of them have undesirable effects. There is no foolproof way to perfectly remove shadows from specific entities, without causing side effects.",-1),h=s("p",null,"This document will showcase some of the various ways to remove shadows, and any possible effects from doing this.",-1),b=s("h2",{id:"small-collision-box",tabindex:"-1"},[n("Small Collision Box "),s("a",{class:"header-anchor",href:"#small-collision-box","aria-hidden":"true"},"#")],-1),m=s("p",null,"One possibility is to make the size of the collision component very small. This will make it hard to interact/hit the entity, but it will make the shadow disappear!",-1),k=o(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:collision_box&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">0.1</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>You can also add the <a href="https://bedrock.dev/docs/stable/Entities#minecraft:custom_hit_test" target="_blank" rel="noopener noreferrer">custom hit test component</a>. The <code>custom_hit_test</code> component will allow you to hit the entity, although you will not be able to interact with it. The <code>custom_hit_test</code> will not create a shadow.</p>__VP_STATIC_END__`,2),g=o(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:custom_hit_test&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;hitboxes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;pivot&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token comment">//This is the position of the hitbox, you can change the X, Y and Z values.</span>
            <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
            <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">0.7</span>
        <span class="token punctuation">}</span><span class="token comment">//And you can add many more hitboxes as you want, just copy-paste the hitbox inside the &quot;hitboxes&quot; array.</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="teleport-underground" tabindex="-1">Teleport underground <a class="header-anchor" href="#teleport-underground" aria-hidden="true">#</a></h2><p>If you have a dummy entity (invisible) that you need to interact with, you can telport like <code>/teleport @x ~ ~-0.01 ~</code>. This will slightly insert the entity into the ground, and stop shadows from showing.</p><h2 id="using-runtime-identifier" tabindex="-1">Using runtime identifier <a class="header-anchor" href="#using-runtime-identifier" aria-hidden="true">#</a></h2><p>Some entities don&#39;t have shadows, or very small shadows at least. By using the runtime identifier of these entities, we can remove the shadows. The downside is taking on that entities hard-coded behaviors, which can sometimes be very problematic. See the <a href="/entities/runtime-identifier.html">runtime identifers document for more information</a>.</p><h2 id="using-materials" tabindex="-1">Using Materials <a class="header-anchor" href="#using-materials" aria-hidden="true">#</a></h2><p>:::error This method is no longer supported. With the advent of render-dragon, materials like this no longer function. Please do not attempt to use this code in a serious way, and definitely do not attempt it on a marketplace map. :::</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><ul><li>This folder is NOT included in the vanilla RP Pack examples and must be exported from a APK files or added by hand.</li><li>This has not been tested for blocks and has only been verified for entities. If you find it works on blocks too please let us know so we can add that in.</li></ul></div>__VP_STATIC_END__`,8),f=s("p",null,[n("Change these lines in the "),s("code",null,"shadows.material"),n(" file under the Resource Pack / materials folder.")],-1),_=s("h4",{id:"working-shadow-code-shadows-for-all-entities",tabindex:"-1"},[n("Working shadow code: Shadows for ALL entities: "),s("a",{class:"header-anchor",href:"#working-shadow-code-shadows-for-all-entities","aria-hidden":"true"},"#")],-1),y=s("div",{class:"language-json line-numbers-mode"},[s("pre",null,[s("code",null,[s("span",{class:"token property"},'"shadow_overlay"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
      `),s("span",{class:"token property"},'"+states"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
        `),s("span",{class:"token string"},'"DisableDepthTest"'),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token string"},'"DisableCulling"'),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token string"},'"Blending"'),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token string"},'"EnableStencilTest"'),n(`
      `),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),n(`

      `),s("span",{class:"token property"},'"vertexShader"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"shaders/color.vertex"'),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token property"},'"vrGeometryShader"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"shaders/color.geometry"'),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token property"},'"fragmentShader"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"shaders/shadow_stencil_overlay.fragment"'),s("span",{class:"token punctuation"},","),n(`

      `),s("span",{class:"token property"},'"blendSrc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"DestColor"'),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token property"},'"blendDst"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Zero"'),s("span",{class:"token punctuation"},","),n(`

      `),s("span",{class:"token property"},'"frontFace"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
        `),s("span",{class:"token property"},'"stencilFunc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Equal"'),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token property"},'"stencilPass"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Replace"'),n(`
      `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
`)])]),s("div",{class:"line-numbers-wrapper"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br"),s("span",{class:"line-number"},"16"),s("br"),s("span",{class:"line-number"},"17"),s("br"),s("span",{class:"line-number"},"18"),s("br"),s("span",{class:"line-number"},"19"),s("br")])],-1),w=s("h4",{id:"disabled-shadow-code-no-shadows-for-all-entities",tabindex:"-1"},[n("Disabled shadow code: No Shadows for ALL entities: "),s("a",{class:"header-anchor",href:"#disabled-shadow-code-no-shadows-for-all-entities","aria-hidden":"true"},"#")],-1),v=s("div",{class:"language-json line-numbers-mode"},[s("pre",null,[s("code",null,[n(),s("span",{class:"token property"},'"shadow_overlay"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
      `),s("span",{class:"token property"},'"+states"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
        `),s("span",{class:"token string"},'"DisableDepthTest"'),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token string"},'"DisableCulling"'),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token string"},'"Blending"'),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token string"},'"EnableStencilTest"'),n(`
      `),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),n(`

      `),s("span",{class:"token property"},'"vertexShader"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token property"},'"vrGeometryShader"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token property"},'"fragmentShader"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},","),n(`

      `),s("span",{class:"token property"},'"blendSrc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"DestColor"'),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token property"},'"blendDst"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Zero"'),s("span",{class:"token punctuation"},","),n(`

      `),s("span",{class:"token property"},'"frontFace"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
        `),s("span",{class:"token property"},'"stencilFunc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Equal"'),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token property"},'"stencilPass"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Replace"'),n(`
      `),s("span",{class:"token punctuation"},"}"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers-wrapper"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br"),s("span",{class:"line-number"},"16"),s("br"),s("span",{class:"line-number"},"17"),s("br"),s("span",{class:"line-number"},"18"),s("br"),s("span",{class:"line-number"},"19"),s("br"),s("span",{class:"line-number"},"20"),s("br")])],-1);function T(x,S,q,C,D,P){const a=t("CodeHeader"),r=t("Spoiler");return c(),p("div",null,[d,h,b,m,e(a),k,e(a),g,e(r,{title:"Removing shadows via Materials."},{default:i(()=>[f,_,e(a),y,w,e(a),v]),_:1})])}var N=l(u,[["render",T]]);export{E as __pageData,N as default};