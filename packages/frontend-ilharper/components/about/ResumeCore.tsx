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
        width: 85%;
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
      具有四年作为独立开发者的经验，目前希望找到一份 Web
      前端开发相关的实习工作。
    </section>

    <section className="full-width">
      <div className="section-header">基本信息</div>
      <ul>
        <li>教育经历：浙江工业大学计算机专业 本科在读</li>
        <li>地址：浙江杭州</li>
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
          <Link href="https://github.com/ilharp">
            <a target="_blank" rel="noopener noreferrer">
              github.com/ilharp
            </a>
          </Link>
        </li>
      </ul>
    </section>

    <section className="full-width">
      <div className="section-header">技能列表</div>
      <ul>
        <li>
          <b>前端：</b>熟悉 HTML5、CSS3 和 JavaScript，能够熟练开发原生网页；
          <br />
          熟悉 React，了解 Vue 框架；了解 Next 和 Nuxt 等框架，能够熟练开发
          SPA/SSR/SSG 网站；
          <br />
          了解 TypeScript 和 Sass 等语言和工具，并在自己的开源项目中使用；
          <br />
          了解 Gulp、Webpack 和 Parcel 等打包工具，
          能够对网站进行简单的性能优化。
        </li>

        <li>
          <b>后端：</b>熟悉 Node.js，熟悉 Express 和 Koa，了解 Nest.js；
          <br />
          了解 Spring、ASP.NET 和 Golang，能够快速开发后端服务和微服务。
        </li>

        <li>
          <b>App：</b>了解 Electron、React Native 和 Taro
          等框架，能够开发桌面端应用和小程序；
          <br />
          了解 Android 开发，能够开发 Hybrid App；
        </li>

        <li>
          <b>DevOps：</b>熟悉 GitHub Actions 和 GitLab CI 等 CI/CD 环境；
          <br />
          熟悉 Linux 和 Docker 等相关技术，了解 MySQL 和 MongoDB；
          <br />
          能够独立完成大型分布式 Web 应用的部署、监控和运维。
        </li>

        <li>
          <b>其他：</b>熟悉 WPF，了解 Qt 和 WinForm
          等原生应用框架，能够快速开发桌面应用。
        </li>
      </ul>
    </section>

    <section className="full-width">
      <div className="section-header">开源项目</div>
      <ul>
        <li>
          <Link href="https://github.com/infrastry/infrastry">
            <a target="_blank" rel="noopener noreferrer">
              <b>Infrastry</b> - github.com/infrastry/infrastry
            </a>
          </Link>
          <br />
          个人正在开发的一套基于 React 的轻量级组件库，支持按需引入和树摇。
        </li>

        <li>
          <Link href="https://musites.vercel.app">
            <a target="_blank" rel="noopener noreferrer">
              <b>Musites</b> - musites.vercel.app
            </a>
          </Link>
          <br />
          基于 Next.js SSG 的一个简单的猜歌小游戏，使用 React Hooks 开发。
        </li>

        <li>
          <Link href="https://handlebarsjs.com/zh/">
            <a target="_blank" rel="noopener noreferrer">
              <b>Handlebars</b> - handlebarsjs.com/zh
            </a>
          </Link>
          <br />
          目前是模板语言 Handlebars 的中文文档翻译者和维护者。
        </li>

        <li>
          <Link href="https://github.com/Ruminoid">
            <a target="_blank" rel="noopener noreferrer">
              <b>Ruminoid</b> - github.com/Ruminoid
            </a>
          </Link>
          <br />
          个人独立开发的基于 C# .NET 和 WPF 框架的跨平台视频和字幕工具。
          <br />
          工具基于 .NET 6，支持 C#、JS、Python 和 Lua
          语言的插件加载，由插件实现主程序的各项功能。
          <br />
          目前具有字幕制作和视频压制等多种功能。
        </li>
      </ul>
    </section>
  </>
)

export { ResumeCore }
