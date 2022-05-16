import type { NextPage } from 'next'
import GradientComponent from './GradientComponent'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
  	<>
  		<div className={styles.container}> 
	  		<GradientComponent />
  		</div>
  	</>	
  )
}

export default Home
