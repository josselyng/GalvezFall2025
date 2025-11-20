function dragElement(terrariumElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + 'px';
        terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + 'px';
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

dragElement(document.getElementById('candy1'));
dragElement(document.getElementById('candy2'));
dragElement(document.getElementById('candy3'));
dragElement(document.getElementById('candy4'));
dragElement(document.getElementById('candy5'));
dragElement(document.getElementById('candy6'));
dragElement(document.getElementById('candy7'));
dragElement(document.getElementById('candy8'));
dragElement(document.getElementById('candy9'));
dragElement(document.getElementById('candy10'));
dragElement(document.getElementById('candy11'));
dragElement(document.getElementById('candy12'));
dragElement(document.getElementById('candy13'));
dragElement(document.getElementById('candy14'));