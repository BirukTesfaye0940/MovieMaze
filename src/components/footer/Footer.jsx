import fbIcon from '../footer/social-media/fb.png';
import gmailIcon from '../footer/social-media/gmail.png';
import instagramIcon from '../footer/social-media/instagram.png';
import linkedinIcon from '../footer/social-media/linkedin.png';
import twitterIcon from '../footer/social-media/twitter.png';

function Footer() {
  return (
    <div className='flex items-center justify-between p-2 bg-gray-300 h-10'>
      <div><span className='hidden sm:block text:xs sm:text-md font-semibold'>Terms of use</span></div >
      <div className='flex float-start gap-2 pt-1 h-4 sm:h-auto'>
        <img className='max-h-8' src={fbIcon} alt='Facebook' />
        <img className='max-h-8' src={gmailIcon} alt='Gmail' />
        <img className='max-h-7' src={instagramIcon} alt='Instagram' />
        <img className='max-h-7' src={linkedinIcon} alt='LinkedIn' />
        <img className='max-h-6 pt-1' src={twitterIcon} alt='Twitter' />
      </div>
      <div className='text-xs font-semibold md:text-sm'>&copy;opyrights</div>
    </div>

  ) 
}

export default Footer;
