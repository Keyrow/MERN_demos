// A button that increments a count when clicked, and a title for what is being counted

class Counter {
  /**
   *
   * @param {Object} props - containing the properties for the new counter
   * @param {Object} parentNode - node that the counter component will be appended to
   */
  constructor(props, parentNode) {
    this.count = 0;

    const container = document.createElement("div");

    const heading = document.createElement("h2");
    heading.innerText = props.headingText;
    container.appendChild(heading);

    const paragraph = document.createElement("p");
    this.updateParagraph(paragraph);
    container.appendChild(paragraph);

    const btn = document.createElement("button");
    btn.innerText = props.buttonText;
    btn.addEventListener("click", (event) => {
      this.count++;
      this.updateParagraph(paragraph);
      console.log(this.count);
    });
    container.appendChild(btn);

    parentNode.appendChild(container);
  }

  updateParagraph(pTag) {
    pTag.innerText = `The button has been clicked ${this.count} times.`;
  }
}

export default Counter;
