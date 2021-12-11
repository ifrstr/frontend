import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const LegacyProj: NextPage = () => (
  <>
    <Head>
      <title>旧版项目</title>
    </Head>

    <style jsx>{`
      table {
        border-collapse: collapse;
      }
      th,
      td {
        border: solid 1px black;
      }
    `}</style>

    <h1>旧版项目</h1>
    <p>以下是旧版项目的置放处。</p>

    <div>
      <section>
        <h2>目录</h2>
        <ul>
          <li>
            <a href="#rmnd-legacy">Ruminoid（旧版）</a>
          </li>
          <li>
            <a href="#rmbox">Ruminoid Toolbox（Rmbox）</a>
          </li>
          <li>
            <a href="#sublight-classic">Ruminoid SubLight Classic</a>
          </li>
        </ul>
      </section>

      <section>
        <h2>
          <a id="rmnd-legacy" href="#rmnd-legacy">
            #
          </a>
          Ruminoid（旧版）
        </h2>
        <p>
          旧版 Ruminoid 解决方案。如果你需要 Trimmer 或 LIVE，请下载
          Ruminoid（旧版）。
        </p>
        <p>
          注意：这不是 Ruminoid Toolbox（Rmbox）。若要下载 Ruminoid
          Toolbox（Rmbox），请转到
          <a href="#rmbox">Rmbox</a>。
        </p>
        <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/legacy/proj/RuminoidSetup_v0.2.5.0.exe">
          <a target="_blank">立即下载</a>
        </Link>
      </section>

      <section>
        <h2>
          <a id="rmbox" href="#rmbox">
            #
          </a>
          Ruminoid Toolbox（Rmbox）
        </h2>
        <p>这是 Ruminoid Toolbox（Rmbox）的下载。</p>
        <p>
          若要更新 Ruminoid Toolbox，下载最新版本后解压并覆盖原来的展开即可。
        </p>
        <h3>v0.5.6</h3>
        <p>2021-09-19 发布</p>
        <table>
          <thead>
            <tr>
              <th>类型</th>
              <th>版本</th>
              <th>下载</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Windows 便携包</td>
              <td>v0.5.6</td>
              <td>
                <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/rmbox/v0.5.6/rmbox-win.zip">
                  <a target="_blank">v0.5.6/rmbox-win.zip</a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>Windows 安装程序</td>
              <td>v0.5.6</td>
              <td>
                <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/rmbox/v0.5.6/rmbox-install.exe">
                  <a target="_blank">v0.5.6/rmbox-install.exe</a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>macOS 便携包</td>
              <td>v0.5.6</td>
              <td>
                <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/rmbox/v0.5.6/rmbox-osx.zip">
                  <a target="_blank">v0.5.6/rmbox-osx.zip</a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>macOS 安装映像</td>
              <td>v0.5.6</td>
              <td>
                <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/rmbox/v0.5.6/rmbox-app.dmg">
                  <a target="_blank">v0.5.6/rmbox-app.dmg</a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>Linux 便携包</td>
              <td>v0.5.6</td>
              <td>
                <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/rmbox/v0.5.6/rmbox-linux.zip">
                  <a target="_blank">v0.5.6/rmbox-linux.zip</a>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <details>
            <summary>历史版本</summary>
            <h3>v0.5.5</h3>
            <p>2021-09-01 发布</p>
            <table>
              <thead>
                <tr>
                  <th>类型</th>
                  <th>版本</th>
                  <th>下载</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Windows 便携包</td>
                  <td>v0.5.5</td>
                  <td>
                    <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/rmbox/v0.5.5/rmbox-win.zip">
                      <a target="_blank">v0.5.5/rmbox-win.zip</a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Windows 安装程序</td>
                  <td>v0.5.5</td>
                  <td>
                    <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/rmbox/v0.5.5/rmbox-install.exe">
                      <a target="_blank">v0.5.5/rmbox-install.exe</a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>macOS 便携包</td>
                  <td>v0.5.5</td>
                  <td>
                    <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/rmbox/v0.5.5/rmbox-osx.zip">
                      <a target="_blank">v0.5.5/rmbox-osx.zip</a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>macOS 安装映像</td>
                  <td>v0.5.5</td>
                  <td>
                    <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/rmbox/v0.5.5/rmbox-app.dmg">
                      <a target="_blank">v0.5.5/rmbox-app.dmg</a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Linux 便携包</td>
                  <td>v0.5.5</td>
                  <td>
                    <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/rmbox/v0.5.5/rmbox-linux.zip">
                      <a target="_blank">v0.5.5/rmbox-linux.zip</a>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
            <h3>v0.5.4</h3>
            <p>2021-07-04 发布</p>
            <table>
              <thead>
                <tr>
                  <th>类型</th>
                  <th>版本</th>
                  <th>下载</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Windows 便携包</td>
                  <td>v0.5.4</td>
                  <td>
                    <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/rmbox/v0.5.4/rmbox-win.zip">
                      <a target="_blank">v0.5.4/rmbox-win.zip</a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Windows 安装程序</td>
                  <td>v0.5.4</td>
                  <td>
                    <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/rmbox/v0.5.4/rmbox-install.exe">
                      <a target="_blank">v0.5.4/rmbox-install.exe</a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>macOS 便携包</td>
                  <td>v0.5.4</td>
                  <td>
                    <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/rmbox/v0.5.4/rmbox-osx.zip">
                      <a target="_blank">v0.5.4/rmbox-osx.zip</a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>macOS 安装映像</td>
                  <td>v0.5.4</td>
                  <td>
                    <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/rmbox/v0.5.4/rmbox-app.dmg">
                      <a target="_blank">v0.5.4/rmbox-app.dmg</a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Linux 便携包</td>
                  <td>v0.5.4</td>
                  <td>
                    <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/rmbox/v0.5.4/rmbox-linux.zip">
                      <a target="_blank">v0.5.4/rmbox-linux.zip</a>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
            <h3>v0.4.0</h3>
            <p>2021-04-18 发布</p>
            <table>
              <thead>
                <tr>
                  <th>类型</th>
                  <th>版本</th>
                  <th>下载</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Windows 便携包</td>
                  <td>v0.4.0</td>
                  <td>
                    <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/rmbox/v0.4.0/rmbox-win.zip">
                      <a target="_blank">v0.4.0/rmbox-win.zip</a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Windows 安装程序</td>
                  <td>v0.4.0</td>
                  <td>
                    <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/rmbox/v0.4.0/rmbox-install.exe">
                      <a target="_blank">v0.4.0/rmbox-install.exe</a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>macOS 便携包</td>
                  <td>v0.4.0</td>
                  <td>
                    <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/rmbox/v0.4.0/rmbox-osx.zip">
                      <a target="_blank">v0.4.0/rmbox-osx.zip</a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>macOS 安装映像</td>
                  <td>v0.4.0</td>
                  <td>
                    <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/rmbox/v0.4.0/rmbox-app.dmg">
                      <a target="_blank">v0.4.0/rmbox-app.dmg</a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Linux 便携包</td>
                  <td>v0.4.0</td>
                  <td>
                    <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/rmbox/v0.4.0/rmbox-linux.zip">
                      <a target="_blank">v0.4.0/rmbox-linux.zip</a>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
            <h3>v0.3.3</h3>
            <p>2021-04-07 发布</p>
            <table>
              <thead>
                <tr>
                  <th>类型</th>
                  <th>版本</th>
                  <th>下载</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Windows 便携包</td>
                  <td>v0.3.3</td>
                  <td>
                    <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/rmbox/v0.3.3/rmbox-win.zip">
                      <a target="_blank">v0.3.3/rmbox-win.zip</a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Windows 安装程序</td>
                  <td>v0.3.3</td>
                  <td>
                    <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/rmbox/v0.3.3/rmbox-install.exe">
                      <a target="_blank">v0.3.3/rmbox-install.exe</a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>macOS 便携包</td>
                  <td>v0.3.3</td>
                  <td>
                    <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/rmbox/v0.3.3/rmbox-osx.zip">
                      <a target="_blank">v0.3.3/rmbox-osx.zip</a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>macOS 安装映像</td>
                  <td>v0.3.3</td>
                  <td>
                    <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/rmbox/v0.3.3/rmbox-app.dmg">
                      <a target="_blank">v0.3.3/rmbox-app.dmg</a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Linux 便携包</td>
                  <td>v0.3.3</td>
                  <td>
                    <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/rmbox/v0.3.3/rmbox-linux.zip">
                      <a target="_blank">v0.3.3/rmbox-linux.zip</a>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
            <h3>v0.2.6</h3>
            <p>2021-04-02 发布</p>
            <table>
              <thead>
                <tr>
                  <th>类型</th>
                  <th>版本</th>
                  <th>下载</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Windows 便携包</td>
                  <td>v0.2.6</td>
                  <td>
                    <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/rmbox/v0.2.6/rmbox-win.zip">
                      <a target="_blank">v0.2.6/rmbox-win.zip</a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>macOS 便携包</td>
                  <td>v0.2.6</td>
                  <td>
                    <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/rmbox/v0.2.6/rmbox-osx.zip">
                      <a target="_blank">v0.2.6/rmbox-osx.zip</a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Linux 便携包</td>
                  <td>v0.2.6</td>
                  <td>
                    <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/rmbox/v0.2.6/rmbox-linux.zip">
                      <a target="_blank">v0.2.6/rmbox-linux.zip</a>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
            <h3>v0.2.1</h3>
            <p>2021-03-21 发布</p>
            <table>
              <thead>
                <tr>
                  <th>类型</th>
                  <th>版本</th>
                  <th>下载</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Windows 便携包</td>
                  <td>v0.2.1</td>
                  <td>
                    <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/rmbox/v0.2.1/rmbox-win.zip">
                      <a target="_blank">v0.2.1/rmbox-win.zip</a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>macOS 便携包</td>
                  <td>v0.2.1</td>
                  <td>
                    <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/rmbox/v0.2.1/rmbox-osx.zip">
                      <a target="_blank">v0.2.1/rmbox-osx.zip</a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Linux 便携包</td>
                  <td>v0.2.1</td>
                  <td>
                    <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/rmbox/v0.2.1/rmbox-linux.zip">
                      <a target="_blank">v0.2.1/rmbox-linux.zip</a>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </details>
        </p>
      </section>

      <section>
        <h2>
          <a id="sublight-classic" href="#sublight-classic">
            #
          </a>
          Ruminoid SubLight Classic
        </h2>
        <p>这是 Ruminoid SubLight Classic 的下载。</p>
        <p>
          下载完成后，将文件置于{' '}
          <code>
            C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore\Ruminoid
          </code>{' '}
          中。你可能需要手动新建 <code>Ruminoid</code> 文件夹。
        </p>
        <p>
          若要更新 Ruminoid SubLight
          Classic，只需将原来安装的插件删除后重新复制到目标文件夹即可。
        </p>
        <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/legacy/proj/Ruminoid.SubLight.Classic.0.2.8.aex">
          <a target="_blank">立即下载</a>
        </Link>
        <p>
          <details>
            <summary>历史版本</summary>
            <table>
              <thead>
                <tr>
                  <th>版本</th>
                  <th>下载</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>v0.2.7</td>
                  <td>
                    <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/legacy/proj/Ruminoid.SubLight.Classic.0.2.7.aex">
                      <a target="_blank">下载</a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>v0.2.6</td>
                  <td>
                    <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/legacy/proj/Ruminoid.SubLight.Classic.0.2.6.aex">
                      <a target="_blank">下载</a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>v0.2.5</td>
                  <td>
                    <Link href="https://vbox-down-a.obs.cn-east-3.myhuaweicloud.com/legacy/proj/Ruminoid.SubLight.Classic.0.2.5.aex">
                      <a target="_blank">下载</a>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </details>
        </p>
      </section>
    </div>
  </>
)

export default LegacyProj
