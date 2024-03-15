import React from 'react'
import { MainModal } from './MainModal';
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FacebookShareButton,TwitterShareButton,TelegramShareButton, WhatsappShareButton, EmailShareButton} from 'react-share';
import { MdEmail } from 'react-icons/md';

export const ShareMovieModal = ({modalOpen , setModalOpen, movie}) => {
    const shareData = [
        {
            icon: FaFacebook,
            shareButton: FacebookShareButton
        },
        {
            icon: FaTwitter,
            shareButton: TwitterShareButton
        },
        {
            icon:FaTelegram,
            shareButton: TelegramShareButton
        },
        {
            icon:FaWhatsapp,
            shareButton: WhatsappShareButton
        },
        {
            icon:MdEmail,
            shareButton: EmailShareButton
        },
    ];

    const url = `${window.location.protocol}//${window.location.host}/movie/${movie.name}`
  return (
    <MainModal modalOpen={modalOpen}  setModalOpen={setModalOpen}>
        <div className='container' >
            <h2 className='text-center'>Share "<span className='text-info'>{movie.name}</span>"</h2>
            <form className=' my-3 d-flex flex-column gap-4'>
                <div className='d-flex align-items-center justify-content-evenly'>
                {shareData.map((data,index)=>(
                    <data.shareButton className='my-2' key={index} url={url} quote="Netflixo | Free Movies Site" >
                        <data.icon className='text-danger fs-2' />
                    </data.shareButton>
                ))}
                </div>
            </form>
        </div>
    </MainModal>
  )
}
