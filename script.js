function textFunc(e) {
    document
      .querySelector(":root")
      .style.setProperty("--text-size", e.target.value / 10 + "em");
  }
  