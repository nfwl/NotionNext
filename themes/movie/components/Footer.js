import DarkModeButton from '@/components/DarkModeButton'
import { siteConfig } from '@/lib/config'

export const Footer = (props) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return <footer className="z-10 relative w-full bg-white px-6 border-t dark:border-hexo-black-gray dark:bg-hexo-black-gray ">
        <DarkModeButton className='text-center pt-4'/>

        <div className="container mx-auto max-w-4xl py-6 md:flex flex-wrap md:flex-no-wrap md:justify-between items-center text-sm">
            <div className='text-center'> &copy;{`${copyrightDate}`} {siteConfig('AUTHOR')}. All rights reserved.</div>
            <div className="md:p-0 text-center md:text-right text-xs">
                {/* 右侧链接 */}
                {/* <a href="#" className="text-black no-underline hover:underline">Privacy Policy</a> */}
                {siteConfig('BEI_AN') && (<a href="https://beian.miit.gov.cn/" className="text-black dark:text-gray-200 no-underline hover:underline ml-4">{siteConfig('BEI_AN')} </a>)}
                <span className='dark:text-gray-200 no-underline ml-4'>
                    Powered by
                    <a href="https://653773.xyz" className=' hover:underline'> SmartPages {siteConfig('VERSION')}  </a>
                  </span>
                  <div>
  <div
  className="text-center "
  id="cdn"
  />                                                                                                                                                                 
  <div className="text-center ">
    本站含有成人内容，未满18岁者请勿进入，否则后果自负！
  </div>
  <div className="text-center ">
    我们立足于俄罗斯联邦，无视DMCA，对全球华人服务，受俄罗斯联邦法律保护
  </div>
</div>    
          </div>
        </div>
    </footer>
}
