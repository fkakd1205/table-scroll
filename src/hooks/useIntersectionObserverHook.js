// import { useEffect, useRef } from "react";

// export default function useIntersectionObserverHook ({ callback }) {
//     const observer = useRef(null);

//     useEffect(() => {
//         observer = new IntersectionObserver((entries, observer) => {
//             entries.forEach((entry) => {
//                 if(entry.isIntersecting) {
//                     callback();
//                 }
//             });
//         },
//         {
//             threshold: 1
//         })
//     }, [])

//     const observe = (element) => {
//         observer.current.observe(element);
//     }

//     const unobserve = (element) => {
//         observe.current.unobserve(element);
//     }

//     return [observe, unobserve];
// }