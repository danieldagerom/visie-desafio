import { Link, Outlet } from 'react-router-dom'
import styles from '../../scss/layout.module.scss'

const Layout = () => (
	<>
		<div className={styles.container}>
			<div className={styles.logo}>
				<Link to={'/'}>
					<p>-SHOPP-</p>
				</Link>
			</div>
			<main>
				<Outlet />
			</main>
		</div>
	</>
)

export default Layout
