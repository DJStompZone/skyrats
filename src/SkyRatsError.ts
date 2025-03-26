interface ISkyRatsError {
  (e: Error): void;
}
export const SkyRatsError: ISkyRatsError = function (e: Error): void {
  console.error(`SkyRats - Error ${e}\n${e?.stack ?? ""}`);
};
