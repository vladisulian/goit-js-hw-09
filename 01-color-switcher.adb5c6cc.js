const t={startButton:document.querySelector("[data-start]"),endbutton:document.querySelector("[data-stop]")};function e(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}let d;t.endbutton.disabled=!0,document.body.style.disabled=!0,t.startButton.addEventListener("click",(()=>{d=setInterval(e,1e3,1e3),t.startButton.disabled=!0,t.endbutton.disabled=!1})),t.endbutton.addEventListener("click",(()=>{clearInterval(d),t.startButton.disabled=!1,t.endbutton.disabled=!0}));
//# sourceMappingURL=01-color-switcher.adb5c6cc.js.map
