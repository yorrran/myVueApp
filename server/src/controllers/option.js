const express = require("express");
const router = express.Router();

const Option = require("../models/mongodb/option");

/*router.post("/", (req, res, next) => {
    const option = new Option({
        label: req.body.label,
        value: req.body.value
    });
    option.save()
        .then(result => {
            console.log("result: ", result);
            res.status(201).json({
                label: result.label,
                value: result.value
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });;
});*/

router.post("/", (req, res, next) => {
    const option = new Option({
        option: req.body
    });
    console.log("the request: ", option);
    option.save()
        .then(result => {
            console.log("result: ", result);
            res.status(201).json({
               result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });;
});

router.get("/", (req, res, next) => {
    Option.find().exec()
      .then(docs => {
        if (docs.length >= 0) {
          res.status(200).json(docs);
        } else {
          res.status(404).json({
            message: 'No entries found'
          });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });

module.exports = router;