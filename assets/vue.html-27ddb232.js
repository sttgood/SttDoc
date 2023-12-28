import{_ as s,o as n,c as l,f as a}from"./app-73667c3a.js";const p={},o=a(`<p><strong>要素：</strong></p><ul><li>:model</li><li>:rules</li><li>prop</li><li>v-model</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">setup</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">User</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">Lock</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;@element-plus/icons-vue&#39;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">ref</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">isRegister</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">ref</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">el-row</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;login-page&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">el-col</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">:span</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;12&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;bg&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">el-col</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">el-col</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">:span</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;6&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">:offset</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;3&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;form&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">el-form</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">ref</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;form&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">size</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;large&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">autocomplete</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;off&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">v-if</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;isRegister&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">el-form-item</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">          &lt;</span><span style="color:#E06C75;">h1</span><span style="color:#ABB2BF;">&gt;注册&lt;/</span><span style="color:#E06C75;">h1</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;">el-form-item</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">el-form-item</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">          &lt;</span><span style="color:#E06C75;">el-input</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">:prefix-icon</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;User&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">placeholder</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;请输入用户名&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">el-input</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;">el-form-item</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">el-form-item</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">          &lt;</span><span style="color:#E06C75;">el-input</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#D19A66;">:prefix-icon</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;Lock&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;password&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#D19A66;">placeholder</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;请输入密码&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">          &gt;&lt;/</span><span style="color:#E06C75;">el-input</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;">el-form-item</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">el-form-item</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">          &lt;</span><span style="color:#E06C75;">el-input</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#D19A66;">:prefix-icon</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;Lock&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;password&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#D19A66;">placeholder</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;请输入再次密码&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">          &gt;&lt;/</span><span style="color:#E06C75;">el-input</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;">el-form-item</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">el-form-item</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">          &lt;</span><span style="color:#E06C75;">el-button</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;button&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;primary&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">auto-insert-space</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">            注册</span></span>
<span class="line"><span style="color:#ABB2BF;">          &lt;/</span><span style="color:#E06C75;">el-button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;">el-form-item</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">el-form-item</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;flex&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">          &lt;</span><span style="color:#E06C75;">el-link</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;info&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">:underline</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;false&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">@click</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;isRegister = false&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">            ← 返回</span></span>
<span class="line"><span style="color:#ABB2BF;">          &lt;/</span><span style="color:#E06C75;">el-link</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;">el-form-item</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;/</span><span style="color:#E06C75;">el-form</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">el-form</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">ref</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;form&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">size</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;large&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">autocomplete</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;off&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">v-else</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">el-form-item</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">          &lt;</span><span style="color:#E06C75;">h1</span><span style="color:#ABB2BF;">&gt;登录&lt;/</span><span style="color:#E06C75;">h1</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;">el-form-item</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">el-form-item</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">          &lt;</span><span style="color:#E06C75;">el-input</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">:prefix-icon</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;User&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">placeholder</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;请输入用户名&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">el-input</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;">el-form-item</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">el-form-item</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">          &lt;</span><span style="color:#E06C75;">el-input</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#D19A66;">name</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;password&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#D19A66;">:prefix-icon</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;Lock&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;password&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#D19A66;">placeholder</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;请输入密码&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">          &gt;&lt;/</span><span style="color:#E06C75;">el-input</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;">el-form-item</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">el-form-item</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;flex&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">          &lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;flex&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">            &lt;</span><span style="color:#E06C75;">el-checkbox</span><span style="color:#ABB2BF;">&gt;记住我&lt;/</span><span style="color:#E06C75;">el-checkbox</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">            &lt;</span><span style="color:#E06C75;">el-link</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;primary&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">:underline</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;false&quot;</span><span style="color:#ABB2BF;">&gt;忘记密码？&lt;/</span><span style="color:#E06C75;">el-link</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">          &lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;">el-form-item</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">el-form-item</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">          &lt;</span><span style="color:#E06C75;">el-button</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;button&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;primary&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">auto-insert-space</span></span>
<span class="line"><span style="color:#ABB2BF;">            &gt;登录&lt;/</span><span style="color:#E06C75;">el-button</span></span>
<span class="line"><span style="color:#ABB2BF;">          &gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;">el-form-item</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">el-form-item</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;flex&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">          &lt;</span><span style="color:#E06C75;">el-link</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;info&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">:underline</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;false&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">@click</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;isRegister = true&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">            注册 →</span></span>
<span class="line"><span style="color:#ABB2BF;">          &lt;/</span><span style="color:#E06C75;">el-link</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;">el-form-item</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;/</span><span style="color:#E06C75;">el-form</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;">el-col</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">el-row</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">style</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">lang</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;scss&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">scoped</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#D19A66;">.login-page</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">vh</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">#fff</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.bg</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    background: </span><span style="color:#56B6C2;">url</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;@/assets/logo2.png&#39;</span><span style="color:#ABB2BF;">) </span><span style="color:#D19A66;">no-repeat</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">60</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">center</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">240</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">auto</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#56B6C2;">url</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;@/assets/login_bg.jpg&#39;</span><span style="color:#ABB2BF;">) </span><span style="color:#D19A66;">no-repeat</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">center</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">cover</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    border-radius: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.form</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    display: </span><span style="color:#D19A66;">flex</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    flex-direction: </span><span style="color:#D19A66;">column</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    justify-content: </span><span style="color:#D19A66;">center</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    user-select: </span><span style="color:#D19A66;">none</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">.title</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      margin: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">auto</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">.button</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      width: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">.flex</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      width: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      display: </span><span style="color:#D19A66;">flex</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      justify-content: </span><span style="color:#D19A66;">space-between</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">style</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),e=[o];function B(t,r){return n(),l("div",null,e)}const i=s(p,[["render",B],["__file","vue.html.vue"]]);export{i as default};