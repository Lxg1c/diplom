import SocialLinks from "@/shared/ui/socialLinks/SocialLinks";
import "./Footer.scss"
import FooterNav from "@/widgets/footer/ui/footerNav/FooterNav";

const Footer = () => {
    return (
        <footer className='footer bg-green'>
            <div className="footer__container container flex flex-col gap-9">
                <h3 className="title-3 footer__top text-white">ЭкоГид</h3>

                <FooterNav />
                <SocialLinks />

                <div className="footer__bottom flex justify-between align-center">
                    <h3 className='title-3 text-white'>Политика конфиденциальности</h3>
                    <h3 className='title-3 text-white'>Все права защищены</h3>
                </div>
            </div>
        </footer>
    )
}

export default Footer;