import ReactLoading from 'react-loading';
import styles from './Loading.module.scss';

const Loading = () => (
	<ReactLoading type="spin" height={'64px'} width={'64px'} className={styles.loading} />
);

export default Loading;