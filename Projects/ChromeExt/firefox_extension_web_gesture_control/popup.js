const zu = document.getElementById("zu");
const zd = document.getElementById("zd");
const dinst = document.getElementById("dinst");
var zoom_flag=1;
var text="ram";


zu.addEventListener("click", () => {
  zoom_flag=zoom_flag+0.1;
  browser.tabs.executeScript({
    code: `
    document.body.style.transform = "scale("+${zoom_flag}+")";
    document.body.style.transformOrigin = "0 0";
    `
  });
});
zd.addEventListener("click", () => {
  zoom_flag=zoom_flag-0.1;
  browser.tabs.executeScript({
    code: `
    document.body.style.transform = "scale("+${zoom_flag}+")";
    document.body.style.transformOrigin = "0 0";
    `
  });
});
dinst.addEventListener("click", () => {
  browser.tabs.executeScript({
    code: `
    var divElement = document.createElement("div");
    divElement.id = "videoContainer";
    document.body.appendChild(divElement);
    loadScript('https://cdn.jsdelivr.net/gh/70deepak58/Web_Advance/Projects/ChromeExt/firefox_popup.js', function() {
      cnt++;
      console.log('Script 49 has been loaded.');
    });
    `
  });
});