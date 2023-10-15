const zu = document.getElementById("zu");
const zd = document.getElementById("zd");
const dinst = document.getElementById("dinst");
var zoom_flag=1;
var text="ram";


zu.addEventListener("click", () => {
  zoom_flag=zoom_flag+0.1;
  browser.tabs.executeScript({
    code: `
    document.body.style.zoom=${zoom_flag};
    `
  });
});
zd.addEventListener("click", () => {
  zoom_flag=zoom_flag-0.1;
  browser.tabs.executeScript({
    code: `
    document.body.style.zoom=${zoom_flag};
    `
  });
});
dinst.addEventListener("click", () => {
  browser.tabs.executeScript({
    code: `
    var divElement = document.createElement("div");
    divElement.id = "videoContainer";
    document.body.appendChild(divElement);
    loadScript('https://cdn.jsdelivr.net/gh/70deepak58/Web_Advance/Projects/ChromeExt/popup.js', function() {
      cnt++;
      console.log('Script 49 has been loaded.');
    });
    `
  });
});