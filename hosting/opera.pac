function FindProxyForURL(url, host) {
    const HTTPS_PROXY = "HTTPS opera.sate.li:8083";
    return `${HTTPS_PROXY};`;
}