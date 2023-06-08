import { useEffect, useLayoutEffect } from "react";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

function useDocumentTitle(title: string): void {
    useIsomorphicLayoutEffect(() => {
        window.document.title = title;
    }, [title]);
}

export default useDocumentTitle;
