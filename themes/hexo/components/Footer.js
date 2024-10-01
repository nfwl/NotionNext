import { siteConfig } from '@/lib/config'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer
      className='relative z-10 dark:bg-black flex-shrink-0 bg-hexo-light-gray justify-center text-center m-auto w-full leading-6  text-gray-600 dark:text-gray-100 text-sm p-6'
    >
      {/* <DarkModeButton/> */}

      <i className='fas fa-copyright' /> {`${copyrightDate}`} <span><i className='mx-1 animate-pulse fas fa-heart'/> <a href={siteConfig('LINK')} className='underline font-bold  dark:text-gray-300 '>{siteConfig('AUTHOR')}</a>.<br/>

      {siteConfig('BEI_AN') && <><i className='fas fa-shield-alt' /> <a href='https://beian.miit.gov.cn/' className='mr-2'>{siteConfig('BEI_AN')}</a><br/></>}

      <span className='hidden busuanzi_container_site_pv'>
            <i className='fas fa-eye'/><span className='px-1 busuanzi_value_site_pv'> </span>  </span>
      <span className='pl-2 hidden busuanzi_container_site_uv'>
        <i className='fas fa-users'/> <span className='px-1 busuanzi_value_site_uv'> </span> </span>
        <h1 className='text-xs pt-4 text-light-400 dark:text-gray-400'>{title} {siteConfig('BIO') && <>|</>} {siteConfig('BIO')}</h1>
        <p className='text-xs pt-2 text-light-500 dark:text-gray-500'>投稿邮箱: <a className='dark:text-gray-300'>wenrouzhiyue@gmail.com</a>.</p>
        <p className='text-xs pt-2 text-light-500 dark:text-gray-500'> 当前节点信息: <a id="cdn" className='dark:text-gray-300'></a>.</p>
        <p className='text-xs pt-2 text-light-500 dark:text-gray-500'> 每日一言: <a id="hitokoto" className='dark:text-gray-300'></a>.</p>
        <p className='text-xs pt-2 text-light-500 dark:text-gray-500'>温馨提示: <a className='dark:text-gray-300'>本站含有成人内容，未满18岁者请勿进入，否则后果自负！</a>.</p>
        <p className='text-xs pt-2 text-light-500 dark:text-gray-500'>免责声明: <a className='dark:text-gray-300'>我们立足于俄罗斯联邦，对全球华人服务，受俄罗斯联邦法律保护。</a>.</p>
        <p className='text-xs pt-2 text-light-500 dark:text-gray-500'>Powered by <a href='https://SmartPages.653773.xyz/' className='dark:text-gray-300'>Smartpages {siteConfig('VERSION')}</a>.</p>
        </span><br/>
        
    </footer>
  )
}

export default Footer
