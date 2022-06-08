import Config from "../config/Config";
export function mapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=400x200&maptype=roadmap&markers=color:red%7Clabel:ME%7C${lat},${lng}&key=${Config.googleMapApiKey}`;
  return imagePreviewUrl;
}
