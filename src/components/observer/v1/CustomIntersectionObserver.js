import { useEffect, useState } from "react";

export default function CustomIntersectionObserver ({
    totalSize,
    viewSize,
    callback,
    wrapperTagType,
    loadingElement,
    endElement,
    threshold
}) {
    const [target, setTarget] = useState(null);

    const onIntersect = async (entries, observer) => {
        entries?.forEach(entry => {
            // 얼마나 교차되어 있는지 비율 (0.0 - 1.0)
            if(entry.intersectionRatio <= 0) return;
            // 교차 영역에 있다면 true
            if(!entry.isIntersecting) return;
            
            callback();
        })
    }

    useEffect(() => {
        let observer;

        if(target) {
            observer = new IntersectionObserver(onIntersect, {
                threshold
            });

            observer.observe(target);
        }

        return () => observer?.disconnect();
    }, [onIntersect, target])

    if(wrapperTagType === 'tr') {
        return (
            <tr ref={setTarget}>
                {viewSize === totalSize ?
                    (
                        endElement || <></>
                    )
                    :
                    (
                        loadingElement || <></>
                    )
                }
            </tr>
        )
    } else {
        return (
            <div ref={setTarget}>
                {viewSize === totalSize ?
                    (
                        endElement || <></>
                    )
                    :
                    (
                        loadingElement || <></>
                    )
                }
            </div>
        )
    }
}