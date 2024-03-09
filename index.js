const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "assets")));

app.get("/", (req, res) =>
  res.render("layout", {
    title: "Homepage (Index)",
    header: "Homepage",
  })
);

app.get("/:page(*)", (req, res) => {
  const page = req.params.page;

  if (
    page.split("/").length > 1 ||
    !["index", "contact", "about"].includes(page)
  ) {
    res.status(404).render("layout", {
      title: "Not Found",
      header: "404, Page not found",
    });
  }

  res.render("layout", {
    title: page,
    header: page,
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
