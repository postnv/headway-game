export default function wait(handler: () => void, timeout: number) {
  return setTimeout(handler, timeout);
}
