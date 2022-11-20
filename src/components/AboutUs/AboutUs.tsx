import Image from 'next/image'
import styles from './AboutUs.module.css'
import hasanImage from '../../assets/hasan.jpeg'
import kamilImage from '../../assets/kamil_1.jpg'
import rafikImage from '../../assets/rafik.jpg'

const AboutUs = () => (
    <div className="BlueBG">
        <div className="container">
            <div className={styles.AboutUsWrapper}>
                <h2 className={styles.h2}>About Us</h2>
                <div className={styles.BioCards}>
                    <div className={styles.BioCard}>
                        <Image src={kamilImage} alt="Kamil's photo" />
                        <span className={styles.Name}>Kamil Sabbagh</span>
                        <p>
                            I am a software and machine learning engineer. I
                            enjoy doing software projects and bringing projects,
                            ideas, inovations to life through my work. I also
                            love the challenges of Machine Learning and the
                            endless possibilities it brings.
                        </p>
                    </div>
                    <div className={styles.BioCard}>
                        <Image src={hasanImage} alt="Hasan's photo" />
                        <span className={styles.Name}>Hasan Khadra</span>
                        <p>
                            I am a software and blockchain engineer with a
                            passion for building new tech. I enjoy solving adhoc
                            problems and writing everything from scratch. I love
                            playing the piano; I spend hours everyday practicing
                            and learning.
                        </p>
                    </div>
                    <div className={styles.BioCard}>
                        <Image src={rafikImage} alt="Rafik's photo" />
                        <span className={styles.Name}>Rafik Hachana</span>
                        <p>
                            I am an enthusiastic CS and Data Science student
                            with 4 years of competitive programming experience,
                            2 years of software engineering experience, and 1
                            year experience in Machine Learning Research.
                            Currently pursuing a B.Sc. degree in CS and Data
                            Science in Innopolis University while freelancing
                            projects and working on ML research.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default AboutUs
