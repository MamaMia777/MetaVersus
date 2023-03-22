'use client';
'use client';
import { motion } from 'framer-motion'
import styles from '../styles'
import { TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion'
const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0' />
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amont: 0.25 }} className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
      <TypingText title="| About Metaversus" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
      >
        <span className='font-bold text-white'>Rodney </span>
        Ramsey typically dons a VR headset to tell jokes, but one day in January, he was on a stage in a virtual world called ProtestLand
        <span className='font-bold text-white'> leading a rally </span>
        to stop Meta from burying his
        stand-up
        <span className='font-bold text-white'> comedy shows. </span>
      </motion.p>

      <motion.img variants={fadeIn('up', 'tween', 0.3, 1)}
        src='/arrow-down.svg'
        alt='arrow'
        className='w-[18px] h-[28px] object-contain mt-[28px]'
      ></motion.img>
    </motion.div>
  </section>
);

export default About;
