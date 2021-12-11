import Link from 'next/link'
import React from 'react'

const ResumeCore: React.FC = () => (
  <>
    <style jsx>{`
      * {
        overflow: visible;
        margin: 0;
        padding: 0;
        font-size: 14px;
        letter-spacing: 0;
        line-height: 150%;
        color: black;
      }

      hr {
        border-style: solid;
        margin: 8px auto;
      }

      section {
        width: 90%;
        margin: 15px auto;
      }

      h1 {
        font-size: 24px;
      }

      a {
        letter-spacing: 0;
        text-decoration: underline dotted #ccc;
      }

      ul {
        width: 98%;
        margin-left: 15px;
      }

      li {
        padding: 3.5px 0;
      }

      #brief {
        width: 80%;
        font-size: small;
        opacity: 0.95;
      }

      #top-header {
        border-width: 2px;
      }

      .section-header {
        background-color: #00000010;
        margin: 8px auto;
        padding: 6px 12px;
        border-left: black 6px solid;
        font-weight: bold;
      }

      .text-center {
        text-align: center;
      }

      .separator {
        height: 10px;
      }

      .full-width {
        margin: auto;
      }
    `}</style>

    <section className="separator"></section>

    <section>
      <h1 className="text-center">张仪宇</h1>
      <div>
        <hr id="top-header" />
      </div>
    </section>

    <section id="brief">
      21岁，目前为浙江工业大学物联网工程专业的大三学生。
      <br />
      具有四年作为独立开发者的经验，目前希望找到一份软件开发相关的实习工作。
    </section>

    <section className="full-width">
      <div className="section-header">基本信息</div>
      <ul className="full-width">
        <li>
          邮箱：
          <Link href="mailto://hi@ilharper.com">
            <a target="_blank" rel="noopener noreferrer">
              hi@ilharper.com
            </a>
          </Link>
        </li>
        <li>
          GitHub：
          <Link href="https://github.com/Afanyiyu">
            <a target="_blank" rel="noopener noreferrer">
              github.com/Afanyiyu
            </a>
          </Link>
        </li>
        <li>教育经历：浙江工业大学计算机专业 本科在读</li>
        <li>地址：浙江杭州</li>
      </ul>
    </section>

    <section className="full-width">
      <div className="section-header">技能列表</div>
      <ul>
        <li>
          <b>前端：</b>熟悉 React，了解 Vue 框架；了解 Electron、Taro
          等框架，能够熟练开发 SSR/SPA 网站、客户端应用和小程序；
        </li>

        <li>
          <b>后端：</b>熟悉 Express 和 Koa，了解 Spring 和
          SpringBoot，能够快速开发后端服务和微服务。
        </li>

        <li>
          <b>桌面端：</b>熟悉 Qt、WinForm、WPF、UWP 和 WinUI
          等框架，能够快速开发桌面应用。
        </li>

        <li>
          <b>DevOps：</b>熟悉 Jenkins 和 Travis 等持续集成环境；熟悉 Linux 和
          Docker 等相关技术，了解 Kubernetes；能够独立完成大型分布式 Web
          应用的部署、监控和运维。
        </li>
      </ul>
    </section>

    <section className="full-width">
      <div className="section-header">开源项目</div>
      <ul>
        <li>
          <Link href="https://github.com/dd-center/SuperSpider">
            <a target="_blank" rel="noopener noreferrer">
              <b>BiliSC</b>- github.com/dd-center/SuperSpider
            </a>
          </Link>
          <br />
          对视频网站「哔哩哔哩」上直播时的礼物信息进行爬虫、存储和数据分析的微服务解决方案。
          <br />
          项目整体采用微服务结构，各项微应用分别负责执行不同的任务。其中，核心的爬虫服务采用了分布式系统的设计思路，使用
          JavaScript 进行编写，使得每台服务器都可以负责1000
          个以上直播间的爬虫和数据处理。
          <br />
          数据展示前端使用 Vue 和 Nuxt 框架进行开发。
        </li>

        <li>
          <Link href="https://github.com/Afanyiyu/HexaPrint">
            <a target="_blank" rel="noopener noreferrer">
              <b>HexaPrint</b>- github.com/Afanyiyu/HexaPrint
            </a>
          </Link>
          <br />
          大二期间开发的基于 C# .NET 的自助打印系统。
          <br />
          前端基于机器人框架，对接 QQ
          和微信，用户只需将打印文稿发送给机器人，机器人便会自动将文稿传递至后台服务进行处理。
          <br />
          后台服务可解析大多数文档和图片格式并自动调整页面大小；同时实现了一套完整的用户管理和交易系统，
          <br />
          用户可对账户充值、预约打印并使用取件码取件。
        </li>

        <li>
          <Link href="https://github.com/Ruminoid">
            <a target="_blank" rel="noopener noreferrer">
              <b>Ruminoid</b>- github.com/Ruminoid
            </a>
          </Link>
          <br />
          个人独立开发的基于 C# .NET 和 WPF 框架的跨平台视频和字幕工具。
          <br />
          工具基于 .NET 6，支持 C#、JS、Python 和 Lua
          语言的插件加载，由插件实现主程序的各项功能。
          <br />
          目前具有时轴生成、字幕制作、视频压制等多种功能。
        </li>

        <li>
          <Link href="https://github.com/n3ustudio/NEUTRINO-Studio">
            <a target="_blank" rel="noopener noreferrer">
              <b>NEUTRINO Studio</b>- github.com/n3ustudio/NEUTRINO-Studio
            </a>
          </Link>
          <br />
          AI 歌声合成系统 NEUTRINO 的 GUI 界面，使用 C# .NET 和 WPF 进行开发。
          <br />
          项目加入了自己编写的 GUI 样式和任务队列等代码；
          <br />
          实现了歌声合成、预览和音高调节等功能。
        </li>

        <li>
          <Link href="https://github.com/ComplexBox/SimpleBox-Desktop">
            <a target="_blank" rel="noopener noreferrer">
              <b>SimpleBox</b>- github.com/ComplexBox/SimpleBox-Desktop
            </a>
          </Link>
          <br />
          基于 C# .NET 和 WPF 的主播提问箱展示工具。
          <br />
          具有提问箱爬虫、提问箱展示、图片渲染和导出等多种功能。
        </li>

        <li>
          <Link href="https://handlebarsjs.com/zh/">
            <a target="_blank" rel="noopener noreferrer">
              <b>Handlebars</b>- handlebarsjs.com/zh
            </a>
          </Link>
          <br />
          目前是模板语言 Handlebars 的中文文档翻译者和维护者。
        </li>
      </ul>
    </section>
  </>
)

export { ResumeCore }
