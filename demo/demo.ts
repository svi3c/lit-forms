import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("lf-demo")
export class Demo extends LitElement {
  render() {
    return html`<p>Demo</p>`;
  }
}
