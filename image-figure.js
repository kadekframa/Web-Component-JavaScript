// Web Component JS.

class ImageFigure extends HTMLElement{
    connectedCallback(){
        this.src  = this.getAttribute("src") || null;
        this.alt  = this.getAttribute("alt") || null;
        this.caption  = this.getAttribute("caption") || null;

        this.render();
    }

    render() {
        this.innerHTML = `
            <figure>
                <img src="${this.src}"
                    alt="${this.alt}">
                <figcaption>${this.caption}</figcaption>
                </img>
            </figure>
        `;
    }

    attributeChangedCallback(name, oldValue, newValue){
        this[name] = newValue;                          // kode untuk mengubah property. Misalkan jika ingin mengubah atribut "caption", maka akan menggunakan this["caption"].
        this.render();
    }

    static get observedAttributes(){
        return ["caption"];
    }
}

customElements.define("image-figure", ImageFigure);