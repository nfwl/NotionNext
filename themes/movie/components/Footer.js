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
            <div className='hover:underline' 本站含有成人内容，未满18岁者请勿进入，否则后果自负！>
            <div className=' hover:underline' 我们立足于俄罗斯联邦，无视DMCA，对全球华人服务，受俄罗斯联邦法律保护。 />
            <div className=' hover:underline' id="cdn" />
            <div className=' hover:underline' Copyright © 2023 - 现在 653773.XYZ />
            </div>
        </div>
    </footer>
}
