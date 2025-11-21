import{_ as s,c as i,o as a,a4 as n,a5 as l}from"./chunks/framework.DccHFOw4.js";const y=JSON.parse('{"title":"Nginx","description":"","frontmatter":{},"headers":[],"relativePath":"nginx.md","filePath":"nginx.md"}'),p={name:"nginx.md"},t=n(`<h1 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;Nginx&quot;">​</a></h1><p><a href="https://dunwu.github.io/nginx-tutorial/#/" target="_blank" rel="noreferrer">nginx: 快速入门</a></p><p>安装：</p><p>windows:</p><p>到官网下载安装即可:<a href="https://nginx.org/en/download.html" target="_blank" rel="noreferrer">nginx: download</a></p><p>命令：</p><div class="language-batch vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">batch</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nginx -s stop       快速关闭Nginx，可能不保存相关信息，并迅速终止web服务。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nginx -s quit       平稳关闭Nginx，保存相关信息，有安排的结束web服务。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nginx -s reload     因改变了Nginx相关配置，需要重新加载配置而重载。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nginx -s reopen     重新打开日志文件。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nginx -c filename   为 Nginx 指定一个配置文件，来代替缺省的。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nginx -t            不运行，仅仅测试配置文件。nginx 将检查配置文件的语法的正确性，并尝试打开配置文件中所引用到的文件。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nginx -v            显示 nginx 的版本。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nginx -V            显示 nginx 的版本，编译器版本和配置参数。</span></span></code></pre></div><p>什么是 Nginx?</p><p>Nginx (engine x) 是一款轻量级的 Web 服务器 、反向代理服务器及电子邮件（IMAP/POP3）代理服务器。</p><p>什么是反向代理？</p><p>反向代理（Reverse Proxy）方式是指以代理服务器来接受 internet 上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给 internet 上请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器。</p><p>正向代理是当前的计算机寻求另一台代理服务器的协助，指定好了一个URL让代理服务器去访问后返回给自己。</p><p>反向代理是当前的计算机访问一个URL，但是具体的返回资源是由代理服务器指定的，对于当前的计算机来说并不知道是哪台服务器提供的资源。</p><p><em><code>conf/nginx.conf</code> 是 nginx 的默认配置文件。你也可以使用 nginx -c 指定你的配置文件</em></p><p>一个配置文件示范:</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#运行用户</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#user somebody;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#启动进程,通常设置成和cpu的数量相等</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">worker_processes </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#全局错误日志</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">error_log </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> D:/Tools/nginx-1.10.1/logs/error.log;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">error_log </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> D:/Tools/nginx-1.10.1/logs/notice.log  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">notice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">error_log </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> D:/Tools/nginx-1.10.1/logs/info.log  info;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#PID文件，记录当前启动的nginx的进程ID</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pid </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       D:/Tools/nginx-1.10.1/logs/nginx.pid;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#工作模式及连接数上限</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">events</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    worker_connections </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1024</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#单个后台worker process进程的最大并发链接数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#设定http服务器，利用它的反向代理功能提供负载均衡支持</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #设定mime类型(邮件支持类型),类型由mime.types文件定义</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    include </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      D:/Tools/nginx-1.10.1/conf/mime.types;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    default_type </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> application/octet-stream;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #设定日志</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    log_format </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> main</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;[$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">remote_addr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">] - [$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">remote_user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">] [$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">time_local</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">] &quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">request</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                      &#39;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">status</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">body_bytes_sent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http_referer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                      &#39;&quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http_user_agent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http_x_forwarded_for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    access_log </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   D:/Tools/nginx-1.10.1/logs/access.log </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    rewrite_log </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #sendfile 指令指定 nginx 是否调用 sendfile 函数（zero copy 方式）来输出文件，对于普通应用，</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #必须设为 on,如果用来进行下载等应用磁盘IO重负载应用，可设置为 off，以平衡磁盘与网络I/O处理速度，降低系统的uptime.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    sendfile </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #tcp_nopush     on;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #连接超时时间</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    keepalive_timeout </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 120</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    tcp_nodelay </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #gzip压缩开关</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #gzip  on;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #设定实际的服务器列表</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    upstream</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> zpServer1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 127.0.0.1:8089;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #HTTP服务器</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #监听80端口，80端口是知名端口号，用于HTTP协议</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #定义使用www.xx.com访问</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> www.helloworld.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #首页</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        index </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">index.html</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #指向webapp的目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        root D:\\01_Workspace\\Project\\github\\zp\\SpringNotes\\spring-security\\spring-shiro\\src\\main\\webapp;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #编码格式</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        charset </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">utf-8;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #代理配置参数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_connect_timeout </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">180</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_send_timeout </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">180</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_read_timeout </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">180</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Host $host;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Forwarder-For $remote_addr;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #反向代理的路径（和upstream绑定），location 后面设置映射的路径</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://zpServer1;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #静态文件，nginx自己处理</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        location</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ~</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;"> ^/(images|javascript|js|css|flash|media|static)/ </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            root </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">D:\\01_Workspace\\Project\\github\\zp\\SpringNotes\\spring-security\\spring-shiro\\src\\main\\webapp\\views;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            #过期30天，静态文件不怎么更新，过期可以设大一点，如果频繁更新，则可以设置得小一点。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            expires </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #设定查看Nginx状态的地址</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /NginxStatus </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            stub_status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">           on;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            access_log </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">           on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            auth_basic </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">           &quot;NginxStatus&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            auth_basic_user_file </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> conf/htpasswd;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #禁止访问 .htxxx 文件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        location</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ~</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;"> /\\.ht </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            deny </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">all</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #错误处理页面（可选择性配置）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #error_page   404              /404.html;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #location = /50x.html {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #    root   html;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>改完nginx -s reload就可以了 记得要删掉浏览器的缓存 不然改动的效果看不出来</p><h4 id="负载均衡策略" tabindex="-1"><a href="https://dunwu.github.io/nginx-tutorial/#/nginx-quickstart?id=%e8%b4%9f%e8%bd%bd%e5%9d%87%e8%a1%a1%e7%ad%96%e7%95%a5" target="_blank" rel="noreferrer">负载均衡策略</a> <a class="header-anchor" href="#负载均衡策略" aria-label="Permalink to &quot;[负载均衡策略](https://dunwu.github.io/nginx-tutorial/#/nginx-quickstart?id=%e8%b4%9f%e8%bd%bd%e5%9d%87%e8%a1%a1%e7%ad%96%e7%95%a5)&quot;">​</a></h4><p>Nginx 提供了多种负载均衡策略，让我们来一一了解一下：</p><p>负载均衡策略在各种分布式系统中基本上原理一致，对于原理有兴趣，不妨参考 <a href="https://dunwu.github.io/blog/design/theory/load-balance-theory/" target="_blank" rel="noreferrer">负载均衡</a></p><h5 id="轮询" tabindex="-1"><a href="https://dunwu.github.io/nginx-tutorial/#/nginx-quickstart?id=%e8%bd%ae%e8%af%a2" target="_blank" rel="noreferrer">轮询</a> <a class="header-anchor" href="#轮询" aria-label="Permalink to &quot;[轮询](https://dunwu.github.io/nginx-tutorial/#/nginx-quickstart?id=%e8%bd%ae%e8%af%a2)&quot;">​</a></h5><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">upstream</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bck_testing_01 </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 默认所有服务器权重为 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 192.168.250.220:8080</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  server 192.168.250.221:8080</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  server 192.168.250.222:8080</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h5 id="加权轮询" tabindex="-1"><a href="https://dunwu.github.io/nginx-tutorial/#/nginx-quickstart?id=%e5%8a%a0%e6%9d%83%e8%bd%ae%e8%af%a2" target="_blank" rel="noreferrer">加权轮询</a> <a class="header-anchor" href="#加权轮询" aria-label="Permalink to &quot;[加权轮询](https://dunwu.github.io/nginx-tutorial/#/nginx-quickstart?id=%e5%8a%a0%e6%9d%83%e8%bd%ae%e8%af%a2)&quot;">​</a></h5><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">upstream</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bck_testing_01 </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 192.168.250.220:8080   </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">weight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  server 192.168.250.221:8080              </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># default weight=1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  server 192.168.250.222:8080              </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># default weight=1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h5 id="最少连接" tabindex="-1"><a href="https://dunwu.github.io/nginx-tutorial/#/nginx-quickstart?id=%e6%9c%80%e5%b0%91%e8%bf%9e%e6%8e%a5" target="_blank" rel="noreferrer">最少连接</a> <a class="header-anchor" href="#最少连接" aria-label="Permalink to &quot;[最少连接](https://dunwu.github.io/nginx-tutorial/#/nginx-quickstart?id=%e6%9c%80%e5%b0%91%e8%bf%9e%e6%8e%a5)&quot;">​</a></h5><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">upstream</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bck_testing_01 </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  least_conn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # with default weight for all (weight=1)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 192.168.250.220:8080</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  server 192.168.250.221:8080</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  server 192.168.250.222:8080</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h5 id="加权最少连接" tabindex="-1"><a href="https://dunwu.github.io/nginx-tutorial/#/nginx-quickstart?id=%e5%8a%a0%e6%9d%83%e6%9c%80%e5%b0%91%e8%bf%9e%e6%8e%a5" target="_blank" rel="noreferrer">加权最少连接</a> <a class="header-anchor" href="#加权最少连接" aria-label="Permalink to &quot;[加权最少连接](https://dunwu.github.io/nginx-tutorial/#/nginx-quickstart?id=%e5%8a%a0%e6%9d%83%e6%9c%80%e5%b0%91%e8%bf%9e%e6%8e%a5)&quot;">​</a></h5><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">upstream</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bck_testing_01 </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  least_conn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 192.168.250.220:8080   </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">weight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  server 192.168.250.221:8080              </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># default weight=1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  server 192.168.250.222:8080              </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># default weight=1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h5 id="ip-hash" tabindex="-1"><a href="https://dunwu.github.io/nginx-tutorial/#/nginx-quickstart?id=ip-hash" target="_blank" rel="noreferrer">IP Hash</a> <a class="header-anchor" href="#ip-hash" aria-label="Permalink to &quot;[IP Hash](https://dunwu.github.io/nginx-tutorial/#/nginx-quickstart?id=ip-hash)&quot;">​</a></h5><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">upstream</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bck_testing_01 </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ip_hash</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # with default weight for all (weight=1)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 192.168.250.220:8080</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  server 192.168.250.221:8080</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  server 192.168.250.222:8080</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h5 id="普通-hash" tabindex="-1"><a href="https://dunwu.github.io/nginx-tutorial/#/nginx-quickstart?id=%e6%99%ae%e9%80%9a-hash" target="_blank" rel="noreferrer">普通 Hash</a> <a class="header-anchor" href="#普通-hash" aria-label="Permalink to &quot;[普通 Hash](https://dunwu.github.io/nginx-tutorial/#/nginx-quickstart?id=%e6%99%ae%e9%80%9a-hash)&quot;">​</a></h5><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">upstream</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bck_testing_01 </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  hash </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$request_uri;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # with default weight for all (weight=1)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 192.168.250.220:8080</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  server 192.168.250.221:8080</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  server 192.168.250.222:8080</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="网站有多个-webapp-的配置" tabindex="-1"><a href="https://dunwu.github.io/nginx-tutorial/#/nginx-quickstart?id=%e7%bd%91%e7%ab%99%e6%9c%89%e5%a4%9a%e4%b8%aa-webapp-%e7%9a%84%e9%85%8d%e7%bd%ae" target="_blank" rel="noreferrer">网站有多个 webapp 的配置</a> <a class="header-anchor" href="#网站有多个-webapp-的配置" aria-label="Permalink to &quot;[网站有多个 webapp 的配置](https://dunwu.github.io/nginx-tutorial/#/nginx-quickstart?id=%e7%bd%91%e7%ab%99%e6%9c%89%e5%a4%9a%e4%b8%aa-webapp-%e7%9a%84%e9%85%8d%e7%bd%ae)&quot;">​</a></h3><p>当一个网站功能越来越丰富时，往往需要将一些功能相对独立的模块剥离出来，独立维护。这样的话，通常，会有多个 webapp。</p><p>举个例子：假如 <a href="http://www.helloworld.com/" target="_blank" rel="noreferrer">www.helloworld.com</a> 站点有好几个 webapp，finance（金融）、product（产品）、admin（用户中心）。访问这些应用的方式通过上下文(context)来进行区分:</p><p><a href="http://www.helloworld.com/finance/" target="_blank" rel="noreferrer">www.helloworld.com/finance/</a></p><p><a href="http://www.helloworld.com/product/" target="_blank" rel="noreferrer">www.helloworld.com/product/</a></p><p><a href="http://www.helloworld.com/admin/" target="_blank" rel="noreferrer">www.helloworld.com/admin/</a></p><p>我们知道，http 的默认端口号是 80，如果在一台服务器上同时启动这 3 个 webapp 应用，都用 80 端口，肯定是不成的。所以，这三个应用需要分别绑定不同的端口号。</p><p>那么，问题来了，用户在实际访问 <a href="http://www.helloworld.com/" target="_blank" rel="noreferrer">www.helloworld.com</a> 站点时，访问不同 webapp，总不会还带着对应的端口号去访问吧。所以，你再次需要用到反向代理来做处理。</p><p>配置也不难，来看看怎么做吧：</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #此处省略一些基本配置</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    upstream</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> product_server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> www.helloworld.com:8081;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    upstream</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> admin_server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> www.helloworld.com:8082;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    upstream</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> finance_server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> www.helloworld.com:8083;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #此处省略一些基本配置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #默认指向product的server</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://product_server;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /product/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://product_server;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /admin/ </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://admin_server;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /finance/ </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://finance_server;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="静态站点" tabindex="-1"><a href="https://dunwu.github.io/nginx-tutorial/#/nginx-quickstart?id=%e9%9d%99%e6%80%81%e7%ab%99%e7%82%b9" target="_blank" rel="noreferrer">静态站点</a> <a class="header-anchor" href="#静态站点" aria-label="Permalink to &quot;[静态站点](https://dunwu.github.io/nginx-tutorial/#/nginx-quickstart?id=%e9%9d%99%e6%80%81%e7%ab%99%e7%82%b9)&quot;">​</a></h3><p>有时候，我们需要配置静态站点(即 html 文件和一堆静态资源)。</p><p>举例来说：如果所有的静态资源都放在了 <code>/app/dist</code> 目录下，我们只需要在 <code>nginx.conf</code> 中指定首页以及这个站点的 host 即可。</p><p>配置如下：</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">worker_processes </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">events</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    worker_connections </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1024</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    include </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      mime.types;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    default_type </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> application/octet-stream;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    sendfile </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    keepalive_timeout </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 65</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    gzip </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    gzip_types </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text/plain application/x-javascript text/css application/xml text/javascript application/javascript image/jpeg image/gif image/png;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    gzip_vary </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> static.zp.cn;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            root </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/app/dist;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            index </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">index.html;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            #转发任何请求到 index.html</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>然后，添加 HOST：</p><p>127.0.0.1 static.zp.cn</p><p>此时，在本地浏览器访问 static.zp.cn ，就可以访问静态站点了。</p><h3 id="搭建文件服务器" tabindex="-1"><a href="https://dunwu.github.io/nginx-tutorial/#/nginx-quickstart?id=%e6%90%ad%e5%bb%ba%e6%96%87%e4%bb%b6%e6%9c%8d%e5%8a%a1%e5%99%a8" target="_blank" rel="noreferrer">搭建文件服务器</a> <a class="header-anchor" href="#搭建文件服务器" aria-label="Permalink to &quot;[搭建文件服务器](https://dunwu.github.io/nginx-tutorial/#/nginx-quickstart?id=%e6%90%ad%e5%bb%ba%e6%96%87%e4%bb%b6%e6%9c%8d%e5%8a%a1%e5%99%a8)&quot;">​</a></h3><p>有时候，团队需要归档一些数据或资料，那么文件服务器必不可少。使用 Nginx 可以非常快速便捷的搭建一个简易的文件服务。</p><p>Nginx 中的配置要点：</p><ul><li>将 autoindex 开启可以显示目录，默认不开启。</li><li>将 autoindex_exact_size 开启可以显示文件的大小。</li><li>将 autoindex_localtime 开启可以显示文件的修改时间。</li><li>root 用来设置开放为文件服务的根路径。</li><li>charset 设置为 <code>charset utf-8,gbk;</code>，可以避免中文乱码问题（windows 服务器下设置后，依然乱码，本人暂时没有找到解决方法）。</li></ul><p>一个最简化的配置如下：</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">autoindex </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 显示目录</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">autoindex_exact_size </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 显示文件大小</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">autoindex_localtime </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 显示文件时间</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    charset </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     utf-8,gbk; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># windows 服务器下设置后，依然乱码，暂时无解</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      9050</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> default_server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    listen </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      [::]:9050 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">default_server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    root </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        /share/fs;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="使用497令同一个端口把http转到https协议" tabindex="-1">使用497令同一个端口把http转到https协议 <a class="header-anchor" href="#使用497令同一个端口把http转到https协议" aria-label="Permalink to &quot;使用497令同一个端口把http转到https协议&quot;">​</a></h3><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">upstream</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> backend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 127.0.0.1:8080;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      443</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ssl;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> localhost;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        ssl_certificate </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     cert.pem;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        ssl_certificate_key </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cert.key;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        ssl_session_cache </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   shared:SSL:1m;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        ssl_session_timeout </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        ssl_ciphers </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> HIGH:!aNULL:!MD5;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        ssl_prefer_server_ciphers </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">       location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            root </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  html;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            index </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> index.html index.htm;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /app</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://backend;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 让 http 请求重定向到 https 请求 =307才可以保证POST不变成GET</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        error_page </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">497</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> =307</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> https://$host$uri?$args; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre></div><h3 id="编译安装nginx" tabindex="-1">编译安装nginx <a class="header-anchor" href="#编译安装nginx" aria-label="Permalink to &quot;编译安装nginx&quot;">​</a></h3><pre><code>1.安装环境
ubuntu 20.04，nginx1.18.0
2.安装方式
2.1 apt安装
sudo apt update
sudo apt install nginx
1）查看版本
nginx -v
#### 版本
nginx version: nginx/1.18.0 (Ubuntu)
2）查看安装版本及详情
nginx -V
#版本及安装详情
nginx version: nginx/1.18.0 (Ubuntu)
built with OpenSSL 1.1.1f  31 Mar 2020
TLS SNI support enabled
configure arguments: --with-cc-opt=&#39;-g -O2 -fdebug-prefix-map=/build/nginx-lUTckl/nginx-1.18.0=. -fstack-protector-strong -Wformat -Werror=format-security -fPIC -Wdate-time -D_FORTIFY_SOURCE=2&#39; --with-ld-opt=&#39;-Wl,-Bsymbolic-functions -Wl,-z,relro -Wl,-z,now -fPIC&#39; --prefix=/usr/share/nginx --conf-path=/etc/nginx/nginx.conf --http-log-path=/var/log/nginx/access.log --error-log-path=/var/log/nginx/error.log --lock-path=/var/lock/nginx.lock --pid-path=/run/nginx.pid --modules-path=/usr/lib/nginx/modules --http-client-body-temp-path=/var/lib/nginx/body --http-fastcgi-temp-path=/var/lib/nginx/fastcgi --http-proxy-temp-path=/var/lib/nginx/proxy --http-scgi-temp-path=/var/lib/nginx/scgi --http-uwsgi-temp-path=/var/lib/nginx/uwsgi --with-debug --with-compat --with-pcre-jit --with-http_ssl_module --with-http_stub_status_module --with-http_realip_module --with-http_auth_request_module --with-http_v2_module --with-http_dav_module --with-http_slice_module --with-threads --with-http_addition_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_image_filter_module=dynamic --with-http_sub_module --with-http_xslt_module=dynamic --with-stream=dynamic --with-stream_ssl_module --with-mail=dynamic --with-mail_ssl_module
可以发现，使用在线安装方式，为我们指定了一些安装参数，例如：--prefix=/usr/share/nginx --conf-path=/etc/nginx/nginx.conf，并为我们安装了一些module，例如：--with-http_ssl_module，这就是我们服务器部署常用的https模块。
2.2 源码编译安装
1）删除nginx
由于通过apt方式安装了nginx，因此需要先将其卸载掉。加上--purge删除已安装的软件包，并删除配置文件。
sudo apt --purge remove nginx
2）删除相关依赖
虽然在第一步删除nginx时，会提示使用sudo apt autoremove，注意：使用该命令会出现一些无法预知的错误，切记。
sudo apt --purge remove fontconfig-config fonts-dejavu-core libfontconfig1 libgd3 libjbig0 libjpeg-turbo8 libjpeg8 libnginx-mod-http-image-filter libnginx-mod-http-xslt-filter libnginx-mod-mail libnginx-mod-stream libtiff5 libwebp6 libxpm4 nginx-common nginx-core
2.2.1 下载源码
下载地址：[nginx](https://nginx.org/en/download.html)
2.2.2 安装
1）解压缩
tar zxvf nginx-1.18.0.tar.gz
2）安装编译相关模块
sudo apt install gcc
sudo apt install make
3）设置配置
cd /home/stone/nginx-1.18.0
sudo ./configure --sbin-path=/usr/local/nginx/nginx --conf-path=/usr/local/nginx/nginx.conf --pid-path=/usr/local/nginx/nginx.pid
会提示报错需要pcre，zlib模块
4）安装相关依赖
sudo apt install libpcre3-dev
sudo apt install zlib1g-dev
5）编译&amp;安装
sudo make
sudo make install
6）启动
cd /usr/local/nginx
sudo ./nginx
7）查看进程
ps -ef|grep nginx
root       39949       1  0 12:54 ?        00:00:00 nginx: master process ./nginx
nobody     39950   39949  0 12:54 ?        00:00:00 nginx: worker process
8）查看默认安装模块

我们先使用nginx -V查看，发现其只返回了我们配置的参数，并不像apt安装方式时，会返回安装了哪些模块。

cd /usr/local/nginx
./nginx -V
​
#### 输出结果
nginx version: nginx/1.18.0
built by gcc 9.4.0 (Ubuntu 9.4.0-1ubuntu1~20.04.1) 
configure arguments: --sbin-path=/usr/local/nginx/nginx --conf-path=/usr/local/nginx/nginx.conf --pid-path=/usr/local/nginx/nginx.pid
这时，我们需要去编译的文件夹去找，可以看到编译安装的方式，安装的模块比apt安装方式时还要多。

cd /home/stone/nginx-1.18.0/auto
cat options | grep &quot;YES&quot;
​
#### 输出结果
HTTP=YES
HTTP_CACHE=YES
HTTP_CHARSET=YES
HTTP_GZIP=YES
HTTP_SSI=YES
HTTP_ACCESS=YES
HTTP_AUTH_BASIC=YES
HTTP_MIRROR=YES
HTTP_USERID=YES
HTTP_AUTOINDEX=YES
HTTP_GEO=YES
HTTP_MAP=YES
HTTP_SPLIT_CLIENTS=YES
HTTP_REFERER=YES
HTTP_REWRITE=YES
HTTP_PROXY=YES
HTTP_FASTCGI=YES
HTTP_UWSGI=YES
HTTP_SCGI=YES
HTTP_GRPC=YES
HTTP_MEMCACHED=YES
HTTP_LIMIT_CONN=YES
HTTP_LIMIT_REQ=YES
HTTP_EMPTY_GIF=YES
HTTP_BROWSER=YES
HTTP_UPSTREAM_HASH=YES
HTTP_UPSTREAM_IP_HASH=YES
HTTP_UPSTREAM_LEAST_CONN=YES
HTTP_UPSTREAM_RANDOM=YES
HTTP_UPSTREAM_KEEPALIVE=YES
HTTP_UPSTREAM_ZONE=YES
MAIL_POP3=YES
MAIL_IMAP=YES
MAIL_SMTP=YES
STREAM_LIMIT_CONN=YES
STREAM_ACCESS=YES
STREAM_GEO=YES
STREAM_MAP=YES
STREAM_SPLIT_CLIENTS=YES
STREAM_RETURN=YES
STREAM_UPSTREAM_HASH=YES
STREAM_UPSTREAM_LEAST_CONN=YES
STREAM_UPSTREAM_RANDOM=YES
STREAM_UPSTREAM_ZONE=YES
        --with-select_module)            EVENT_SELECT=YES           ;;
        --with-poll_module)              EVENT_POLL=YES             ;;
        --with-threads)                  USE_THREADS=YES            ;;
        --with-file-aio)                 NGX_FILE_AIO=YES           ;;
        --with-http_ssl_module)          HTTP_SSL=YES               ;;
        --with-http_v2_module)           HTTP_V2=YES                ;;
        --with-http_realip_module)       HTTP_REALIP=YES            ;;
        --with-http_addition_module)     HTTP_ADDITION=YES          ;;
        --with-http_xslt_module)         HTTP_XSLT=YES              ;;
        --with-http_image_filter_module) HTTP_IMAGE_FILTER=YES      ;;
        --with-http_geoip_module)        HTTP_GEOIP=YES             ;;
        --with-http_sub_module)          HTTP_SUB=YES               ;;
        --with-http_dav_module)          HTTP_DAV=YES               ;;
        --with-http_flv_module)          HTTP_FLV=YES               ;;
        --with-http_mp4_module)          HTTP_MP4=YES               ;;
        --with-http_gunzip_module)       HTTP_GUNZIP=YES            ;;
        --with-http_gzip_static_module)  HTTP_GZIP_STATIC=YES       ;;
        --with-http_auth_request_module) HTTP_AUTH_REQUEST=YES      ;;
        --with-http_random_index_module) HTTP_RANDOM_INDEX=YES      ;;
        --with-http_secure_link_module)  HTTP_SECURE_LINK=YES       ;;
        --with-http_degradation_module)  HTTP_DEGRADATION=YES       ;;
        --with-http_slice_module)        HTTP_SLICE=YES             ;;
        --with-http_perl_module)         HTTP_PERL=YES              ;;
        --with-http_stub_status_module)  HTTP_STUB_STATUS=YES       ;;
        --with-mail)                     MAIL=YES                   ;;
        --with-mail_ssl_module)          MAIL_SSL=YES               ;;
            MAIL=YES
            MAIL_SSL=YES
        --with-stream)                   STREAM=YES                 ;;
        --with-stream_ssl_module)        STREAM_SSL=YES             ;;
        --with-stream_realip_module)     STREAM_REALIP=YES          ;;
        --with-stream_geoip_module)      STREAM_GEOIP=YES           ;;
                                        STREAM_SSL_PREREAD=YES     ;;
        --with-google_perftools_module)  NGX_GOOGLE_PERFTOOLS=YES   ;;
        --with-cpp_test_module)          NGX_CPP_TEST=YES           ;;
        --with-compat)                   NGX_COMPAT=YES             ;;
        --with-debug)                    NGX_DEBUG=YES              ;;
        --with-pcre)                     USE_PCRE=YES               ;;
        --with-pcre-jit)                 PCRE_JIT=YES               ;;
        --with-libatomic)                NGX_LIBATOMIC=YES          ;;
        --test-build-devpoll)            NGX_TEST_BUILD_DEVPOLL=YES ;;
        --test-build-eventport)          NGX_TEST_BUILD_EVENTPORT=YES ;;
        --test-build-epoll)              NGX_TEST_BUILD_EPOLL=YES   ;;
        --test-build-solaris-sendfilev)  NGX_TEST_BUILD_SOLARIS_SENDFILEV=YES ;;
</code></pre><h2 id="配置一个默认页面" tabindex="-1">配置一个默认页面 <a class="header-anchor" href="#配置一个默认页面" aria-label="Permalink to &quot;配置一个默认页面&quot;">​</a></h2><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /ogfinan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    alias </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/usr/share/nginx/html;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#指向维护页面所在目录</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    try_files </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/maintenance.html </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">=404</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#假设文件名为maintenance.html</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="常用的匹配规则" tabindex="-1">常用的匹配规则 <a class="header-anchor" href="#常用的匹配规则" aria-label="Permalink to &quot;常用的匹配规则&quot;">​</a></h2><p><img src="`+l+'" alt="常用的匹配规则"></p>',64),h=[t];function e(k,r,E,d,g,o){return a(),i("div",null,h)}const u=s(p,[["render",e]]);export{y as __pageData,u as default};
