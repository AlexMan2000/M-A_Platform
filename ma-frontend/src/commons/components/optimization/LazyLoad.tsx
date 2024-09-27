import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from "./LazyLoad.module.less"

const LazyLoad = ({ children}) => {

    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [height, setHeight] = useState(400); // Placeholder height state
    const ref = useRef<HTMLDivElement>(null);
    const childRef = useRef<HTMLDivElement>(null); // Ref for measuring child height

    useEffect(() => {
        if (childRef.current) {
            // Measure the height of the children before animation
            const childHeight = childRef.current!.getBoundingClientRect().height;
            setHeight(childHeight);
        }
        const observer = new IntersectionObserver(
            
            (entries, observer) => {
                // entries here is an array containing all the intersection events of
                // the triggering target
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Since we only observe one element
                }
            },
            {
                threshold: 0.5
            }
        );

        const target = ref.current;
        if (target) {
            // Register it onto the observer so that when the callback 
            // in the IntersectionObserver is called, the registered targets
            // would appear in the entries object as one of array element
            observer.observe(target)
        }

        // Unmount
        return () => {
            if (target) {
                observer.unobserve(target);
            }
        }
    }, [])


    return (
        <div ref={ref} className={styles.lazyContainer}>
            {isVisible ? <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 60, duration: 0.8 }} // Smooth spring animationstyle={{ width: '100%', height: '100%'}}  // Custom styles 
            >
                <div ref={childRef}>
                    {children}
                </div>
            </motion.div>: 
                <div style={{ height: `${height}px`, width: '100%' }}></div>
            }
        </div>
    );
};

export default LazyLoad;