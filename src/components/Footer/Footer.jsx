import {  FaGithubAlt, FaReact, FaRegHeart } from 'react-icons/fa';

import { HiArrowNarrowRight } from "react-icons/hi";
import useStyles from './useStyles';
import { useTranslation } from 'react-i18next';
const Footer = () => {
    const styles= useStyles();
	const [t]=useTranslation("language");

	return (
		<div className={styles.containerFooter}>
			<p >
                <a className={styles.pFooter}
					href="https://github.com/PamelaElin/portfolio-PamelaElin"
					target='_blank'
					rel='noopener noreferrer'
					title={t('footer.title')}
				>{t("footer.made")}<span className={styles.spanFooter}><FaRegHeart /></span>
				{t("footer.and")}<span className={styles.spanFooter}><FaReact /></span>
				
					{t("footer.by")}
					<span className={styles.spanFooter}><HiArrowNarrowRight/></span>
					<FaGithubAlt />
				
				</a>
			</p>
		</div>
	);
};

export default Footer;