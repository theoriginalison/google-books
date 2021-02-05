const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/:searchTerms")
    .get(booksController.findAll)
//update this ^^ to work w the Google API
// .post(booksController.create);

// Matches with "/api/books/:id"
router
    .route("/:id")
// .get(booksController.findById)
// .put(booksController.update)
// .delete(booksController.remove);

module.exports = router;