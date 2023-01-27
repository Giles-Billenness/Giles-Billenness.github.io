import styles from './App.module.scss';
import logo from './assets/logo.svg';

function App() {
    return (
        <div className={styles.App}>
            <header className={styles['App-header']}>
                <img src={logo} className={styles['App-logo']} alt="logo" />
                <h1 className="ProjectTitle">In Production</h1>
            </header>
        </div>
    );
}

// add link to icons8 for credit https://icons8.com/license

export default App;
