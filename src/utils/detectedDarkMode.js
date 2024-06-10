export default function detectedDarkMode() {
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
        return 'dark'
    }
    return 'light'
}
