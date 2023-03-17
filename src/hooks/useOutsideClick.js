import { useEffect, useRef} from 'react'

const useOutsideClick = (callback) => {
    const ref = useRef();

    useEffect( () => {
        const clickHandler = (event) => {
            if (ref.current && !ref.current.contains(event.target))
            callback();
        }
        
        document.addEventListener('click', clickHandler);

        return () => {
            document.removeEventListener('click', clickHandler);
        } 
    }, [ref, callback])

  return ref
}

export default useOutsideClick