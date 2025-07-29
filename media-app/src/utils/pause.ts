export const pause = (duration: number) => {
  if (import.meta.env.MODE !== "development") {
    return Promise.resolve();
  }
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
};
