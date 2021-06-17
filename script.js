const root = document.documentElement;


function changeValue(id, value) {
    const sufix = (id == "radius") ? "%" : "px";
    root.style.setProperty(`--${id}`, value + sufix);
}