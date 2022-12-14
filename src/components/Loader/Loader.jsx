import style from "./Loader.module.scss";
import loaderImage from '../../assets/images/loader-animated.gif';

export default function Loader({ trigger }) {

    return (
        <>
            {trigger ? (
                <div className={style.animationWrapper}>
					<img src={loaderImage} alt="loader" />
                </div>
            ) : null}
        </>
    );
}
