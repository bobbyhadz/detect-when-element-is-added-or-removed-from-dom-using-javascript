console.log('bobbyhadz.com');

const startObserving = (domNode, classToLookFor) => {
  const observer = new MutationObserver(mutations => {
    mutations.forEach(function (mutation) {
      console.log(Array.from(mutation.addedNodes));

      const elementAdded = Array.from(mutation.addedNodes).some(
        element => {
          if (element.classList) {
            return element.classList.contains(classToLookFor);
          } else {
            return false;
          }
        },
      );

      if (elementAdded) {
        console.log('The element was added to the DOM');
      }
    });
  });

  observer.observe(domNode, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true,
  });

  return observer;
};

startObserving(document.body, 'my-class');

const newElement = document.createElement('div');

newElement.classList.add('my-class');

newElement.innerHTML =
  '<p>bobbyhadz.<span style="color: red;">com</span></p>';

document.body.appendChild(newElement);
