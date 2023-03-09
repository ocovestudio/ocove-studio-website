import { useEffect, useState } from "react";

export default function usePageSize() {
    const [pageSize, setPageSize] = useState({pageX: 0, pageY: 0});

    useEffect(() => {
        let pageWidth = {pageX: window.innerWidth, pageY: window.innerHeight};
        setPageSize(pageWidth);
        window.addEventListener('resize', () => setPageSize({pageX: window.innerWidth, pageY: window.innerHeight}));
        window.removeEventListener('resize', () => {});
    }, []);

    return pageSize;
}