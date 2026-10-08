export function portCameraFor(
  width: number,
  height: number,
  marker: readonly number[],
  viewportWidth: number,
) {
  const ratio = width / height;
  if (viewportWidth <= 760 || viewportWidth > 1050 || ratio >= 0.85)
    return [0, 0, 1000, 700];
  const cameraWidth = Math.min(1000, Math.max(320, 700 * ratio));
  const left = Math.max(
    0,
    Math.min(1000 - cameraWidth, marker[0] - cameraWidth / 2),
  );
  return [left, 0, cameraWidth, 700];
}
