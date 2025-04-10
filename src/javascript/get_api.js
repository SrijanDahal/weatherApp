export const api__data = async (place) => {
    const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + place + "?key=LJXT955ST7DKLAAQLTUQXTZXQ";

    const response = await fetch(url, {mode: "cors"});
    const data = await response.json();
    
    return data;
}