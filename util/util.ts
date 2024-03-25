interface IMapObj {
    name: string;
    latitude: number;
    longitude: number;
}
export function createGoogleMapsLink(mapObj: IMapObj): string {
    const { name, latitude, longitude } = mapObj;
    let link = `https://www.google.com/maps?q=${latitude},${longitude}`;
    if (name) {
        link += `&q=${encodeURIComponent(name)}`;
    }
    return link
}