// import mitt from "mitt";

// // eventBus.js
import mitt from "mitt";

const eventBus = mitt();

if (typeof window !== "undefined") {
  window.eventBus = eventBus;
}

export default eventBus;
