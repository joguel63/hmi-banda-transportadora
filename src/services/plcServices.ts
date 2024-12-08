export const startPLC = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Motor en funcionamiento");
    }, 500);
  });
};

export const stopPLC = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Motor detenido");
    }, 500);
  });
};
