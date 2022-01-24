export function getMdnLink(code: string): URL {
  const exactCode = /\d\d\d/;
  if (!exactCode.test(code)) {
    return new URL(`https://developer.mozilla.org/en-US/docs/Web/HTTP/Status`);
  }
  return new URL(
    `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/${code}`
  );
}
