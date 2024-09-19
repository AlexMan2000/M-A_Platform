import styles from "./ImageBox.module.less"


const ImageBox = (props) => {

    const {image, text} = props;
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={image}></img>
            </div>
            <div className={styles.imageDesc}> 
                {text}
            </div>
        </div>
    );
};

export default ImageBox;