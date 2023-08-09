// Internet and Web Technologies (CSCI 355/655)
// Summer 2023
// Assignment 7 - Basic Webpage
// Yudava Roopnarine


document.getElementById("navigator-info").innerText = `appName: ${navigator.appName}, product: ${navigator.product}, appVersion: ${navigator.appVersion}, userAgent: ${navigator.userAgent}, platform: ${navigator.platform}, language: ${navigator.language}`;
document.getElementById("window-info").innerText = `innerHeight: ${window.innerHeight}, innerWidth: ${window.innerWidth}`;
document.getElementById("screen-info").innerText = `width: ${screen.width}, height: ${screen.height}, availWidth: ${screen.availWidth}, availHeight: ${screen.availHeight}, colorDepth: ${screen.colorDepth}, pixelDepth: ${screen.pixelDepth}`;
document.getElementById("location-info").innerText = `href: ${location.href}, hostname: ${location.hostname}, pathname: ${location.pathname}, protocol: ${location.protocol}`;

navigator.geolocation.getCurrentPosition((position) =>
{
    document.getElementById("geolocation-info").innerText = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
});
function showAbout()
{
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('developer').style.display = 'block';
}
