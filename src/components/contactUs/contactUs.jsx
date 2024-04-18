import {ContactUsWrapper, SocialIcon, SocialWrapper} from "./styled";
import {PrimaryButton} from "../buttons/primary/primaryButton";
import linkedinIcon from '../../assets/linkedin.svg';
import telegramIcon from '../../assets/telegram.svg';

export const ContactUs = () => {
    return (
        <ContactUsWrapper>
            <PrimaryButton>Contact via email</PrimaryButton>
            <SocialWrapper href={'https://www.linkedin.com/in/constantine-bildziukevich-5a7977224/'} target={'_blank'}>
                <SocialIcon src={linkedinIcon}/>
            </SocialWrapper>
            <SocialWrapper href={'https://t.me/Esssper'} target={'_blank'}>
                <SocialIcon src={telegramIcon}/>
            </SocialWrapper>
        </ContactUsWrapper>
    );
}
